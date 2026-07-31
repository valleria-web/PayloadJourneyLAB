# Semantic Consistency Audit

Baseline: 27 July 2026.

The current rendered source is substantially more disciplined than the
historical documentation. Eight meaningful conflicts or status ambiguities
remain. No new canonical definition is selected here.

## Conflict register

| ID | Term/topic | File and line/section | Conflicting form | Risk | Recommended human decision |
|---|---|---|---|---|---|
| SEM-001 | Trace Engineering name | `docs/files/LAB Definitions.md:131-566` | Repeated `Tracing Engineering` versus current `Trace Engineering` | Historical document can be surfaced as an apparently official competing name | Mark file superseded or approve a corrected archival edition |
| SEM-002 | Trace Engineering category | `content/methods.ts:18,45`; `content/lab-definitions.ts:264-273` | “set of capabilities” versus “practice” | Core taxonomy is internally inconsistent across two canonical routes | Decide whether it is practice, capability set, umbrella field or layered definition |
| SEM-003 | USMT expansion | `config/site.ts:21`; V2 docs and `docs/homepage-refactor/21-usmt-homepage-section.md:8` | `Universal System Modeling Template` versus historical `Universal System Model Template` | Search and citation ambiguity around the method name | Preserve Modeling as current canonical and label Model Template sources superseded, if approved |
| SEM-004 | Trace Engineer status | `content/lab-definitions.ts:277-300`; `README.md:60-63`; `docs/files/LAB Definitions.md:370` | Function/profile in development versus professional/professional role | Can overstate an established profession or certification | Approve one guarded definition and add superseded banners to older sources |
| SEM-005 | Founding case identity | Task directive; `docs/prompts/04-study-case.md:4`; current `content/hora-city.ts` | “Founding Reference Case 001” is required by baseline but current public source uses “real case” and `RPJ-HORA-001` | Propagation may use two case identities without an explicit mapping | Approve a public display name and mapping between Founding Reference Case 001 and RPJ-HORA-001 |
| SEM-006 | Evidence strength for HORA.city | `content/hora-city.ts:108-120`; `content/cases.ts:9-54,57-130` | Scale, anomaly and payload called confirmed public evidence, while the only sources are internal narrative documents with no technical artefact | Narrative consistency may be mistaken for runtime confirmation | Define evidence levels and reserve “technical evidence” for sanitized logs/traces/snapshots |
| SEM-007 | LabLog publication state | `config/site.ts:11`; `app/lablog/page.tsx:14-16`; live `/lablog` observed 2026-07-27 | Hidden/404 in branch versus published and linked live | Conflicting visitor, crawler and propagation signals | Choose intended state, identify deployed commit and align route/sitemap/navigation |
| SEM-008 | “Official definitions” finality | `content/lab-definitions.ts:475-477`; method/profile language elsewhere | Official metadata label versus methods/role explicitly in development | Working definitions may be cited as final immutable standards | Approve versioned statuses such as working definition, published draft or stable definition |

## Confirmed non-conflicts

- `Aura.city`: zero matches in examined repository content.
- `SMT Core`: zero matches.
- Current public source uses `Payload Journey LAB`; uppercase forms are display
  labels, not a competing entity.
- Current public source uses `Trace Engineering`, not `Tracing Engineering`.
- Current verifier protects HORA.city conceptual examples with explicit
  qualification.
- Current verifier protects Trace Engineer from being presented as a
  consolidated profession.

## Additional semantic observations

### Payload Journey

The current content consistently describes Payload Journey as following an
operation through representations, layers, decisions, states and effects.
Variations such as method, observation method and journey are compatible at the
descriptive level, but a dated canonical definition would improve citation.

### USMT

Current source consistently connects USMT to an expected model and presents 12
elements and four lenses. “Universal” does not itself prove universal validity;
the repository generally preserves that limitation. External validation is not
present.

### HORA.city examples

`content/lab-definitions.ts` carefully labels Send Heart flow descriptions as an
expected/conceptual model that must be verified by tracing. Those descriptions
must not be promoted into Case File 001 confirmed checkpoints.

### Published versus planned material

White papers, contact, GitHub channel, LinkedIn, future route placeholders and
protocol artefact names exist in source or plans. They are not published assets
merely because a name or data object exists.

## Count

Meaningful terminology/status conflicts requiring tracking: **8**.

Evidence:

- [`evidence/commands/discovery-counts.txt`](evidence/commands/discovery-counts.txt)
- [`evidence/documents/document-discovery.md`](evidence/documents/document-discovery.md)
