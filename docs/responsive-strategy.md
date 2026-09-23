# Shivani Arya — Responsive Strategy

## Core Principle

The website is not a desktop website that is later adapted to mobile.

Desktop, tablet and mobile are separate expressions of the same visual identity.

The story remains consistent while interaction patterns may change.

---

# 1. Breakpoints

Use responsive behavior based primarily on layout requirements rather than individual devices.

Primary ranges:

### Mobile

< 768px

### Tablet

768px – 1023px

### Desktop

1024px+

Large desktop compositions may adapt further around 1440px+.

---

# 2. Mobile First

Every component must be considered for mobile before advanced desktop behavior is implemented.

No essential functionality may depend on:

- hover
- mouse movement
- large screen width
- horizontal desktop layout

---

# 3. Hero

Desktop:

- Large cinematic portrait
- Oversized typography
- Organic image mask
- Mouse interaction where appropriate
- Large negative space

Tablet:

- Reduced typography
- Simplified image composition
- Reduced interaction complexity

Mobile:

- Vertical composition
- Portrait-first presentation
- Fluid typography
- Touch-based interaction
- Minimal decorative movement

---

# 4. Navigation

Desktop:

Visible minimal navigation.

Tablet:

Simplified navigation.

Mobile:

Menu button.

Menu opens as a full-screen or large overlay.

Navigation must remain usable without animation.

---

# 5. Image Galleries

Desktop:

Editorial collage
Overlapping images
Asymmetric composition
Horizontal sequences where useful

Tablet:

Reduced overlap
More structured composition

Mobile:

Vertical editorial sequence
Controlled image sizes
Minimal overlap

Images must never become too small to appreciate.

---

# 6. Horizontal Scrolling

Horizontal scroll experiences may be used on desktop.

On mobile they should normally transform into vertical sequences.

Do not force users to perform awkward horizontal scrolling.

---

# 7. Hover Interactions

Desktop may use hover.

Examples:

VIEW
PLAY
OPEN

Mobile equivalents:

tap
scroll
press

No critical content should depend on hover.

---

# 8. Typography

Use fluid typography with clamp().

Typography must never overflow the viewport.

Long names and headings must be tested at narrow widths.

---

# 9. Spacing

Desktop:

Large cinematic spacing.

Tablet:

Moderate spacing.

Mobile:

Compact but breathable spacing.

Avoid excessive vertical gaps on mobile.

---

# 10. Media

Images:

Use responsive image sizes.

Videos:

Use appropriately compressed mobile versions where necessary.

Avoid loading desktop-sized video assets on mobile.

---

# 11. Performance

Mobile performance is a first-class requirement.

The site should avoid:

- unnecessary JavaScript
- huge image downloads
- unoptimized video
- excessive simultaneous animations
- layout shifts

---

# 12. Reduced Motion

When users request reduced motion:

- disable large parallax effects
- disable complex transformations
- simplify section transitions
- preserve content and navigation
- retain subtle opacity transitions where appropriate

---

# 13. Testing

Test representative widths:

375px
390px
430px
768px
1024px
1366px
1440px
1920px

Test both portrait and landscape orientations where relevant.

Test:

- Chrome
- Safari
- mobile Safari
- mobile Chrome

---

# 14. Core Rule

The mobile version should not feel like a compromised desktop version.

It should feel like an intentional intimate version of Shivani's creative world.