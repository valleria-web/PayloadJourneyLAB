# Codex Task — Payload Journey LAB Propagation Baseline

## Context

Today is 27 July 2026.

This task corresponds to Day 1 of the 30-day Payload Journey LAB propagation plan.

The Payload Journey LAB is building a public ecosystem around:

* Payload Journey
* Payload Tracing
* Software System Investigation
* USMT / SMT Core
* Reverse Payload Journey
* Track to Origin
* Trace Engineering
* HORA.city
* LabLog
* the Payload Journey LAB Udemy course

HORA.city must be treated as:

**Payload Journey LAB — Founding Reference Case 001**

It is the first internal reference investigation used to develop, apply, demonstrate and teach the official Trace Engineering investigation protocol.

The purpose of this task is not to redesign or rewrite the platform.

The purpose is to produce an accurate, evidence-based baseline of everything that currently exists in the accessible codebase and documentation.

---

# Primary objective

Create a complete technical and documentary inventory of the Payload Journey LAB public ecosystem that is observable from the accessible workspace.

The output must answer:

1. What assets currently exist?
2. Where are they located?
3. Which public routes or URLs do they represent?
4. What is their current publication state?
5. Which assets are canonical?
6. Which assets contain provisional or outdated terminology?
7. Which assets reference the Payload Journey LAB?
8. Which assets link to the Udemy course?
9. Which assets relate to HORA.city Case File 001?
10. Which technical conditions may affect indexing, discovery or semantic propagation?
11. What cannot be verified from the codebase?
12. What should be done next, in priority order?

---

# Operating rules

## Evidence discipline

Do not infer that something exists publicly merely because a file exists.

Distinguish between:

* present in the repository;
* connected to a route;
* included in a build;
* publicly accessible;
* indexable;
* externally verified.

Every relevant statement must cite evidence using:

* repository path;
* route;
* configuration file;
* code excerpt location;
* command result;
* or public URL when it can actually be verified.

Do not fabricate:

* traffic numbers;
* Google indexation;
* Search Console data;
* LinkedIn metrics;
* YouTube metrics;
* Udemy sales or enrolment data;
* external backlinks;
* public availability.

When evidence is unavailable, write:

`External verification required.`

## No production changes

Do not modify application behaviour, page content, business logic, styling, routes or production configuration.

This is an investigation and inventory task.

You may create documentation and evidence folders only.

Do not install new dependencies.

Do not expose secrets, tokens, passwords, connection strings, private identifiers or personal data.

If sensitive values are encountered, record only the name of the configuration variable, never its value.

## Terminology

Use the canonical name:

**Payload Journey LAB**

Use:

**HORA.city**

Do not silently convert HORA.city into Aura.city.

Treat Trace Engineering as a proposed and developing investigative practice or field.

Treat Trace Engineer as an investigative role or profile in development, not as an already established profession.

Do not present provisional USMT or SMT concepts as final unless the accessible documentation explicitly identifies them as final.

Separate:

* confirmed implementation;
* conceptual model;
* proposed method;
* working draft;
* published definition;
* hypothesis;
* finding.

---

# Workspace discovery

Begin by inspecting the accessible workspace.

Determine:

* repository name;
* repository root;
* branch;
* framework;
* package manager;
* build structure;
* application routes;
* documentation directories;
* public assets;
* GitHub metadata;
* sibling repositories, if accessible;
* whether the workspace contains Payload Journey LAB, HORA.city or both.

If only one repository is accessible, continue the investigation and explicitly document the resulting limitation.

Run non-destructive discovery commands such as:

* `git status`
* `git branch --show-current`
* `git log -1`
* repository tree inspection
* package manifest inspection
* route discovery
* documentation discovery
* public asset discovery

Do not reset, clean, checkout, commit or push anything.

---

# Documentation structure to create

Create this structure at the most appropriate documentation root:

