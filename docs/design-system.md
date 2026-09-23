# Shivani Arya — Design System

## 1. Design Philosophy

The visual identity combines:

- Indian cinematic romance
- Contemporary fashion editorial
- Experimental digital art
- Luxury magazine aesthetics
- Minimal modern interface design

The website should feel expensive, cinematic and artistic without becoming visually chaotic. Animation should support storytelling rather than exist only as decoration.

---

## 2. Colour System

### Primary Background — Warm Ivory

**HEX:** `#F3EFE7`

Use for main page backgrounds, editorial sections and light content areas.

### Primary Dark — Near Black

**HEX:** `#11110F`

Use for cinematic sections, navigation, footer and high-contrast typography.

### Secondary Colour — Deep Olive

**HEX:** `#26301A`

Use for large visual sections, background transitions, buttons and editorial accents.

### Accent — Fuchsia / Wine

**HEX:** `#9B0047`

Use for small visual accents, interactive states, selected elements and important visual moments. Fuchsia should never dominate the entire interface.

### Luxury Accent — Muted Gold

**HEX:** `#B8A06A`

Use sparingly for decorative details, metadata, borders and special moments.

---

## 3. Typography

The typography system uses two primary families.

### Display Typeface

Use an elegant editorial serif for hero typography, section titles, large statements and editorial moments.

Preferred direction:

- Cormorant Garamond
- Bodoni-style typeface
- Playfair Display as fallback

### Interface Typeface

Use a modern sans-serif for navigation, body text, buttons, metadata and project information.

Preferred direction:

- Inter
- Geist
- Manrope

Provide system serif and sans-serif fallbacks so the design remains readable if a preferred font is unavailable.

---

## 4. Typography Scale

Typography should be fluid. Large display text should use CSS `clamp()` rather than fixed sizes, for example:

```css
font-size: clamp(3.5rem, 10vw, 10rem);
```

Use a clear hierarchy between display titles, section headings, body copy and metadata. Keep paragraphs comfortable to read, and check long headings and the name at narrow viewport widths so they do not overflow.

---

## 5. Layout and Spacing

- Use strong negative space and controlled asymmetry to create an editorial rhythm.
- Keep the page composition flexible rather than forcing every section into a uniform card grid.
- Use generous spacing on large screens, moderate spacing on tablets and compact but breathable spacing on mobile.
- Let section layouts respond to available space; avoid fixed dimensions that cause overflow or make photography too small to appreciate.

---

## 6. Photography and Media

Photography is central to the identity. Give images room to read as editorial compositions, and use organic masks and layered framing where they support the work.

- Use responsive image dimensions and optimize image delivery.
- Keep image crops intentional across screen sizes.
- Use appropriately compressed video for its context and device.
- Do not autoplay video with sound.
- Use subtle grain or texture only when it supports the visual direction.

---

## 7. Motion and Interaction

Motion should support cinematic storytelling and remain controlled. Prefer opacity, transform, clip-path, scale and restrained parallax. Avoid unnecessary layout-triggering animation and decorative motion without a storytelling purpose.

Respect `prefers-reduced-motion`: simplify or remove large parallax effects, complex transformations and section transitions while keeping the content and navigation available.

---

## 8. Accessibility

- Use semantic HTML and keyboard-accessible controls.
- Keep text readable against its background and do not use colour alone to communicate meaning.
- Do not make essential content or actions depend on hover.
- Preserve content and navigation when motion is reduced.

---

## 9. Responsive Application

Apply the responsive strategy in `docs/responsive-strategy.md`: mobile, tablet and desktop are intentional expressions of the same identity. Reflow compositions as needed, keep typography fluid, and prevent horizontal overflow at narrow widths.
