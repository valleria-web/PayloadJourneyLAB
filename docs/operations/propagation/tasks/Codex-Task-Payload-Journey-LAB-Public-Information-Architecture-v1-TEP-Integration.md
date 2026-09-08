# Codex Task — Payload Journey LAB Public Information Architecture v1 + TEP Integration

## Context

Payload Journey LAB now has:

* a governed documentation system;
* Semantic Identity Charter v1.0;
* AI Welcome v1.0.1;
* canonical method taxonomy;
* public Payload Journey and USMT pages;
* public Software System Investigation and protocol pages;
* active Founding Reference Case 001 — HORA.city;
* a Search Question Map with 30 searchable questions and 12 thematic clusters.

The next propagation task is:

**Define the public information architecture of Payload Journey LAB.**

This task must organize the public website around clear semantic entities, canonical URLs, reader questions, lifecycle status, CTAs and internal-link relationships.

It must also introduce the **Trace Engineer Protocol (TEP)** into the public conceptual architecture without presenting it as a finished public product, standard, certification or downloadable artifact.

---

# Primary Objective

Create and implement **Payload Journey LAB Public Information Architecture v1.0**.

The architecture must answer:

```text
What does each public page represent?
Which entity owns each canonical URL?
What question does the page answer?
What lifecycle does the entity currently have?
Where should the reader go next?
Which concepts deserve dedicated pages?
Which concepts should remain hubs, indexes, redirects or reserved future routes?
```

The intended cognitive progression is:

```text
PROBLEM
   ↓
PRACTICE / ORIENTATION
   ↓
METHOD / INSTRUMENT
   ↓
PROTOCOL
   ↓
CASE / EVIDENCE
   ↓
LEARNING
```

Do not organize the public site merely as a flat list of methods.

---

# Canonical Sources

Before changing anything, inspect:

```text
docs/governance/semantic-identity/semantic-identity-charter-v1.0.md
docs/governance/README.md
docs/methods/README.md
docs/cases/RPJ-HORA-001/README.md
docs/README.md
README.md

content/ai-welcome.ts
content/methods.ts
content/cases.ts
content/hora-city.ts
content/routes.ts
content/site.ts
content/evidence.ts
content/case-identities.ts
```

Also inspect all current public routes and navigation before implementation.

Do not use archive documents as current semantic authority.

---

# Approved Public Architecture Decisions

Use these decisions as the starting architecture.

## KEEP

### `/payload-journey`

Entity:

**Payload Journey**

Role:

Canonical method page.

Primary question:

**How can I follow an operation through its representations, layers, decisions, states and effects?**

Primary CTA:

**Explore the flow / apply Payload Journey**

---

### `/usmt`

Entity:

**USMT — Universal System Modeling Template**

Role:

Canonical modeling-method page.

Lifecycle:

**Canonical within Payload Journey LAB**

Primary question:

**What should happen for the modeled system to remain valid?**

Primary CTA:

**Model the expected system**

---

### `/investigation`

Entity:

**Software System Investigation**

Role:

Primary practice/orientation page.

Primary question:

**How do I investigate a software system before modifying it?**

Primary CTA:

**Explore Trace Engineering and the investigation protocol**

---

### `/method`

Entity:

**Methods Hub**

Role:

Taxonomy and relationship hub.

It must continue to explain:

```text
Software System Investigation
→ broader practice

Trace Engineering
→ developing investigative practice

Trace Engineer
→ developing investigative function/profile

Methods / instruments
→ answer specific investigative questions

Protocol
→ structures investigation progression

Evidence
→ supports or rejects bounded claims
```

Do not turn `/method` into a duplicate of the dedicated canonical pages.

---

### `/protocol`

Role:

Public orientation to the LAB investigation procedure.

Important:

Do **not** automatically equate the current public four-phase explanatory procedure with the full internal TEP state model.

The public protocol page may explain investigation progression while TEP remains a distinct developing protocol artifact.

---

### `/cases`

Role:

Case index / evidence entry surface.

---

### `/lab-definitions`

Role:

Canonical public glossary/reference page.

Do not create duplicate glossary content.

---

### `/ai-welcome`

Role:

Machine-oriented and human-readable semantic orientation.

---

### `/lab`

Role:

LAB identity, mission, origin and author/founder context.

---

### `/learn`

Role:

