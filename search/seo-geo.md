---
standard: brandbook.md
type: seo-geo
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# SEO and GEO

## Purpose and when to load

Use this file to make source-backed content findable for people and accurately interpretable by search systems. It does not authorise manipulative ranking tactics, fabricated citations, doorway pages, or pages made only for AI summaries. Study Google's people-first content guidance (https://developers.google.com/search/docs/fundamentals/creating-helpful-content) and GitHub Docs findability guidance (https://github.com/github/docs/blob/main/content/contributing/writing-for-github-docs/making-content-findable-in-search.md).

## Topic and entity map

| Audience question | Intent | Topic/entity | Evidence | Best format |
| --- | --- | --- | --- | --- |
| [question] | [intent] | [topic] | [source] | [guide/FAQ/tool] |

For each row, capture the audience segment (AUD-*), market/language, content gap, page owner, and review date. Use actual questions from research rather than a disconnected keyword list.

## Rules

- Answer the primary question early and directly.
- Use descriptive headings and consistent terminology.
- Cite original evidence close to material claims.
- Use structured data only when it matches visible page content.
- Do not create pages solely to target keywords or AI summaries.

## Content and entity checklist

- Define the main question, audience, intent, and useful next action before choosing a format.
- State the direct answer early, then explain constraints, evidence, alternatives, and next steps.
- Use one canonical entity name and record approved synonyms in voice/verbal-identity.md or a locale override.
- Link related pages where the relationship helps a reader; avoid forced internal links and repetitive phrasing.
- Attribute quotations, statistics, and time-sensitive facts to their original sources.

## Generative-search readiness

Make pages easy to quote accurately: clear headings, explicit definitions, dated evidence, qualified claims, author/owner information, and visible answers that match any structured data. Do not attempt to manipulate an AI system, hide instructions in pages, or claim model endorsement.

## Technical delivery requirements

- Page title, description, canonical URL, indexability, author/owner, and reviewed date: [record in `delivery/publication-contract.md`].
- Locale URL/canonical and `hreflang` policy: [rule].
- Structured-data type and owner: [rule].

## Measurement and review

| Goal | Leading signal | Outcome metric | Source | Review cadence |
| --- | --- | --- | --- | --- |
| [audience progress] | [signal] | [metric] | [MET-*] | [cadence] |

## Agent rules

- May propose content from approved audience questions and evidence.
- Must not claim rankings, fabricate markup, use unsupported FAQ content, or create a market page without an approved locale rule.
- [ ] Every planned page maps to a reader question, evidence, owner, locale, and useful format.
