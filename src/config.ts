// ─── Edit this file first when starting a new app ───────────────────────────
// Everything app-specific lives here. The rest of the template reads from this.

export const APP_CONFIG = {
  // Identity
  appName: 'My App',
  appSlug: 'my-app',                        // matches app.json slug
  bundleId: 'com.studiocatharsis.myapp',    // iOS bundle ID / Android package
  supportEmail: 'support@studiocatharsis.com',
  logoIcon: 'pulse-outline',                // any valid Ionicons name

  // Theme
  defaultTheme: 'beach' as const,

  // Features — flip false to hide unfinished features
  features: {
    premiumEnabled: false,
    streakEnabled: true,
    aiSuggestionsEnabled: true,
    onboardingEnabled: true,
    analyticsEnabled: true,
    hapticsEnabled: true,
  },

  // Streak
  streak: {
    habitKey: 'default',                    // override per app, e.g. 'mood-checkin'
    dailyGoalHour: 20,                      // hour of day (24h) for daily reminder
  },

  // AI
  ai: {
    model: 'claude-sonnet-4-6',
    maxRetries: 3,
    retryDelayMs: 2000,
  },
} as const;

export type AppConfig = typeof APP_CONFIG;
