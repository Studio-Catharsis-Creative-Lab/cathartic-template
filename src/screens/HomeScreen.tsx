// Default / blank screen template.
// Duplicate this file and rename it for each new feature screen.
// Remove the placeholder content and build your feature here.
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';
import { ThemeBackground, AppLogo, StreakBadge, GlassCard, GlassButton } from '@/components';

export function HomeScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <ThemeBackground>
      {/* Header */}
      <View style={styles.header}>
        <AppLogo size={52} />
        <StreakBadge count={3} />
      </View>

      {/* Content area — replace with your feature */}
      <View style={[styles.content, { paddingBottom: theme.spacing.navHeight + insets.bottom + 16 }]}>
        <GlassCard style={[styles.card, { padding: theme.spacing.cardPadding, borderRadius: theme.rounded.lg }]}>
          <Text style={[styles.placeholder, { color: theme.colors.textMuted }]}>
            Your feature goes here.
          </Text>
        </GlassCard>

        {/* Primary CTA */}
        <GlassButton label="Start" onPress={() => {}} style={styles.cta} />
      </View>
    </ThemeBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    minHeight: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 16,
    fontStyle: 'italic',
  },
  cta: {
    marginTop: 8,
  },
});
