// Firebase Analytics → GA4
// Connects to the same GA4 property as Studio Catharsis web/workspace.
// Setup: fill Firebase keys in .env, call analytics.init() once in App.tsx.

import { APP_CONFIG } from '@/config';

type EventParams = Record<string, string | number | boolean>;

// Lazily initialised — avoids crashing if Firebase config is missing in dev
let _ready = false;
let _logEvent: ((name: string, params?: EventParams) => void) = () => {};
let _setScreen: ((name: string) => void) = () => {};
let _setUserId: ((id: string | null) => void) = () => {};

async function init() {
  if (_ready) return;
  try {
    const { initializeApp, getApps } = await import('firebase/app');
    const { getAnalytics, logEvent, setCurrentScreen, setUserId, isSupported } =
      await import('firebase/analytics');

    if (!(await isSupported())) return;

    const firebaseConfig = {
      apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
      measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
    };

    const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
    const ga = getAnalytics(app);

    _logEvent = (name, params) => logEvent(ga, name, params);
    _setScreen = (name) => setCurrentScreen(ga, name);
    _setUserId = (id) => setUserId(ga, id);
    _ready = true;
  } catch {
    // Firebase not configured — silently no-op
  }
}

export const analytics = {
  init,

  async track(event: string, params?: EventParams) {
    if (!APP_CONFIG.features.analyticsEnabled) return;
    await init();
    _logEvent(event, params);
  },

  async screen(name: string) {
    if (!APP_CONFIG.features.analyticsEnabled) return;
    await init();
    _setScreen(name);
  },

  async identify(userId: string | null) {
    if (!APP_CONFIG.features.analyticsEnabled) return;
    await init();
    _setUserId(userId);
  },
};

export const EVENTS = {
  SIGN_IN: 'sign_in',
  SIGN_UP: 'sign_up',
  SIGN_OUT: 'sign_out',
  ENTRY_CREATED: 'entry_created',
  ENTRY_DELETED: 'entry_deleted',
  STREAK_COMPLETED: 'streak_completed',
  STREAK_BROKEN: 'streak_broken',
  AI_REQUEST_SENT: 'ai_request_sent',
  AI_REQUEST_SUCCESS: 'ai_request_success',
  AI_REQUEST_QUEUED: 'ai_request_queued',
  THEME_CHANGED: 'theme_changed',
  PAYWALL_VIEWED: 'paywall_viewed',
  PURCHASE_STARTED: 'purchase_started',
  PURCHASE_COMPLETED: 'purchase_completed',
} as const;
