\---

name: beach
colors:
surface: '#f4fbf8'
surface-dim: '#d4dcd9'
surface-bright: '#f4fbf8'
surface-container-lowest: '#ffffff'
surface-container-low: '#eef5f3'
surface-container: '#e8efed'
surface-container-high: '#e2eae7'
surface-container-highest: '#dde4e2'
on-surface: '#161d1c'
on-surface-variant: '#3c4a47'
inverse-surface: '#2b3230'
inverse-on-surface: '#ebf2f0'
outline: '#6b7a77'
outline-variant: '#bacac6'
surface-tint: '#006a62'
primary: '#006a62'
on-primary: '#ffffff'
primary-container: '#40e0d0'
on-primary-container: '#006058'
inverse-primary: '#3adccc'
secondary: '#5e604d'
on-secondary: '#ffffff'
secondary-container: '#e1e1c9'
on-secondary-container: '#636451'
tertiary: '#a43c12'
on-tertiary: '#ffffff'
tertiary-container: '#ffbaa3'
on-tertiary-container: '#973307'
error: '#ba1a1a'
on-error: '#ffffff'
error-container: '#ffdad6'
on-error-container: '#93000a'
primary-fixed: '#61f9e9'
primary-fixed-dim: '#3adccc'
on-primary-fixed: '#00201d'
on-primary-fixed-variant: '#005049'
secondary-fixed: '#e4e4cc'
secondary-fixed-dim: '#c8c8b0'
on-secondary-fixed: '#1b1d0e'
on-secondary-fixed-variant: '#474836'
tertiary-fixed: '#ffdbcf'
tertiary-fixed-dim: '#ffb59c'
on-tertiary-fixed: '#380c00'
on-tertiary-fixed-variant: '#822800'
background: '#f4fbf8'
on-background: '#161d1c'
surface-variant: '#dde4e2'
typography:
h1:
fontFamily: Manrope
fontSize: 48px
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
label-sm:
fontFamily: Manrope
fontSize: 12px
fontWeight: '700'
lineHeight: '1'
letterSpacing: 0.05em
rounded:
sm: 0.25rem
DEFAULT: 0.5rem
md: 0.75rem
lg: 1rem
xl: 1.5rem
full: 9999px
spacing:
unit: 8px
container-max: 1280px
gutter: 24px
margin-mobile: 16px
margin-desktop: 40px
stack-sm: 12px
stack-md: 24px
stack-lg: 48px
---

## Brand \& Style

This design system is built upon the concept of "Airy Clarity," merging the organic warmth of a coastal retreat with the high-end precision of a creative laboratory. The brand personality is serene, sophisticated, and revitalizing.

The aesthetic leverages **Glassmorphism** to mimic the refractive qualities of water and sea glass. This style utilizes soft backdrop blurs and semi-translucent layers to maintain a sense of depth and openness without cluttering the visual field. The target audience is creative professionals seeking a focused, low-stress environment that feels both modern and natural.

## Colors

The palette is anchored by the natural transition from land to sea. **Turquoise Water (#40E0D0)** serves as the primary action color, providing energy and movement. **Sun-bleached Sand (#F5F5DC)** is used for subtle background containers to ground the interface in warmth. **Coral (#FF7F50)** acts as a high-visibility accent for highlights and critical notifications.

Consistency across the lab's various themes is maintained via the signature **Light Green (#99CC99)** specifically reserved for headlines. Neutrals are cool-toned whites and soft teals to prevent the "sand" tones from appearing too heavy or muddy.

## Typography

This design system uses **Manrope** exclusively to achieve a balanced, modern, and highly legible interface. The typeface’s geometric yet friendly construction supports the serene aesthetic.

Headlines are rendered in the signature Light Green, utilizing tighter letter-spacing and heavier weights to command attention while remaining "airy." Body text uses a high line-height to ensure maximum breathability and comfort for long-form reading, typical of a laboratory or studio setting.

## Layout \& Spacing

The layout philosophy follows a **Fluid Grid** model with generous margins to evoke a sense of vast coastal horizons. A 12-column system is used for desktop views, but elements should rarely feel "cramped" together.

Spacing is based on an 8px base unit, favoring larger increments (the "stack-lg") to maintain the airy feel. Components should utilize whitespace as a structural element, ensuring that glassmorphic layers have enough room to breathe and show off the background blurs.

## Elevation \& Depth

Hierarchy is established through **Backdrop Blurs** rather than traditional heavy shadows.

* **Surface 1 (Base):** Subtle sand or off-white solid background.
* **Surface 2 (Glass):** White fill at 40-60% opacity with a `20px` to `40px` backdrop blur. This level is used for cards and content containers.
* **Surface 3 (Floating):** White fill at 80% opacity with a soft, tinted shadow (using the Primary color at 5% opacity) for navigation menus and modals.

Each glass layer must have a thin, 1px semi-transparent white border to define the edges against varied backgrounds.

## Shapes

In accordance with the **ROUND\_EIGHT** requirement, all standard UI elements (buttons, inputs, cards) feature a 0.5rem (8px) corner radius. This creates a soft, approachable feel that mimics the weathered edges of sea glass or stones found on the beach. Large containers like hero sections or modals can scale up to 1.5rem (24px) for a more organic, enveloping appearance.

## Components

* **Buttons:** Primary buttons use a solid Turquoise Water fill with white text. Secondary buttons are glassmorphic with a 1px white border.
* **Chips:** Small, highly rounded elements using the Coral accent for "active" states and a soft Sand tint for "inactive" states.
* **Cards:** The hallmark of this design system. Cards must use the glassmorphic blur effect, a 1px internal border, and the ROUND\_EIGHT corner radius.
* **Input Fields:** Semi-transparent white backgrounds that "glow" with a Turquoise Water border when focused.
* **Lists:** Separated by thin, low-opacity lines; avoid heavy dividers. Use ample vertical padding (16px+) between items.
* **Modals:** Centered overlays with a heavy background blur (60px+) on the page content behind them to create a sense of focus and calm.