Learning progression and primary bridge to formal training.

---

# CREATE — Dedicated Canonical Pages

Create dedicated canonical public pages for the following entities using only current approved sources.

Do not invent methodology.

---

## 1. `/payload-tracing`

Entity:

**Payload Tracing**

Page role:

Conceptual/practical entry point.

Primary question:

**What is payload tracing and what does following a payload reveal about a software operation?**

Clarify that:

```text
Payload Tracing
!= Payload Journey
```

Payload Tracing is the activity/capability of following operational representations through the system.

Payload Journey is a structured LAB method for following an operation through representations, layers, interpretations, decisions, states and effects.

Do not claim that Payload Journey invented tracing.

Primary CTA:

**Explore Payload Journey**

Destination:

`/payload-journey`

Secondary CTA:

**Explore Software System Investigation**

Destination:

`/investigation`

---

## 2. `/reverse-payload-journey`

Entity:

**Reverse Payload Journey**

Lifecycle:

Current LAB investigation method.

Primary question:

**How do I investigate from an observable anomaly toward an evidence-supported origin?**

Preserve these limits:

* reverse order does not itself prove causality;
* symptom is not automatically origin;
* associated payload is not automatically cause;
* origin requires evidence.

Primary CTA:

**See the investigation protocol**

Destination:

`/protocol`

Secondary CTA:

**Examine the HORA.city case**

Destination:

current case destination.

---

## 3. `/operational-payload-path`

Entity:

**Operational Payload Path**

Page role:

Investigation mapping instrument.

Primary question:

**What is the probable or confirmed operational path of this payload or operation?**

The page must distinguish:

```text
expected
probable
observed
confirmed
unknown
```

Do not present a probable path as runtime-confirmed.

Primary CTA:

**Explore the investigation methods**

Destination:

`/method`

Secondary CTA:

**See how a case is mapped**

Destination:

HORA.city case if current public evidence supports the link.

---

## 4. `/track-to-origin`

Entity:

**Track to Origin**

Lifecycle:

Developing/canonical investigative mission or practice according to current governance source.

Primary question:

**Where does this value or decision originate, and who has authority over it?**

Explicitly distinguish:

```text
where a value appears
where a value changes
where a value is decided
where authority resides
```

Primary CTA:

**Explore an investigation**

Destination:

`/investigation`

Secondary CTA:

HORA.city case.

---

## 5. `/trace-engineering`

Entity:

**Trace Engineering**

Lifecycle:

**Developing investigative practice**

Use the approved ontology:

**Trace Engineering is a developing investigative practice composed of capabilities for tracing operations, locating decisions, comparing expected models with execution, and producing verifiable explanations.**

Primary question:

**What is Trace Engineering and which capabilities compose it?**

The page must explain:

### What it is

Developing investigative practice.

### What capabilities compose it

Use only currently approved capability sources.

### How it relates to Software System Investigation

Trace Engineering operates inside the broader Software System Investigation context.

### How it relates to Trace Engineer

```text
Trace Engineering
→ developing investigative practice

Trace Engineer
→ developing investigative function/profile applying those capabilities
```

### What it is not

* not an established profession;
* not a recognized occupational standard;
* not a certification;
* not an externally standardized discipline.

### Relationship to TEP

Introduce the Trace Engineer Protocol explicitly.

Primary CTA:

**Explore Software System Investigation**

Destination:

`/investigation`

Secondary CTA:

**See the investigation protocol**

Destination:

`/protocol`

---

# TEP — Trace Engineer Protocol

## Approved Public Identity

Introduce the canonical public term:

# Trace Engineer Protocol (TEP)

Use wording equivalent to:

**Trace Engineer Protocol (TEP) is a developing protocol artifact within Payload Journey LAB for structuring the progression of a software system investigation through explicit states, gates, evidence and validation.**

The conceptual relationship is:

```text
Trace Engineering
→ developing investigative practice

Trace Engineer
→ developing investigative function/profile

Trace Engineer Protocol (TEP)
→ developing protocol artifact used to structure an investigation
```

---

# TEP Public-Lifecycle Guardrail

TEP is **not yet a fully public artifact**.

Therefore:

* mention its existence;
* describe its purpose;
* identify it as developing;
* connect it to Trace Engineering and Trace Engineer;
* explain that internal materials remain controlled/restricted where appropriate.

