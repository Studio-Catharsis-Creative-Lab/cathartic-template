---
name: Beach
description: Warm coastal glassmorphism — teal waters, soft bokeh light, and frosted glass surfaces that evoke a calm seaside morning.

colors:
  primary: "#4ECDC4"
  primary-light: "#7EDDD7"
  primary-dark: "#2BA8A0"
  accent: "#38B2AC"
  on-primary: "#FFFFFF"
  background: "#6EC6CA"
  background-dim: "#4FA8AD"
  surface-bright: "#89D4CF"
  error: "#FF6B6B"
  on-error: "#FFFFFF"
  success: "#51CF66"
  nav-bg: "#144A4F"
  nav-icon: "#FFFFFF"
  nav-icon-active: "#4ECDC4"
  text-primary: "#1A3C40"
  text-on-surface: "#FFFFFF"
  text-muted: "#B2DFE0"
  link: "#4ECDC4"
  streak-ring: "#4ECDC4"
  streak-ring-bg: "#A8DEDD"

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
    backgroundColor: "rgba(255,255,255,0.22)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  glass-input:
    backgroundColor: "rgba(255,255,255,0.18)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.input-padding-h}"
  glass-input-border:
    backgroundColor: "rgba(255,255,255,0.35)"
  button-primary:
    backgroundColor: "rgba(78,205,196,0.35)"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "rgba(43,168,160,0.55)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
  nav-bar:
    backgroundColor: "rgba(20,74,79,0.88)"
    textColor: "{colors.nav-icon}"
    height: "{spacing.nav-height}"
  streak-badge:
    backgroundColor: "rgba(255,255,255,0.25)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
---

## Brand & Style

Beach is the foundational theme of the Cathartic template. It draws from coastal mornings — shallow teal water catching diffused sunlight, palm silhouettes softened by sea haze. The visual language is calm, expansive, and uncluttered.

Glassmorphism is the core surface treatment. All cards and inputs float as translucent frosted panels above a blurred photographic background. Depth comes from layering blur, not from drop shadows.

## Colors

- **Primary** (#4ECDC4): The signature teal — used for interactive elements, the streak ring, active nav icons, and branded accents. Approachable without being clinical.
- **Primary-light / Primary-dark**: Tint and shade for hover/pressed states and gradient endpoints.
- **Background / Background-dim / Surface-bright**: Three depth layers of the background gradient, creating the sense of water receding into the horizon.
- **Nav-bg** (#144A4F): Deep teal-charcoal for the bottom navigation, grounding the floating UI.
- **Text-on-surface**: Always white. Glass surfaces are colored; text on them must be white to maintain contrast.
- **Text-muted** (#B2DFE0): Placeholder and secondary label color — desaturated enough to not compete with content.
- **Error / Success**: Standard semantic reds and greens. Kept vivid so they're immediately identifiable against the teal palette.

## Typography

Uses Inter throughout for clean legibility at all mobile sizes. No decorative fonts — the background photography provides the visual richness.

- `display-lg`: Screen titles and app name
- `headline-md`: Section headers and modal titles
- `body-lg`: Primary body content and input values
- `body-md`: Secondary descriptions, settings labels
- `label-lg`: Button text, always semibold
- `label-sm`: Small caps labels, nav labels, badge text

## Layout & Spacing

Base unit is 8px. All spacing values are multiples of this unit, creating a consistent vertical rhythm. Screen padding is 20px to leave breathing room from device edges without wasting the blurred background.

Cards and inputs use generous internal padding (20px / 14px vertical) so frosted glass surfaces feel airy, not cramped.

## Elevation & Depth

Three layers, achieved purely through blur and opacity — no box shadows:
1. **Background**: Full-bleed photographic image, blurred heavily (blur intensity 30).
2. **Surfaces**: Glass panels with `rgba(255,255,255,0.22)` fill and subtle white border.
3. **Interactive**: Buttons use a slightly higher opacity teal tint to feel slightly raised.

The navigation bar sits at the bottom as the densest, darkest layer — visually anchoring the UI.

## Shapes

- Full pill (`rounded.full`) for inputs and primary CTA buttons — soft, inviting, beach-pebble feel.
- Large radius (`rounded.xl`, 32px) for major content cards.
- Medium (`rounded.lg`, 20px) for secondary cards and modals.
- Small (`rounded.sm`, 8px) for badges, chips, and inline tags.

## Components

### Glass Card
Semi-transparent white panel (22% opacity) floating over the blurred background. Used for text-entry areas, content containers, and modals. Always has a subtle `rgba(255,255,255,0.35)` 1px border.

### Glass Input
Pill-shaped input with 18% white fill and 35% white border. Placeholder text is `text-muted`. Icon leading the field is tinted `primary`.

### Button — Primary
The main CTA button: pill shape, teal-tinted glass fill (`rgba(78,205,196,0.35)`), white bold label. On press, opacity increases to 0.55 and a subtle scale animation (0.97) provides tactile feedback.

### Nav Bar
Fixed bottom bar in deep nav-bg color with 88% opacity. Four icon slots. Active icon uses `primary` tint; inactive icons use 55% white.

### Streak Badge
Circular progress ring in `streak-ring` color atop a 25% white disc. Displays a numeric count. Positioned top-right corner of the screen.

## Do's and Don'ts

**Do** keep the background image blurred at the OS level — never show it sharp.
**Do** use white text on all glass surfaces regardless of background color.
**Do** layer glass panels — a card inside a card is acceptable at reduced opacity.
**Don't** use solid-color fills on cards; the translucency is the whole aesthetic.
**Don't** add drop shadows — they fight with the blur-based depth system.
**Don't** use more than two tint colors in a single screen; let the background carry the palette.