```text
docs/
└── lab-propagation/
    └── 2026-07-27-baseline/
        ├── README.md
        ├── executive-summary.md
        ├── asset-inventory.md
        ├── asset-inventory.csv
        ├── asset-inventory.json
        ├── technical-discovery-audit.md
        ├── route-and-link-map.md
        ├── semantic-consistency-audit.md
        ├── external-verification-checklist.md
        ├── case-file-001-status.md
        ├── next-actions.md
        └── evidence/
            ├── commands/
            ├── routes/
            ├── metadata/
            ├── links/
            ├── documents/
            └── case-file-001/
```

If `docs/` is not appropriate for the repository, select a clearly justified equivalent and document the decision in `README.md`.

---

# Asset inventory

Search for and inventory all observable assets related to:

* Payload Journey LAB;
* Payload Journey;
* Payload Tracing;
* Software System Investigation;
* USMT;
* SMT Core;
* Reverse Payload Journey;
* Track to Origin;
* Track Mode;
* Trace Engineering;
* Trace Engineer;
* HORA.city;
* Case File;
* Case File 001;
* LabLog;
* Udemy;
* YouTube;
* LinkedIn;
* GitHub;
* papers;
* reports;
* glossary;
* course materials;
* diagrams;
* music or playlist assets;
* author profile;
* newsletter;
* Instagram;
* contact or institutional pages.

For every asset, capture these fields:

1. Asset ID
2. Asset name
3. Category
4. Repository
5. File or directory path
6. Route
7. Intended public URL
8. Current state
9. Publication evidence
10. Canonical status
11. Indexability status
12. Authorship status
13. Version or date status
14. Payload Journey LAB naming consistency
15. HORA.city relationship
16. Udemy CTA status
17. Internal links
18. External links
19. Evidence source
20. Risk or inconsistency
21. Recommended next action
22. Priority
23. Confidence level
24. External verification required

Use these asset states:

* Published and stable
* Published but needs revision
* Connected to route but not externally verified
* Present but not connected to a route
* Draft
* Provisional
* Planned
* Deprecated
* Unknown

Use these priority levels:

* Critical
* High
* Medium
* Low

---

# Technical discovery audit

Inspect and document the following.

## Routes and pages

Identify:

* all public routes;
* dynamic routes;
* route groups;
* redirects;
* rewrites;
* middleware affecting access;
* pages excluded from navigation;
* orphan pages;
* duplicate or competing pages;
* pages referencing outdated paths.

Produce a route table containing:

* route;
* source path;
* page purpose;
* discoverability;
* links entering the page;
* links leaving the page;
* canonical status;
* indexing status;
* notes.

## Metadata

Inspect:

* page titles;
* meta descriptions;
* canonical URLs;
* Open Graph metadata;
* social images;
* author metadata;
* publication dates;
* update dates;
* language declarations;
* alternate language links;
* favicon and brand assets.

Identify:

* missing metadata;
* duplicated metadata;
* inconsistent names;
* provisional descriptions;
* misleading claims;
* pages lacking authorship;
* pages lacking dates or versions.

## Search-readiness

Inspect:

* `robots.txt`;
* sitemap implementation;
* sitemap contents;
* canonical configuration;
* `noindex` directives;
* headers affecting indexing;
* redirect chains;
* route accessibility;
* structured data;
* schema validation logic;
* analytics or search verification tags;
* IndexNow support, if any.

Do not claim Google or Bing indexation unless it can be externally verified.

## Structured data

Search for:

* `Organization`;
* `WebSite`;
* `Person`;
* `ProfilePage`;
* `Article`;
* `VideoObject`;
* `Course`;
* `BreadcrumbList`;
* other JSON-LD or schema markup.

Document:

* where each schema is produced;
* which pages receive it;
* missing required or recommended fields;
* conflicts between schemas and visible content;
* whether Valéria dos Santos Reiser is clearly connected to the LAB;
* whether external profiles are linked consistently.

## Links and CTAs

Inspect all references to:

* Payload Journey LAB;
* HORA.city;
* Udemy;
* YouTube;
* LinkedIn;
* GitHub;
* external publications;
* papers;
* contact forms.

Identify:

