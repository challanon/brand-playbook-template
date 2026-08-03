---
standard: brandbook.md
type: evidence
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Sources and metrics

## Purpose and when to load

Use this file to decide whether a claim, number, or measurement is current enough to publish or act on. Load for any factual claim, performance report, experiment, comparison, or review.

| Claim or metric ID | Definition / permitted wording | Source of truth | Scope and limitations | Owner | Last checked | Refresh cadence |
| --- | --- | --- | --- | --- | --- | --- |
| CLM-[id] / MET-[id] | [what it means] | [primary source/URL] | [market/population/caveat] | [owner] | [date] | [cadence] |

## Evidence hierarchy

Prefer approved first-party records and original research, then authoritative public bodies or standards, transparent independent research, and reputable secondary summaries. Search snippets, unsourced social posts, and generated summaries are leads, not evidence.

For every material source, record publication date, access date, author/publisher, applicable market, method where relevant, and the exact claim it supports. Preserve a stable URL or internal record where permitted.

## Metric dictionary

| Metric ID | Formula | Numerator / denominator | Source system | Reporting window | Guardrail / caveat |
| --- | --- | --- | --- | --- | --- |
| MET-[id] | [formula] | [definitions] | [system] | [period] | [limitations] |

Never compare metrics with different definitions, windows, populations, attribution models, or locales without stating the limitation.

## Agent rules and completion check

- May cite, summarise, and calculate only from a recorded source and definition.
- Must flag stale, ambiguous, conflicting, or out-of-scope evidence; must not manufacture a citation.
- [ ] Material claims have an ID, source, scope, owner, checked date, and refresh cadence.
- [ ] Metrics have a calculation definition and source system.
