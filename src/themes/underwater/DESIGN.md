---
name: Underwater
description: Deep oceanic glassmorphism — midnight blue depths, bioluminescent accents, and glass panels with the heavy, pressurized quality of deep water.

colors:
  primary: "#2E86AB"
  primary-light: "#5BA3C0"
  primary-dark: "#1A5E7A"
  accent: "#1E6FA0"
  on-primary: "#FFFFFF"
  background: "#0D5E8A"
  background-dim: "#063A58"
  surface-bright: "#3A8FBF"
  error: "#FF6B6B"
  on-error: "#FFFFFF"
  success: "#51CF66"
  nav-bg: "#051428"
  nav-icon: "#96D2FF"
  nav-icon-active: "#5BA3C0"
  text-primary: "#041E30"
  text-on-surface: "#FFFFFF"
  text-muted: "#96D2FF"
  link: "#5BA3C0"
  streak-ring: "#5BA3C0"
  streak-ring-bg: "#7ABEE0"

typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: 700
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: 600
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0.04em

rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  xl: 32px
  full: 9999px

spacing:
  unit: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  screen-padding: 20px
  card-padding: 20px
  input-padding-h: 16px
  input-padding-v: 14px
  nav-height: 64px
  nav-icon-size: 26px

components:
  glass-card:
    backgroundColor: "rgba(180,230,255,0.14)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  glass-input:
    backgroundColor: "rgba(180,230,255,0.12)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.input-padding-h}"
  glass-input-border:
    backgroundColor: "rgba(180,230,255,0.28)"
  button-primary:
    backgroundColor: "rgba(46,134,171,0.38)"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "rgba(26,94,122,0.60)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
  nav-bar:
    backgroundColor: "rgba(5,20,40,0.92)"
    textColor: "{colors.nav-icon}"
    height: "{spacing.nav-height}"
  streak-badge:
    backgroundColor: "rgba(150,210,255,0.20)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
---

## Brand & Style

Underwater is the most dramatic Cathartic theme — deep ocean blue, almost pressurized in its weight. It evokes the quiet of the deep sea: bioluminescent light, shifting water columns, the sense of being suspended in an infinite dark space. Glass surfaces here are the most transparent of all themes, as if the panels themselves are made of water.

This is the right choice for apps focused on meditation, sleep, or introspection.

## Colors

- **Primary** (#2E86AB): Mid-depth ocean blue — not surface turquoise, not abyssal black. The right level of depth.
- **Background** (#0D5E8A): Deep sea blue — dark, saturated, commanding. The background image should be dark water, not a bright reef.
- **Background-dim** (#063A58): Near-abyssal — the darkest meaningful blue before losing all color.
- **Nav-bg** (#051428): Almost black. The deepest layer, anchoring the floating glass.
- **Text-muted** (#96D2FF): Bioluminescent blue — cyan-leaning, glowing quality. The only "bright" element in an otherwise dark scheme.
- **Glass tint**: All glass uses `rgba(180,230,255,...)` — a cool blue-white, like sunlight filtered through deep water.

## Typography

Same Inter scale. Given the darker backgrounds, text-shadow (rgba(0,0,0,0.4)) is recommended on display text to ensure legibility against complex underwater photography.

## Layout & Spacing

Identical to Beach. The contained, pressurized feel comes from the deep dark palette, not from reduced layout space.

## Elevation & Depth

Highest blur intensity (40) — deep water is the least transparent of all the natural environments. Glass opacity drops to 14% — the most translucent setting, letting the dark water dominate. The nav bar uses the highest opacity (92%) to provide strong grounding against the dark background.

## Shapes

Identical radius scale. Flowing pill shapes reinforce the liquid quality of the theme.

## Components

### Glass Card
Most translucent of all themes (14% opacity, blue-tinted). The card almost disappears into the water, with only the border visible at rest.

### Button — Primary
Deep ocean blue tint. On press, shifts to near-abyssal shade, like diving deeper.

### Nav Bar
Near-black at 92% — the deepest, heaviest layer. Essential grounding in such a dark overall palette.

### Streak Badge
Blue-tinted glass disc — glows subtly, like bioluminescence. The streak ring color (#5BA3C0) should feel like it's emanating light.

## Do's and Don'ts

**Do** use dark underwater photography — deep blue, minimal light sources, sense of depth.
**Do** use higher text-shadow values on all text against complex photography.
**Do** lean into the glow quality of the muted blue (#96D2FF) — it's the theme's signature detail.
**Don't** use surface-level ocean photography (bright turquoise, sandy bottom) — it breaks the depth illusion.
**Don't** add warm tones anywhere — no amber, no green. Strict deep-blue monochrome only.
**Don't** raise glass opacity above 18% — the transparency is the defining characteristic of this theme.
