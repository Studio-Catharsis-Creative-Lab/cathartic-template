import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@/context/ThemeContext';

interface StreakBadgeProps {
  count: number;
  size?: number;
}

export function StreakBadge({ count, size = 56 }: StreakBadgeProps) {
  const { theme } = useTheme();
  const strokeWidth = 3;
  const radius = (size - strokeWidth * 2) / 2;
  const circumference = 2 * Math.PI * radius;
  // Show partial ring progress (capped at 10 for visual effect)
  const progress = Math.min(count / 10, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <View
        style={[
          styles.bg,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor: theme.glass.streakBadgeBg,
            borderColor: theme.colors.streakRingBg,
          },
        ]}
      />
      {/* SVG ring would go here in a real implementation — using border as fallback */}
      <View
        style={[
          styles.ring,
          {
            width: size,
            height: size,
            borderRadius: size / 2,
            borderColor: theme.colors.streakRing,
            borderWidth: strokeWidth,
            borderTopColor: 'transparent',
          },
        ]}
      />
      <Text style={[styles.count, { color: theme.colors.textOnSurface, fontSize: size * 0.32 }]}>
        {count}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  bg: {
    position: 'absolute',
    borderWidth: 1,
  },
  ring: {
    position: 'absolute',
  },
  count: {
    fontWeight: '700',
    letterSpacing: -0.5,
  },
});
