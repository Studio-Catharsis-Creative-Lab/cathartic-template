---
name: Wooded
description: Deep forest glassmorphism — mossy greens, dappled canopy light, and glass panels tinted with the coolness of shade beneath tall trees.

colors:
  primary: "#5C8A5E"
  primary-light: "#7DAF7F"
  primary-dark: "#3D6B40"
  accent: "#6B9E6D"
  on-primary: "#FFFFFF"
  background: "#4A7A4C"
  background-dim: "#2A4A2C"
  surface-bright: "#7AB87D"
  error: "#E05C5C"
  on-error: "#FFFFFF"
  success: "#51CF66"
  nav-bg: "#0F230F"
  nav-icon: "#C8F0C8"
  nav-icon-active: "#7DAF7F"
  text-primary: "#1A2E1A"
  text-on-surface: "#FFFFFF"
  text-muted: "#C0E8C0"
  link: "#7DAF7F"
  streak-ring: "#7DAF7F"
  streak-ring-bg: "#A8D8AA"

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
    backgroundColor: "rgba(220,245,220,0.20)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-padding}"
  glass-input:
    backgroundColor: "rgba(220,245,220,0.16)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
    padding: "{spacing.input-padding-h}"
  glass-input-border:
    backgroundColor: "rgba(220,245,220,0.38)"
  button-primary:
    backgroundColor: "rgba(92,138,94,0.38)"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-lg}"
    rounded: "{rounded.xl}"
    padding: "{spacing.md}"
  button-primary-pressed:
    backgroundColor: "rgba(61,107,64,0.58)"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xl}"
  nav-bar:
    backgroundColor: "rgba(15,35,15,0.90)"
    textColor: "{colors.nav-icon}"
    height: "{spacing.nav-height}"
  streak-badge:
    backgroundColor: "rgba(200,240,200,0.25)"
    textColor: "{colors.text-on-surface}"
    rounded: "{rounded.full}"
---

## Brand & Style

Wooded brings the quiet immersion of old-growth forest to the Cathartic glass aesthetic. Deep greens layered from canopy to forest floor create a sense of depth and enclosure — peaceful, protected, alive. Glass panels carry a slight green tint, as if the light passing through them has been filtered by leaves.

## Colors

- **Primary** (#5C8A5E): Forest green — mid-range, natural, neither too bright nor too dark. Grounding and reliable.
- **Background** (#4A7A4C): Mid-forest green, the dominant tone. Photographs of forest canopy, fern beds, or mossy trails work best.
- **Background-dim** (#2A4A2C): Deep forest shadow — used for gradient depth and the nav bar.
- **Nav-bg** (#0F230F): Near-black forest floor — the darkest element.
- **Text-muted** (#C0E8C0): Pale mint-green for placeholders — cool enough to recede without losing the theme's color identity.
- **Glass tint**: All glass surfaces use `rgba(220,245,220,...)` — a very pale green-white, like dappled light through leaves.

## Typography

Same Inter scale. Forest photography is often darker than beach or desert, so all body text maintains white (#FFFFFF) on glass surfaces. Consider a 2px text-shadow (rgba(0,0,0,0.3)) on display text when background imagery is complex.

## Layout & Spacing

Identical spacing to Beach. The enclosed feeling of forest comes from the background image and dark palette, not from reduced whitespace.

## Elevation & Depth

Blur intensity 28 — between the crisp desert air and the heavy coastal haze. Forest light is softly diffused. Glass opacity 0.20 allows the deep green background to influence surface perceived color.

## Shapes

Identical radius scale. The organic curves of the pill inputs and rounded cards echo natural forms — rounded rocks, bent branches.

## Components

### Glass Card
Pale green-white tint. When placed over dark forest photography, this creates the illusion of light breaking through the canopy onto the card surface.

### Button — Primary
Forest-green tinted glass. On press, deepens to near-forest-floor shade.

### Nav Bar
Darkest possible forest green (0F230F) at 90% opacity — feels like looking down into shadow at the base of the trees.

## Do's and Don'ts

**Do** use photography with strong vertical lines (tree trunks, shafts of light) — they create natural movement.
**Do** apply the green glass tint to all surfaces for thematic consistency.
**Don't** use warm amber or desert tones as accents — they clash with the cool green system.
**Don't** use beach-style photography (ocean, horizon); the enclosed canopy framing is essential.
**Don't** reduce spacing to simulate enclosure — that harms usability. Let the image do the work.
