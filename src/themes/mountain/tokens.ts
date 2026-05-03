// Auto-synced from DESIGN.md — edit DESIGN.md first, then update these values to match.
import { Theme } from '../types';

export const mountainTheme: Theme = {
  name: 'mountain',
  displayName: 'Mountain',

  colors: {
    primary: '#6B8CAE',
    primaryLight: '#8FAEC8',
    primaryDark: '#4A6A8A',
    accent: '#8B9DC3',
    onPrimary: '#FFFFFF',
    background: '#4A6FA5',
    backgroundDim: '#2C4A6E',
    surfaceBright: '#7B9FC4',
    error: '#E05C5C',
    onError: '#FFFFFF',
    success: '#4CAF7A',
    navBg: '#0F1C2D',
    navIcon: '#FFFFFF',
    navIconActive: '#8FAEC8',
    textPrimary: '#1C2B3A',
    textOnSurface: '#FFFFFF',
    textMuted: '#B8CCDE',
    link: '#8FAEC8',
    streakRing: '#8FAEC8',
    streakRingBg: '#A8BDD4',
  },

  glass: {
    cardBg: 'rgba(255,255,255,0.18)',
    cardBorder: 'rgba(255,255,255,0.30)',
    inputBg: 'rgba(255,255,255,0.15)',
    inputBorder: 'rgba(255,255,255,0.30)',
    buttonBg: 'rgba(107,140,174,0.38)',
    buttonBgPressed: 'rgba(74,106,138,0.58)',
    navBg: 'rgba(15,28,45,0.90)',
    streakBadgeBg: 'rgba(255,255,255,0.20)',
  },

  rounded: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 20,
    xl: 32,
    full: 9999,
  },

  spacing: {
    unit: 8,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    screenPadding: 20,
    cardPadding: 20,
    inputPaddingH: 16,
    inputPaddingV: 14,
    navHeight: 64,
    navIconSize: 26,
  },

  blur: {
    intensity: 35,
    tint: 'light',
  },

  gradient: {
    colors: ['#7B9FC4', '#4A6FA5', '#2C4A6E'],
    start: { x: 0, y: 0 },
    end: { x: 0.3, y: 1 },
  },

  assets: {
    backgroundImage: require('../../../assets/backgrounds/mountain.jpg'),
    logoTint: '#8FAEC8',
  },
};
