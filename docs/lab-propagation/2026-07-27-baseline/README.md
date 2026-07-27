# Payload Journey LAB Propagation Baseline

Baseline ID: `PJL-BASELINE-2026-07-27`  
Date: 27 July 2026  
Repository: `PayloadJourneyLAB`  
Branch: `files`  
Commit: `baf4d959659de7e9824978cd8c240859d2b9b48f`

## Purpose

This directory is the Day 1 evidence-based inventory of the Payload Journey LAB
public ecosystem observable from the accessible workspace and selected public
URLs. It distinguishes repository presence, route connection, build inclusion,
public availability, configured indexability and external verification.

HORA.city is treated as:

**Payload Journey LAB — Founding Reference Case 001**

Repository case ID: `RPJ-HORA-001`.

## Scope

Examined:

- `app/`;
- `components/`;
- `config/`;
- `content/`;
- `docs/`;
- `lib/`;
- `public/`;
- `scripts/`;
- `types/`;
- relevant root manifests and configuration;
- selected public site routes, Udemy destination and channel URLs.

Excluded from semantic/content analysis:

- `.git/`;
- `node_modules/`;
- `.next/`, except as build evidence;
- empty `.tmp/` and `.agents/`.

Only one repository was accessible. The HORA.city application codebase and
runtime were not present.

## Method

1. Captured branch, SHA, remote, status, file counts and tool versions.
2. Discovered App Router pages, redirects, sitemap, robots and navigation.
3. Scanned current source and documentation for LAB ecosystem terms.
4. Built a 45-record canonical JSON inventory with 24 fields per asset.
5. Mechanically generated CSV and Markdown views from the JSON dataset.
6. Audited metadata, structured data, links, search configuration and public
   assets.
7. Compared selected public URLs with current branch behavior.
8. Audited terminology and HORA.city evidence.
9. Ran TypeScript, production build, integrated verification and cycle closure.
10. Validated documentation-only scope and inventory parity.

## Source-of-truth rule

[`asset-inventory.json`](asset-inventory.json) is the source of truth.

[`asset-inventory.csv`](asset-inventory.csv) and
[`asset-inventory.md`](asset-inventory.md) are generated views. Later audits
must preserve stable asset IDs and update the JSON first.

## Files produced

- [`baseline-manifest.json`](baseline-manifest.json)
- [`executive-summary.md`](executive-summary.md)
- [`asset-inventory.json`](asset-inventory.json)
- [`asset-inventory.csv`](asset-inventory.csv)
- [`asset-inventory.md`](asset-inventory.md)
- [`technical-discovery-audit.md`](technical-discovery-audit.md)
- [`route-and-link-map.md`](route-and-link-map.md)
- [`semantic-consistency-audit.md`](semantic-consistency-audit.md)
- [`findings-register.md`](findings-register.md)
- [`external-verification-checklist.md`](external-verification-checklist.md)
- [`case-file-001-status.md`](case-file-001-status.md)
- [`next-actions.md`](next-actions.md)
- evidence files under [`evidence/`](evidence/)

## Baseline metrics

| Metric | Result | Definition |
|---|---:|---|
| Assets inventoried | 45 | Stable IDs in canonical JSON |
| Canonical public routes | 11 | Current branch sitemap/indexable set |
| Page sources | 12 | Includes hidden `/lablog` |
| Canonical pages | 11 | Institutional/conceptual public pages |
| Draft + provisional + planned | 8 | 2 Draft + 3 Provisional + 3 Planned |
| Orphan canonical pages | 0 | Verifier and route graph |
| Terminology/status conflicts | 8 | `SEM-001` through `SEM-008` |
| Pages carrying Udemy CTA/link | 11 | Global footer on all canonical pages |
| Pages with explicit HORA.city/case path | 7 | Explicit case progression, not generic nav |
| HORA.city documentary artefacts | 3 | Case record/object plus two evidence records |
| HORA.city technical artefacts | 0 | Logs, traces, snapshots, diffs or verification |
| Critical confirmed findings | 3 | `FND-002` through `FND-004` |

External metrics:

`Not measured from repository on 27 July 2026.`

## Principal limitations

- The deployed commit is unknown.
- Live `/lablog` conflicts with current branch behavior.
- Live robots and sitemap bodies were not captured.
- Search, analytics, social and course dashboards were inaccessible.
- HORA.city source/runtime evidence was inaccessible.
- Historical documentation is extensive and not uniformly marked superseded.

## How to continue

1. Complete Critical actions in [`next-actions.md`](next-actions.md).
2. Capture account evidence using
   [`external-verification-checklist.md`](external-verification-checklist.md).
3. Add new assets to `asset-inventory.json` with new stable IDs.
4. Regenerate CSV and Markdown views from JSON.
5. Record changes rather than rewriting prior baseline findings.
6. Re-run TypeScript, build, integrated verifier, JSON/CSV/ID parity and local
   Markdown link validation.
7. Create a later comparison baseline using the same manifest and IDs.

## Evidence discipline

Configured indexability is not indexation. Internal documentation is not
independent verification. Conceptual checkpoints are not observed case
checkpoints. A live URL is not proof that the current branch is deployed.

Where external evidence remains unavailable:

`External verification required.`
