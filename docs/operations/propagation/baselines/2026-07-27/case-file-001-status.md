# HORA.city — Founding Reference Case 001 Status

Baseline: 27 July 2026.

Official baseline treatment:

**Payload Journey LAB — Founding Reference Case 001**

Repository case ID: `RPJ-HORA-001`.

## Lifecycle classification

**Active investigation**

The accessible repository explicitly records “Investigation in progress” and
“Mapear”. It also records that the origin, responsible layer, restoration and
validation are not confirmed. No evidence supports restoration in progress,
verification in progress or closure.

## Evidence classification

| Statement/artefact | Classification | Evidence |
|---|---|---|
| A case identified as `RPJ-HORA-001` exists in the site content | Confirmed repository evidence | `content/hora-city.ts:11-24`; `content/cases.ts:57-58` |
| The associated project is named HORA.city | Confirmed repository evidence | Same |
| The recorded anomaly is incorrect `createdAt` | Confirmed documentary fact | `content/hora-city.ts:17`; `content/cases.ts:65-71` |
| `HeartCreated` is the recorded associated payload | Confirmed documentary fact | `content/hora-city.ts:18`; `content/cases.ts:62-65` |
| Reverse Payload Journey is the recorded method | Confirmed documentary fact | `content/hora-city.ts:19` |
| Track to Origin is the recorded mission | Confirmed documentary fact | `content/hora-city.ts:20` |
| The underlying runtime anomaly occurred as described | Not yet independently determined | No trace, payload snapshot or reproduction |
| The temporal authority is unknown | Confirmed current investigation state | `content/hora-city.ts:21`; `content/cases.ts:86-100` |
| The payload path may reveal the divergence | Hypothesis | `content/cases.ts:90-94` |
| Loss of structural visibility may have hindered explanation | Hypothesis | `content/cases.ts:90-94` |
| A restoration exists | Not determined / not located | `content/cases.ts:100-108` |
| A restoration has been implemented | Not determined; no evidence | No HORA codebase or implementation artefact |
| A restored outcome has been verified | Not determined; no evidence | No replay/test/runtime record |

## Files, pages and documents located

### Current source

- `content/hora-city.ts` — case identity, public narrative, facts, omissions and
  current status.
- `content/cases.ts` — case record, evidence records, hypotheses, unknowns,
  limitations and prohibited claims.
- `content/lab-definitions.ts` — qualified conceptual HORA.city Send Heart
  examples.
- `content/methods.ts` — RPJ, Track to Origin, protocol and checkpoint concepts.
- `content/payload-journey-lab.ts` — institutional context and case summaries.
- `README.md` — repository-level case summary.
- `app/cases/page.tsx` and `components/sections/CasesPageSections.tsx` — public
  case presentation.

### Relevant documentation collections

- `docs/sprints para v3/` — evidence/provenance decisions and case presentation
  history.
- `docs/homepage-refactor/` — case content inventory and screenshots.
- `docs/prompts/04-study-case.md` — HORA.city described as the founding real
  case.
- `docs/files/` — proposed future Case File/evidence structures.

These documents are about the site, content policy and desired investigation
structure. They are not HORA.city runtime evidence.

## Incorrect `createdAt` anomaly

Repository references were located in 13 files, totaling 25 matches in the
baseline term scan. The current primary sources are:

- `content/hora-city.ts`;
- `content/cases.ts`;
- `README.md`.

The current public statement is that a newly created Heart displayed temporal
information divergent from expected behavior. The exact value, timestamp,
timezone, database representation and reproduction steps are not present.

## `HeartCreated`

The term appears in 14 files with 34 matches. In current case content it is the
associated/primary payload. The repository does not provide:

- payload schema;
- sample payload;
- producer or consumer code;
- event version;
- correlation ID;
- serialization format;
- persisted representation.

Therefore `HeartCreated` is a confirmed documentary association, not a verified
runtime snapshot.

## Checkpoint coverage

| Checkpoint | Current evidence state |
|---|---|
| User/UI input | Conceptual flow only; no case artefact |
| Application event/structured payload | Conceptual only |
| Request | Conceptual only |
| API/application boundary | Conceptual only |
| Domain decision | Conceptual Send Heart model; actual implementation not verified |
| Repository/persistence | Conceptual only |
| Database | No evidence |
| Response | Conceptual only |
| Projection | Conceptual only |
| Renderer/UI output | Anomaly narrated; no screenshot or trace |

The nine-stage Payload Journey demonstration visible on the site is pedagogical.
It must not be cited as the observed HORA.city trace.

## Existing evidence records

### EVD-HORA-DOC-001

An internal editorial case record. It supports the existence of a documented
case identity, anomaly, payload association and open state. Its own limitations
state that it has no log, trace, checkpoint or publishable execution.

