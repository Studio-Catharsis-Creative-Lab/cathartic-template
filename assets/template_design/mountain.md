\---

## name: Mountain

colors:
surface: '#10141a'
surface-dim: '#10141a'
surface-bright: '#353940'
surface-container-lowest: '#0a0e14'
surface-container-low: '#181c22'
surface-container: '#1c2026'
surface-container-high: '#262a31'
surface-container-highest: '#31353c'
on-surface: '#dfe2eb'
on-surface-variant: '#c2c7c9'
inverse-surface: '#dfe2eb'
inverse-on-surface: '#2d3137'
outline: '#8c9293'
outline-variant: '#424849'
surface-tint: '#b8cace'
primary: '#ffffff'
on-primary: '#233337'
primary-container: '#d4e6eb'
on-primary-container: '#56676c'
inverse-primary: '#506165'
secondary: '#adcbda'
on-secondary: '#163440'
secondary-container: '#304d5a'
on-secondary-container: '#9fbdcc'
tertiary: '#ffffff'
on-tertiary: '#1b247f'
tertiary-container: '#e0e0ff'
on-tertiary-container: '#535cb6'
error: '#ffb4ab'
on-error: '#690005'
error-container: '#93000a'
on-error-container: '#ffdad6'
primary-fixed: '#d4e6eb'
primary-fixed-dim: '#b8cace'
on-primary-fixed: '#0d1e22'
on-primary-fixed-variant: '#39494e'
secondary-fixed: '#c9e7f7'
secondary-fixed-dim: '#adcbda'
on-secondary-fixed: '#001f2a'
on-secondary-fixed-variant: '#2e4b57'
tertiary-fixed: '#e0e0ff'
tertiary-fixed-dim: '#bdc2ff'
on-tertiary-fixed: '#000767'
on-tertiary-fixed-variant: '#343d96'
background: '#10141a'
on-background: '#dfe2eb'
surface-variant: '#31353c'
typography:
headline-xl:
fontFamily: Manrope
fontSize: 48px
fontWeight: '700'
lineHeight: 56px
letterSpacing: -0.02em
headline-lg:
fontFamily: Manrope
fontSize: 32px
fontWeight: '600'
lineHeight: 40px
letterSpacing: -0.01em
headline-md:
fontFamily: Manrope
fontSize: 24px
fontWeight: '600'
lineHeight: 32px
body-lg:
fontFamily: Manrope
fontSize: 18px
fontWeight: '400'
lineHeight: 28px
body-md:
fontFamily: Manrope
fontSize: 16px
fontWeight: '400'
lineHeight: 24px
body-sm:
fontFamily: Manrope
fontSize: 14px
fontWeight: '400'
lineHeight: 20px
label-lg:
fontFamily: Manrope
fontSize: 14px
fontWeight: '600'
lineHeight: 20px
letterSpacing: 0.05em
label-sm:
fontFamily: Manrope
fontSize: 12px
fontWeight: '500'
lineHeight: 16px
letterSpacing: 0.03em
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
gutter: 16px
section-gap: 48px
---

## Brand \& Style

This design system is built to evoke the stoic tranquility of a high-altitude peak. The brand personality is serene, expansive, and stable, targeting users seeking mental clarity and physical grounding through a wellness application.

The aesthetic is a refined execution of **Glassmorphism**. It utilizes multi-layered, semi-transparent surfaces that mimic the appearance of frost on stone or thin mountain air. The interface feels light and breathable, yet structurally sound, favoring crisp edges and sophisticated blurs over heavy, opaque blocks. The emotional response is one of immediate calm—providing a digital "base camp" for the user's wellness journey.

## Colors

The palette is derived from the "Blue Hour" of a mountain landscape. The primary color is a **Frosty White**, used for high-contrast text and essential calls to action. The secondary **Slate Gray** provides a grounding element for secondary text and borders.

The background is anchored by **Deep Blues** and **Near-Blacks**, which serve as the foundation for the glass overlays. Use a dark mode default to ensure the glass effects remain crisp and the "expansive" feel of the mountain background is maintained without causing eye strain.

## Typography

This design system utilizes **Manrope** for its balance of modern geometry and organic warmth. It is a clean, modern sans-serif that remains highly legible against complex glass backgrounds.

Headlines should be set with tight letter-spacing to feel "monolithic" and stable. Body text utilizes generous line heights to enhance the sense of "expansiveness." Labels and small captions use increased letter-spacing and medium weights to ensure they don't get lost in the frosted textures.

## Layout \& Spacing

The layout follows a **fluid grid** model with significant vertical breathing room. The core rhythm is based on an 8px scale, but padding within glass containers should be generous (minimum 24px) to emphasize the airy feel of the interface.

Elements are organized into "climatic zones"—distinct sections separated by large gaps to prevent visual clutter. The background image should remain fixed, with content containers floating above it, allowing the mountain peak to provide a consistent focal point during scroll.

## Elevation \& Depth

Depth is achieved through **Backdrop Blurs** and layered translucency rather than traditional shadows.

* **Base Layer:** The mountain background image.
* **Mid Layer:** Frosted glass panels (Background Blur: 20px-30px, Opacity: 10-15%).
* **High Layer:** Active cards or modals (Background Blur: 40px, Opacity: 25%), featuring a 1px solid frosty white border at 20% opacity to "cut" the shape out of the background.
* **Interactive Layer:** Subtle inner glows (white, 10% opacity) on hover to simulate light hitting an ice crystal.

## Shapes

The shape language uses a **Rounded** (0.5rem) base. This provides a soft, human touch to an otherwise cool and "icy" aesthetic. Larger containers like cards use `rounded-xl` (1.5rem) to feel like smooth, weathered river stones. Avoid sharp 90-degree angles to maintain the organic, wellness-focused atmosphere.

## Components

* **Buttons:** Primary buttons are semi-opaque frosty white with dark slate text. Secondary buttons are ghost-style with a thin 1px border and high-blur backdrop.
* **Cards:** The signature component of this design system. They must use `backdrop-filter: blur()` and a subtle linear gradient (top-left to bottom-right) from a light frosty tint to a deep slate tint at very low opacities.
* **Chips:** Small, highly rounded (pill-shaped) elements with a subtle dark-blue background and white text, used for tags like "Meditation" or "Yoga."
* **Input Fields:** Minimalist lines or very low-opacity glass containers. The "active" state should be indicated by an increase in border opacity rather than a color change.
* **Lists:** Separated by thin, low-contrast slate gray lines. Items should have generous vertical padding to maintain the "expansive" feel.
* **Progress Indicators:** Use thin, elegant lines. Circular "Breath" timers should use soft glows and fading strokes to mimic air movement.