* broken internal links;
* broken external links when network verification is available;
* placeholder links;
* links to obsolete routes;
* missing CTAs;
* inconsistent Udemy URLs;
* UTM parameters;
* pages with no progression path;
* pages with excessive or irrelevant CTAs.

Do not rewrite the CTAs during this task.

Only document them.

## Content and semantic consistency

Search the repository for canonical and competing forms of key terms.

Examples:

* Payload Journey Lab
* Payload Journey LAB
* payload journey
* Payload Tracing
* Tracing Engineering
* Trace Engineering
* Trace Engineer
* USMT
* SMT Core
* Reverse Payload Journey
* Track to Origin
* operation
* payload
* state
* event
* checkpoint
* authority
* HORA.city
* Aura.city

Identify:

* inconsistent naming;
* superseded terminology;
* speculative events;
* HORA.city-specific rules presented as universal;
* conceptual examples presented as confirmed implementation;
* descriptions that overstate validation;
* duplicated definitions;
* conflicting definitions;
* working drafts visible as if final.

Do not decide a new canonical definition.

Report conflicts for human review.

---

# HORA.city — Founding Reference Case 001

Create `case-file-001-status.md`.

Treat HORA.city as:

**Payload Journey LAB — Founding Reference Case 001**

Document:

1. All files, pages, routes and documents related to the investigation.
2. References to the incorrect `createdAt` anomaly.
3. References to `HeartCreated`.
4. References to request, response, application, domain, repository, database, projection, renderer and UI checkpoints.
5. Existing evidence records.
6. Existing payload snapshots.
7. Existing diagrams.
8. Existing LabLog material.
9. Existing USMT, RPJ and Track to Origin relationships.
10. Existing findings.
11. Existing hypotheses.
12. Existing restoration proposals.
13. Existing implementation changes related to the anomaly.
14. Missing investigation artefacts.
15. Publication risks.
16. Sensitive data that must be sanitised.
17. The current investigation lifecycle state.

Distinguish explicitly between:

* confirmed evidence;
* interpretation;
* hypothesis;
* proposed restoration;
* implemented restoration;
* verified outcome;
* not yet determined.

Do not declare the case closed unless the repository contains sufficient evidence of restoration and verification.

Assess whether the repository currently supports the creation of:

* Executive Case Dossier;
* Full Technical Investigation Record;
* Evidence Repository;
* Teaching Edition.

For each edition, list what already exists and what is missing.

---

# External ecosystem checklist

Create `external-verification-checklist.md`.

Include items that cannot be confirmed solely from the repository:

* Google Search Console ownership;
* sitemap submission;
* Google indexed-page count;
* Google search queries;
* Bing Webmaster Tools ownership;
* Bing indexation;
* website traffic;
* page-level analytics;
* referral traffic;
* LinkedIn follower and post metrics;
* LinkedIn newsletter status;
* YouTube subscribers and video metrics;
* YouTube timestamps and descriptions when not stored in the repository;
* Udemy enrolments;
* Udemy reviews;
* Udemy sales;
* Udemy coupon links;
* GitHub organisation visibility;
* Zenodo;
* ORCID;
* DEV Community;
* Medium;
* Instagram;
* external backlinks;
* university references;
* institutional references.

For every item, specify:

* what must be verified;
* where it must be verified;
* which evidence should be captured;
* who must provide access;
* priority;
* relationship to the 30-day propagation plan.

---

# Baseline metrics

Record only metrics that can be measured reliably from the repository.

Possible repository-observable metrics include:

* number of public routes;
* number of canonical conceptual pages;
* number of glossary entries;
* number of case files;
* number of papers or reports;
* number of pages with complete metadata;
* number of pages with structured data;
* number of pages linking to Udemy;
* number of pages linking to HORA.city;
* number of orphan pages;
* number of broken internal links;
* number of terminology conflicts;
* number of provisional documents;
* number of HORA.city investigation artefacts;
* number of unresolved critical findings.

For external metrics, create placeholders marked:

`Not measured from repository on 27 July 2026.`

Do not insert estimated values.

---

# Required deliverables

