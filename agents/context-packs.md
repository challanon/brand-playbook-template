---
standard: brandbook.md
type: context-packs
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Context packs

## Selection rules

- Add governance/compliance.md for claims or publication, data-handling.md for non-public data or external tools, and locales/market-overrides.md for a market-specific task.
- Add evidence/sources-and-metrics.md whenever a task creates, reviews, or reports a factual claim or metric.
- Treat a pack as a minimum: add only the module that resolves a material task risk. Do not preload context/story.md unless narrative background is explicitly requested.
- When two sources conflict, follow the instruction hierarchy in governance/untrusted-inputs.md and escalate the conflict rather than averaging it away.

Load `BRANDBOOK.md` first for every task. Then load the smallest pack that can safely complete the task. Do not copy module content into packs; the files listed here remain the source of truth.

| Task | Load in addition to the root | Expected output/check |
| --- | --- | --- |
| Blog or editorial content | `governance/anchor-rules.md`, `governance/compliance.md`, `voice/verbal-identity.md`, `messaging/positioning-and-pillars.md`, `audience/audience-and-intent.md`, `search/seo-geo.md` | Draft with sources and compliance result |
| Landing page | Editorial pack + `journey/conversion-journeys.md` | One primary CTA, friction check, source-backed claims |
| Image or creative brief | `governance/anchor-rules.md`, `assets/visual-identity.md`, `messaging/positioning-and-pillars.md` | Prompt/brief with visual do-not-use list |
| Video brief or review | `governance/anchor-rules.md`, `governance/data-handling.md`, `assets/visual-identity.md`, `assets/asset-register.md`, `media/video-production.md` | Scene brief or review with rights and accessibility checks |
| Compliance review | `governance/anchor-rules.md`, `governance/compliance.md`, `evidence/sources-and-metrics.md` | Pass/fail findings cited by rule ID |
| SEO/GEO review | `governance/anchor-rules.md`, `search/seo-geo.md`, `evidence/sources-and-metrics.md` | Intent, evidence, extraction, and indexability check |
| Experiment design or review | `governance/anchor-rules.md`, `journey/conversion-journeys.md`, `experimentation/experiment-register.md`, `evidence/sources-and-metrics.md` | Hypothesis, metric, guardrails, decision rule |

For any content intended for a CMS, load `delivery/publication-contract.md`. For market-specific content, load `locales/market-overrides.md`.

Load `context/` only when the task explicitly asks for brand story, history, or narrative background.
