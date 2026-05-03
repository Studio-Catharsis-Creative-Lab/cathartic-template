---
name: Mountain
description: Cool alpine glassmorphism — slate-blue peaks, crisp high-altitude air, and glass panels with a cooler, more structured feel than the beach theme.

colors:
  primary: "#6B8CAE"
  primary-light: "#8FAEC8"
  primary-dark: "#4A6A8A"
  accent: "#8B9DC3"
  on-primary: "#FFFFFF"
  background: "#4A6FA5"
  background-dim: "#2C4A6E"
  surface-bright: "#7B9FC4"
  error: "#E05C5C"
  on-error: "#FFFFFF"
  success: "#4CAF7A"
  nav-bg: "#0F1C2D"
  nav-icon: "#FFFFFF"
  nav-icon-active: "#8FAEC8"
  text-primary: "#1C2B3A"
  text-on-surface: "#FFFFFF"
  text-muted: "#B8CCDE"
  link: "#8FAEC8"
  streak-ring: "#8FAEC8"
  streak-ring-bg: "#A8BDD4"

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
    backgroundColor: "rgba(255,255,255,0.18)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  glass-input:
    backgroundColor: "rgba(255,255,255,0.15)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.input-padding-h}"
  glass-input-border:
    backgroundColor: "rgba(255,255,255,0.30)"
  button-primary:
    backgroundColor: "rgba(107,140,174,0.38)"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "rgba(74,106,138,0.58)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
  nav-bar:
    backgroundColor: "rgba(15,28,45,0.90)"
    textColor: "{colors.nav-icon}"
    height: "{spacing.nav-height}"
  streak-badge:
    backgroundColor: "rgba(255,255,255,0.20)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
---

## Brand & Style

Mountain is a cooler, more structured interpretation of the Cathartic glass aesthetic. It evokes clear mornings at altitude — slate-blue ridgelines, frosted pine branches, and the stillness of thin air. The palette shifts from teal warmth to blue-grey authority. The app feels focused and grounded.

## Colors

- **Primary** (#6B8CAE): A muted steel blue — calming but more deliberate than the beach teal. Used for interactive states, streak rings, and nav accents.
- **Background / Background-dim**: Two-stop gradient from medium slate blue to a deep navy, evoking depth of a mountain valley.
- **Nav-bg** (#0F1C2D): Near-black navy — heavier anchor than the beach theme, reinforcing the grounded mountain feel.
- **Text-muted** (#B8CCDE): Cool desaturated blue-grey for placeholders, keeping the icy clarity consistent.

## Typography

Identical type scale to Beach — Inter at the same sizes. The cooler palette naturally shifts the mood without changing letterforms.

## Layout & Spacing

Same 8px base unit and screen padding as Beach. The mountain theme makes no layout changes — only color and blur shift.

## Elevation & Depth

Slightly higher blur intensity (35) to simulate the hazy quality of distance between mountain ridges. Glass opacity is reduced marginally (0.18 vs 0.22) so the dramatic background photograph reads through more strongly.

## Shapes

Identical radii to Beach. The cool palette does the heavy lifting for theme differentiation; shape language stays consistent across all Cathartic themes so users feel at home switching.

## Components

### Glass Card
Slightly more transparent than Beach (18% vs 22%) to let mountain photography show through. Border remains at 30% white.

### Button — Primary
Uses a muted steel-blue tint instead of teal. Same pill shape and animation behavior.

### Nav Bar
Deeper, near-black opacity (90%) — heavier grounding for the mountain visual weight.

## Do's and Don'ts

**Do** use high-contrast mountain photography with distinct foreground/background depth.
**Do** keep glass opacity slightly lower so sharp ridgelines bleed through surfaces.
**Don't** mix warm tones into the mountain palette — the cool scheme is intentional and creates a distinct mood from Beach.
**Don't** use the Beach teal (#4ECDC4) as an accent in Mountain screens.
