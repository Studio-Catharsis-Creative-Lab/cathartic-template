// RevenueCat — cross-platform subscription management.
// Free up to $2.5k MRR. One RC project covers all Studio Catharsis apps.
//
// Native setup (required before this works):
//   expo install react-native-purchases react-native-purchases-ui
//   npx expo prebuild   (requires dev build — not Expo Go)
//   Add keys to .env and app.json plugin block

import { APP_CONFIG } from '@/config';

const PREMIUM_ENTITLEMENT = 'premium';

let _configured = false;

async function configure() {
  if (_configured || !APP_CONFIG.features.premiumEnabled) return;
  try {
    const Purchases = (await import('react-native-purchases')).default;
    const key =
      (process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ??
        process.env.EXPO_PUBLIC_REVENUECAT_ANDROID_KEY) as string;
    if (!key) return;
    Purchases.configure({ apiKey: key });
    _configured = true;
  } catch {
    // Package not yet installed or native build not done
  }
}

export const purchases = {
  async isPremium(): Promise<boolean> {
    if (!APP_CONFIG.features.premiumEnabled) return false;
    await configure();
    if (!_configured) return false;
    try {
      const Purchases = (await import('react-native-purchases')).default;
      const info = await Purchases.getCustomerInfo();
      return info.entitlements.active[PREMIUM_ENTITLEMENT]?.isActive === true;
    } catch {
      return false;
    }
  },

  async presentPaywall(): Promise<'purchased' | 'cancelled' | 'error'> {
    if (!APP_CONFIG.features.premiumEnabled) return 'error';
    await configure();
    if (!_configured) return 'error';
    try {
      const { default: RevenueCatUI, PAYWALL_RESULT } = await import('react-native-purchases-ui');
      const result = await RevenueCatUI.presentPaywall();
      return result === PAYWALL_RESULT.PURCHASED ? 'purchased' : 'cancelled';
    } catch {
      return 'error';
    }
  },

  async restore(): Promise<boolean> {
    if (!APP_CONFIG.features.premiumEnabled) return false;
    await configure();
    if (!_configured) return false;
    try {
      const Purchases = (await import('react-native-purchases')).default;
      const info = await Purchases.restorePurchases();
      return info.entitlements.active[PREMIUM_ENTITLEMENT]?.isActive === true;
    } catch {
      return false;
    }
  },

  async identify(userId: string) {
    await configure();
    if (!_configured) return;
    try {
      const Purchases = (await import('react-native-purchases')).default;
      await Purchases.logIn(userId);
    } catch {}
  },

  async reset() {
    await configure();
    if (!_configured) return;
    try {
      const Purchases = (await import('react-native-purchases')).default;
      await Purchases.logOut();
    } catch {}
  },
};
