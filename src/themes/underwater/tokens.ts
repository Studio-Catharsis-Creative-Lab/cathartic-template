// Auto-synced from DESIGN.md — edit DESIGN.md first, then update these values to match.
import { Theme } from '../types';

export const underwaterTheme: Theme = {
  name: 'underwater',
  displayName: 'Underwater',

  colors: {
    primary: '#2E86AB',
    primaryLight: '#5BA3C0',
    primaryDark: '#1A5E7A',
    accent: '#1E6FA0',
    onPrimary: '#FFFFFF',
    background: '#0D5E8A',
    backgroundDim: '#063A58',
    surfaceBright: '#3A8FBF',
    error: '#FF6B6B',
    onError: '#FFFFFF',
    success: '#51CF66',
    navBg: '#051428',
    navIcon: '#96D2FF',
    navIconActive: '#5BA3C0',
    textPrimary: '#041E30',
    textOnSurface: '#FFFFFF',
    textMuted: '#96D2FF',
    link: '#5BA3C0',
    streakRing: '#5BA3C0',
    streakRingBg: '#7ABEE0',
  },

  glass: {
    cardBg: 'rgba(180,230,255,0.14)',
    cardBorder: 'rgba(180,230,255,0.28)',
    inputBg: 'rgba(180,230,255,0.12)',
    inputBorder: 'rgba(180,230,255,0.28)',
    buttonBg: 'rgba(46,134,171,0.38)',
    buttonBgPressed: 'rgba(26,94,122,0.60)',
    navBg: 'rgba(5,20,40,0.92)',
    streakBadgeBg: 'rgba(150,210,255,0.20)',
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
    intensity: 40,
    tint: 'dark',
  },

  gradient: {
    colors: ['#3A8FBF', '#0D5E8A', '#063A58'],
    start: { x: 0, y: 0 },
    end: { x: 0.3, y: 1 },
  },

  assets: {
    backgroundImage: require('../../../assets/backgrounds/underwater.jpg'),
    logoTint: '#5BA3C0',
  },
};
