import { User } from '@/context/AuthContext';

// Replace these stubs with real API calls for your application.
// All functions throw on failure so callers can catch and display errors.

export const authFunctions = {
  async signIn(email: string, password: string): Promise<User> {
    // TODO: replace with your API call
    // const res = await api.post('/auth/login', { email, password });
    // return res.data.user;
    return {
      id: 'user_' + Date.now(),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString(),
    };
  },

  async signUp(
    name: string,
    email: string,
    password: string,
    location?: string,
  ): Promise<User> {
    // TODO: replace with your API call
    // const res = await api.post('/auth/register', { name, email, password, location });
    // return res.data.user;
    return {
      id: 'user_' + Date.now(),
      email,
      name,
      location,
      createdAt: new Date().toISOString(),
    };
  },

  async signOut(): Promise<void> {
    // TODO: invalidate server-side session if needed
    // await api.post('/auth/logout');
  },

  async forgotPassword(email: string): Promise<void> {
    // TODO: replace with your API call
    // await api.post('/auth/forgot-password', { email });
    console.log('Password reset requested for:', email);
  },

  async resetPassword(token: string, newPassword: string): Promise<void> {
    // TODO: replace with your API call
    // await api.post('/auth/reset-password', { token, newPassword });
    console.log('Password reset with token:', token);
  },
};
