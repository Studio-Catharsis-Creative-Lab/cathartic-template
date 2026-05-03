import { useState, useEffect } from 'react';
import { purchases } from '@/services/purchases';
import { analytics, EVENTS } from '@/services/analytics';
import { APP_CONFIG } from '@/config';

interface UseSubscriptionReturn {
  isPremium: boolean;
  isLoading: boolean;
  openPaywall: () => Promise<void>;
  restore: () => Promise<boolean>;
}

export function useSubscription(): UseSubscriptionReturn {
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!APP_CONFIG.features.premiumEnabled) {
      setIsLoading(false);
      return;
    }
    purchases.isPremium().then((v) => {
      setIsPremium(v);
      setIsLoading(false);
    });
  }, []);

  const openPaywall = async () => {
    analytics.track(EVENTS.PAYWALL_VIEWED);
    analytics.track(EVENTS.PURCHASE_STARTED);
    const result = await purchases.presentPaywall();
    if (result === 'purchased') {
      analytics.track(EVENTS.PURCHASE_COMPLETED);
      setIsPremium(true);
    }
  };

  const restore = async () => {
    const ok = await purchases.restore();
    if (ok) setIsPremium(true);
    return ok;
  };

  return { isPremium, isLoading, openPaywall, restore };
}