### EVD-HORA-DOC-002

The repository presentation/README. It repeats the same identity and question.
It is not independent verification and contains no technical behavior artefact.

## Payload snapshots, diagrams and LabLog

- Payload snapshots: none found.
- Case-specific technical diagrams: none found.
- General Payload Journey/USMT diagrams: present, but pedagogical.
- Case-specific LabLog entries: zero.
- Public LabLog entries of any kind in current dataset: zero.
- Public live LabLog route: observed, but empty and divergent from current branch.

## Relationships to LAB methods

| Method/concept | Relationship | Evidence level |
|---|---|---|
| Payload Journey | General flow-following basis | Conceptual |
| USMT | Expected-model reference | Conceptual; no case model file |
| Reverse Payload Journey | Recorded case method | Documentary |
| Track to Origin | Recorded case mission | Documentary |
| Operational Payload Path | Intended output | Missing |
| Track Mode | Investigation practice context | Conceptual |
| Protocol | Case recorded at Mapear | Documentary |
| Trace Engineering | Umbrella capabilities/practice | Conceptual and terminologically unresolved |

No `SMT Core` relationship was located in the accessible repository.

## Findings, hypotheses and restoration

### Confirmed findings

Only repository/documentary findings can be confirmed:

1. the case is documented;
2. the anomaly and payload association are consistently recorded;
3. the investigation remains open;
4. technical evidence artefacts are absent from the accessible repository;
5. no restoration or verification record is accessible.

### Interpretations

- HORA.city is the internal reference context from which the LAB narrative and
  methods developed.
- The current public corpus is sufficient to describe an investigation
  question, not a completed technical investigation.

### Hypotheses

- the temporal authority remains to be located;
- tracing the payload may locate semantic or temporal divergence;
- rapid codebase growth may have reduced structural observability.

### Proposed restoration

No concrete code-level restoration proposal was found.

### Implemented restoration

None evidenced.

### Verified outcome

None evidenced.

## Missing investigation artefacts

Critical missing artefacts:

1. dated Case Brief;
2. exact HORA.city repository/branch/SHA;
3. sanitized anomaly reproduction;
4. expected-versus-observed record;
5. payload schema and safe snapshot;
6. Operational Payload Path;
7. checkpoint plan;
8. request/application/domain/repository/database/response/projection/UI captures;
9. trace/correlation identity;
10. hypothesis register tied to evidence;
11. detection report;
12. temporal-authority finding;
13. restoration proposal;
14. implementation diff/commit;
15. validation plan and replay;
16. verified outcome;
17. dated timeline and investigator sign-off.

## Publication and privacy risks

- User, Heart, location, device or database identifiers may be sensitive.
- Raw geolocation and production payloads must not be published.
- Connection strings, tokens, private repository paths and account identifiers
  must be excluded.
- The case scale and anomaly are self-reported in the accessible source.
- “Real case” proves internal application context, not method efficacy.
- “Confirmed evidence” must not imply independent or runtime verification.

Sanitization should preserve field names, types, ordering, causal transitions and
timestamps only to the minimum resolution required, replacing identifiers and
location data.

## Edition readiness

### Executive Case Dossier

Already available:

- case identity;
- high-level anomaly;
- associated payload;
- method and mission;
- current open status;
- limitations and prohibited claims.

Missing:

- dates;
- technical evidence thumbnail/excerpt;
- bounded finding;
- restoration/verification outcome;
- signed provenance.

Assessment: **partially supportable**, but it must be labeled active/incomplete.

### Full Technical Investigation Record

Already available:

- investigation question;
- hypotheses and unknowns;
- conceptual method context.

Missing:

- virtually all runtime, source, checkpoint, causal and restoration artefacts.

Assessment: **not currently supportable**.

### Evidence Repository

Already available:

- two documentary record IDs.

Missing:

- downloadable sanitized source documents;
- technical captures;
- hashes, timestamps, provenance, redaction log and chain of custody.

Assessment: **not currently supportable**.

### Teaching Edition

Already available:

- pedagogical flow;
- method explanations;
- case narrative;
- explicit limitations.

Missing:

- safe technical excerpts;
- exercise dataset;
- instructor notes;
- verified answer path;
- separation of conceptual and observed checkpoints;
- rights/privacy approval.

Assessment: **outline supportable; complete teaching edition not supportable**.

## Closure criterion

The case must remain **active investigation** until the repository or an approved
evidence store contains:

- a reproducible anomaly;
- an evidence-backed origin/authority finding;
- a documented restoration;
- verification through the same bounded flow;
- human approval that sensitive data is sanitized.

Evidence file:
[`evidence/case-file-001/evidence-assessment.md`](evidence/case-file-001/evidence-assessment.md).
