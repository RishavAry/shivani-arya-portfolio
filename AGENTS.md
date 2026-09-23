<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
# Shivani Arya Portfolio — Agent Instructions

## Project

This is the professional portfolio website for Shivani Arya.

Shivani's creative disciplines:

- Acting
- Modelling
- Fashion
- Digital Creation

The website is intended for real professional use and will be deployed publicly.

---

## Source of Truth

Before changing code, read:

1. `docs/creative-direction.md`
2. `docs/design-system.md`
3. `docs/responsive-strategy.md`
4. `docs/content-structure.md`

These documents define the intended product.

Do not contradict them without discussing the change first.

---

## Creative Direction

Core concept:

**A Woman in Many Frames**

Visual identity:

- Cinematic
- Editorial
- Elegant
- Mysterious
- Bold
- Artistic
- Rebellious

Influences include dreamy Indian cinema, contemporary fashion editorials,
luxury magazine design and experimental digital art.

The site should feel expensive and intentional.

Avoid generic portfolio aesthetics.

Do not use visual effects merely because they are technically impressive.

---

## Engineering Stack

Use:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Motion
- GSAP

Use Three.js / React Three Fiber only when there is a clear design reason.

Avoid unnecessary dependencies.

---

## Responsive Design

Responsive behavior is a first-class requirement.

The site must work across:

- Mobile
- Tablet
- Laptop
- Desktop
- Large desktop

Do not design desktop first and treat mobile as an afterthought.

Desktop and mobile may use different interaction patterns while preserving
the same visual identity.

Essential interactions must never depend on hover.

---

## Animation

Animation should support storytelling.

Use:

- Motion for component-level interactions
- GSAP for complex timelines and scroll choreography

Prefer:

- opacity
- transform
- clip-path
- scale
- controlled parallax

Avoid unnecessary layout-triggering animation.

Do not create excessive bouncing, spinning or decorative motion.

Respect:

`prefers-reduced-motion`

---

## Accessibility

Use semantic HTML.

Interactive controls must be keyboard accessible.

Do not rely on colour alone to communicate information.

Do not rely on hover for essential content.

Maintain readable text contrast.

Respect reduced-motion preferences.

---

## Images and Video

Photography is a core part of the product.

Use Next.js image optimization where applicable.

Avoid unnecessarily large image downloads.

Use responsive image sizes.

Optimize video for the device and context.

Do not autoplay video with sound.

---

## Code Quality

Prefer:

- small reusable components
- clear naming
- TypeScript types
- maintainable architecture
- minimal duplication

Do not create giant components containing the entire page.

Keep animation logic separated when it improves maintainability.

---

## Change Discipline

Before modifying code:

1. Inspect the relevant files.
2. Understand the existing implementation.
3. Make the smallest coherent change.
4. Test the result.
5. Report what changed.

Do not rewrite unrelated parts of the project.

Do not delete working functionality without a clear reason.

---

## Content Integrity

Never invent Shivani's:

- acting credits
- brands
- awards
- education
- directors
- productions
- professional relationships
- achievements
- measurements

Use placeholders when real information has not yet been supplied.

Clearly mark placeholders.

---

## Design Integrity

Do not introduce:

- generic SaaS cards
- excessive rounded containers
- random gradients
- unnecessary neon effects
- generic animated blobs
- excessive glassmorphism
- arbitrary colours

The visual language must remain consistent with the project documents.

---

## Before Completing a Task

Check:

- desktop behavior
- mobile behavior
- accessibility
- animation behavior
- reduced-motion behavior
- console errors
- TypeScript errors
- responsive overflow

When a task is complete, summarize:

1. What changed
2. Files changed
3. Tests/checks performed
4. Any remaining concerns