export * from './types';
export { beachTheme } from './beach/tokens';
export { mountainTheme } from './mountain/tokens';
export { desertTheme } from './desert/tokens';
export { woodedTheme } from './wooded/tokens';
export { underwaterTheme } from './underwater/tokens';

import { beachTheme } from './beach/tokens';
import { mountainTheme } from './mountain/tokens';
import { desertTheme } from './desert/tokens';
import { woodedTheme } from './wooded/tokens';
import { underwaterTheme } from './underwater/tokens';
import { Theme, ThemeName } from './types';

export const themes: Record<ThemeName, Theme> = {
  beach: beachTheme,
  mountain: mountainTheme,
  desert: desertTheme,
  wooded: woodedTheme,
  underwater: underwaterTheme,
};

export const DEFAULT_THEME: ThemeName = 'beach';
