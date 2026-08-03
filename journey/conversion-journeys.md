---
standard: brandbook.md
type: journey
brand: "[brand-slug]"
version: "0.1.0"
last_validated: "[YYYY-MM-DD]"
---

# Conversion journeys

## Purpose and when to load

Map the customer's progress from trigger to outcome, including friction and evidence—not just funnel stages. Load for landing pages, product flows, lifecycle content, support, measurement, and experiments.

| Stage | User need | Message | Proof | CTA | Friction to remove | Metric |
| --- | --- | --- | --- | --- | --- | --- |
| [stage] | [need] | [message] | [proof] | [CTA] | [friction] | [metric] |

## Journey detail

| Stage | Audience / decision role | Context and emotion | Question to answer | Channel / touchpoint | Failure path / recovery | Owner |
| --- | --- | --- | --- | --- | --- | --- |
| [stage] | [AUD-*/role] | [context] | [question] | [touchpoint] | [help/handoff] | [owner] |

Use the reader's need to define the stage. “Awareness” and “consideration” are insufficient unless they explain what the customer is trying to accomplish.

## Instrumentation

- Events and definitions: [list]
- Source of truth: [tool/dashboard]
- Guardrail metrics: [list]

### Event definition

| Event | Trigger | Properties | Consent / data class | Source of truth | Metric use |
| --- | --- | --- | --- | --- | --- |
| [event] | [observable action] | [minimum fields] | [rule] | [system] | [MET-*] |

## Completion check

- [ ] Each stage includes a need, appropriate proof, one clear action, friction, and success metric.
- [ ] Failure paths, accessibility needs, consent, and ownership are recorded where relevant.
- [ ] Instrumentation definitions are unambiguous and use approved data handling.
