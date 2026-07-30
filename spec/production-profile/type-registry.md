# Production type registry

| Type | Purpose | Required consumer behaviour |
| --- | --- | --- |
| `governance` | Hard brand constraints | Treat citable rules as non-negotiable. |
| `compliance` | Publish checks and escalations | Return pass/fail findings with rule IDs. |
| `data-handling` | Data classification | Do not send restricted data to external tools. |
| `evidence` | Claims and sources | Cite source ID and checked date. |
| `asset-register` | Rights and AI-use permissions | Use only approved assets. |
| `publication-contract` | Tool-agnostic CMS handoff | Produce a valid publication record. |
| `agent-brief` | Human-readable task constraints | Load alongside a typed task request. |
| `context-packs` | Minimal file selection | Do not duplicate the source files. |
| `video-production` | Video brief and review | Apply rights and accessibility checks. |

New types require a lowercase kebab-case name, purpose, required consumer behaviour, schema change, fixture, and a minor profile-version increment. Retired types remain documented and must not be reused.
