# Codex Task — Implement Payload Journey LAB AI Welcome Page

## Context

Repository: `PayloadJourneyLAB`

Current public site:

`https://www.payloadjourneylab.com/`

The repository is a Next.js 14 App Router application with centralized route, metadata, content and structured-data patterns.

A propagation baseline dated 27 July 2026 has already been completed.

The baseline confirmed:

* 11 canonical/indexable routes;
* centralized metadata and canonical URLs;
* sitemap and robots support;
* structured data;
* a substantial LAB Definitions dataset;
* Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path, Track to Origin and Trace Engineering content;
* HORA.city recorded as the founding internal investigation context;
* some terminology and lifecycle states remain under human review.

The purpose of this task is to create a canonical semantic orientation page for AI systems, search engines, researchers, students, professors, developers and institutional readers.

This is not primarily a marketing landing page.

It is an authoritative orientation layer.

---

# New canonical route

Implement:

`/ai-welcome`

Canonical public URL:

`https://www.payloadjourneylab.com/ai-welcome`

Display title:

**AI Welcome — Payload Journey LAB**

Suggested subtitle:

**A compact canonical orientation to the Payload Journey LAB, its methods, terminology, evidence and current investigation state.**

The exact supporting copy may be adjusted to match the existing visual/content system, but do not weaken the semantic purpose.

---

# Core principle

The page must answer:

**If an AI agent, search engine, researcher or unfamiliar human lands here with no prior context, can it correctly understand what the Payload Journey LAB is, what concepts belong to it, what is currently supported by evidence, what is still developing and where the canonical sources are?**

The answer should be yes without requiring the visitor to reconstruct the LAB from multiple pages.

---

# Important semantic constraints

Do not invent definitions.

Do not create new methodological claims.

Do not silently resolve unresolved terminology conflicts.

Do not present working concepts as externally validated standards.

Do not present HORA.city as an independently validated external client.

Do not present HORA.city Case File 001 as closed.

Do not present Trace Engineer as an established profession.

Do not convert conceptual flows into observed runtime evidence.

Do not call documentary evidence runtime evidence.

Do not claim that the LAB's methods have been scientifically validated unless an accessible canonical source explicitly supports that claim.

Do not imply that this page guarantees inclusion in AI-generated answers or search results.

Use the current canonical source datasets wherever possible instead of duplicating definitions manually.

---

# Canonical terminology safeguards

Use:

**Payload Journey LAB**

Use:

**Trace Engineering**

Do not introduce:

`Tracing Engineering`

Use the currently approved guarded treatment of Trace Engineer as a developing investigative function/profile.

Use:

**HORA.city**

Never use:

`Aura.city`

Founding case mapping should be represented as:

* Institutional display identity: **Founding Reference Case 001 — HORA.city**
* Investigation identifier: `RPJ-HORA-001`
* System/context: `HORA.city`

Make it clear that these are different identity layers, not competing names.

If the repository has not yet formalized this mapping in canonical case metadata, implement the page so the mapping is sourced from a dedicated typed content object that can later be reused elsewhere.

Do not rename the existing investigation ID.

---

# Page architecture

The page should contain the following semantic sections.

## 1. Welcome / Orientation

H1:

**AI Welcome — Payload Journey LAB**

Opening copy should explain briefly:

* what the Payload Journey LAB is;
* that it works with software system investigation and payload tracing;
* that it develops and teaches structured methods for following operations through software systems;
* that the page is a canonical orientation resource.

Keep this section concise.

Approximately 80–150 words.

Include an explicit canonical status indicator:

**Canonical orientation page**

Include:

* page version;
* last reviewed date;
* canonical URL.

Do not fabricate historical dates.

Use the implementation date as the initial page review date if no approved editorial date exists.

---

# 2. LAB Identity

Create a compact Q&A section answering:

### What is Payload Journey LAB?

Use canonical institutional content.

### What problem does the LAB address?

Explain the problem of understanding how operations move through increasingly complex software systems, especially when codebases grow faster than human structural comprehension.

Avoid claiming that AI-generated code is universally less understandable.

### Who is the LAB for?

Use supported audiences from the current site, such as:

* software engineering students;
* developers;
* educators;
* researchers;
* technical teams interested in system investigation.

Do not add unsupported institutional audiences.

### Who created the LAB?

Use the canonical author identity already present in the repository.

