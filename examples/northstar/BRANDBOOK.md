---
standard: brandbook.md
spec_version: "0.1"
profile: production
brand:
  name: Northstar Analytics
  slug: northstar-analytics
  owner: Northstar Analytics B.V.
  category: "Product analytics for B2B software teams"
markets: [NL, GB]
languages: [en]
default_language: en
maintainer: brand@northstar.example
version: "1.0.0"
last_validated: 2026-07-30
review_cycle: P3M
confidentiality: internal
files:
  - {path: assets/visual-identity.md, type: visual-identity, summary: "Visual direction"}
  - {path: assets/asset-register.md, type: asset-register, summary: "Approved assets and rights"}
  - {path: governance/anchor-rules.md, type: governance, summary: "Hard rules"}
  - {path: governance/compliance.md, type: compliance, summary: "Publication checks"}
  - {path: governance/data-handling.md, type: data-handling, summary: "Data and external-AI rules"}
  - {path: governance/untrusted-inputs.md, type: untrusted-inputs, summary: "Prompt-injection handling"}
  - {path: governance/change-log.md, type: change-log, summary: "Record lifecycle"}
  - {path: voice/verbal-identity.md, type: voice, summary: "Writing rules"}
  - {path: messaging/positioning-and-pillars.md, type: messaging, summary: "Positioning and proof"}
  - {path: audience/audience-and-intent.md, type: audience, summary: "Audience needs"}
  - {path: search/seo-geo.md, type: seo-geo, summary: "Search rules"}
  - {path: journey/conversion-journeys.md, type: journey, summary: "Journey rules"}
  - {path: experimentation/experiment-register.md, type: experimentation, summary: "Test decisions"}
  - {path: delivery/publication-contract.md, type: publication-contract, summary: "CMS-agnostic delivery record"}
  - {path: locales/market-overrides.md, type: locale, summary: "NL and GB market rules"}
  - {path: media/video-production.md, type: video-production, summary: "Video brief and review rules"}
  - {path: evidence/sources-and-metrics.md, type: evidence, summary: "Evidence register"}
  - {path: agents/agent-brief.md, type: agent-brief, summary: "Agent instructions"}
  - {path: agents/context-packs.md, type: context-packs, summary: "Task context routing"}
---

# Northstar Analytics

Northstar helps product teams at growing B2B SaaS companies see where users lose momentum, without forcing analysts to spend days stitching events into reports.

## Anchor rules

- **AR-01.** Never imply causation when we only observed correlation. Rationale: honest analysis earns trust.
- **AR-02.** Lead with the decision a team can make, then show the evidence. Rationale: insight without action is noise.
- **AR-03.** Never use customer data or screenshots without written permission. Rationale: privacy is part of the product promise.

Load the root first, `governance/anchor-rules.md` for all public work, and only the specialist files relevant to the task. The story in `context/` is optional.

This package opts into the Production Profile. Typed execution examples are in `contracts/`; a runtime policy gateway must authorise any action beyond reading, drafting, or review.
