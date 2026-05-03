import React from 'react';
import { StyleSheet, View, ImageBackground, ViewProps } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/ThemeContext';

interface ThemeBackgroundProps extends ViewProps {
  children: React.ReactNode;
}

export function ThemeBackground({ children, style, ...props }: ThemeBackgroundProps) {
  const { theme } = useTheme();

  const gradient = (
    <LinearGradient
      colors={theme.gradient.colors as [string, string, ...string[]]}
      start={theme.gradient.start}
      end={theme.gradient.end}
      style={StyleSheet.absoluteFill}
      pointerEvents="none"
    />
  );

  const content = (
    <View
      style={[styles.content, { paddingHorizontal: theme.spacing.screenPadding }]}
      {...props}
    >
      {children}
    </View>
  );

  // Falls back to gradient-only until a real background image is added to assets/
  if (!theme.assets.backgroundImage) {
    return (
      <View style={[styles.root, style]}>
        {gradient}
        {content}
      </View>
    );
  }

  return (
    <ImageBackground
      source={theme.assets.backgroundImage}
      style={[styles.root, style]}
      resizeMode="cover"
      blurRadius={theme.blur.intensity}
    >
      {gradient}
      {content}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  content: { flex: 1 },
});