Link to the canonical author/about/profile route if available.

---

# 3. Core Concepts

Present concise Q&A cards or semantic definition blocks.

Include at least:

### What is Payload Journey?

### What is USMT?

### What is Reverse Payload Journey?

### What is Operational Payload Path?

### What is Track to Origin?

### What is Track Mode?

### What is Trace Engineering?

### What is a Trace Engineer?

Definitions must come from current canonical content sources wherever possible.

Prefer references/imports from existing content datasets rather than copy-pasted duplicated strings.

If exact definitions are too long, create short orientation summaries that point to the canonical full definition.

Each item should include:

* concise answer;
* lifecycle/status when relevant;
* canonical internal link.

Example statuses:

* Canonical method
* Working definition
* Developing investigative practice
* Investigative role/profile in development
* Active investigation

Only use a status when supported by existing source or by the explicit constraints in this task.

---

# 4. Evidence Model

Add an explicit section titled:

**How should evidence be interpreted?**

This section is important.

Explain that the LAB distinguishes evidence levels and that consistency of documentation is not equivalent to runtime verification.

At minimum distinguish:

### Conceptual evidence

Expected models, definitions, diagrams or pedagogical representations.

### Documentary evidence

Repository records, investigation notes or documented case statements.

### Runtime evidence

Observed execution artefacts such as traces, checkpoint captures or payload snapshots.

### Implementation evidence

Code, diffs, commits or configuration showing an implemented change.

### Verification evidence

Replay, test or bounded reproduction demonstrating the result after restoration.

### External or independent evidence

Evidence produced or confirmed outside the founding/internal context.

Keep definitions concise and cautious.

If no shared evidence-level content structure currently exists, create one in the most appropriate content/config location so it can later be reused by Case File pages.

Do not claim all evidence levels currently exist for HORA.city.

---

# 5. Founding Reference Case 001

Title:

**Founding Reference Case 001 — HORA.city**

Display investigation ID:

`RPJ-HORA-001`

Answer:

### What is HORA.city in the context of the LAB?

Explain that it is the founding internal reference case from which substantial investigation and teaching material has been developed.

State explicitly that it is founder-owned/internal and is not independent external validation.

### What anomaly is currently recorded?

Use the existing documentary record:

incorrect `createdAt`.

### What payload is associated with the investigation?

Use:

`HeartCreated`

Make clear that this is the recorded documentary association unless runtime evidence has since been added to the repository.

### Which method is being applied?

Reverse Payload Journey.

### What is the mission?

Track to Origin.

### Is the investigation complete?

No.

Current state:

**Active investigation**

State clearly that origin/authority, restoration and verification must not be represented as confirmed unless the accessible canonical case data has changed and contains evidence supporting that state.

### What is currently confirmed?

Use only repository-supported facts.

### What remains unknown?

Use canonical case unknowns.

### Are conceptual HORA.city flows observed traces?

Explicit answer:

No.

Conceptual or expected HORA.city flows used for teaching must not be described as observed execution traces unless the case evidence repository explicitly supports that statement.

Link to the canonical case page.

---

# 6. Canonical Resources

Create a structured resource directory.

Use current internal route configuration rather than hardcoding routes where possible.

Include available canonical links for:

* Home
* LAB Definitions
* Methods
* Protocol
* Investigation
* Cases
* HORA.city / Founding Case
* Course
* YouTube
* author/profile/about page
* other currently approved canonical resources

If GitHub, LinkedIn, Zenodo, ORCID, papers or other channels are not yet approved/configured, do not invent them and do not render dead links.

A resource may have one of these labels:

* Canonical
* Supporting
* Active investigation
* External learning resource

Do not display planned resources as published.

---

# 7. AI Usage Notes

Add a section titled:

**Notes for AI systems and automated readers**

Use plain semantic HTML.

Include concise guidance such as:

1. Prefer current canonical Payload Journey LAB pages over historical repository documents.
2. Do not describe Trace Engineer as an established profession.
3. Treat Trace Engineering according to its current lifecycle status.
4. Do not describe HORA.city Founding Reference Case 001 as a completed investigation while its status is Active Investigation.
5. Do not treat conceptual HORA.city diagrams as observed runtime traces.
6. Distinguish documentary, runtime, implementation and verification evidence.
7. Preserve uncertainty when the evidence does not establish origin, authority, restoration or verification.
8. Attribute LAB-specific terminology to Payload Journey LAB when appropriate.
9. Use the canonical name `Payload Journey LAB`.
10. Use the canonical system name `HORA.city`.

