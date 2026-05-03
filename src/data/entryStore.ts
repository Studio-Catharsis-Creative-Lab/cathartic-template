// Local entry storage — all reads/writes go through here.
// Backed by AsyncStorage. Swap the adapter for SQLite if dataset grows large.

import { storage } from '@/functions/storage';
import { BaseEntry, AnyEntry } from './types';

const KEY = (userId: string, type: string) => `@cathartic/entries/${userId}/${type}`;

function makeId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function now(): string {
  return new Date().toISOString();
}

export const entryStore = {
  async getAll<T extends BaseEntry>(userId: string, type: string): Promise<T[]> {
    return (await storage.get<T[]>(KEY(userId, type))) ?? [];
  },

  async getById<T extends BaseEntry>(userId: string, type: string, id: string): Promise<T | null> {
    const all = await entryStore.getAll<T>(userId, type);
    return all.find((e) => e.id === id) ?? null;
  },

  async create<T extends BaseEntry>(
    userId: string,
    type: string,
    data: Omit<T, 'id' | 'userId' | 'createdAt' | 'updatedAt'>,
  ): Promise<T> {
    const entry = {
      ...data,
      id: makeId(),
      userId,
      type,
      createdAt: now(),
      updatedAt: now(),
    } as T;

    const all = await entryStore.getAll<T>(userId, type);
    await storage.set(KEY(userId, type), [entry, ...all]);
    return entry;
  },

  async update<T extends BaseEntry>(
    userId: string,
    type: string,
    id: string,
    updates: Partial<Omit<T, 'id' | 'userId' | 'createdAt'>>,
  ): Promise<T | null> {
    const all = await entryStore.getAll<T>(userId, type);
    const idx = all.findIndex((e) => e.id === id);
    if (idx === -1) return null;

    const updated = { ...all[idx], ...updates, updatedAt: now() };
    all[idx] = updated;
    await storage.set(KEY(userId, type), all);
    return updated;
  },

  async remove(userId: string, type: string, id: string): Promise<void> {
    const all = await entryStore.getAll(userId, type);
    await storage.set(KEY(userId, type), all.filter((e) => e.id !== id));
  },

  async getRecent<T extends BaseEntry>(userId: string, type: string, limit = 20): Promise<T[]> {
    const all = await entryStore.getAll<T>(userId, type);
    return all.slice(0, limit);
  },
};