Do not:

* publish internal templates;
* expose restricted documents;
* expose unpublished implementation details;
* claim external validation;
* call it an industry standard;
* call it certification;
* claim the protocol is complete;
* claim all lifecycle states are implemented unless public canonical evidence supports that;
* claim HORA.city has completed the protocol.

---

# TEP Dedicated Route Decision

Reserve:

```text
/trace-engineer-protocol
```

Decision:

**RESERVE — DO NOT PUBLISH DEDICATED PAGE YET**

Record the route in the Public Information Architecture document as a future canonical URL.

Do not:

* create an indexable page;
* add it to sitemap;
* add it as a primary navigation route;
* redirect users to a blank page.

For now, TEP should be publicly discoverable through:

```text
/trace-engineering
/protocol
/investigation
/method
```

and, if semantically natural, one concise mention on the homepage.

---

# TEP Internal State Model

The developing TEP conceptual lifecycle may exist internally as:

```text
Opened
→ Frozen
→ Mapped
→ Detected
→ Restored
→ Validated
→ Closed
```

However, before publishing this lifecycle:

1. inspect the current canonical TEP source;
2. verify its approved public status;
3. distinguish conceptual lifecycle from implemented executable profile;
4. do not infer implementation maturity.

If the current repository does not contain an approved public source for the full lifecycle, do not publish the state machine merely because it appears in task context.

The public site may state that TEP structures progression using explicit states, gates, evidence and validation without enumerating internal lifecycle details.

---

# Case Architecture

## KEEP

`/cases`

as the case index.

## Evaluate CREATE

Preferred canonical individual case route:

```text
/cases/rpj-hora-001
```

Create it only if the current canonical content model provides enough public evidence to render a useful, bounded page without inventing information.

If created, it must state prominently:

```text
Founding Reference Case 001 — HORA.city
Investigation ID: RPJ-HORA-001
Lifecycle: Active investigation
Relationship: founder-owned internal reference investigation
```

Preserve:

```text
HeartCreated
→ Documentary Evidence association

Runtime confirmation
→ not publicly established

causal origin
→ not established

temporal authority
→ not established

restoration
→ not established

verification
→ not established
```

If current evidence is insufficient for a dedicated useful page, record the URL as **RESERVE** instead.

Do not manufacture content simply to fill the route.

---

# Papers Architecture

Reserve:

```text
/papers
```

Decision:

**RESERVE**

Do not publish an empty index page solely to satisfy the architecture.

When the first genuine paper exists, expected architecture becomes:

```text
/papers
/papers/<paper-slug>
```

Do not invent papers or white papers.

---

# Glossary Architecture

Canonical destination remains:

```text
/lab-definitions
```

Do not duplicate it under `/glossary`.

Optionally evaluate:

```text
/glossary → permanent redirect → /lab-definitions
```

but only implement the redirect if it improves navigational discovery and does not introduce unexpected route behavior.

The canonical URL must remain `/lab-definitions`.

---

# Author Architecture

Current author destination:

```text
/lab#founder
```

Decision:

**KEEP**

Reserve future entity route:

```text
/author/valeria-dos-santos-reiser
```

Do not create the dedicated author page yet unless current papers, citations or publication architecture makes it necessary.

Do not overstate professional or academic titles.

---

# Semantic Reconciliation Required

Before creating derivative pages, reconcile current public Trace Engineering wording.

The canonical ontology is:

**Trace Engineering is a developing investigative practice composed of capabilities for tracing operations, locating decisions, comparing expected models with execution, and producing verifiable explanations.**

Inspect at minimum:

```text
homepage
/lab-definitions
/method
/investigation
/ai-welcome
repository README
```

Current public surfaces must not disagree materially about:

* Trace Engineering lifecycle;
* Trace Engineer lifecycle;
* profession status;
* evidence model;
* HORA.city evidence boundaries.

Prefer one typed canonical source reused across pages.

Do not maintain manually divergent definitions.

---

# Public Information Architecture Data Model

Create a typed architecture model if compatible with the current content architecture.

Suggested file:

```text
content/public-information-architecture.ts
```

Each entity should expose fields equivalent to:

