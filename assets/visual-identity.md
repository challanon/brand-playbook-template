---
standard: brandbook.md
type: visual-identity
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Visual identity

## Purpose and when to load

Record the visual decisions that make work recognisable, accessible, and safe to produce. Load for design, creative briefs, image-generation prompts, video, and asset review. Link to approved assets by AST-*; this file describes rules, not rights.

## Colour tokens

| Token | Value | Intended use | Do not use for |
| --- | --- | --- | --- |
| [primary-name] | `#[hex]` | [e.g. primary CTA] | [restriction] |
| [secondary-name] | `#[hex]` | [use] | [restriction] |

## Typography

| Role | Font/fallback | Weight | Usage |
| --- | --- | --- | --- |
| [heading] | [font] | [weight] | [usage] |
| [body] | [font] | [weight] | [usage] |

## Layout, components, and motion

| Area | Default | Do not | Reference / owner |
| --- | --- | --- | --- |
| Spacing and density | [grid/whitespace rule] | [crowding] | [source] |
| Hierarchy | [heading/CTA priority] | [competing primaries] | [source] |
| Components | [buttons/cards/forms] | [unapproved variation] | [source] |
| Motion | [purpose, duration, reduced-motion rule] | [autoplay/flashing] | [source] |

## Image and illustration direction

- Photography: [lighting, subjects, composition, treatment].
- Illustration: [style, line/fill, texture, complexity].
- Layout: [whitespace, density, hierarchy, motion].
- Never use: [specific styles, colour combinations, stock tropes, or visual effects].

## Image-prompt and review guidance

- State the audience, objective, setting, subject, composition, lighting, palette, and required negative constraints.
- Reference a style direction, not a living artist or a protected character/style imitation.
- Do not generate identifiable people, logos, products, or locations unless rights and use are recorded in assets/asset-register.md.
- Require meaningful alt text, legible on-screen text, and a non-colour-only way to convey critical meaning.

Study web.dev design tokens (https://github.com/GoogleChrome/web.dev/blob/main/src/site/_data/design/tokens.json), Carbon accessibility (https://carbondesignsystem.com/guidelines/accessibility/overview/), and W3C contrast guidance (https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

## Completion check

- [ ] Tokens specify intended use and restriction; typography includes safe fallbacks.
- [ ] Layout, motion, imagery, and anti-patterns are concrete enough for a brief.
- [ ] Accessibility and rights checks point to a responsible owner or source.

## Assets

Put approved logos, typography files, and design tokens in `assets/files/`. Record usage rights and constraints here.
