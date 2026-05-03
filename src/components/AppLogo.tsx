import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';
import { APP_CONFIG } from '@/config';

interface AppLogoProps {
  size?: number;
}

// Icon is set in APP_CONFIG.logoIcon — change it per app without touching this component
export function AppLogo({ size = 52 }: AppLogoProps) {
  const { theme } = useTheme();
  return (
    <Ionicons
      name={APP_CONFIG.logoIcon as any}
      size={size}
      color={theme.assets.logoTint}
    />
  );
}
