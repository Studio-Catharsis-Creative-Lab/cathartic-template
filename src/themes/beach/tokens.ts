// Auto-synced from DESIGN.md — edit DESIGN.md first, then update these values to match.
import { Theme } from '../types';

export const beachTheme: Theme = {
  name: 'beach',
  displayName: 'Beach',

  colors: {
    primary: '#4ECDC4',
    primaryLight: '#7EDDD7',
    primaryDark: '#2BA8A0',
    accent: '#38B2AC',
    onPrimary: '#FFFFFF',
    background: '#6EC6CA',
    backgroundDim: '#4FA8AD',
    surfaceBright: '#89D4CF',
    error: '#FF6B6B',
    onError: '#FFFFFF',
    success: '#51CF66',
    navBg: '#144A4F',
    navIcon: '#FFFFFF',
    navIconActive: '#4ECDC4',
    textPrimary: '#1A3C40',
    textOnSurface: '#FFFFFF',
    textMuted: '#B2DFE0',
    link: '#4ECDC4',
    streakRing: '#4ECDC4',
    streakRingBg: '#A8DEDD',
  },

  glass: {
    cardBg: 'rgba(255,255,255,0.22)',
    cardBorder: 'rgba(255,255,255,0.35)',
    inputBg: 'rgba(255,255,255,0.18)',
    inputBorder: 'rgba(255,255,255,0.35)',
    buttonBg: 'rgba(78,205,196,0.35)',
    buttonBgPressed: 'rgba(43,168,160,0.55)',
    navBg: 'rgba(20,74,79,0.88)',
    streakBadgeBg: 'rgba(255,255,255,0.25)',
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
    intensity: 30,
    tint: 'light',
  },

  gradient: {
    colors: ['#89D4CF', '#6EC6CA', '#4FA8AD'],
    start: { x: 0, y: 0 },
    end: { x: 0.4, y: 1 },
  },

  assets: {
    backgroundImage: require('../../../assets/backgrounds/beach.jpg'),
    logoTint: '#4ECDC4',
  },
};
