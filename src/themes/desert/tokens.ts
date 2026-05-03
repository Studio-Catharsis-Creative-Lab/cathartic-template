// Auto-synced from DESIGN.md — edit DESIGN.md first, then update these values to match.
import { Theme } from '../types';

export const desertTheme: Theme = {
  name: 'desert',
  displayName: 'Desert',

  colors: {
    primary: '#D4956A',
    primaryLight: '#E5B08A',
    primaryDark: '#B0724A',
    accent: '#C8813D',
    onPrimary: '#FFFFFF',
    background: '#C4884E',
    backgroundDim: '#8C5A28',
    surfaceBright: '#E8B87A',
    error: '#E05C5C',
    onError: '#FFFFFF',
    success: '#90C060',
    navBg: '#321908',
    navIcon: '#FFDCB4',
    navIconActive: '#E5B08A',
    textPrimary: '#3D2010',
    textOnSurface: '#FFFFFF',
    textMuted: '#F0D0A8',
    link: '#E5B08A',
    streakRing: '#E5B08A',
    streakRingBg: '#F0C898',
  },

  glass: {
    cardBg: 'rgba(255,240,220,0.22)',
    cardBorder: 'rgba(255,240,220,0.38)',
    inputBg: 'rgba(255,240,220,0.18)',
    inputBorder: 'rgba(255,240,220,0.38)',
    buttonBg: 'rgba(212,149,106,0.40)',
    buttonBgPressed: 'rgba(176,114,74,0.60)',
    navBg: 'rgba(50,25,8,0.90)',
    streakBadgeBg: 'rgba(255,220,160,0.28)',
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
    intensity: 25,
    tint: 'light',
  },

  gradient: {
    colors: ['#E8B87A', '#C4884E', '#8C5A28'],
    start: { x: 0, y: 0 },
    end: { x: 0.4, y: 1 },
  },

  assets: {
    backgroundImage: require('../../../assets/backgrounds/desert.jpg'),
    logoTint: '#E5B08A',
  },
};
