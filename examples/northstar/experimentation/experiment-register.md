---
standard: brandbook.md
type: experimentation
brand: northstar-analytics
version: "1.0.0"
last_validated: 2026-07-30
---

# Experiment register

**Hypothesis:** Explaining the required data sources before the demo form will improve qualified demo completion because visitors can assess fit earlier.

- Primary metric: qualified demo completion rate.
- Guardrails: form abandonment, consent acceptance, and accessibility errors.
- Decision rule: ship only if the primary metric improves without a guardrail regression.

| Outcome | Decision | Evidence |
| --- | --- | --- |
| Inconclusive | Retest after the next traffic cycle | [experiment dashboard] |
