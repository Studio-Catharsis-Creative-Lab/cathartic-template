\---

name: Desert
colors:
surface: '#fbf9f7'
surface-dim: '#dbdad8'
surface-bright: '#fbf9f7'
surface-container-lowest: '#ffffff'
surface-container-low: '#f5f3f1'
surface-container: '#efedec'
surface-container-high: '#eae8e6'
surface-container-highest: '#e4e2e0'
on-surface: '#1b1c1b'
on-surface-variant: '#534438'
inverse-surface: '#30302f'
inverse-on-surface: '#f2f0ee'
outline: '#867466'
outline-variant: '#d9c2b3'
surface-tint: '#904d02'
primary: '#6b3700'
on-primary: '#ffffff'
primary-container: '#8d4b00'
on-primary-container: '#ffcba3'
inverse-primary: '#ffb77d'
secondary: '#675d4e'
on-secondary: '#ffffff'
secondary-container: '#efe0cd'
on-secondary-container: '#6d6354'
tertiary: '#665f3d'
on-tertiary: '#ffffff'
tertiary-container: '#b4ab84'
on-tertiary-container: '#464020'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
primary-fixed: '#ffdcc3'
primary-fixed-dim: '#ffb77d'
on-primary-fixed: '#2f1500'
on-primary-fixed-variant: '#6e3900'
secondary-fixed: '#efe0cd'
secondary-fixed-dim: '#d2c5b2'
on-secondary-fixed: '#211b0f'
on-secondary-fixed-variant: '#4f4537'
tertiary-fixed: '#ede3b8'
tertiary-fixed-dim: '#d1c79d'
on-tertiary-fixed: '#201c02'
on-tertiary-fixed-variant: '#4d4727'
background: '#fbf9f7'
on-background: '#1b1c1b'
surface-variant: '#e4e2e0'
typography:
headline-xl:
fontFamily: Manrope
fontSize: 40px
fontWeight: '700'
lineHeight: '1.2'
letterSpacing: -0.02em
headline-lg:
fontFamily: Manrope
fontSize: 32px
fontWeight: '600'
lineHeight: '1.25'
headline-md:
fontFamily: Manrope
fontSize: 24px
fontWeight: '600'
lineHeight: '1.3'
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
label-md:
fontFamily: Manrope
fontSize: 14px
fontWeight: '600'
lineHeight: '1.2'
letterSpacing: 0.05em
label-sm:
fontFamily: Manrope
fontSize: 12px
fontWeight: '500'
lineHeight: '1.2'
rounded:
sm: 0.25rem
DEFAULT: 0.5rem
md: 0.75rem
lg: 1rem
xl: 1.5rem
full: 9999px
spacing:
base: 8px
xs: 4px
sm: 12px
md: 24px
lg: 40px
xl: 64px
margin: 24px
gutter: 16px
---

## Brand \& Style

This design system centers on the concept of "The Golden Hour"—that fleeting moment of perfect light that brings peace and clarity. Designed for a wellness audience, it emphasizes resilience through grounded earth tones and peace through ethereal, translucent layers.

The visual style is a refined **Glassmorphism**, specifically adapted for a warm environment. Instead of cold, frosty whites, surfaces utilize "Golden Glass"—semi-transparent layers tinted with amber and sand hues. This approach creates a sense of depth and breathability, ensuring the UI feels like a natural extension of the desert landscape background rather than an obstruction.

## Colors

The palette is derived from the shifting sands and the transition of the desert sun.

* **Primary (Burnt Orange):** Used for key actions and focal points. It represents the resilient heat and energy of the sun.
* **Secondary (Sandy Beige):** Acts as the foundational surface color, providing a soft, tactile grounding.
* **Tertiary (Warm Golden):** Employed for overlays, highlight glows, and subtle glass tints to evoke sunlight.
* **Neutral (Warm White):** Used for typography and backgrounds where maximum clarity is required, preventing the design from feeling muddy.

Surface colors should prioritize opacity levels between 40% and 80% to maintain the glass effect against the desert backdrop.

## Typography

This design system utilizes **Manrope** for its modern, balanced, and open character. The geometric qualities of the typeface provide the "resilient" structure, while the generous kerning in label styles ensures a "peaceful" and breathable reading experience.

* **Headlines:** Set in heavier weights with slight negative letter spacing to feel impactful and grounded.
* **Body:** Standardized with a taller line height (1.6) to improve legibility against textured or translucent backgrounds.
* **Labels:** Uppercase treatment for small labels (label-md) is encouraged to provide a structured, editorial feel.

## Layout \& Spacing

The layout philosophy follows a **Fluid Grid** with generous internal safe areas. Because the background image is a core part of the experience, the UI is encouraged to "breathe," using large margins (40px+) to let the desert landscape peak through.

* **Rhythm:** An 8px linear scale governs all padding and margin decisions.
* **Floating Containers:** Content should rarely touch the edges of the screen; instead, it should sit in centered or logically grouped glass modules.
* **Negative Space:** Prioritize vertical spacing to separate different "moods" or sections of the wellness journey.

## Elevation \& Depth

In this design system, depth is not created with shadows, but through **Backdrop Blurs** and **Light Transmittance**.

* **Surface Tiers:**

  * **Base:** The raw background image.
  * **Tier 1 (Panels):** 60% opacity Sandy Beige with a 24px backdrop blur.
  * **Tier 2 (Modals/Popovers):** 80% opacity Warm White with a 40px backdrop blur and a 1px solid white inner stroke (0.2 opacity) to simulate a glass edge.
* **The Golden Glow:** A soft, diffused amber inner-shadow (inset) can be used on primary buttons to make them appear as if they are illuminated from within.

## Shapes

The shape language is **Rounded (Level 2)**, avoiding sharp industrial corners in favor of organic, pebble-like softness.

* **Primary Cards:** 1rem (16px) corner radius.
* **Interactive Elements:** Buttons and input fields should use 1.5rem (24px) for a more approachable, tactile feel.
* **Enclosures:** Larger container sections may use up to 2rem (32px) to create a "nesting" effect for the content within.

## Components

* **Buttons:**

  * *Primary:* Solid Burnt Orange with a subtle golden outer glow.
  * *Secondary:* Glass-morphic (transparent) with a 1.5px warm-white border.
* **Chips:** Highly rounded (pill-shaped), using a 20% opacity tint of the secondary color. Used for mood tags or session categories.
* **Cards:** These are the hero components. Use a 1px top-down gradient stroke (white to transparent) to catch the "light" and a 20px blur to separate the content from the desert background.
* **Inputs:** Minimalist with a bottom-only border or a very light tinted glass fill. Use Warm White for placeholder text to ensure contrast.
* **Wellness Specifics:**

  * *Progress Rings:* Use a gradient from Sandy Beige to Burnt Orange to visualize habit completion.
  * *Breath Indicators:* Soft, pulsing circular glass layers that expand and contract.

