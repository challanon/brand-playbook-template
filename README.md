# Brand & Growth Playbook Template

An agent-ready, versioned brand playbook built on the open [brandbook.md](https://github.com/brandbook-md/brandbook.md) package model. It adds operational modules for SEO/GEO, customer journeys, and experimentation.

Use this repository as a GitHub template, then make the resulting completed playbook **private**. Do not add company, client, customer, or campaign information to this public template.

## Start here

1. Create a private repository from this template.
2. Fill in [`BRANDBOOK.md`](BRANDBOOK.md); it is the mandatory agent entry point.
3. Replace every `[placeholder]` with evidence, an owner, or an explicit decision.
4. Keep the root concise. Agents load it first and load only indexed files relevant to their task.

## How to fill the templates

Each operational template explains its purpose, required decisions, research prompts, agent boundaries, and completion check. A completed entry should be specific enough for a new teammate or agent to use without guessing.

Read the sections as distinct layers: “Purpose and when to load” tells a person or agent when the file applies; tables and prompts are for the playbook owner; “Agent rules” define execution boundaries; “Completion check” is the reviewer gate. The fictional examples are learning material, not live brand instructions.

- Replace placeholders with a decision, evidence, or an explicit "Unknown — owner/date" follow-up; never leave an important field ambiguous.
- Record the source, owner, market scope, and review date beside claims, metrics, policies, and assets where relevant.
- Use stable IDs: CLM-* claims, AST-* assets, EXP-* experiments, and APR-* approvals.
- An agent may summarise cited facts and apply recorded rules. It must ask or escalate for a new claim, a material inference, restricted data, a new market, a rights decision, or publication authority.
- Treat linked external resources as methods to study, not prose to copy. Check licences before reusing material.

## Filled example and sources

[`examples/northstar/`](examples/northstar/) is a complete fictional playbook mirroring every template module. [`examples/REFERENCES.md`](examples/REFERENCES.md) maps every module to a public GitHub reference implementation and explains what to study.

## Learning path

The fictional Northstar package has a concise strong-versus-weak entry for every module in examples/northstar/TEACHING-NOTES.md. The comparison is centralised rather than repeated in every operational file, keeping routine agent context small.

For teams adopting the package, see docs/progressive-adoption.md. It defines the minimum safe module set for drafting, publication, growth work, and scaled multi-agent operations.

## Recommended completion order

1. Establish the root identity and non-negotiable anchor rules.
2. Define priority audiences and record the evidence that supports their needs.
3. Decide positioning, messages, and verbal identity.
4. Set visual, asset, data, compliance, and market boundaries.
5. Map search questions and customer journeys.
6. Define measurement and experiments only after journey outcomes are clear.
7. Prepare agent briefs, context packs, and publication records for delivery.

At each stage, complete its check before moving on. Do not draft market-specific or public content until the relevant evidence, governance, and locale decisions exist.

## Package layout

```text
BRANDBOOK.md                 # concise root/router and machine-readable index
governance/                  # anchor rules, compliance, and data handling
assets/                      # visual identity, asset register, and approved assets
voice/                       # verbal identity and examples
messaging/                   # positioning, proof, and messaging pillars
audience/                    # audience, needs, and search intent
search/                      # SEO/GEO and technical delivery rules
journey/                     # conversion journey and instrumentation
experimentation/             # A/B-test protocol, allocation, and results
evidence/                    # sources, claim definitions, and metrics
context/                     # narrative only; load only on request
agents/                      # reusable agent brief and task context packs
delivery/                    # CMS-agnostic publication contract
locales/                     # market, language, and legal overrides
media/                       # video-production briefs and review gates
examples/                    # fictional completed package and source map
spec/                        # optional Production Profile and integration spec
  production-profile/        # opt-in profile and type registry
  contracts/                 # typed, tool-agnostic runtime contracts
  schemas/                   # playbook metadata schemas
  adapters/                  # vendor-neutral adapter interface
  evals/                     # validator fixtures and conformance tests
tools/                       # local validation utility
```

The root modules are the content a brand team fills in and an agent loads. [`spec/`](spec/) is for platform consumers that opt into the Production Profile; it is not routine brand context. `tools/` runs validation for either mode.

The template uses custom file types—`seo-geo`, `journey`, `experimentation`, `agent-brief`, `context-packs`, `asset-register`, `data-handling`, `publication-contract`, `locale`, and `video-production`. The brandbook.md standard permits custom types, while its root file index keeps them discoverable to people and tooling.

Use [`agents/context-packs.md`](agents/context-packs.md) to select the minimal relevant files for common tasks without copying their contents.

## Validate a completed playbook

```sh
npm ci --prefix tools
node tools/validate.js .
```

Validation checks indexed files, root/secondary frontmatter, brand and file-type consistency, and JSON design tokens. The included GitHub Action runs the same check on pushes and pull requests.

## Optional Production Profile

The Core template stays Markdown-first and portable. Teams that need stricter platform consumption can opt into [`spec/production-profile/`](spec/production-profile/) by adding `profile: production` to their root metadata.

The profile adds a versioned [type registry](spec/production-profile/type-registry.md), schema-backed validation, fixtures, and the typed [contracts](spec/contracts/) used between callers, agents, reviewers, policy gateways, and CMS adapters. It does not grant an agent permission to publish or access data; those decisions remain with the consuming runtime.

The governance tranche adds lifecycle IDs, asset/locale scope, untrusted-input rules, and portable [safety evaluation cases](spec/evals/safety-cases.md).

## Adoption paths

- **Core:** use the Markdown package and context packs for human-reviewed content work.
- **Production Profile:** require schema validation, typed contracts, safety fixtures, and a policy gateway.
- **Adapter:** implement the vendor-neutral [adapter interface](spec/adapters/README.md) to map the portable publication record to a CMS, DAM, analytics service, or agent runtime.

## Tool-agnostic delivery

[`delivery/publication-contract.md`](delivery/publication-contract.md) defines the content record an agent must prepare before a CMS handoff. A CMS-specific adapter may map that record to fields, but the playbook itself remains portable.

## Principles

- Be useful to people first; optimise for search only in service of that.
- Treat generative-search optimisation as clear, factual, sourceable content—not a manipulation tactic.
- Never turn an experiment into a permanent rule without recorded evidence.
- Keep sensitive completed playbooks private.

## References

- [Google: people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [Mailchimp Content Style Guide](https://styleguide.mailchimp.com/)
- [GOV.UK Service Manual](https://www.gov.uk/service-manual)

## Public repository references

The following repositories informed this template's structure or the fictional Northstar example. They are cited for credit and further study; no third-party prose, assets, or code has been copied into this repository.

- [brandbook-md/brandbook.md](https://github.com/brandbook-md/brandbook.md) — package structure, root router, file index, and citable anchor rules.
- [github/docs](https://github.com/github/docs) — content model, editorial governance, linting, and search findability.
- [GoogleChrome/web.dev](https://github.com/GoogleChrome/web.dev) — design tokens, accessible web content, and measurement practices.
- [carbon-design-system/carbon](https://github.com/carbon-design-system/carbon) — accessible visual-system and component-governance patterns.
- [microsoft/fluentui](https://github.com/microsoft/fluentui) — interaction, visual-language, and accessibility patterns at scale.
- [salesforce-ux/design-system](https://github.com/salesforce-ux/design-system) — enterprise UI consistency and design-system documentation.

See [`examples/REFERENCES.md`](examples/REFERENCES.md) for the per-module source map and licence notes.

## Agent consumption

1. Load `BRANDBOOK.md` first.
2. Always load `governance/anchor-rules.md` for public-facing work.
3. Load only indexed files relevant to the task—for example, `search/seo-geo.md` for discoverability work.
4. Treat `AR-*` rules as hard constraints and cite an ID when flagging a violation.
5. Do not load `context/` unless narrative background is explicitly needed.

## License

[CC0 1.0](LICENSE) — use it freely.
