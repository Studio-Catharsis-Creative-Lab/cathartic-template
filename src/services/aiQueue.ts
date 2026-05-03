// AI request queue — parks requests when offline, retries when connection returns.
// Only AI calls go through here; all local data reads/writes are always instant.

import { storage } from '@/functions/storage';
import { APP_CONFIG } from '@/config';
import { analytics, EVENTS } from './analytics';

const QUEUE_KEY = '@cathartic/ai-queue';

interface QueuedRequest {
  id: string;
  entryId: string;
  entryType: string;
  prompt: string;
  createdAt: string;
  attempts: number;
}

interface AIResponse {
  text: string;
}

// Replace this stub with your actual AI API call (Claude, Gemini, etc.)
async function callAI(prompt: string): Promise<AIResponse> {
  const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/ai/suggest`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, model: APP_CONFIG.ai.model }),
  });
  if (!res.ok) throw new Error(`AI call failed: ${res.status}`);
  return res.json();
}

async function isOnline(): Promise<boolean> {
  try {
    const res = await fetch('https://www.google.com/generate_204', {
      method: 'HEAD',
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export const aiQueue = {
  async request(
    entryId: string,
    entryType: string,
    prompt: string,
    onSuccess: (response: AIResponse) => void,
    onQueued?: () => void,
  ): Promise<void> {
    const online = await isOnline();

    if (online) {
      try {
        const response = await callAI(prompt);
        analytics.track(EVENTS.AI_REQUEST_SUCCESS, { entry_type: entryType });
        onSuccess(response);
      } catch {
        await aiQueue._enqueue(entryId, entryType, prompt);
        onQueued?.();
      }
    } else {
      analytics.track(EVENTS.AI_REQUEST_QUEUED, { entry_type: entryType });
      await aiQueue._enqueue(entryId, entryType, prompt);
      onQueued?.();
    }
  },

  async _enqueue(entryId: string, entryType: string, prompt: string): Promise<void> {
    const queue = (await storage.get<QueuedRequest[]>(QUEUE_KEY)) ?? [];
    const item: QueuedRequest = {
      id: Date.now().toString(36),
      entryId,
      entryType,
      prompt,
      createdAt: new Date().toISOString(),
      attempts: 0,
    };
    await storage.set(QUEUE_KEY, [...queue, item]);
  },

  // Call this on app foreground / network reconnect
  async flush(
    onSuccess: (entryId: string, response: AIResponse) => void,
  ): Promise<void> {
    const queue = (await storage.get<QueuedRequest[]>(QUEUE_KEY)) ?? [];
    if (!queue.length) return;

    const online = await isOnline();
    if (!online) return;

    const remaining: QueuedRequest[] = [];

    for (const item of queue) {
      if (item.attempts >= APP_CONFIG.ai.maxRetries) continue; // drop after max retries

      try {
        const response = await callAI(item.prompt);
        onSuccess(item.entryId, response);
        analytics.track(EVENTS.AI_REQUEST_SUCCESS, {
          entry_type: item.entryType,
          was_queued: true,
        });
      } catch {
        remaining.push({ ...item, attempts: item.attempts + 1 });
      }
    }

    await storage.set(QUEUE_KEY, remaining);
  },

  async pendingCount(): Promise<number> {
    const queue = (await storage.get<QueuedRequest[]>(QUEUE_KEY)) ?? [];
    return queue.length;
  },
};
