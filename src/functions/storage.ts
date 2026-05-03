import AsyncStorage from '@react-native-async-storage/async-storage';

// Typed wrappers around AsyncStorage. All functions are safe — they return
// null / undefined rather than throwing on missing keys.

export const storage = {
  async get<T>(key: string): Promise<T | null> {
    const raw = await AsyncStorage.getItem(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw) as T;
    } catch {
      return null;
    }
  },

  async set<T>(key: string, value: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },

  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  },

  async clear(): Promise<void> {
    await AsyncStorage.clear();
  },

  async getAllKeys(): Promise<string[]> {
    return (await AsyncStorage.getAllKeys()) as string[];
  },

  async multiGet<T>(keys: string[]): Promise<Record<string, T | null>> {
    const pairs = await AsyncStorage.multiGet(keys);
    return Object.fromEntries(
      pairs.map(([k, v]) => [k, v ? (JSON.parse(v) as T) : null]),
    );
  },
};
