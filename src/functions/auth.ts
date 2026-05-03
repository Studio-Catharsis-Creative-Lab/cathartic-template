import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { firebaseAuth } from '@/services/firebaseClient';
import { api, setTokenGetter, clearTokenGetter } from '@/functions/api';
import { User } from '@/context/AuthContext';

interface ApiUser {
  uid: string;
  email: string;
  name: string;
  location?: string;
  createdAt: string;
}

export const authFunctions = {
  async signIn(email: string, password: string): Promise<User> {
    const cred = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const token = await cred.user.getIdToken();

    // Wire token getter so all subsequent API calls include it
    setTokenGetter(() => cred.user.getIdToken());

    const { user } = await api.get<{ user: ApiUser }>('/auth/me', { skipAuth: false });
    return { id: user.uid, email: user.email, name: user.name, location: user.location, createdAt: user.createdAt };
  },

  async signUp(name: string, email: string, password: string, location?: string): Promise<User> {
    const cred = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const token = await cred.user.getIdToken();

    setTokenGetter(() => cred.user.getIdToken());

    const { user } = await api.post<{ user: ApiUser }>('/auth/register', { name, email, location });
    return { id: user.uid, email: user.email, name: user.name, location: user.location, createdAt: user.createdAt };
  },

  async signOut(): Promise<void> {
    clearTokenGetter();
    await firebaseSignOut(firebaseAuth);
  },

  async forgotPassword(email: string): Promise<void> {
    await sendPasswordResetEmail(firebaseAuth, email);
  },

  async resetPassword(_token: string, _newPassword: string): Promise<void> {
    // Firebase handles password reset via email link — no manual token needed
  },
};
