---
name: Kinetic Performance
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3b494b'
  surface-tint: '#00dbe9'
  primary: '#dbfcff'
  on-primary: '#00363a'
  primary-container: '#00f0ff'
  on-primary-container: '#006970'
  inverse-primary: '#006970'
  secondary: '#ffffff'
  on-secondary: '#283500'
  secondary-container: '#c3f400'
  on-secondary-container: '#556d00'
  tertiary: '#f8f5f5'
  on-tertiary: '#313030'
  tertiary-container: '#dcd9d8'
  on-tertiary-container: '#5f5e5e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#7df4ff'
  primary-fixed-dim: '#00dbe9'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#c3f400'
  secondary-fixed-dim: '#abd600'
  on-secondary-fixed: '#161e00'
  on-secondary-fixed-variant: '#3c4d00'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  electric-blue: '#00F0FF'
  neon-green: '#CCFF00'
  charcoal-grey: '#121212'
  pure-black: '#000000'
  status-error: '#FF3E3E'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 80px
    fontWeight: '900'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '900'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter-desktop: 32px
  margin-desktop: 64px
  gutter-mobile: 16px
  margin-mobile: 20px
---

## Brand & Style

The design system is engineered for high-performance fitness environments, blending the raw energy of professional athletics with the polished aesthetic of premium supplements. The visual direction is **High-Contrast & Bold**, characterized by deep obsidian backgrounds that allow vibrant, high-energy accents to "pop" with intensity. 

The brand personality is authoritative, motivating, and precise. It avoids visual clutter, favoring spaciousness and large-scale imagery to evoke a sense of limitless potential. The overall style utilizes sharp lines and intense color pairings to drive user action and convey technical superiority in fitness and nutrition.

## Colors

The palette is anchored in a **Dark Mode** architecture to reduce eye strain in high-intensity environments and to provide a "premium lounge" or "elite garage gym" feel. 

- **Primary (Electric Blue):** Used for primary calls-to-action, progress tracking, and critical interactive elements. It represents technology and precision.
- **Secondary (Neon Green):** Used for success states, highlights, and secondary accents. It represents energy, growth, and vitality.
- **Backgrounds:** A layered approach using `pure-black` for the lowest level and `charcoal-grey` for containers and surfaces to create depth without relying on traditional drop shadows.
- **Typography:** Primary text is off-white to maintain high readability while avoiding the harshness of pure white against a black backdrop.

## Typography

The typography system prioritizes impact and clarity. **Montserrat** is used for headlines, utilizing heavy weights (800-900) and uppercase transformations to mirror the strength found in weightlifting and athletic performance. **Inter** provides a systematic, highly legible counterpart for body text and data-heavy supplement labels.

Large display type should utilize negative letter spacing to create a compact, "solid" visual block. For mobile interfaces, headlines scale aggressively to ensure the "bold" spirit is maintained on smaller screens.

## Layout & Spacing

This design system uses a **Fluid Grid** model with an 8px base unit. To achieve the requested "spacious" feel, we employ generous external margins and internal padding, allowing the premium photography of athletes and products to breathe.

- **Desktop:** A 12-column grid with wide 32px gutters. Section vertical spacing is aggressive (120px+) to emphasize distinct content blocks.
- **Mobile:** A 4-column grid with 16px gutters.
- **Rhythm:** Spacing follows a geometric progression (8, 16, 32, 64, 128) to maintain consistent visual hierarchy across all components.

## Elevation & Depth

In this dark-themed system, depth is achieved through **Tonal Layers** rather than heavy shadows. 

1.  **Level 0 (Base):** Pure Black (#000000) for the main viewport background.
2.  **Level 1 (Surface):** Charcoal Grey (#121212) for cards, navigation bars, and modals.
3.  **Level 2 (Active):** A subtle 1px "ghost border" (#FFFFFF at 10% opacity) helps define component boundaries without breaking the minimalist aesthetic.

Occasional **vibrant background blurs** (using Electric Blue) are placed behind hero images or key product shots to create a "glowing" aura, emphasizing the high-performance nature of the items.

## Shapes

The shape language is **Soft (0.25rem)**, leaning toward sharp to maintain a sense of precision and aggression. 

- **Primary Elements:** Buttons and input fields use a slight 4px radius, providing just enough refinement to feel modern while remaining "hard-edged."
- **Containers:** Large cards and supplement product blocks follow the same 4px rule to ensure a cohesive, grid-aligned structure.
- **Accents:** Occasional use of 45-degree angled clips on decorative elements can be used to suggest forward motion and speed.

## Components

### Buttons
- **Primary:** Solid Electric Blue background with Pure Black text. Heavy Montserrat uppercase. No border.
- **Secondary:** Ghost style. Transparent background with Neon Green 2px border and Neon Green text.
- **States:** Hovering on primary triggers a slight glow effect (box-shadow: 0 0 15px primary).

### Input Fields
- Underlined or subtle charcoal backgrounds. 
- Focus state: Border-bottom transitions to Electric Blue with a high-contrast label.

### Cards
- Background: #121212. 
- No shadow, only a 1px border (#FFFFFF at 5% opacity).
- Images within cards should have a subtle desaturation that returns to full color on hover.

### Chips & Badges
- Used for supplement categories (e.g., "High Protein," "Pre-workout").
- High-saturation Neon Green background with black text for maximum visibility.

### Lists & Progress
- Progress bars use the Electric Blue as the fill color against a Charcoal background, representing the "Momentum" of a workout or goal.