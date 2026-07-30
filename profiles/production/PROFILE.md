# Production Profile

Version: `0.1.0`  
Status: optional

This profile hardens a Core playbook for platform consumption. It does not grant any agent publication, asset, data, or approval authority. Those decisions belong to a consuming runtime policy gateway.

Packages opting in set `profile: production` in `BRANDBOOK.md` and must pass the strict validator. Consumers should also require valid records from `contracts/` for agent execution and CMS handoff.

See [type-registry.md](type-registry.md) for the portable type contract.