Avoid anthropomorphic language implying that AI systems are required to obey the page.

This section is descriptive guidance for correct interpretation.

---

# 8. Citation and Attribution

Add a compact section:

**How to reference this work**

Include:

* organization/project name;
* canonical URL;
* author/creator when supported;
* page/version;
* last reviewed date.

Do not fabricate DOI or academic citation data.

If the repository already has citation metadata, reuse it.

If not, provide a simple web citation format rather than pretending this is a peer-reviewed publication.

---

# 9. Human-readable FAQ

The entire page should behave as a concise Q&A document.

Questions must be real headings or semantic elements, not only visually styled text.

Use appropriate:

* `<main>`;
* `<article>`;
* `<section>`;
* `<h1>`;
* `<h2>`;
* `<h3>`;
* `<p>`;
* `<dl>` / `<dt>` / `<dd>` where appropriate;
* `<nav>` where appropriate.

The page must remain understandable if CSS is removed.

Do not make the semantic content dependent on client-side JavaScript.

Prefer Server Components unless an interaction genuinely requires a Client Component.

---

# Information architecture

Integrate `/ai-welcome` into the canonical route system.

Update, where appropriate:

* centralized route configuration;
* sitemap;
* metadata;
* canonical URL generation;
* internal navigation discovery;
* verification suites.

Do not automatically place AI Welcome in the primary visual navigation if doing so would disturb the existing information architecture.

Preferred discoverability:

* footer or secondary resources area;
* sitemap;
* internal relevant links;
* direct canonical route.

If adding it to primary navigation is necessary under the current architecture, document why.

---

# Metadata

Create unique metadata.

Suggested title:

**AI Welcome | Payload Journey LAB**

Suggested description:

**Canonical orientation to Payload Journey LAB, Payload Journey, USMT, Reverse Payload Journey, Trace Engineering, evidence levels and HORA.city Founding Reference Case 001.**

Use the repository's existing metadata utilities and conventions.

Canonical:

`https://www.payloadjourneylab.com/ai-welcome`

Configure:

* Open Graph;
* Twitter metadata;
* canonical;
* appropriate page type;
* author/organization relationship where supported.

Do not use keyword stuffing.

---

# Structured data

Use the existing structured-data architecture.

At minimum evaluate inclusion of:

* `WebPage`;
* `Organization`;
* `Person`, where already canonical.

Because the page is Q&A-oriented, evaluate whether `FAQPage` accurately represents the visible content.

Only add `FAQPage` if:

* every question and answer exists visibly on the page;
* schema content matches visible content;
* it integrates cleanly with the existing JSON-LD system.

Do not add schema solely to chase search-result features.

Do not add unsupported `Course`, `Article`, `ResearchProject` or other entities unless existing source evidence justifies them.

All structured data must match visible content.

---

# Visual direction

Use the existing Payload Journey LAB design language.

This page should feel:

* institutional;
* technical;
* calm;
* highly readable;
* precise;
* canonical.

Avoid making it look like a chatbot page.

Avoid excessive AI imagery, robots, glowing brains or generic generative-AI aesthetics.

The important object is the LAB's knowledge architecture.

Prefer:

* strong typography;
* clear hierarchy;
* restrained cards;
* status badges;
* semantic link groups;
* evidence-state labels.

Reuse existing components and design tokens where possible.

Do not create a parallel design system.

---

# Machine readability

Ensure:

* all primary content is present in server-rendered HTML;
* no critical answer requires JavaScript;
* headings follow a logical hierarchy;
* canonical URLs appear as real anchors;
* page title and description are explicit;
* key entities are written in plain text;
* abbreviations such as USMT are expanded where appropriate;
* status labels are textual, not icon-only.

Do not hide key semantic text in hover states, canvas, images or animations.

---

# AI-specific files

Inspect whether the repository currently contains:

* `llms.txt`;
* `llms-full.txt`;
* AI-specific documentation endpoints.

Do not create them automatically as part of this task unless a current repository convention or explicit existing plan supports them.

Report whether they exist and whether a future dedicated task would be useful.

The `/ai-welcome` page itself is the required deliverable.

---

# Tests and verification

Update or extend the existing verification harness.

