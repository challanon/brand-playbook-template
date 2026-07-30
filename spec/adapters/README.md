# Adapter interface

Adapters map a valid Production Profile package to a CMS, DAM, analytics service, or agent runtime. They must not redefine brand policy.

## Required behaviour

1. Read `BRANDBOOK.md`, then only indexed task-relevant files.
2. Accept and emit the typed records in [`../contracts/`](../contracts/).
3. Preserve evidence IDs, asset IDs, locale, rule findings, and approval state.
4. Request a `policy-decision` before any capability beyond authorised read, draft, or review.
5. Never mark a record published when policy requires approval or denies the action.

## Conformance checks

An adapter is conformant when it passes the safety fixtures, maps every required publication-record field, and preserves the record IDs without mutation.
