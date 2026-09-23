# Shivani Arya — Design System

## 1. Design Philosophy

The visual identity combines:

- Indian cinematic romance
- Contemporary fashion editorial
- Experimental digital art
- Luxury magazine aesthetics
- Minimal modern interface design

The website should feel expensive, cinematic and artistic without becoming visually chaotic.

Animation should support storytelling rather than exist only as decoration.

---

# 2. Colour System

## Primary Background

Warm Ivory

HEX:
#F3EFE7

Usage:
- Main page backgrounds
- Editorial sections
- Light content areas

---

## Primary Dark

Near Black

HEX:
#11110F

Usage:
- Cinematic sections
- Navigation
- Footer
- High-contrast typography

---

## Secondary Colour

Deep Olive

HEX:
#26301A

Usage:
- Large visual sections
- Background transitions
- Buttons
- Editorial accents

---

## Accent

Fuchsia / Wine

HEX:
#9B0047

Usage:
- Small visual accents
- Interactive states
- Selected elements
- Important visual moments

Fuchsia should never dominate the entire interface.

---

## Luxury Accent

Muted Gold

HEX:
#B8A06A

Usage:
- Small decorative details
- Metadata
- Borders
- Special moments

Gold must remain subtle.

---

# 3. Typography

The typography system uses two primary families.

## Display Typeface

Elegant editorial serif.

Preferred direction:

- Cormorant Garamond
- Bodoni-style typeface
- Playfair Display as fallback

Usage:

- Hero typography
- Section titles
- Large statements
- Editorial moments

---

## Interface Typeface

Modern sans-serif.

Preferred direction:

- Inter
- Geist
- Manrope

Usage:

- Navigation
- Body text
- Buttons
- Metadata
- Project information

---

# 4. Typography Scale

Typography should be fluid.

Large display text should use CSS clamp() rather than fixed sizes.

Example:

```css
font-size: clamp(3.5rem, 10vw, 10rem);