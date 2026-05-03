import { useState, useEffect, useCallback } from 'react';
import { storage } from '@/functions/storage';
import { StreakRecord } from '@/data/types';

const KEY = (userId: string, habitKey: string) =>
  `@cathartic/streak/${userId}/${habitKey}`;

function todayString(): string {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

function yesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

interface UseStreakReturn {
  streak: StreakRecord | null;
  isLoading: boolean;
  completedToday: boolean;
  markComplete: () => Promise<void>;
  reset: () => Promise<void>;
}

// useStreak('mood-checkin') — one hook covers every habit type.
// Wire it to any completion event; the engine handles the math.
export function useStreak(userId: string, habitKey: string): UseStreakReturn {
  const [streak, setStreak] = useState<StreakRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    const stored = await storage.get<StreakRecord>(KEY(userId, habitKey));
    if (stored) {
      // Break streak if last completion was before yesterday
      const isExpired =
        stored.lastCompletedDate !== null &&
        stored.lastCompletedDate !== todayString() &&
        stored.lastCompletedDate !== yesterdayString();

      if (isExpired) {
        const reset = { ...stored, currentStreak: 0 };
        await storage.set(KEY(userId, habitKey), reset);
        setStreak(reset);
      } else {
        setStreak(stored);
      }
    } else {
      // First time — initialise
      const initial: StreakRecord = {
        key: habitKey,
        userId,
        currentStreak: 0,
        longestStreak: 0,
        lastCompletedDate: null,
        totalCompletions: 0,
      };
      await storage.set(KEY(userId, habitKey), initial);
      setStreak(initial);
    }
    setIsLoading(false);
  }, [userId, habitKey]);

  useEffect(() => { load(); }, [load]);

  const markComplete = useCallback(async () => {
    if (!streak) return;
    const today = todayString();
    if (streak.lastCompletedDate === today) return; // already done today

    const wasYesterday = streak.lastCompletedDate === yesterdayString();
    const newCurrent = wasYesterday ? streak.currentStreak + 1 : 1;
    const updated: StreakRecord = {
      ...streak,
      currentStreak: newCurrent,
      longestStreak: Math.max(streak.longestStreak, newCurrent),
      lastCompletedDate: today,
      totalCompletions: streak.totalCompletions + 1,
    };
    await storage.set(KEY(userId, habitKey), updated);
    setStreak(updated);
  }, [streak, userId, habitKey]);

  const reset = useCallback(async () => {
    if (!streak) return;
    const cleared: StreakRecord = { ...streak, currentStreak: 0, lastCompletedDate: null };
    await storage.set(KEY(userId, habitKey), cleared);
    setStreak(cleared);
  }, [streak, userId, habitKey]);

  const completedToday = streak?.lastCompletedDate === todayString();

  return { streak, isLoading, completedToday, markComplete, reset };
}
