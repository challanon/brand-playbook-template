---
standard: brandbook.md
type: experimentation
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Experiment register

## Purpose and when to load

Use this register to test a recorded uncertainty, not to retrofit a preferred outcome. Load for design, launch, analysis, and rollout of a change affecting a customer or metric.

## Protocol

- Hypothesis: Because [insight], changing [variable] for [audience] will improve [metric].
- Primary metric: [definition]
- Guardrails: [metrics that must not worsen]
- Variants, audience, exclusions, minimum duration/sample: [defined before launch]
- Allocation and stopping rule: [randomisation/allocation and conditions to stop early]
- Experiment ID, owner, analysis method, and decision timestamp: [EXP-ID/details]
- Decision rule: [ship, stop, retest]

### Before launch

| Field | Decision |
| --- | --- |
| Eligibility and exclusions | [who can enter and why] |
| Baseline and expected effect | [MET-*/assumption] |
| Sample, duration, and power | [method/owner] |
| Randomisation and allocation | [method] |
| QA and exposure checks | [checks] |
| Ethics, consent, and accessibility guardrails | [requirements] |
| Stop conditions | [harm/data-quality triggers] |

Do not change the primary metric, allocation, or stopping rule after seeing results without recording the reason and impact.

## Results

| Experiment | Outcome | Evidence | Decision | Playbook update |
| --- | --- | --- | --- | --- |
| [name/link] | [win/loss/inconclusive] | [source] | [decision] | [file/date] |

## Analysis and propagation

Record actual exposure, data-quality issues, segment differences, confidence/uncertainty, guardrail outcomes, and the decision owner. A result may be inconclusive; do not label a small or biased result a win. Link any permanent decision to an updated rule, journey, or message in the change log.

## Agent rules and completion check

- May draft a protocol and calculate only from approved definitions.
- Must not launch, alter allocation, declare significance, or make a permanent rule without the assigned owner.
- [ ] The hypothesis, metric, audience, exclusions, guardrails, duration, and decision rule are set before launch.
- [ ] Results record evidence and the resulting playbook update or explicit no-change decision.
