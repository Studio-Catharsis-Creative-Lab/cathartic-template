import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { useTheme } from '@/context/ThemeContext';

interface GlassButtonProps extends TouchableOpacityProps {
  label: string;
  loading?: boolean;
  variant?: 'primary' | 'ghost';
}

export function GlassButton({
  label,
  loading = false,
  variant = 'primary',
  style,
  disabled,
  ...props
}: GlassButtonProps) {
  const { theme } = useTheme();

  const bg =
    variant === 'primary' ? theme.glass.buttonBg : 'transparent';
  const borderColor =
    variant === 'ghost' ? theme.glass.inputBorder : 'transparent';

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      disabled={disabled || loading}
      style={[
        styles.button,
        {
          backgroundColor: bg,
          borderColor,
          borderRadius: theme.rounded.xl,
          paddingVertical: theme.spacing.md,
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={theme.colors.textOnSurface} />
      ) : (
        <Text style={[styles.label, { color: theme.colors.textOnSurface }]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    minHeight: 52,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
