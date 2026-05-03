// Form validation helpers used across Login, SignUp, and Settings screens.

export const validate = {
  email(value: string): string | null {
    if (!value.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email address';
    return null;
  },

  password(value: string): string | null {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters';
    return null;
  },

  name(value: string): string | null {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    return null;
  },

  required(value: string, label = 'This field'): string | null {
    if (!value.trim()) return `${label} is required`;
    return null;
  },

  // Returns a map of field → error message. Null values = valid.
  form<T extends Record<string, string | null>>(rules: T): {
    errors: T;
    isValid: boolean;
  } {
    const isValid = Object.values(rules).every((v) => v === null);
    return { errors: rules, isValid };
  },
};
