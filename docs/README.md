---
document_id: PJL-DOC-INDEX-001
title: Payload Journey LAB Documentation System
version: 1.0
status: stable
authority: documentation-index
owner: Payload Journey LAB
last_reviewed: 2026-07-31
---

# Payload Journey LAB Documentation System

## Start here

- To understand what the LAB authoritatively is, start with [`governance/`](governance/README.md).
- To navigate current method definitions and specification gaps, use [`methods/`](methods/README.md).
- To inspect active investigations, use [`cases/`](cases/README.md).
- To locate research outputs, use [`research/`](research/README.md).
- To inspect current audits, propagation and execution records, use [`operations/`](operations/README.md).
- To inspect current public-product documentation, use [`product/`](product/README.md).
- To understand historical decisions and evolution, use [`archive/`](archive/README.md).

## Authority model

```text
1. governance
2. current versioned method specifications
3. active case records
4. research outputs
5. current operational records
6. current product documentation
7. archive
```

Archive documents preserve historical provenance. They do not override newer canonical sources.

## Current canonical entry points

- [Semantic Identity Charter v1.0](governance/semantic-identity/semantic-identity-charter-v1.0.md)
- [Method index](methods/README.md) — navigation only where no standalone specification exists
- [Founding Reference Case 001 — HORA.city](cases/RPJ-HORA-001/README.md)

## Documentation-system evidence

- [Documentation operations](operations/documentation/README.md)
- [Before-refactor snapshot](operations/documentation/inventory/before-refactor-documentation-system.md)
- [After-refactor snapshot](operations/documentation/inventory/after-refactor-documentation-system.md)
- [Migration manifest](operations/documentation/2026-07-31-documentation-system-refactor.md)

## Core invariant

```text
CURRENT AUTHORITY != HISTORICAL MEMORY
archive/ cannot override governance/
```
