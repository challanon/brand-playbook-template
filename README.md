# Brand & Growth Playbook Template

An agent-ready, versioned brand playbook built on the open [brandbook.md](https://github.com/brandbook-md/brandbook.md) package model. It adds operational modules for SEO/GEO, customer journeys, and experimentation.

Use this repository as a GitHub template, then make the resulting completed playbook **private**. Do not add company, client, customer, or campaign information to this public template.

## Start here

1. Create a private repository from this template.
2. Fill in [`BRANDBOOK.md`](BRANDBOOK.md); it is the mandatory agent entry point.
3. Replace every `[placeholder]` with evidence, an owner, or an explicit decision.
4. Keep the root concise. Agents load it first and load only indexed files relevant to their task.

## Filled example and sources

[`examples/northstar/`](examples/northstar/) is a complete fictional playbook mirroring every template module. [`examples/REFERENCES.md`](examples/REFERENCES.md) maps every module to a public GitHub reference implementation and explains what to study.

## Package layout

```text
BRANDBOOK.md                 # concise root/router and machine-readable index
governance/                  # hard rules and compliance
assets/                      # visual identity and approved design assets
voice/                       # verbal identity and examples
messaging/                   # positioning, proof, and messaging pillars
audience/                    # audience, needs, and search intent
search/                      # SEO/GEO rules
journey/                     # conversion journey and instrumentation
experimentation/             # A/B-test protocol and results
evidence/                    # sources and metrics
context/                     # narrative only; load only on request
agents/                      # reusable agent brief
```

`seo-geo`, `journey`, `experimentation`, and `agent-brief` are custom file types. The brandbook.md standard permits custom types, while its root file index keeps them discoverable to people and tooling.

Use [`agents/context-packs.md`](agents/context-packs.md) to select the minimal relevant files for common tasks without copying their contents.

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
