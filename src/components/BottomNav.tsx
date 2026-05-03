import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@/context/ThemeContext';

export type NavTab = 'home' | 'history' | 'settings' | 'profile';

interface NavItem {
  tab: NavTab;
  icon: keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
}

const NAV_ITEMS: NavItem[] = [
  { tab: 'home', icon: 'home-outline', iconActive: 'home' },
  { tab: 'history', icon: 'time-outline', iconActive: 'time' },
  { tab: 'settings', icon: 'settings-outline', iconActive: 'settings' },
  { tab: 'profile', icon: 'person-outline', iconActive: 'person' },
];

interface BottomNavProps {
  activeTab: NavTab;
  onTabPress: (tab: NavTab) => void;
}

export function BottomNav({ activeTab, onTabPress }: BottomNavProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.glass.navBg,
          paddingBottom: insets.bottom || 8,
          height: theme.spacing.navHeight + (insets.bottom || 8),
        },
      ]}
    >
      {NAV_ITEMS.map(({ tab, icon, iconActive }) => {
        const isActive = activeTab === tab;
        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onTabPress(tab)}
            style={styles.tab}
            hitSlop={8}
          >
            <Ionicons
              name={isActive ? iconActive : icon}
              size={theme.spacing.navIconSize}
              color={isActive ? theme.colors.navIconActive : theme.colors.navIcon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
  },
});