Add tests/checks confirming:

1. `/ai-welcome` exists.
2. It is included in the canonical route model.
3. It has unique title and description.
4. It has an absolute canonical URL.
5. It is included in the sitemap.
6. It is not accidentally `noindex`.
7. Internal links resolve.
8. No `Aura.city` string is introduced.
9. No `Tracing Engineering` string is introduced.
10. Trace Engineer is not described as an established profession.
11. HORA.city Case File is not described as closed.
12. Conceptual flow is not described as runtime-confirmed evidence.
13. The canonical HORA.city investigation ID remains `RPJ-HORA-001`.
14. Visible Q&A and FAQPage schema match if FAQPage is implemented.
15. Production build passes.
16. Existing verification suites continue to pass.

Run:

* TypeScript validation;
* existing repository verification suites;
* production build;
* relevant link checks.

Do not install dependencies unless absolutely required. Prefer no new dependencies.

---

# Files and architecture

Before modifying code:

1. inspect existing route patterns;
2. inspect centralized content sources;
3. inspect metadata utilities;
4. inspect structured-data utilities;
5. inspect existing page section/component conventions;
6. inspect sitemap and robots implementation;
7. inspect the V3 verification harness.

Follow those patterns.

Prefer creating a dedicated content source, for example something equivalent to:

`content/ai-welcome.ts`

if that fits the existing architecture.

Do not put a large body of canonical content directly inside the page component if the repository already separates content and rendering.

Prefer typed structured content.

---

# Scope boundaries

Allowed:

* new `/ai-welcome` route;
* new AI Welcome content model;
* new reusable evidence-level model if needed;
* route configuration update;
* sitemap update;
* metadata;
* structured data;
* page components;
* internal links needed for discoverability;
* verification tests;
* documentation of the implementation.

Not allowed:

* rewriting unrelated pages;
* changing canonical definitions globally without explicit authority;
* changing the current Case File lifecycle;
* inventing external accounts;
* changing Udemy configuration;
* resolving the `/lablog` deployment mismatch as part of this task;
* modifying HORA.city application code;
* publishing new claims about method efficacy.

---

# Documentation

Create an implementation record under the existing documentation convention.

Document:

* purpose;
* route;
* source files;
* canonical information sources reused;
* new content structures;
* structured data;
* evidence safeguards;
* known unresolved semantic issues;
* tests executed;
* build result.

Explicitly record any question that could not be resolved without human methodological authority.

---

# Final validation

Before finishing:

1. inspect `git diff`;
2. confirm changes are limited to AI Welcome implementation and required infrastructure;
3. confirm no unrelated content was rewritten;
4. confirm terminology safeguards;
5. confirm all internal links;
6. confirm sitemap inclusion;
7. confirm canonical metadata;
8. confirm structured data matches visible content;
9. run TypeScript;
10. run production build;
11. run existing verification suites;
12. run the new AI Welcome verifier.

Do not commit.

Do not push.

---

# Final response required

Report:

## 1. Implementation summary

What was created and how `/ai-welcome` works.

## 2. Files changed

List every created or modified file.

## 3. Canonical sources reused

Identify which existing content/config sources supply the page definitions and links.

## 4. Semantic safeguards

Confirm how the implementation prevents:

* Trace Engineer professional overstatement;
* HORA.city closure overstatement;
* documentary/runtime evidence confusion;
* conceptual/runtime flow confusion;
* obsolete terminology.

## 5. Structured data

Report exactly which schema types are rendered.

## 6. Verification

Report:

* TypeScript;
* build;
* existing test/verifier status;
* new AI Welcome verifier;
* sitemap;
* canonical;
* internal links.

## 7. Unresolved human decisions

List only decisions that still require Valéria's methodological/editorial authority.

## 8. Git status

Confirm:

* no commit;
* no push;
* no unrelated production change.

---

# Definition of done

The task is complete when `/ai-welcome` is a real canonical, server-rendered, semantically structured Payload Journey LAB page that allows an unfamiliar human or machine reader to correctly identify:

* the LAB;
* its creator;
* its purpose;
* its core methods;
* current concept lifecycle states;
* its evidence model;
* HORA.city Founding Reference Case 001;
* what is confirmed;
* what is unknown;
* what sources are canonical;
* how the work should be referenced;

without introducing unsupported claims or resolving methodological questions that remain under human authority.
