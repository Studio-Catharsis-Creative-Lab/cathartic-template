---
name: Desert
description: Warm arid glassmorphism — amber sands, terracotta dust, and sun-bleached glass panels radiating dry heat and open space.

colors:
  primary: "#D4956A"
  primary-light: "#E5B08A"
  primary-dark: "#B0724A"
  accent: "#C8813D"
  on-primary: "#FFFFFF"
  background: "#C4884E"
  background-dim: "#8C5A28"
  surface-bright: "#E8B87A"
  error: "#E05C5C"
  on-error: "#FFFFFF"
  success: "#90C060"
  nav-bg: "#321908"
  nav-icon: "#FFDCB4"
  nav-icon-active: "#E5B08A"
  text-primary: "#3D2010"
  text-on-surface: "#FFFFFF"
  text-muted: "#F0D0A8"
  link: "#E5B08A"
  streak-ring: "#E5B08A"
  streak-ring-bg: "#F0C898"

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
    backgroundColor: "rgba(255,240,220,0.22)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  glass-input:
    backgroundColor: "rgba(255,240,220,0.18)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.input-padding-h}"
  glass-input-border:
    backgroundColor: "rgba(255,240,220,0.38)"
  button-primary:
    backgroundColor: "rgba(212,149,106,0.40)"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "rgba(176,114,74,0.60)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
  nav-bar:
    backgroundColor: "rgba(50,25,8,0.90)"
    textColor: "{colors.nav-icon}"
    height: "{spacing.nav-height}"
  streak-badge:
    backgroundColor: "rgba(255,220,160,0.28)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
---

## Brand & Style

Desert channels the vast, sun-scorched openness of arid landscapes — red rock formations at golden hour, heat shimmer on flat sand, the silence of wide sky. Warm amber and terracotta replace teal, creating a distinctly different emotional register: expansive, unhurried, ancient.

Glass surfaces here carry a warm cream tint rather than neutral white, as if the sand itself has colored the air.

## Colors

- **Primary** (#D4956A): Warm terracotta — the dominant interactive color. Earthy without being muddy.
- **Background** (#C4884E): Mid-tone amber sand — warm, saturated, full of light.
- **Background-dim** (#8C5A28): Deep ochre for gradient depth, evoking shadow in canyon walls.
- **Nav-bg** (#321908): Very dark burnt sienna — the heaviest, most grounded color in the palette.
- **Text-muted** (#F0D0A8): Pale parchment — readable against amber glass without going pure white.
- **Glass tint**: All glass surfaces use `rgba(255,240,220,...)` — a warm cream tint rather than pure white, keeping the sand-lit feel.

## Typography

Same Inter scale. At desert amber tones, label text may need a subtle text-shadow (rgba(0,0,0,0.2)) to ensure legibility against lighter sand backgrounds.

## Layout & Spacing

Identical to Beach. Open, generous spacing reinforces the expansive desert aesthetic.

## Elevation & Depth

Lower blur intensity (25) — desert air is clearer and drier than coastal air. Backgrounds should feel slightly sharper than beach/underwater themes. Glass opacity stays at 0.22 with warm-cream tinting.

## Shapes

Identical radius scale. The warmth of the palette softens the pill shapes naturally.

## Components

### Glass Card
Warm cream tint (`rgba(255,240,220,0.22)`) instead of white — essential for maintaining the desert warmth. Pure white glass here would feel discordant.

### Button — Primary
Terracotta-tinted glass fill. On press, shifts to a richer burnt orange.

### Nav Bar
Near-black burnt sienna at 90% opacity — the deepest shade in the palette, anchoring the layout.

## Do's and Don'ts

**Do** use desert photographs with warm color grading — golden hour tones preferred.
**Do** use the warm-cream glass tint (`rgba(255,240,220,...)`) on all surfaces, not pure white.
**Don't** introduce cool colors (blues, greens) as accents — they clash with the palette.
**Don't** use Beach's teal (#4ECDC4) anywhere in Desert screens.
**Don't** sharpen the background too much — even in clear desert air, maintain some atmospheric blur.
