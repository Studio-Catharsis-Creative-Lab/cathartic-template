import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { useTheme } from '@/context/ThemeContext';

interface StreakBadgeProps {
  count: number;
  size?: number;
}

export function StreakBadge({ count, size = 56 }: StreakBadgeProps) {
  const { theme } = useTheme();
  const strokeWidth = 3;
  const r = (size - strokeWidth * 2) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const progress = Math.min(count / 10, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <Svg width={size} height={size} style={StyleSheet.absoluteFill}>
        {/* Track */}
        <Circle
          cx={cx} cy={cy} r={r}
          strokeWidth={strokeWidth}
          stroke={theme.glass.streakBadgeBg}
          fill={theme.glass.streakBadgeBg}
        />
        {/* Progress arc */}
        <Circle
          cx={cx} cy={cy} r={r}
          strokeWidth={strokeWidth}
          stroke={theme.colors.streakRing}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${cx}, ${cy}`}
        />
      </Svg>
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
  },
  count: {
    fontWeight: '700',
    letterSpacing: -0.5,
  },
});
