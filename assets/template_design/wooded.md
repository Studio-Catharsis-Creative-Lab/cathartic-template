\---

name: Wooded Theme
colors:
surface: '#111412'
surface-dim: '#111412'
surface-bright: '#373a37'
surface-container-lowest: '#0c0f0d'
surface-container-low: '#1a1c1a'
surface-container: '#1e201e'
surface-container-high: '#282b28'
surface-container-highest: '#333533'
on-surface: '#e2e3df'
on-surface-variant: '#c3c8bd'
inverse-surface: '#e2e3df'
inverse-on-surface: '#2e312f'
outline: '#8d9288'
outline-variant: '#434840'
surface-tint: '#afd0a1'
primary: '#afd0a1'
on-primary: '#1c3716'
primary-container: '#4a6741'
on-primary-container: '#c2e4b4'
inverse-primary: '#496640'
secondary: '#e1c298'
on-secondary: '#402d0f'
secondary-container: '#594323'
on-secondary-container: '#cfb088'
tertiary: '#c0cab7'
on-tertiary: '#2a3326'
tertiary-container: '#596253'
on-tertiary-container: '#d3ddca'
error: '#ffb4ab'
on-error: '#690005'
error-container: '#93000a'
on-error-container: '#ffdad6'
primary-fixed: '#caecbc'
primary-fixed-dim: '#afd0a1'
on-primary-fixed: '#062104'
on-primary-fixed-variant: '#324e2a'
secondary-fixed: '#ffddb2'
secondary-fixed-dim: '#e1c298'
on-secondary-fixed: '#291800'
on-secondary-fixed-variant: '#594323'
tertiary-fixed: '#dce6d3'
tertiary-fixed-dim: '#c0cab7'
on-tertiary-fixed: '#151e12'
on-tertiary-fixed-variant: '#40493b'
background: '#111412'
on-background: '#e2e3df'
surface-variant: '#333533'
typography:
display-lg:
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
label-md:
fontFamily: Manrope
fontSize: 14px
fontWeight: '500'
lineHeight: 20px
letterSpacing: 0.02em
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
section-margin: 40px
glass-padding: 20px
---

## Brand \& Style

This design system is anchored in the concept of "Digital Forest Bathing." It seeks to bridge the gap between high-tech wellness tracking and the primal, restorative power of nature. The brand personality is serene, grounded, and deeply restorative, designed to lower the user's heart rate from the moment the app opens.

The visual style utilizes **Glassmorphism** as its primary vehicle. By using semi-transparent, frosted layers over a rich wooded background, the UI feels lightweight and non-intrusive, as if the data is floating within the forest itself. This creates a sense of depth and immersion that traditional flat designs cannot achieve, emphasizing a "breathable" interface that prioritizes mental clarity and calm.

## Colors

The palette is derived directly from the forest floor and canopy. The **Primary Green** (#4A6741) is a muted, mossy tone used for core interactions and brand signifiers. The **Secondary Brown** (#A68A64) provides a warm, earthy contrast for secondary elements, grounding the ethereal glass effects.

The system operates in a specialized **Dark Mode** where the background is a high-resolution wooded vista. UI surfaces are not solid; they are tinted "glass" containers using a deep translucent moss (#2D3629) at varying opacities. **White accents** and high-contrast neutral text (#F8F9F5) ensure that despite the atmospheric depth, legibility remains surgical and clear.

## Typography

The design system utilizes **Manrope** for its entire typographic scale. Manrope was selected for its modern, geometric construction tempered by organic curves, making it feel both technological and human.

Headlines use a tighter letter-spacing and heavier weights to provide a sense of authority and structure against the soft background. Body text maintains a generous line height (1.5x minimum) to ensure "airiness" and reduce cognitive load during reading. Labels and small metadata should be set in medium weights to maintain crispness when placed over semi-transparent glass layers.

## Layout \& Spacing

The layout philosophy follows a **Fluid Grid** model with expansive safe areas to allow the background imagery to "breathe" through the interface. A base 8px rhythm governs all spatial relationships.

Horizontal margins are set to a generous 24px on mobile to prevent content from feeling cramped. Elements within glass containers should observe a minimum internal padding of 20px to ensure the "frosted" edges of the container are visible, reinforcing the sense of physical depth. Vertical stacking uses wide gaps (16px to 40px) to prevent the UI from feeling cluttered, mimicking the natural spacing of trees in a clearing.

## Elevation \& Depth

Depth in this design system is achieved through **Backdrop Blurs** rather than traditional drop shadows.

1. **Base Layer:** The full-bleed wooded background image.
2. **Level 1 (Surface):** Semi-transparent overlays with a 20px - 32px backdrop blur. These containers have a subtle 1px white border at 10% opacity to define the "glass" edge.
3. **Level 2 (Active):** Higher opacity fills or slightly brighter glass tints to indicate interactivity or focus.
4. **Level 3 (Overlays):** Modals and sheets use a heavier blur (40px+) to completely abstract the background, pulling the user's full attention to the task at hand.

Shadows, when used, are extremely diffused and tinted with the primary forest green to simulate ambient light passing through a canopy.

## Shapes

The design system employs a **Rounded (Level 2)** shape language. The use of soft corners (16px for standard cards, 8px for smaller elements) mirrors the organic, non-linear forms found in nature, such as smooth river stones or leaf edges.

Avoid sharp 90-degree angles entirely, as they create visual tension that contradicts the "wellness" narrative. Interactive elements like buttons and input fields should feel "soft" to the touch, reinforcing the tactile and approachable nature of the application.

## Components

### Buttons

Primary buttons use a solid or high-opacity Earthy Green fill with white text for maximum prominence. Secondary buttons are "Ghost Glass"—a simple 1px border with a subtle backdrop blur, appearing only when the user interacts.

### Glass Cards

The signature component. These containers host all main content. They must feature a subtle inner glow (top-left) and a 1px border to catch the "light." Content inside should be grouped logically with clear Manrope headlines.

### Chips \& Tags

Used for wellness categories (e.g., "Meditation," "Sleep"). These should be pill-shaped with a low-opacity green tint, ensuring they look like integrated parts of the glass surface they sit upon.

### Progress Indicators

Circular rings or soft horizontal bars. Use a "glowing" white or bright green line to represent progress, contrasting against a dimmed, translucent track.

### Input Fields

Minimalist glass troughs. The label floats above the field, and the field itself is defined by a subtle bottom border or a very faint frosted fill that becomes more opaque on focus.

