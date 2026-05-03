import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import { ThemeBackground, GlassCard, AppLogo, StreakBadge, BottomNav } from '@/components';
import { themes, ThemeName } from '@/themes';

const THEME_ICONS: Record<ThemeName, keyof typeof Ionicons.glyphMap> = {
  beach: 'sunny-outline',
  mountain: 'triangle-outline',
  desert: 'flame-outline',
  wooded: 'leaf-outline',
  underwater: 'water-outline',
};

export function SettingsScreen() {
  const { theme, themeName, setTheme, availableThemes } = useTheme();
  const { user, signOut } = useAuth();
  const insets = useSafeAreaInsets();

  const handleSignOut = () => {
    Alert.alert('Sign Out', 'Are you sure you want to sign out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Sign Out', style: 'destructive', onPress: signOut },
    ]);
  };

  return (
    <ThemeBackground>
      <View style={styles.header}>
        <AppLogo size={40} />
        <StreakBadge count={3} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.scroll, { paddingBottom: theme.spacing.navHeight + insets.bottom + 16 }]}
      >
        {/* Profile section */}
        <GlassCard style={styles.card}>
          <View style={[styles.cardInner, { padding: theme.spacing.cardPadding }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.textOnSurface }]}>
              Profile
            </Text>
            <Text style={[styles.profileName, { color: theme.colors.textOnSurface }]}>
              {user?.name ?? 'Guest'}
            </Text>
            <Text style={[styles.profileEmail, { color: theme.colors.textMuted }]}>
              {user?.email ?? ''}
            </Text>
          </View>
        </GlassCard>

        {/* Theme picker */}
        <GlassCard style={styles.card}>
          <View style={[styles.cardInner, { padding: theme.spacing.cardPadding }]}>
            <Text style={[styles.sectionTitle, { color: theme.colors.textOnSurface }]}>
              Theme
            </Text>
            <View style={styles.themeRow}>
              {availableThemes.map((t) => {
                const isActive = t === themeName;
                return (
                  <TouchableOpacity
                    key={t}
                    onPress={() => setTheme(t)}
                    style={[
                      styles.themeChip,
                      {
                        backgroundColor: isActive ? theme.glass.buttonBg : theme.glass.inputBg,
                        borderColor: isActive ? theme.colors.primary : theme.glass.inputBorder,
                        borderRadius: theme.rounded.full,
                      },
                    ]}
                  >
                    <Ionicons
                      name={THEME_ICONS[t]}
                      size={16}
                      color={isActive ? theme.colors.primary : theme.colors.textMuted}
                    />
                    <Text
                      style={[
                        styles.themeLabel,
                        { color: isActive ? theme.colors.textOnSurface : theme.colors.textMuted },
                      ]}
                    >
                      {themes[t].displayName}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </GlassCard>

        {/* Sign out */}
        <TouchableOpacity
          onPress={handleSignOut}
          style={[
            styles.signOutBtn,
            {
              backgroundColor: theme.glass.inputBg,
              borderColor: theme.colors.error,
              borderRadius: theme.rounded.xl,
            },
          ]}
        >
          <Ionicons name="log-out-outline" size={20} color={theme.colors.error} />
          <Text style={[styles.signOutLabel, { color: theme.colors.error }]}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </ThemeBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    marginBottom: 20,
  },
  scroll: { gap: 16 },
  card: { overflow: 'hidden', borderRadius: 20 },
  cardInner: { gap: 8 },
  sectionTitle: { fontSize: 12, fontWeight: '600', letterSpacing: 0.5, opacity: 0.7, marginBottom: 4 },
  profileName: { fontSize: 20, fontWeight: '700' },
  profileEmail: { fontSize: 14 },
  themeRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 4 },
  themeChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
  },
  themeLabel: { fontSize: 13, fontWeight: '500' },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderWidth: 1,
  },
  signOutLabel: { fontSize: 16, fontWeight: '600' },
});
