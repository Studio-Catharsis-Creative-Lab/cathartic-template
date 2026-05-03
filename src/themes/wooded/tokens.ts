// Auto-synced from DESIGN.md — edit DESIGN.md first, then update these values to match.
import { Theme } from '../types';

export const woodedTheme: Theme = {
  name: 'wooded',
  displayName: 'Wooded',

  colors: {
    primary: '#5C8A5E',
    primaryLight: '#7DAF7F',
    primaryDark: '#3D6B40',
    accent: '#6B9E6D',
    onPrimary: '#FFFFFF',
    background: '#4A7A4C',
    backgroundDim: '#2A4A2C',
    surfaceBright: '#7AB87D',
    error: '#E05C5C',
    onError: '#FFFFFF',
    success: '#51CF66',
    navBg: '#0F230F',
    navIcon: '#C8F0C8',
    navIconActive: '#7DAF7F',
    textPrimary: '#1A2E1A',
    textOnSurface: '#FFFFFF',
    textMuted: '#C0E8C0',
    link: '#7DAF7F',
    streakRing: '#7DAF7F',
    streakRingBg: '#A8D8AA',
  },

  glass: {
    cardBg: 'rgba(220,245,220,0.20)',
    cardBorder: 'rgba(220,245,220,0.38)',
    inputBg: 'rgba(220,245,220,0.16)',
    inputBorder: 'rgba(220,245,220,0.38)',
    buttonBg: 'rgba(92,138,94,0.38)',
    buttonBgPressed: 'rgba(61,107,64,0.58)',
    navBg: 'rgba(15,35,15,0.90)',
    streakBadgeBg: 'rgba(200,240,200,0.25)',
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
    intensity: 28,
    tint: 'light',
  },

  gradient: {
    colors: ['#7AB87D', '#4A7A4C', '#2A4A2C'],
    start: { x: 0, y: 0 },
    end: { x: 0.3, y: 1 },
  },

  assets: {
    backgroundImage: require('../../../assets/backgrounds/wooded.jpg'),
    logoTint: '#7DAF7F',
  },
};
