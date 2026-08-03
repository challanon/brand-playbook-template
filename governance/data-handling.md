---
standard: brandbook.md
type: data-handling
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Data handling

## Purpose and when to load

Load before using customer, employee, partner, product, analytics, or uploaded data—especially with an external AI, research, analytics, or media tool. The default for unclear data is “do not share until classified.”

| Classification | Examples | May enter an external AI tool? | Rule |
| --- | --- | --- | --- |
| Public | Published pages, approved assets | Yes | Cite the source. |
| Internal | Draft strategy, non-public metrics | [yes/no] | [conditions and approver]. |
| Restricted | Customer data, credentials, unreleased plans | No | Do not upload, quote, or embed. |

Record the source, classification, and approval for every external asset or data input. Escalate uncertainty before sharing data with a tool.

## Handling record

| Input / record | Classification | Purpose | Approved tool/location | Minimisation or redaction | Approver | Retention / deletion rule |
| --- | --- | --- | --- | --- | --- | --- |
| [data] | [public/internal/restricted] | [task] | [tool] | [method] | [APR-*/owner] | [rule] |

## Decision rules

- Collect and share only the minimum data needed for the approved task.
- Remove direct identifiers, credentials, secrets, private URLs, and sensitive free text before using a permitted external tool.
- “Internal” is not automatically approved for external AI. Record the tool, purpose, approval, and retention condition.
- Treat output from a tool as potentially inaccurate and potentially sensitive if it reproduces source data.

## Escalation and completion

- Escalate uncertain classification, a new vendor/tool, cross-border transfer, customer data, credentials, or a suspected disclosure.
- [ ] Every external input has source, classification, purpose, and approval recorded.
- [ ] Restricted data is never quoted, uploaded, embedded, or used as a prompt example.

Use stable IDs for records: claims `CLM-*`, assets `AST-*`, experiments `EXP-*`, and approvals `APR-*`.
