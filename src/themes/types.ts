export type ThemeName = 'beach' | 'mountain' | 'desert' | 'wooded' | 'underwater';

// Mirrors the hex color tokens defined in each theme's DESIGN.md `colors:` section.
export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  onPrimary: string;
  background: string;
  backgroundDim: string;
  surfaceBright: string;
  error: string;
  onError: string;
  success: string;
  navBg: string;
  navIcon: string;
  navIconActive: string;
  textPrimary: string;
  textOnSurface: string;
  textMuted: string;
  link: string;
  streakRing: string;
  streakRingBg: string;
}

// Mirrors the rgba values defined in each theme's DESIGN.md `components:` section.
// These cannot be hex so they live here separately from ThemeColors.
export interface ThemeGlass {
  cardBg: string;
  cardBorder: string;
  inputBg: string;
  inputBorder: string;
  buttonBg: string;
  buttonBgPressed: string;
  navBg: string;
  streakBadgeBg: string;
}

// Mirrors `rounded:` section — values stored as unitless numbers (px).
export interface ThemeRounded {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  full: number;
}

// Mirrors `spacing:` section — values stored as unitless numbers (px).
export interface ThemeSpacing {
  unit: number;
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  screenPadding: number;
  cardPadding: number;
  inputPaddingH: number;
  inputPaddingV: number;
  navHeight: number;
  navIconSize: number;
}

export interface Theme {
  name: ThemeName;
  displayName: string;
  colors: ThemeColors;
  glass: ThemeGlass;
  rounded: ThemeRounded;
  spacing: ThemeSpacing;
  blur: {
    intensity: number;
    tint: 'light' | 'dark' | 'default';
  };
  gradient: {
    colors: string[];
    start: { x: number; y: number };
    end: { x: number; y: number };
  };
  assets: {
    backgroundImage: any | null;  // null until real image is dropped in assets/backgrounds/
    logoTint: string;
  };
}
