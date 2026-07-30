---
standard: brandbook.md
spec_version: "0.1"
brand:
  name: "[Brand name]"
  slug: "[brand-slug]"
  owner: "[Legal owner]"
  category: "[Buyer-language category]"
markets: ["[ISO 3166-1 country code]"]
languages: ["[BCP 47 language tag]"]
default_language: "[language tag]"
maintainer: "[team or email]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
review_cycle: P3M
confidentiality: internal
files:
  - path: assets/visual-identity.md
    type: visual-identity
    summary: "Visual tokens, imagery direction, and visual anti-patterns"
  - path: governance/anchor-rules.md
    type: governance
    summary: "Non-negotiable brand and approval rules"
  - path: governance/compliance.md
    type: compliance
    summary: "Claims, disclosure, accessibility, and escalation rules"
  - path: voice/verbal-identity.md
    type: voice
    summary: "Voice rules with do/don't examples"
  - path: messaging/positioning-and-pillars.md
    type: messaging
    summary: "Positioning, category, proof points, and messaging pillars"
  - path: audience/audience-and-intent.md
    type: audience
    summary: "Audience needs, objections, and search intent"
  - path: search/seo-geo.md
    type: seo-geo
    summary: "SEO and generative-search optimisation rules"
  - path: journey/conversion-journeys.md
    type: journey
    summary: "Journey, CTA, friction, and instrumentation rules"
  - path: experimentation/experiment-register.md
    type: experimentation
    summary: "Experiment protocol, outcomes, and decisions"
  - path: evidence/sources-and-metrics.md
    type: evidence
    summary: "Approved sources, metrics, and freshness rules"
  - path: agents/agent-brief.md
    type: agent-brief
    summary: "Compact brief for content and review agents"
---

# [Brand name]: BRANDBOOK.md

## Brand in one paragraph

[Who we help, the outcome we create, why the claim is credible, and how we differ.]

## Audience and primary need

[Audience] needs [outcome] when [situation]. Their main hesitation is [objection]. See [audience/audience-and-intent.md](audience/audience-and-intent.md).

## Voice

[Three operational attributes.] See [voice/verbal-identity.md](voice/verbal-identity.md) for examples.

## Positioning and visual identity

[One-line positioning statement.] See [messaging/positioning-and-pillars.md](messaging/positioning-and-pillars.md) and [assets/visual-identity.md](assets/visual-identity.md).

## Anchor rules

- **AR-01.** Never make an outcome claim without a current, citable source. Rationale: [why].
- **AR-02.** Write the direct answer before supporting detail. Rationale: [why].
- **AR-03.** An experiment may not weaken accessibility, consent, or trust safeguards. Rationale: [why].

## Agent loading rules

1. Load this file first.
2. Always load `governance/anchor-rules.md` for public-facing work.
3. Load the indexed file(s) relevant to the task; do not preload the full package.
4. Treat `AR-*` rules as hard constraints and cite rule IDs in reviews.
5. Load `context/` only for explicitly requested narrative background.

## File index

| File | Type | When to load |
| --- | --- | --- |
| `assets/visual-identity.md` | visual-identity | Design, creative, and image-prompt work |
| `governance/anchor-rules.md` | governance | All public-facing work |
| `governance/compliance.md` | compliance | Claims, publication, review |
| `voice/verbal-identity.md` | voice | Writing and creative work |
| `messaging/positioning-and-pillars.md` | messaging | Strategy, content, and campaigns |
| `audience/audience-and-intent.md` | audience | Planning and messaging |
| `search/seo-geo.md` | seo-geo | Search/discoverability work |
| `journey/conversion-journeys.md` | journey | UX and conversion work |
| `experimentation/experiment-register.md` | experimentation | Tests and optimisation |
| `evidence/sources-and-metrics.md` | evidence | Claims and measurement |
| `agents/agent-brief.md` | agent-brief | Routine agent tasks |
