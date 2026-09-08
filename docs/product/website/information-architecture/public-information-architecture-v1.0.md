---
document_id: PJL-PRODUCT-WEB-IA-001
title: Payload Journey LAB — Public Information Architecture
version: 1.0
status: stable
authority: product
document_type: information-architecture
owner: Payload Journey LAB
last_reviewed: 2026-09-08
---

# Public Information Architecture v1.0

Problem → practice / orientation → method / instrument → protocol → case / evidence → learning.

Semantic authority: [Charter](../../../governance/semantic-identity/semantic-identity-charter-v1.0.md), current content/methods.ts, content/evidence.ts, content/cases.ts and the [active case record](../../../cases/RPJ-HORA-001/README.md). TEP public introduction is authorized by the [task](../../../operations/propagation/tasks/Codex-Task-Payload-Journey-LAB-Public-Information-Architecture-v1-TEP-Integration.md). Archive material is not current authority.

The typed source is content/public-information-architecture.ts. Inbound/outbound columns describe contextual reader progression (not every shared footer link). Reserved rows describe future purpose and current alternative CTAs; their URLs are not public links. CREATE means implemented in this version. Trace Engineer is a section owned by Trace Engineering, not a separate page.

| Entity | Canonical URL | Decision | Lifecycle | Page role | Primary question | Primary audience | Primary CTA | CTA destination | Inbound links | Outbound links | Implementation priority |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Payload Journey | /payload-journey | KEEP | Canonical within Payload Journey LAB | Canonical method | How can I follow an operation through its representations, layers, decisions, states and effects? | Students, developers and software investigators | Explore the flow / apply Payload Journey | /payload-journey#demo | /payload-tracing, /method | /method, /learn | P1 |
| Payload Tracing | /payload-tracing | CREATE | Practical orientation | Conceptual/practical entry | What is payload tracing and what does following a payload reveal about a software operation? | Students, developers and software investigators | Explore Payload Journey | /payload-journey | /method | /payload-journey, /investigation | P1 |
| Software System Investigation | /investigation | KEEP | Broader investigative practice | Practice / orientation | How do I investigate a software system before modifying it? | Students, developers and software investigators | Explore Trace Engineering and the investigation protocol | /trace-engineering | /method, /trace-engineering | /trace-engineering, /protocol | P1 |
| USMT — Universal System Modeling Template | /usmt | KEEP | Canonical within Payload Journey LAB | Modeling method | What should happen for the modeled system to remain valid? | Students, developers and software investigators | Model the expected system | /usmt#usmt | /method | /payload-journey, /protocol | P1 |
| Reverse Payload Journey | /reverse-payload-journey | CREATE | Canonical investigation method within Payload Journey LAB | Investigation method | How do I investigate from an observable anomaly toward an evidence-supported origin? | Students, developers and software investigators | See the investigation protocol | /protocol | /method, /cases/rpj-hora-001 | /protocol, /cases/rpj-hora-001 | P1 |
| Operational Payload Path | /operational-payload-path | CREATE | Canonical investigation artifact within Payload Journey LAB | Investigation mapping instrument | What is the probable or confirmed operational path of this payload or operation? | Students, developers and software investigators | Explore the investigation methods | /method | /method | /method, /reverse-payload-journey, /cases/rpj-hora-001 | P1 |
| Track to Origin | /track-to-origin | CREATE | Canonical investigative mission within Payload Journey LAB | Origin and authority mission | Where does this value or decision originate, and who has authority over it? | Students, developers and software investigators | Explore an investigation | /investigation | /method, /cases/rpj-hora-001 | /investigation, /cases/rpj-hora-001 | P1 |
| Trace Engineering | /trace-engineering | CREATE | Developing investigative practice | Practice and capabilities | What is Trace Engineering and which capabilities compose it? | Students, developers and software investigators | Explore Software System Investigation | /investigation | /method, /investigation, /protocol | /investigation, /protocol | P1 |
| Trace Engineer | /trace-engineering#trace-engineer | DO_NOT_CREATE | Developing investigative function/profile | Entity section within practice page | Who applies Trace Engineering capabilities? | Students, developers and software investigators | Explore the broader practice | /investigation | /trace-engineering | /investigation | P1 |
| Trace Engineer Protocol (TEP) | /trace-engineer-protocol | RESERVE | Developing protocol artifact; not fully public | Future canonical protocol artifact | How does TEP structure investigation progression? | Students, developers and software investigators | Read public TEP orientation | /protocol#tep | None | /trace-engineering, /protocol, /investigation, /method | Future |
| Methods Hub | /method | KEEP | Current public hub | Taxonomy and relationship hub | Which practice, method or instrument answers my question? | Students, developers and software investigators | See the investigation protocol | /protocol | /, /investigation | /payload-tracing, /payload-journey, /usmt, /reverse-payload-journey, /operational-payload-path, /track-to-origin, /trace-engineering, /protocol | P1 |
| Protocol | /protocol | KEEP | Public four-phase orientation | Investigation progression | How should an investigation progress? | Students, developers and software investigators | Examine a case | /cases/rpj-hora-001 | /method, /investigation | /method, /trace-engineering, /cases/rpj-hora-001 | P1 |
| Case Files | /cases | KEEP | Current public index | Case index / evidence entry | What investigations and bounded evidence are available? | Investigators and evidence reviewers | Examine HORA.city | /cases/rpj-hora-001 | /, /protocol | /cases/rpj-hora-001, /method, /protocol | P1 |
| Founding Reference Case 001 — HORA.city | /cases/rpj-hora-001 | CREATE | Active investigation | Founder-owned internal reference investigation | What is documented and what remains unknown in RPJ-HORA-001? | Investigators and evidence reviewers | Examine documentary evidence | /cases/rpj-hora-001#evidence | /cases, /reverse-payload-journey, /track-to-origin, /operational-payload-path | /reverse-payload-journey, /track-to-origin, /learn, /cases | P1 |
| Papers | /papers | RESERVE | Awaiting first genuine paper | Future publication index | Which research papers are available? | Students, developers and software investigators | Explore current definitions | /lab-definitions | None | /lab-definitions | Future |
| LAB Definitions | /lab-definitions | KEEP | Canonical public reference | Glossary | What do LAB terms mean? | Students, developers and software investigators | Explore methods | /method | /ai-welcome, / | /method, /lab | P1 |
| AI Welcome | /ai-welcome | KEEP | Canonical public orientation | Machine and human semantic orientation | How should the LAB be represented accurately? | AI agents and human readers | Consult LAB Definitions | /lab-definitions | / | /lab-definitions, /method, /cases, /lab | P1 |
| LAB | /lab | KEEP | Current author-led LAB identity | Identity, mission, origin and founder | Who is behind the LAB and why does it exist? | Students, developers and software investigators | Explore methods | /method | / | /method, /investigation, /cases, /learn | P1 |
| Author | /lab#founder | KEEP | Creator and methodological direction | Founder context | Who created the LAB and USMT? | Students, developers and software investigators | Explore the LAB | /lab | /lab | /lab | P1 |
| Author future route | /author/valeria-dos-santos-reiser | RESERVE | Awaiting publication need | Future author entity page | Who authored these publications? | Students, developers and software investigators | Read founder context | /lab#founder | None | /lab#founder | Future |
| Learn | /learn | KEEP | Current learning progression; beta training | Learning and formal training bridge | How do I progress from tracing to investigation? | Students, developers and software investigators | Explore the course | /learn#formacao | /, /cases/rpj-hora-001 | /payload-journey, /cases, /method | P1 |
| Homepage | / | KEEP | Current public entry | Problem and orientation | Where should I begin? | Students, developers and software investigators | Explore Payload Journey | /payload-journey | None | /payload-journey, /method, /cases, /learn | P1 |
| Ecosystem | /ecosystem | KEEP | Current public orientation | Relationships and channels | How do LAB activities relate? | Students, developers and software investigators | Start learning | /learn | /lab | /learn, /cases, /lab | P1 |
| LabLog | /lablog | RESERVE | Feature flag disabled | Editorial surface held from publication | What is happening in the LAB? | Students, developers and software investigators | Explore cases | /cases | None | /cases | Future |
| Glossary alias | /glossary | DO_NOT_CREATE | No demonstrated navigation need | Avoid duplicate glossary | Where are definitions? | Students, developers and software investigators | Consult canonical definitions | /lab-definitions | None | /lab-definitions | P1 |