## `README.md`

Explain:

* purpose;
* date;
* repository examined;
* branch;
* scope;
* limitations;
* methods used;
* files produced;
* how to continue the audit.

## `executive-summary.md`

Maximum approximately two pages.

Include:

* what currently exists;
* strongest assets;
* largest risks;
* critical gaps;
* status of HORA.city Case File 001;
* what must happen next;
* what requires human or external access.

## `asset-inventory.md`

Human-readable complete inventory.

## `asset-inventory.csv`

Spreadsheet-compatible inventory using the defined fields.

## `asset-inventory.json`

Machine-readable equivalent of the inventory.

Use stable IDs for assets so later audits can compare changes.

## `technical-discovery-audit.md`

Technical findings concerning:

* routes;
* metadata;
* indexability;
* schema;
* links;
* analytics;
* public assets;
* repository structure.

## `route-and-link-map.md`

Provide:

* route table;
* internal link relationships;
* orphan pages;
* primary navigation;
* method-to-case-to-course pathways;
* Mermaid diagram when appropriate.

## `semantic-consistency-audit.md`

List every meaningful terminology conflict with:

* term;
* file;
* line or section;
* conflicting form;
* risk;
* recommended human decision.

## `external-verification-checklist.md`

List all checks that require external accounts, public browsing or human-provided evidence.

## `case-file-001-status.md`

Produce the complete HORA.city founding case assessment described above.

## `next-actions.md`

Create a prioritised action list.

Group actions into:

* Critical — blocks propagation;
* High — needed during the first 10 days;
* Medium — needed during the 30-day cycle;
* Low — later optimisation.

For each action include:

* reason;
* evidence;
* owner type;
* estimated effort;
* dependency;
* completion criterion.

Do not schedule dates beyond those already defined by the propagation agenda.

---

# Evidence files

Save command outputs and generated inventories under `evidence/`.

Use plain text, Markdown, CSV or JSON.

Do not store:

* secrets;
* private user data;
* database records;
* raw production payloads containing identifiers;
* environment variable values.

Sanitise examples where necessary.

---

# Validation

Before finishing:

1. Confirm that only documentation and evidence files were created or changed.
2. Run `git diff --stat`.
3. Run `git status --short`.
4. Confirm that no production source file was modified.
5. Validate JSON syntax.
6. Validate CSV consistency.
7. Check Markdown links that can be checked locally.
8. Confirm that every critical finding has an evidence reference.
9. Confirm that hypotheses are not presented as findings.
10. Confirm that external metrics are not fabricated.

If a production file was modified accidentally, revert only the accidental modification without affecting pre-existing user changes.

Do not commit or push.

---

# Final response required from Codex

At the end, report:

## 1. Scope examined

Repositories, branch, major directories and limitations.

## 2. Files created

List every created file.

## 3. Baseline summary

Provide counts for:

* assets inventoried;
* public routes;
* canonical pages;
* provisional assets;
* orphan pages;
* terminology conflicts;
* pages with Udemy CTA;
* HORA.city investigation artefacts;
* critical findings.

## 4. Five strongest existing assets

Explain briefly why each one is strategically valuable.

## 5. Five most urgent gaps

Include evidence references.

## 6. HORA.city Case File 001 status

State whether it is:

* not formally started;
* partially documented;
* active investigation;
* restoration in progress;
* verification in progress;
* closed.

Explain the evidence for the classification.

## 7. External actions required from Valéria

List only the tasks that cannot be completed from the codebase.

## 8. Git status

Confirm that no production code was changed and no commit or push was made.

---

# Definition of done

The task is complete only when:

* the documentation structure exists;
* the repository has been systematically inspected;
* all observable LAB-related assets have been inventoried;
* the public route and link structure has been mapped;
* semantic conflicts have been recorded;
* technical search-readiness has been assessed;
* HORA.city Case File 001 has a documented status;
* external verification requirements are explicit;
* baseline metrics contain no invented values;
* only documentation and evidence files were created;
* Codex provides a concise final report with evidence-backed findings.
