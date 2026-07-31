# Findings Register

Baseline: 27 July 2026.

This register separates evidence classes so that observations and risks are not
presented as confirmed causal findings.

## Observations

| ID | Observation | Evidence | Confidence |
|---|---|---|---|
| OBS-001 | The accessible workspace contains one institutional Next.js site repository. | `package.json`; manifest | High |
| OBS-002 | The current branch defines 11 canonical/indexable routes and one conditional LabLog source route. | `content/routes.ts:264-270`; `app/lablog/page.tsx` | High |
| OBS-003 | All 11 canonical routes have unique metadata, canonical URLs and JSON-LD. | `verify:refactor-v3` | High |
| OBS-004 | The public content inventory contains one case, two documentary source records, zero technical case artefacts and zero LabLog entries. | `verify:cases-evidence`; `content/cases.ts` | High |
| OBS-005 | Udemy and YouTube are the only rendered external channel types in current source. | `content/site.ts`; `verify:navigation-discovery` | High |
| OBS-006 | The documentation corpus is extensive: 91 Markdown and 235 PNG files existed at baseline start. | discovery count evidence | High |

## Inconsistencies

| ID | Inconsistency | Evidence | Impact |
|---|---|---|---|
| INC-001 | Live `/lablog` is public while current branch returns 404 and omits it from sitemap/navigation. | public retrieval; `config/site.ts:11`; verifier | Critical publication drift |
| INC-002 | Trace Engineering is defined as capabilities and as a practice. | `content/methods.ts:18`; `content/lab-definitions.ts:267` | Canonical taxonomy conflict |
| INC-003 | Historical documents retain `Tracing Engineering`. | `docs/files/LAB Definitions.md` | Search/citation ambiguity |
| INC-004 | Historical documents retain `Universal System Model Template`. | V2 and homepage-refactor documents | Entity-name ambiguity |
| INC-005 | Historical sources use professional language for Trace Engineer. | `README.md:62`; `docs/files/LAB Definitions.md:370` | Overstatement risk |
| INC-006 | Current case evidence wording is stronger than the published artefact base. | `content/hora-city.ts:108-120`; `content/cases.ts` | Evidence-quality ambiguity |

## Risks

| ID | Risk | Evidence | Priority |
|---|---|---|---|
| RSK-001 | Propagation may amplify a deployment state that does not match the approved branch. | INC-001; no deployment workflow | Critical |
| RSK-002 | HORA.city may be presented as a demonstrated end-to-end investigation without logs, checkpoints or restoration proof. | Case evidence assessment | Critical |
| RSK-003 | Undated/unversioned method definitions can be cited without knowing their lifecycle state. | metadata and semantic audits | High |
| RSK-004 | Coupon, YouTube, LinkedIn and analytics states can become outdated without owners or verification dates. | external channel records | High |
| RSK-005 | Historical repository documents can outrank or confuse current canonical definitions. | 91 Markdown files; semantic audit | High |
| RSK-006 | Analytics is embedded while privacy/legal and consent state are not verifiable from repository routes. | `app/layout.tsx`; `content/site.ts:295` | High |

## Confirmed findings

These are evidence-backed findings, not hypotheses about cause.

| ID | Confirmed finding | Evidence | Priority |
|---|---|---|---|
| FND-001 | The current branch is buildable and passes its integrated verification suite. | TypeScript, build, nine child verifiers, cycle closure | Medium |
| FND-002 | There is a confirmed live/branch LabLog publication mismatch. | Public `/lablog`; current branch 404 | Critical |
| FND-003 | No technical HORA.city investigation artefact is present in the accessible repository. | `verify:cases-evidence`: 0; systematic scan | Critical |
| FND-004 | No restoration implementation or verified outcome is evidenced for RPJ-HORA-001. | `content/cases.ts:100-108`; case assessment | Critical |
| FND-005 | The repository provides strong route/metadata infrastructure but does not prove external indexation or account metrics. | technical audit and external checklist | High |

Critical confirmed findings: **3** (`FND-002`, `FND-003`, `FND-004`).

## External verification gaps

| ID | Gap | Required evidence |
|---|---|---|
| EXT-001 | Deployed commit and hosting state | Deployment dashboard/commit SHA and route responses |
| EXT-002 | Google/Bing ownership and indexation | Console screenshots/exports |
| EXT-003 | Analytics and referral traffic | GA property access/export |
| EXT-004 | Udemy course, coupon and metrics | Instructor dashboard evidence |
| EXT-005 | YouTube ownership, videos and metrics | Studio/channel evidence |
| EXT-006 | LinkedIn accounts/newsletter/metrics | Owner account evidence |
| EXT-007 | GitHub organization/repository visibility | Public organization URL and access review |
| EXT-008 | HORA.city runtime evidence | Sanitized source, traces, snapshots and verification records |

## Human decisions required

| ID | Decision | Why human authority is required |
|---|---|---|
| HUM-001 | Should `/lablog` be public now? | Changes publication and crawler state |
| HUM-002 | What is the canonical category of Trace Engineering? | Competing definitions are editorial/methodological |
| HUM-003 | Should “Founding Reference Case 001” be public display terminology? | The baseline directive and current case ID need an approved mapping |
| HUM-004 | Which evidence level may be called “confirmed public evidence”? | Determines public claim strength |
| HUM-005 | Which historical documents should be marked superseded? | Requires preservation and publication policy |
| HUM-006 | Which LinkedIn, GitHub and contact destinations are official? | Repository must not invent identities |
| HUM-007 | Is `FOLLOW-THE-FLOW` still an approved campaign URL? | Coupon and commercial state are external and temporal |
| HUM-008 | Which method/glossary versioning scheme should be adopted? | Establishes durable citation and governance |

## Hypotheses deliberately not promoted

- The LabLog drift may be caused by an older deployment, but the cause is not
  proven.
- The incorrect `createdAt` may originate in any technical layer; no layer is
  confirmed.
- Payload tracing may improve comprehension; no repository metric proves the
  effect.
- Search engines may index the site; configured indexability is not indexation.