## Publication and lifecycle decisions

TEP is a developing protocol artifact that structures progression through explicit states, gates, evidence and validation. It is publicly discoverable on /trace-engineering, /protocol, /investigation and /method. Internal materials remain controlled/restricted. No complete protocol, standard, certification, external validation, executable maturity or completed HORA.city protocol is claimed. The four-phase explanatory procedure is not equated to the complete internal TEP state model. No approved public lifecycle source was found; internal states are not enumerated.

/trace-engineer-protocol, /papers and /author/valeria-dos-santos-reiser remain reserved, without pages, navigation or sitemap entries. Papers await a genuine publication; future structure is /papers and /papers/<paper-slug>. Author context stays at /lab#founder. /glossary is not created or redirected because no navigational need is established. /lab-definitions retains canonical glossary ownership. /lablog retains its existing disabled publication flag.

RPJ-HORA-001 has sufficient documentary content for a useful bounded page: question, anomaly, expected and recorded behavior, documentary evidence, unknowns and next steps. It remains an active founder-owned internal reference investigation. HeartCreated is a Documentary Evidence association. Runtime confirmation, causal origin, temporal authority, restoration and verification are not publicly established. Page publication does not upgrade evidence.

The compact primary navigation is preserved. Method hub and contextual continuations discover new pages; new routes use existing SitePage, metadata, social metadata and WebPage JSON-LD. No FAQ schema is added. Homepage glossary summaries reuse the canonical developing-practice definition; existing Methods, Case and Learn entries provide progression without a redesign. A separate homepage TEP mention is unnecessary because its four orientation surfaces are discoverable through the hubs.

Future search guides should map /guides/<problem> → canonical concept or method → case / learning. No guides or paper placeholders are implemented. Udemy remains the learning destination through /learn; concept and method CTAs lead to investigation, methods and evidence.

Publication ≠ runtime evidence. Documentation ≠ verification. Internal application ≠ external validation. Canonical within LAB ≠ industry standard.

## Human decisions still required for future publication

Approval of a publicly releasable TEP artifact and lifecycle; first genuine paper; publication-driven author page need; new publishable runtime/verification evidence for HORA.city. This implementation does not resolve these by inference.
