---
standard: brandbook.md
type: publication-contract
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Publication contract

Use this tool-agnostic record before handing content to a CMS, agent, or human publisher.

## Purpose and handoff rules

This record separates prepared content from publishing authority. One record represents one publication or material update. Link its evidence, assets, locale, reviewer, and expiry so a publisher does not need to guess.

| Field | Required value |
| --- | --- |
| Content type and channel | [page/article/email/video/social] |
| Locale and audience | [market/language/segment] |
| Title, summary, body, CTA | [content] |
| Taxonomy/topics | [controlled terms] |
| SEO metadata | [title/description/canonical/indexability/structured-data type] |
| Sources and claim IDs | [URLs, checked dates, evidence IDs] |
| Asset IDs and rights state | [asset-register IDs] |
| Owner, reviewer, status, expiry | [names/status/date] |

Agents may prepare a record but must not mark it published unless that authority is explicitly granted.

## Required delivery detail

| Area | Include |
| --- | --- |
| Brief | objective, audience, user need, primary action, channel, and locale |
| Content | approved final copy, headings, links, CTA, and required disclosures |
| Discoverability | title, description, URL/canonical, indexability, structured-data decision |
| Evidence | CLM-* IDs, source URLs, checked dates, and limitations |
| Assets | AST-* IDs, placement, alt text/captions, rights state, and credit |
| Governance | applicable AR-* rules, compliance result, exceptions, and APR-* approvals |
| Lifecycle | owner, reviewer, status, publish window, review/expiry, rollback contact |

## Preflight and status

- [ ] Audience, locale, claims, and CTA match the approved brief.
- [ ] Sources, assets, accessibility requirements, and disclosures are complete.
- [ ] Required reviews are recorded; unpublished means no publishing instruction is implied.
- [ ] A material correction, expiry, or rollback owner is named.

Use statuses such as draft, ready-for-review, approved, scheduled, published, superseded, and withdrawn. Record status changes in governance/change-log.md.
