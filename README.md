# Brand & Growth Playbook Template

An agent-ready, versioned playbook for teams that want consistent brand and growth work from people and AI agents.

Use this repository as a GitHub template, then make the completed playbook private. Do not add company, client, customer, or campaign information to this public template.

## What you get

| Capability | What it provides |
| --- | --- |
| Clear brand context | Audience, positioning, voice, visual identity, and approved terminology |
| Safer agents | Anchor rules, evidence, data handling, untrusted-input rules, and escalation paths |
| Growth operations | Search/GEO, customer journeys, experiments, metrics, and publication records |
| Progressive loading | Context packs so an agent loads only the files required for its task |
| Teaching material | A fictional completed example, strong-versus-weak comparisons, and a staged adoption guide |
| Optional production profile | Typed contracts, schemas, fixtures, and adapter guidance for platform consumers |

The Core playbook is Markdown-first and portable. It does not grant an agent permission to publish, access data, or override human approval.

## How to start

1. Create a private repository from this template.
2. Read the [progressive adoption guide](docs/progressive-adoption.md) and start at Level 1: Safe drafting.
3. Complete [BRANDBOOK.md](BRANDBOOK.md), the mandatory root and agent entry point.
4. Fill the Level 1 modules: anchor rules, audience, messaging, voice, and an agent brief.
5. Use the fictional [Northstar example](examples/northstar/) and its [teaching notes](examples/northstar/TEACHING-NOTES.md) to distinguish strong entries from weak ones.
6. Run one supervised agent task. Require the draft, sources, applicable rule IDs, and unanswered questions.
7. Add the next level only when the work requires it: publication, growth operations, or scaled multi-market work.

Replace every placeholder with a decision, evidence, owner, or an explicit Unknown follow-up. Never ask an agent to guess a material brand, legal, data, or market decision.

## Choose your adoption level

| Level | Complete first | Enables |
| --- | --- | --- |
| 1. Safe drafting | Root, anchor rules, audience, messaging, voice, agent brief | Consistent, reviewable drafts |
| 2. Publish-ready | Evidence, compliance, assets, delivery | Source-backed human publication handoff |
| 3. Growth operations | Search, journey, experimentation | Discoverability, conversion, and learning loops |
| 4. Scaled operations | Data handling, untrusted inputs, locales, media, change log | Multiple agents, external tools, markets, and media |

See the [progressive adoption guide](docs/progressive-adoption.md) for workshops, readiness checks, safe first tasks, and review cadence.

## How the package works

[BRANDBOOK.md](BRANDBOOK.md) is the concise router. Agents load it first, then [governance/anchor-rules.md](governance/anchor-rules.md) for public-facing work, then the smallest relevant set from [agents/context-packs.md](agents/context-packs.md).

The operational modules record the decisions a team fills in. Use them as separate layers:

- Purpose and when to load: when the file applies.
- Tables and prompts: what the playbook owner decides and records.
- Agent rules: what an agent may do, must ask, or must escalate.
- Completion check: the human review gate.

The [Northstar example](examples/northstar/) is fictional learning material, not live brand instruction. [Module references](examples/REFERENCES.md) identify public implementations to study; check licences before reusing any material.

## Package map

| Area | Includes |
| --- | --- |
| Brand | Audience, messaging, voice, visual identity, asset register |
| Governance | Anchor rules, compliance, data handling, untrusted inputs, change log |
| Growth | Search/GEO, journeys, experimentation, evidence |
| Delivery | Publication contracts, locales, media |
| Agent operations | Agent briefs and task-specific context packs |
| Technical extensions | Optional production profile, contracts, schemas, adapters, and validator |

The root file index remains the authoritative list of agent-loadable modules. Narrative context is optional and should not be loaded unless the task explicitly needs it.

## Validate a completed playbook

    npm ci --prefix tools
    node tools/validate.js .

Validation checks the root index, frontmatter, brand/type consistency, design-token JSON, and the template teaching companion. The included GitHub Action runs the same check on pushes and pull requests.

## Optional production profile

Most teams should start with the Core Markdown package. Teams building a governed platform integration can opt into the [Production Profile](spec/production-profile/PROFILE.md), which adds a type registry, schemas, typed contracts, fixtures, and a vendor-neutral [adapter interface](spec/adapters/README.md).

## Principles

- Be useful to people first; optimise for search only in service of that.
- Treat generative-search optimisation as clear, factual, sourceable content—not manipulation.
- Never turn an experiment into a permanent rule without recorded evidence.
- Keep completed playbooks private.

## References

- [brandbook-md/brandbook.md](https://github.com/brandbook-md/brandbook.md)
- [Google: people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/)
- [GOV.UK Service Manual](https://www.gov.uk/service-manual)

## Implementation credits

This template’s structure and fictional Northstar example were also informed by the following public projects. They are linked for credit and further study; no third-party prose, assets, or code has been copied into this repository.

- [GitHub Docs](https://github.com/github/docs) — content model, editorial governance, linting, and search findability.
- [GoogleChrome/web.dev](https://github.com/GoogleChrome/web.dev) — design tokens, accessible content, and measurement practices.
- [Carbon Design System](https://github.com/carbon-design-system/carbon) — accessible visual-system and component-governance patterns.
- [Microsoft Fluent UI](https://github.com/microsoft/fluentui) — interaction, visual-language, and accessibility patterns.
- [Salesforce Lightning Design System](https://github.com/salesforce-ux/design-system) — enterprise UI consistency and design-system documentation.

See [examples/REFERENCES.md](examples/REFERENCES.md) for the per-module source map and licence notes.

## License

[CC0 1.0](LICENSE) — use it freely.
