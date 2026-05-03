import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/context/ThemeContext';

interface GlassCardProps extends ViewProps {
  blur?: boolean;
}

export function GlassCard({ children, style, blur = true, ...props }: GlassCardProps) {
  const { theme } = useTheme();

  const borderRadius = theme.rounded.lg;
  const borderColor = theme.glass.cardBorder;

  if (blur) {
    return (
      <BlurView
        intensity={theme.blur.intensity}
        tint={theme.blur.tint}
        style={[styles.card, { borderRadius, borderColor }, style]}
        {...(props as any)}
      >
        <View style={[styles.inner, { backgroundColor: theme.glass.cardBg, borderRadius }]}>
          {children}
        </View>
      </BlurView>
    );
  }

  return (
    <View
      style={[
        styles.card,
        { borderRadius, borderColor, backgroundColor: theme.glass.cardBg },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    overflow: 'hidden',
    borderWidth: 1,
  },
  inner: {
    flex: 1,
    padding: 0,
  },
});
