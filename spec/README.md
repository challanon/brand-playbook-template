# Production specification

This directory contains the optional Production Profile and integration material. It is for platform consumers, maintainers, and adapter authors; agents should not load it as routine brand context.

- [`production-profile/`](production-profile/) defines the opt-in profile and type registry.
- [`contracts/`](contracts/) defines portable runtime records.
- [`schemas/`](schemas/) validates playbook metadata.
- [`adapters/`](adapters/) defines the vendor-neutral integration boundary.
- [`evals/`](evals/) contains validation fixtures and safety-conformance cases.

Brand teams start with [`../BRANDBOOK.md`](../BRANDBOOK.md). See the root README for Core and Production Profile adoption paths.
