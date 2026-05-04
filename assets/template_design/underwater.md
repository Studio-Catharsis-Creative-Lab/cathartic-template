\---

name: Underwater
colors:
surface: '#05151c'
surface-dim: '#05151c'
surface-bright: '#2b3b43'
surface-container-lowest: '#011017'
surface-container-low: '#0d1e25'
surface-container: '#112229'
surface-container-high: '#1c2c34'
surface-container-highest: '#27373f'
on-surface: '#d3e5ef'
on-surface-variant: '#bccac2'
inverse-surface: '#d3e5ef'
inverse-on-surface: '#22333a'
outline: '#86948d'
outline-variant: '#3d4a44'
surface-tint: '#5adcb3'
primary: '#ffffff'
on-primary: '#003829'
primary-container: '#79f9ce'
on-primary-container: '#007258'
inverse-primary: '#006c52'
secondary: '#46eaed'
on-secondary: '#003738'
secondary-container: '#00cdd0'
on-secondary-container: '#005253'
tertiary: '#ffffff'
on-tertiary: '#193535'
tertiary-container: '#cae8e8'
on-tertiary-container: '#4d696a'
error: '#ffb4ab'
on-error: '#690005'
error-container: '#93000a'
on-error-container: '#ffdad6'
primary-fixed: '#79f9ce'
primary-fixed-dim: '#5adcb3'
on-primary-fixed: '#002117'
on-primary-fixed-variant: '#00513d'
secondary-fixed: '#5af8fb'
secondary-fixed-dim: '#2ddbde'
on-secondary-fixed: '#002020'
on-secondary-fixed-variant: '#004f51'
tertiary-fixed: '#cae8e8'
tertiary-fixed-dim: '#aecccc'
on-tertiary-fixed: '#022020'
on-tertiary-fixed-variant: '#304b4c'
background: '#05151c'
on-background: '#d3e5ef'
surface-variant: '#27373f'
typography:
h1:
fontFamily: Manrope
fontSize: 40px
fontWeight: '700'
lineHeight: '1.2'
letterSpacing: -0.02em
h2:
fontFamily: Manrope
fontSize: 32px
fontWeight: '600'
lineHeight: '1.3'
letterSpacing: -0.01em
h3:
fontFamily: Manrope
fontSize: 24px
fontWeight: '600'
lineHeight: '1.4'
body-lg:
fontFamily: Manrope
fontSize: 18px
fontWeight: '400'
lineHeight: '1.6'
body-md:
fontFamily: Manrope
fontSize: 16px
fontWeight: '400'
lineHeight: '1.6'
label-caps:
fontFamily: Manrope
fontSize: 12px
fontWeight: '700'
lineHeight: '1.0'
letterSpacing: 0.1em
rounded:
sm: 0.25rem
DEFAULT: 0.5rem
md: 0.75rem
lg: 1rem
xl: 1.5rem
full: 9999px
spacing:
unit: 8px
container-padding: 24px
stack-gap: 16px
section-margin: 48px
glass-padding: 20px
---

## Brand \& Style

This design system is built to evoke the weightless, silent serenity of the deep ocean. It targets users seeking mental clarity and emotional regulation through a "submerged" digital experience. The brand personality is tranquil, protective, and profoundly reflective.

The visual style is a sophisticated evolution of **Glassmorphism**. Rather than simple frosted panels, it utilizes "Fluid Overlays"—multiple layers of varying transparency and refraction that mimic the way light bends through water. The interface should feel like a series of suspended biological forms or smooth stones resting on the ocean floor. Every interaction is designed to feel dampened and intentional, removing the "noise" of traditional high-contrast interfaces.

## Colors

The palette is derived from the photic zone transitioning into the midnight zone. It uses a **Dark Mode** default to maintain the "underwater" immersion.

* **Primary (Aquamarine):** Used for high-importance actions and primary brand touchpoints. It represents the bioluminescent life of the deep.
* **Secondary (Teal):** Used for structural accents and secondary interactions.
* **Tertiary (Light Blue/Cyan):** A "glowing" highlight color used for active states and subtle illumination.
* **Neutral (Deep Navy):** The base background color, providing the "weight" and depth required for glass layers to pop.
* **Surface Overlays:** Use semi-transparent variants of Teal and Navy (approx. 10-20% opacity) with high background blur (30px-50px) to create the glass effect.

## Typography

This design system utilizes **Manrope** for its balance of geometric precision and organic softness. The typeface feels modern and "engineered" yet remains approachable for wellness content.

* **Headlines:** Set with slightly tighter letter-spacing to feel grounded.
* **Body Text:** Generous line-height (1.6) is mandatory to ensure readability against complex, blurred backgrounds.
* **Contrast:** Use high-contrast white for primary text and 60% opacity Aquamarine for secondary metadata to maintain the bioluminescent aesthetic.

## Layout \& Spacing

The layout philosophy is **Fluid and Atmospheric**. While it follows a standard 4-column mobile grid or 12-column desktop grid, the content should feel like it is floating within a medium rather than being "boxed" into it.

* **Negative Space:** Use "Deep Margin" (48px+) between major sections to emphasize the vastness of the ocean theme.
* **Safe Areas:** Content must be inset within glass containers using at least 20px of internal padding to prevent text from hitting the "refractive" edges of the glass.
* **Rhythm:** Use an 8px incremental scale for all component sizing and spatial relationships.

## Elevation \& Depth

Hierarchy is established through **Refractive Layering** rather than traditional drop shadows.

1. **Level 0 (Floor):** The base background image with a deep teal vignette.
2. **Level 1 (Submerged):** Large, low-opacity (5%) teal overlays with 40px backdrop blur. These act as "water pockets" to group content.
3. **Level 2 (Floating):** Card elements with 15% opacity, a 1px inner "light-leak" border on the top and left (hex: #E0FFFF, 30% opacity), and a 20px blur.
4. **Level 3 (Surface/Active):** High-glow elements using a subtle outer glow (0px 0px 15px) in the primary Aquamarine color to signify "active" or "bioluminescent" items.

## Shapes

The shape language is **Organic and Erosion-Inspired**. Avoid sharp corners entirely. All containers should look like river stones or droplets that have been smoothed by water currents over time.

* **Standard Radius:** 16px (rounded-lg) for main cards and content containers.
* **Pill Shapes:** Used exclusively for interactive elements like buttons and chips to distinguish them from informational containers.
* **Inner Borders:** 1px solid borders with 10-20% opacity are used on all glass containers to define their shape against the fluid background.

## Components

### Buttons \& Chips

* **Primary Button:** Pill-shaped, semi-transparent teal background with a vibrant aquamarine glow border. Text is white with a slight outer glow.
* **Ghost Buttons:** 1px white border at 30% opacity, no background fill until hovered.

### Cards

* **Glass Card:** The fundamental unit. Must feature `backdrop-filter: blur(25px)` and a linear gradient border (top-left to bottom-right) from `rgba(255,255,255,0.2)` to `rgba(255,255,255,0.05)`.

### Input Fields

* Underlined or "Soft Well" style. A soft well uses a darker, recessed background (5% black) with a bright 1px bottom border that "activates" by increasing in glow intensity when focused.

### Specialized Wellness Components

* **Breath Tracker:** A circular, pulsating ring with a "liquid fill" effect that expands and contracts.
* **Mood Droplets:** Small, semi-translucent circular icons used for logging emotions, categorized by color temperature (Teal for calm, Cyan for focused).
* **Progress Bars:** Thin, glowing lines that appear to "fill" like a rising tide within a glass container.