```ts
{
  id,
  name,
  canonicalPath,
  decision,
  lifecycle,
  pageRole,
  primaryQuestion,
  primaryAudience,
  primaryCta,
  primaryCtaHref,
  secondaryCta?,
  secondaryCtaHref?,
  inboundLinks,
  outboundLinks,
  implementationPriority
}
```

Allowed `decision` values:

```text
KEEP
CREATE
RESERVE
REDIRECT
DO_NOT_CREATE
```

Do not overengineer.

The purpose is to prevent architecture decisions from being scattered across components.

---

# Documentation Deliverable

Create:

```text
docs/product/website/information-architecture/
public-information-architecture-v1.0.md
```

This is the formal deliverable for the agenda task.

Use appropriate metadata, for example:

```yaml
---
document_id: PJL-PRODUCT-WEB-IA-001
title: Payload Journey LAB — Public Information Architecture
version: 1.0
status: stable
authority: product
document_type: information-architecture
owner: Payload Journey LAB
---
```

The document must include a complete matrix:

```text
Entity
Canonical URL
Decision
Lifecycle
Page role
Primary question
Primary audience
Primary CTA
CTA destination
Inbound links
Outbound links
Implementation priority
```

Include all of:

* Payload Journey
* Payload Tracing
* Software System Investigation
* USMT
* Reverse Payload Journey
* Operational Payload Path
* Track to Origin
* Trace Engineering
* Trace Engineer
* Trace Engineer Protocol (TEP)
* Methods Hub
* Protocol
* Case Files
* RPJ-HORA-001
* Papers
* LAB Definitions
* AI Welcome
* LAB
* Author
* Learn

Trace Engineer itself does not necessarily need its own URL.

Its entity relationship must still be explicit.

---

# Internal Linking Architecture

Implement contextual links.

Avoid indiscriminate cross-linking.

Preferred progression examples:

```text
Payload Tracing
→ Payload Journey

Payload Journey
→ Methods / Learn

Software System Investigation
→ Trace Engineering
→ Protocol

Trace Engineering
→ Software System Investigation
→ Protocol / TEP orientation

Reverse Payload Journey
→ Protocol
→ HORA.city

Operational Payload Path
→ Reverse Payload Journey / Case

Track to Origin
→ Investigation / Case

Case
→ related methods
→ Learn

Learn
→ course
```

The LAB should behave as a knowledge system, not as a direct-to-Udemy funnel.

---

# CTA Principle

Do not use the same CTA everywhere.

Match the CTA to the reader's cognitive state.

Examples:

```text
Concept
→ Explore the related method

Method
→ Apply / inspect protocol

Protocol
→ Examine a case

Case
→ Examine evidence / related method

Learning
→ Continue to course
```

The Udemy CTA should remain strongest in the learning context.

---

# Homepage Integration

Do not redesign the homepage.

Make only small semantic/navigation changes where useful.

At minimum evaluate whether the homepage should expose:

* Payload Tracing;
* Trace Engineering;
* TEP as developing protocol;
* existing Methods;
* Case;
* Learn.

A TEP mention should be concise.

Example approved orientation:

**TEP — Trace Engineer Protocol**
Developing protocol for structuring investigation progression through states, gates, evidence and validation.

Do not place restricted details on the homepage.

---

# Navigation

Do not overload primary navigation.

Prefer maintaining the current compact navigation/hub strategy.

New canonical pages can be discovered via:

* `/method`;
* `/investigation`;
* contextual links;
* footer;
* sitemap.

Do not place every method in the global navigation.

---

# Metadata

For every new public canonical page:

* unique title;
* unique meta description;
* canonical URL;
* Open Graph;
* Twitter metadata if architecture supports it;
* appropriate structured data;
* indexable unless explicitly reserved;
* sitemap entry;
* contextual internal links.

Do not create FAQ schema unless visible FAQ content exists and exactly matches the structured data.

---

# Structured Data

Reuse existing structured-data architecture.

Evaluate appropriate types only.

Potentially:

```text
WebPage
DefinedTerm
CreativeWork
Person
Organization
```

Use valid schema types.

Do not invent a schema.org type for:

* Trace Engineering;
* TEP;
* Evidence Model.

Do not claim standards, occupations or certifications through structured data.

---

# Search Architecture

The future `/guides/` layer from the Search Question Map should lead into these canonical pages.

Do not implement the 30 guides as part of this task.

This architecture must make them possible later.

Expected relation:

```text
Search question
→ /guides/<problem>
→ canonical concept/method page
→ case / learning
```

---

# Evidence and Lifecycle Guardrails

Preserve the Payload Journey LAB Evidence Model.

Do not upgrade claims based on page creation.

A new page does not increase evidence level.

Specifically:

```text
publication
!= runtime evidence

documentation
!= verification

internal application
!= external validation

canonical within LAB
!= industry standard
```

---

# Tests

Add or extend verification for the public information architecture.

At minimum verify:

## Routes

* existing KEEP routes remain valid;
* all approved CREATE routes render;
* reserved routes do not accidentally render/index;
* `/trace-engineer-protocol` is not in sitemap while reserved;
* `/papers` is not published empty while reserved.

## Semantics

* Trace Engineering lifecycle correct;
* Trace Engineer not an established profession;
* TEP contains `developing protocol` language;
* TEP not presented as certification or standard;
* TEP restricted/non-public artifact boundary preserved;
* USMT remains canonical within LAB;
* HORA.city remains active;
* HeartCreated remains documentary association unless evidence changed.

## Links

* all internal links resolve;
* no orphan new canonical page;
* method hub points to new canonical pages;
* new canonical pages link back into the architecture.

## Metadata

* unique titles;
* unique descriptions;
* correct canonicals;
* sitemap only contains public canonical routes.

## Existing system

Run:

* TypeScript;
* production build;
* existing verification suites;
* AI Welcome verifier;
* documentation verifier;
* root README semantic verifier;
* navigation/discovery verifier;
* case/evidence verifier;
* method/practice verifier.

---

# Documentation Record

Create an implementation record under:

```text
docs/product/website/information-architecture/
```

Suggested:

```text
2026-09-08-public-information-architecture-v1-implementation.md
```

Use the actual implementation date.

Record:

* baseline routes;
* architecture decisions;
* routes created;
* routes reserved;
* redirects;
* TEP public integration;
* semantic reconciliations;
* navigation changes;
* metadata changes;
* tests;
* unresolved human decisions.

---

# Scope Boundaries

Do not:

* rewrite the entire homepage;
* redesign the site visually;
* publish internal TEP documents;
* publish internal USMT/TEP implementation artefacts;
* claim full TEP implementation;
* claim TEP certification;
* claim Trace Engineer profession;
* create empty Papers pages;
* invent case evidence;
* close HORA.city;
* create all 30 search guides;
* change unrelated product/course content;
* commit;
* push.

---

# Final Report Required

Return:

## 1. Architecture summary

Explain the implemented public information architecture.

## 2. IA matrix

Provide the path to:

`public-information-architecture-v1.0.md`

## 3. Existing routes preserved

List KEEP routes.

## 4. New canonical routes

List CREATE routes actually implemented.

## 5. Reserved routes

Confirm at least:

```text
/trace-engineer-protocol
/papers
```

and their non-indexed status.

## 6. TEP integration

Report exactly:

* where TEP is now mentioned;
* its public definition;
* lifecycle language;
* restricted-artifact guardrail.

## 7. Trace Engineering reconciliation

Report all surfaces reconciled to the approved ontology.

## 8. Case architecture

Report whether `/cases/rpj-hora-001` was created or reserved, and why.

## 9. Internal linking

Report the implemented reader progression.

## 10. Metadata and sitemap

Report new entries and reserved exclusions.

## 11. Verification

Report all relevant tests.

## 12. Files changed

List created and modified files.

## 13. Unresolved human decisions

Do not resolve by inference.

## 14. Git status

Confirm:

* no commit;
* no push;
* no unrelated changes.

---

# Definition of Done

The task is complete when an unfamiliar human or AI agent can enter the site and distinguish:

```text
Software System Investigation
→ broader investigative practice

Trace Engineering
→ developing investigative practice

Trace Engineer
→ developing investigative function/profile

TEP
→ developing protocol artifact

Payload Journey / USMT / RPJ / OPP / Track to Origin
→ methods and investigative instruments

Protocol
→ investigation progression

Cases
→ bounded evidence and application

Learn
→ formative progression
```

and when every priority public entity has:

```text
canonical URL or explicit reserved URL
clear lifecycle
clear page purpose
primary question
appropriate CTA
defined internal-link relationships
```

without overstating maturity, evidence, validation or professional status.

## Execute without commit or push.
