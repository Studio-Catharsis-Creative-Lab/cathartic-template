import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authFunctions } from '@/functions/auth';

export interface User {
  id: string;
  email: string;
  name: string;
  location?: string;
  createdAt: string;
}

interface AuthContextValue {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string, location?: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (updates: Partial<User>) => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);
const USER_KEY = '@cathartic/user';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem(USER_KEY).then((stored) => {
      if (stored) setUser(JSON.parse(stored));
      setIsLoading(false);
    });
  }, []);

  const persist = async (u: User | null) => {
    if (u) await AsyncStorage.setItem(USER_KEY, JSON.stringify(u));
    else await AsyncStorage.removeItem(USER_KEY);
    setUser(u);
  };

  const signIn = async (email: string, password: string) => {
    const u = await authFunctions.signIn(email, password);
    await persist(u);
  };

  const signUp = async (name: string, email: string, password: string, location?: string) => {
    const u = await authFunctions.signUp(name, email, password, location);
    await persist(u);
  };

  const signOut = async () => {
    await authFunctions.signOut();
    await persist(null);
  };

  const updateUser = async (updates: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...updates };
    await persist(updated);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
