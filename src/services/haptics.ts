import * as ExpoHaptics from 'expo-haptics';
import { APP_CONFIG } from '@/config';

// One-liner haptic calls. Always guard with hapticsEnabled so users
// who disable haptics in settings get silence, not errors.

export const haptic = {
  light() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.impactAsync(ExpoHaptics.ImpactFeedbackStyle.Light);
  },

  medium() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.impactAsync(ExpoHaptics.ImpactFeedbackStyle.Medium);
  },

  heavy() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.impactAsync(ExpoHaptics.ImpactFeedbackStyle.Heavy);
  },

  // Use for positive completions: streak hit, entry saved, session done
  success() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.notificationAsync(ExpoHaptics.NotificationFeedbackType.Success);
  },

  // Use for validation errors, denied actions
  error() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.notificationAsync(ExpoHaptics.NotificationFeedbackType.Error);
  },

  // Use for warnings, soft alerts
  warning() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.notificationAsync(ExpoHaptics.NotificationFeedbackType.Warning);
  },

  // Use for UI selections: tab press, chip select, toggle
  select() {
    if (!APP_CONFIG.features.hapticsEnabled) return;
    ExpoHaptics.selectionAsync();
  },
};
