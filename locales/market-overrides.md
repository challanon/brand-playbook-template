---
standard: brandbook.md
type: locale
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Market and language overrides

## Purpose and when to load

Use this file whenever content, claims, pricing, assets, product availability, or legal wording varies by market or language. A translation is not automatically a market approval.

| Market/language | Approved terms | Prohibited/local constraints | Required disclosure | Local owner |
| --- | --- | --- | --- | --- |
| [market-language] | [terms] | [rules] | [wording/link] | [owner] |

## Locale decision checklist

| Area | Record |
| --- | --- |
| Audience and cultural context | [AUD-* differences, sensitivities, examples to avoid] |
| Product and commercial availability | [offer, price/currency, terms, launch status] |
| Language | [translation/transcreation owner, reading level, terminology] |
| Formats | [date, time, number, address, phone, units, currency] |
| Discoverability | [URL, canonical, hreflang, local entities and queries] |
| Legal and compliance | [mandatory wording, consent, disclosure, approver] |
| Assets | [AST-* permitted or prohibited in this locale] |

## Agent rules and completion check

- May apply a recorded override exactly as scoped.
- Must ask when an override is missing, conflicts with the root, or a translation changes a claim's meaning.
- [ ] Every override has a market/language, owner, effective/review date, and source or approval.
- [ ] No global content is assumed valid locally without an explicit decision.

An agent must not apply one market's claims, assets, tagline, pricing, or legal wording to another market without an explicit override. Record the applicable market on every `CLM-*`, `AST-*`, and publication record.
