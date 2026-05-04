import React, { useState } from 'react';
import {
  View,
  TextInput,
  TextInputProps,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/context/ThemeContext';

interface GlassInputProps extends TextInputProps {
  icon?: keyof typeof Ionicons.glyphMap;
  label?: string;
  error?: string | null;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onRightIconPress?: () => void;
}

export function GlassInput({
  icon,
  label,
  error,
  rightIcon,
  onRightIconPress,
  style,
  ...props
}: GlassInputProps) {
  const { theme } = useTheme();
  const [focused, setFocused] = useState(false);

  const borderColor = error
    ? theme.colors.error
    : focused
    ? theme.colors.primary
    : theme.glass.inputBorder;

  return (
    <View style={styles.wrapper}>
      {label && (
        <Text style={[styles.label, { color: theme.colors.textMuted }]}>{label}</Text>
      )}
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.glass.inputBg,
            borderColor,
            borderRadius: theme.rounded.full,
            paddingHorizontal: theme.spacing.inputPaddingH,
            paddingVertical: theme.spacing.inputPaddingV,
          },
          style,
        ]}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color={focused ? theme.colors.primary : theme.colors.textOnSurface}
            style={styles.leftIcon}
          />
        )}
        <TextInput
          placeholderTextColor={theme.colors.textMuted}
          style={[styles.input, { color: theme.colors.textOnSurface }]}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} hitSlop={8}>
            <Ionicons name={rightIcon} size={20} color={theme.colors.textMuted} />
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <Text style={[styles.error, { color: theme.colors.error }]}>{error}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 0,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 6,
    marginLeft: 4,
    letterSpacing: 0.04 * 12,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    padding: 0,
  },
  error: {
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
