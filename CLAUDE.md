# Cathartic Template — AI Agent Guide

## Architecture at a glance

```
src/
  themes/
    {name}/
      DESIGN.md    ← source of truth (DESIGN.md spec, Google Labs format)
      tokens.ts    ← TypeScript mirror of DESIGN.md values
    types.ts       ← shared Theme TypeScript interface
    index.ts       ← re-exports all themes + themes record
  context/
    ThemeContext   ← provides useTheme() hook; persists selection
    AuthContext    ← provides useAuth() hook; persists user
  components/      ← all read from useTheme(), never hard-coded colors
  screens/         ← Login, SignUp, Settings, HomeScreen (blank template)
  functions/       ← api.ts, auth.ts, storage.ts, validation.ts
  navigation/      ← AppNavigator + screen type definitions
```

## How to add a new theme

1. Create `src/themes/{name}/DESIGN.md` following the DESIGN.md spec (YAML front matter → Markdown sections).
2. Create `src/themes/{name}/tokens.ts` that exports a `Theme` object matching `src/themes/types.ts`.
3. Add the theme to `src/themes/index.ts` (import + add to `themes` record + add to `ThemeName` union).
4. Drop a `{name}.jpg` background image in `assets/backgrounds/`.

## How to add a new screen

1. Duplicate `src/screens/HomeScreen.tsx` and rename it.
2. Remove placeholder content, build your feature.
3. Export it from `src/screens/index.ts`.
4. Add it to the navigator in `src/navigation/AppNavigator.tsx`.

## Design token workflow

**DESIGN.md is the source of truth.** When changing a color or spacing value:
1. Edit the value in the relevant `DESIGN.md`.
2. Update the matching field in `tokens.ts` to match.
3. Never hard-code color/spacing values in components — always read from `useTheme()`.

## Key hooks

| Hook | Location | What it returns |
|------|----------|----------------|
| `useTheme()` | `context/ThemeContext` | `{ theme, themeName, setTheme, availableThemes }` |
| `useAuth()` | `context/AuthContext` | `{ user, isAuthenticated, signIn, signUp, signOut, updateUser }` |

## Key utilities

| Export | Location | Purpose |
|--------|----------|---------|
| `api` | `functions/api.ts` | Typed fetch wrapper (get/post/put/patch/delete) |
| `authFunctions` | `functions/auth.ts` | Stubbed sign-in/up/out — replace with real API |
| `storage` | `functions/storage.ts` | Typed AsyncStorage wrapper |
| `validate` | `functions/validation.ts` | Form field validators |
| `analytics` | `services/analytics.ts` | Firebase → GA4 event tracking |
| `EVENTS` | `services/analytics.ts` | Standardized event name constants |
| `haptic` | `services/haptics.ts` | One-liner haptic feedback calls |
| `aiQueue` | `services/aiQueue.ts` | Queue AI requests; retries on reconnect |
| `purchases` | `services/purchases.ts` | RevenueCat subscription management |

## Key hooks

| Hook | Location | What it returns |
|------|----------|----------------|
| `useTheme()` | `context/ThemeContext` | `{ theme, themeName, setTheme, availableThemes }` |
| `useAuth()` | `context/AuthContext` | `{ user, isAuthenticated, signIn, signUp, signOut, updateUser }` |
| `useStreak(userId, key)` | `hooks/useStreak` | `{ streak, completedToday, markComplete, reset }` |
| `useEntries<T>(type)` | `hooks/useEntries` | `{ entries, create, update, remove, refresh }` |
| `useSubscription()` | `hooks/useSubscription` | `{ isPremium, openPaywall, restore }` |

## Data schema pattern

`BaseEntry` (shared) + typed `payload` (app-specific). Every app defines its own entry type extending `BaseEntry`. Storage, streak engine, and analytics all operate on `BaseEntry`. See `src/data/types.ts` for examples (`MoodEntry`, `GoalEntry`, `BrainDumpEntry`).

## Starting a new app from this template

1. Edit `src/config.ts` — set `appName`, `bundleId`, `defaultTheme`, feature flags
2. Edit `app.json` — match `name`, `slug`, `bundleIdentifier`, `package` to config
3. Copy `.env.example` → `.env`, fill in Firebase + API keys
4. Add your entry type to `src/data/types.ts`
5. Drop background images in `assets/backgrounds/`
6. Build feature screens by duplicating `HomeScreen.tsx`

## Glass surface rules (from DESIGN.md)

- Cards: `theme.glass.cardBg` fill + `theme.glass.cardBorder` 1px border
- Inputs: `theme.glass.inputBg` fill + `theme.glass.inputBorder` 1px border, `rounded.full` radius
- Buttons: `theme.glass.buttonBg` fill, `rounded.xl` radius
- Never use solid colors on surfaces; never add drop shadows
- Text on glass surfaces is always `theme.colors.textOnSurface` (white)
