---
standard: brandbook.md
type: asset-register
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Asset register

## Purpose and when to load

Use this register to determine whether an asset can be used for a specific publication. It is not an asset library: it records provenance, permission, scope, and expiry. Load before selecting, transforming, or generating derivative creative work.

| Asset ID | File/URL/DAM ID | Asset type/version | Rights holder/licence/expiry | Scope | Transformations | AI use | Restrictions | Owner/reviewed |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AST-[id] | [path/checksum] | [logo/photo/font/v#] | [holder/licence/date] | [markets/channels] | [allowed/no] | [reference/derivative/no] | [people, trademarks, data] | [owner/date] |

## Required metadata

- Identify the source file or DAM record, version, creator/rights holder, licence, and expiry; link a release or approval where required.
- Record territorial, channel, duration, exclusivity, attribution, editing, and sublicensing limitations.
- For people, voices, locations, products, and third-party marks, record the applicable consent or release—not merely “approved.”
- Record accessibility metadata such as alt text, caption/transcript availability, or a reason it is not applicable.

## Decision rules

- “AI reference” means an asset may inform a prompt; “derivative” means it may be transformed; “no” means neither is permitted.
- An unregistered asset is unapproved. Do not infer rights from a public URL, a search result, or access to a shared drive.
- Expired, unknown, or out-of-scope rights require escalation before use.

## Completion check

- [ ] Every reusable asset has a stable ID, source, scope, rights state, restrictions, and owner.
- [ ] Rights and consent can be verified without relying on a memory or chat message.
