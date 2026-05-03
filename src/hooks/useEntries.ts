import { useState, useEffect, useCallback } from 'react';
import { entryStore } from '@/data/entryStore';
import { BaseEntry } from '@/data/types';
import { useAuth } from '@/context/AuthContext';

interface UseEntriesReturn<T extends BaseEntry> {
  entries: T[];
  isLoading: boolean;
  create: (data: Omit<T, 'id' | 'userId' | 'createdAt' | 'updatedAt'>) => Promise<T>;
  update: (id: string, updates: Partial<Omit<T, 'id' | 'userId' | 'createdAt'>>) => Promise<void>;
  remove: (id: string) => Promise<void>;
  refresh: () => Promise<void>;
}

// useEntries<MoodEntry>('mood') — typed to your entry schema per screen.
export function useEntries<T extends BaseEntry>(type: string): UseEntriesReturn<T> {
  const { user } = useAuth();
  const [entries, setEntries] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    if (!user) return;
    setIsLoading(true);
    const data = await entryStore.getAll<T>(user.id, type);
    setEntries(data);
    setIsLoading(false);
  }, [user, type]);

  useEffect(() => { load(); }, [load]);

  const create = useCallback(
    async (data: Omit<T, 'id' | 'userId' | 'createdAt' | 'updatedAt'>): Promise<T> => {
      if (!user) throw new Error('Not authenticated');
      const entry = await entryStore.create<T>(user.id, type, data);
      setEntries((prev) => [entry, ...prev]);
      return entry;
    },
    [user, type],
  );

  const update = useCallback(
    async (id: string, updates: Partial<Omit<T, 'id' | 'userId' | 'createdAt'>>) => {
      if (!user) return;
      await entryStore.update<T>(user.id, type, id, updates);
      await load();
    },
    [user, type, load],
  );

  const remove = useCallback(
    async (id: string) => {
      if (!user) return;
      await entryStore.remove(user.id, type, id);
      setEntries((prev) => prev.filter((e) => e.id !== id));
    },
    [user, type],
  );

  return { entries, isLoading, create, update, remove, refresh: load };
}
