import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '@/context/ThemeContext';
import { ThemeBackground, AppLogo, StreakBadge, GlassButton, BottomNav } from '@/components';
import type { NavTab } from '@/components/BottomNav';
import { RootStackParamList } from '@/navigation/types';

type Nav = NativeStackNavigationProp<RootStackParamList>;

export function HomeScreen() {
  const { theme } = useTheme();
  const navigation = useNavigation<Nav>();
  const [activeTab, setActiveTab] = useState<NavTab>('home');

  const handleTabPress = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'settings') navigation.navigate('Settings');
  };

  return (
    <ThemeBackground>
      <View style={styles.header}>
        <AppLogo size={52} />
        <StreakBadge count={3} />
      </View>

      <View style={[styles.content, { paddingBottom: theme.spacing.navHeight + 32 }]}>
        <Text style={[styles.welcome, { color: theme.colors.textOnSurface }]}>
          Welcome to Your Wellness App
        </Text>
        <GlassButton label="Start Brain Dump" onPress={() => {}} />
      </View>

      <BottomNav activeTab={activeTab} onTabPress={handleTabPress} />
    </ThemeBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
