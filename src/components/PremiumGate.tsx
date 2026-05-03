import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';
import { useSubscription } from '@/hooks/useSubscription';
import { GlassButton } from './GlassButton';
import { GlassCard } from './GlassCard';
import { APP_CONFIG } from '@/config';

interface PremiumGateProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;  // custom locked UI — defaults to paywall prompt card
}

// Wrap any premium feature: <PremiumGate>{feature}</PremiumGate>
// If premiumEnabled is false in config, gate is transparent — always shows children.
export function PremiumGate({ children, fallback }: PremiumGateProps) {
  const { isPremium, isLoading, openPaywall } = useSubscription();
  const { theme } = useTheme();

  if (!APP_CONFIG.features.premiumEnabled || isPremium) return <>{children}</>;
  if (isLoading) return null;

  if (fallback) return <>{fallback}</>;

  return (
    <GlassCard style={[styles.card, { borderRadius: theme.rounded.lg }]}>
      <View style={{ padding: theme.spacing.cardPadding, gap: 12 }}>
        <Text style={[styles.title, { color: theme.colors.textOnSurface }]}>
          Premium Feature
        </Text>
        <Text style={[styles.body, { color: theme.colors.textMuted }]}>
          Upgrade to unlock this and all other premium features.
        </Text>
        <GlassButton label="Unlock Premium" onPress={openPaywall} />
      </View>
    </GlassCard>
  );
}

const styles = StyleSheet.create({
  card: { overflow: 'hidden' },
  title: { fontSize: 18, fontWeight: '700' },
  body: { fontSize: 14, lineHeight: 20 },
});
