# Codex Task — Payload Journey LAB Documentation System Refactor v1

## Context

The Payload Journey LAB repository has accumulated a large number of Markdown documents organically during multiple website, methodology, propagation and investigation cycles.

The current `docs/` directory contains approximately 115 documents distributed across folders such as:

* `governance/`
* `ai-readiness/`
* `lab-propagation/`
* `PropagationBaseline/`
* `homepage-refactor/`
* `sprints para v3/`
* `sprints para v2/`
* `sprints/`
* `files/`
* `prompts/`

A documentary inventory already exists and should be treated as the starting point for this task.

The problem is not loss of documentation.

The problem is that current authority, active operational material, product history, methodological definitions and historical execution memory are physically mixed.

This makes it harder for:

* humans;
* AI agents;
* future contributors;
* researchers;
* case investigators;
* publication workflows

to determine which documents currently define the LAB and which documents merely explain how the LAB evolved.

This task must reorganize the documentation system without losing provenance, historical memory or traceability.

---

# Primary Objective

Refactor `docs/` into a semantically explicit documentation system organized by documentary function and lifecycle.

The target conceptual model is:

```text
docs/
│
├── README.md
│
├── governance/
├── methods/
├── cases/
├── research/
├── operations/
├── product/
└── archive/
```

The intended meaning is:

```text
governance/
    What is authoritative now?

methods/
    How do the LAB's methods currently work?

cases/
    What is being investigated and what evidence exists?

research/
    What research artefacts, papers and technical reports exist?

operations/
    How is the LAB currently being operated, audited and propagated?

product/
    How are public products and experiences built?

archive/
    How did we get here?
```

---

# Critical Safety Rule

This is a **controlled documentation migration**.

Do not:

* delete historical documents;
* rewrite historical documents to make them match current terminology;
* destroy original timestamps or provenance;
* silently merge documents;
* discard old prompts;
* remove baseline evidence;
* change production application behavior;
* change canonical methodological claims;
* change HORA.city case lifecycle;
* change public site content unless strictly necessary to repair moved-document references;
* commit;
* push.

Historical inaccuracies or superseded terminology must remain preserved where they originally existed.

Historical content should be relocated or labelled, not rewritten as if it had always matched the current state.

---

# Phase 0 — Inspect Before Moving Anything

Before changing the repository:

1. inspect the complete current `docs/` tree;
2. read the existing documentary inventory;
3. identify all internal Markdown links pointing into `docs/`;
4. identify references to docs paths from:

   * source code;
   * scripts;
   * package.json;
   * verification tools;
   * CI/configuration;
   * content files;
   * README files;
5. identify documents currently functioning as canonical authority;
6. identify active operational documents;
7. identify historical/superseded material;
8. identify duplicated organizational concepts;
9. inspect git status before making changes.

Produce an internal migration map before moving files.

Do not begin physical migration until every document has a proposed classification.

---

# Documentary Classification Model

Every current document should receive one primary classification:

* `canonical`
* `active`
* `supporting`
* `historical`
* `superseded`
* `deprecated`
* `unknown`

Additionally assign one documentary domain:

* `governance`
* `method`
* `case`
* `research`
* `operation`
* `product`
* `archive`

Where classification is genuinely ambiguous, prefer preservation over aggressive movement.

Document the ambiguity instead of guessing.

---

# Target Directory Architecture

Create the following structure where appropriate:

```text
docs/
│
├── README.md
│
├── governance/
│   ├── README.md
│   ├── semantic-identity/
│   ├── terminology/
│   ├── evidence-model/
│   ├── case-governance/
│   ├── publication-policy/
│   └── citation-policy/
│
├── methods/
│   ├── README.md
│   ├── payload-journey/
│   ├── usmt/
│   ├── reverse-payload-journey/
│   ├── operational-payload-path/
│   ├── track-to-origin/
│   └── trace-engineering/
│
├── cases/
│   ├── README.md
│   └── RPJ-HORA-001/
│       ├── README.md
│       ├── case-brief/
│       ├── evidence/
│       ├── findings/
│       ├── restoration/
│       ├── verification/
│       └── editions/
│
├── research/
│   ├── README.md
│   ├── papers/
│   ├── technical-reports/
│   └── experiments/
│
├── operations/
│   ├── README.md
│   ├── propagation/
│   ├── ai-readiness/
│   ├── publishing/
│   ├── audits/
│   └── prompts/
│
├── product/
│   ├── README.md
│   ├── website/
│   ├── course/
│   └── lablog/
│
└── archive/
    ├── README.md
    ├── website-evolution/
    │   ├── initial-cycle/
    │   ├── v2/
    │   ├── v3/
    │   └── homepage-refactor/
    ├── old-definitions/
    ├── completed-tasks/
    └── historical-prompts/
```

Do not create empty directory trees unnecessarily if the repository convention does not track empty directories.

Create only directories that are needed now, while preserving the target architecture in documentation.

---

# 1. Governance

`docs/governance/` must contain documents that define current authority.

The current canonical Semantic Identity Charter must remain under:

```text
docs/governance/semantic-identity/
```

Preserve:

`semantic-identity-charter-v1.0.md`

Do not modify its methodological content during this task unless required solely for path references.

Governance categories to establish conceptually:

```text
semantic-identity/
terminology/
evidence-model/
case-governance/
publication-policy/
citation-policy/
```

Important:

Do not manufacture full canonical policies merely to populate these directories.

If a canonical standalone policy does not yet exist, document that as a governance gap.

Do not synthesize new methodological authority from historical material without human approval.

---

# 2. Methods

Create `docs/methods/` as the canonical documentary home for method specifications.

Expected method domains:

* Payload Journey
* USMT
* Reverse Payload Journey
* Operational Payload Path
* Track to Origin
* Trace Engineering

However:

Do not automatically promote old sprint documents into canonical method specifications.

First identify whether a current canonical method document actually exists.

If no sufficiently authoritative standalone document exists, create only the directory/readme structure and document the gap.

Example:

```text
docs/methods/reverse-payload-journey/README.md
```

may point to current canonical sources and state that a dedicated versioned specification has not yet been extracted.

Do not invent missing canonical specifications.

---

# 3. Cases

Create:

```text
docs/cases/RPJ-HORA-001/
```

This should become the documentary home of the active Founding Reference Case 001.

The current investigation identity must remain:

```text
Founding Reference Case 001 — HORA.city
Investigation ID: RPJ-HORA-001
Lifecycle: Active investigation
```

Do not imply that the case is complete.

The following structure should be prepared:

```text
RPJ-HORA-001/
├── README.md
├── case-brief/
├── evidence/
├── findings/
├── restoration/
├── verification/
└── editions/
```

Migrate only documents that are genuinely case-specific.

For example, the existing baseline assessment of Case File 001 may remain inside the propagation baseline as historical baseline evidence, because it records what was known at that date.

Do not move a baseline snapshot in a way that destroys its original context.

Instead, the live case README may link to that historical assessment.

This distinction is critical:

```text
current case record
!=
historical propagation baseline assessment
```

---

# 4. Operations

Consolidate operational documentation.

The current organizational split between:

```text
lab-propagation/
PropagationBaseline/
```

should be normalized under:

```text
docs/operations/propagation/
```

Suggested structure:

```text
operations/propagation/
├── README.md
├── baselines/
│   └── 2026-07-27/
├── implementations/
│   └── ai-welcome/
├── tasks/
│   ├── propagation-baseline/
│   └── ai-welcome/
└── agenda/
```

Preserve the distinction between:

* task specification;
* execution plan;
* baseline result;
* implementation record;
* evidence.

Do not flatten them into one folder.

---

# 5. AI Readiness

Move current AI readiness documentation conceptually under:

```text
docs/operations/ai-readiness/
```

because these documents are audits, provenance checks and operational validation artefacts.

Preserve filenames unless renaming materially improves consistency.

If files are referenced elsewhere, update all internal links.

Do not reinterpret AI readiness audits as canonical governance.

They provide validation and provenance.

They do not supersede governance documents.

---

# 6. Product Documentation

Create:

```text
docs/product/
```

Product documentation should contain material related to building public LAB surfaces.

Subdomains:

```text
website/
course/
lablog/
```

Current website evolution documents should not automatically become current product documentation.

Most sprint/refactor documents are historical execution memory and should move to archive.

Only genuinely active product documentation should remain under `product/`.

---

# 7. Archive

The archive is not a trash folder.

It is the explicit documentary memory of how the LAB evolved.

Move historical website cycles into a structure similar to:

```text
docs/archive/website-evolution/
├── initial-cycle/
├── v2/
├── v3/
└── homepage-refactor/
```

Likely source mapping:

```text
sprints/
→ archive/website-evolution/initial-cycle/

sprints para v2/
→ archive/website-evolution/v2/

sprints para v3/
→ archive/website-evolution/v3/

homepage-refactor/
→ archive/website-evolution/homepage-refactor/
```

Before migration, inspect whether any file within these folders is still an active canonical dependency.

If so:

* preserve the historical original in archive;
* do not duplicate it blindly;
* instead extract/promote a canonical current document only when clearly justified.

Historical sprint documents should remain historically accurate.

Do not modernize their terminology.

---

# 8. Remove Semantically Weak Top-Level Categories

After successful migration, the following top-level categories should ideally no longer exist:

```text
files/
prompts/
PropagationBaseline/
lab-propagation/
sprints/
sprints para v2/
sprints para v3/
homepage-refactor/
```

But only remove the empty directories after:

* all files are safely relocated;
* all links resolve;
* all references are updated;
* verification passes.

Do not delete files.

---

# 9. `files/` Migration

The current `files/` category is semantically weak.

Classify each document individually.

Likely direction:

```text
LAB Definitions.md
definitions part .md
→ archive/old-definitions/
```

unless inspection proves one is still canonical.

`files-structure.md`

should be classified based on content:

* current publication governance;
* product documentation;
* or archive.

`plano-implementacao-lablog-youtube-documentacao.md`

should likely move to either:

```text
product/lablog/
```

or:

```text
archive/completed-tasks/
```

depending on whether it remains operational.

Do not decide solely from filename.

Inspect content and current use.

---

# 10. Prompts

Prompts are operational artefacts, not governance.

If still reusable:

```text
docs/operations/prompts/
```

If historical and no longer active:

```text
docs/archive/historical-prompts/
```

Do not delete them.

---

# 11. Documentation Metadata

Introduce a lightweight metadata convention for important current documents.

Preferred Markdown front matter:

```yaml
---
document_id: PJL-GOV-SEM-001
title: Payload Journey LAB Semantic Identity Charter
version: 1.0
status: canonical
authority: governance
owner: Payload Journey LAB
created_at: 2026-07-29
last_reviewed: 2026-07-29
supersedes: null
superseded_by: null
---
```

Allowed lifecycle values:

```text
canonical
stable
working
active
draft
historical
superseded
deprecated
```

Do not mass-inject speculative metadata into all 115 documents.

Apply metadata first to:

* governance documents;
* current method documents;
* active case documents;
* current operational index/readme documents.

Historical documents may remain untouched unless metadata is required to clarify status.

If adding metadata to historical documents, do not alter body content.

---

# 12. Root Documentation Index

Create:

```text
docs/README.md
```

This file is critical.

It must explain the documentation system to both humans and AI agents.

Suggested structure:

```md
# Payload Journey LAB Documentation System

## Start here

If you need to understand what the LAB currently is:
→ governance/

If you need current method definitions:
→ methods/

If you need active investigations:
→ cases/

If you need research outputs:
→ research/

If you need operational records and audits:
→ operations/

If you need product implementation documentation:
→ product/

If you need historical decisions:
→ archive/
```

Add an authority model:

```text
1. governance
2. current method specifications
3. active case records
4. research outputs
5. current operational records
6. current product documentation
7. archive
```

Clarify:

> Archive documents preserve historical provenance and do not override newer canonical sources.

Also include current known canonical entry points.

---

# 13. Domain README Files

Create concise README files where needed:

```text
governance/README.md
methods/README.md
cases/README.md
operations/README.md
product/README.md
research/README.md
archive/README.md
```

Each README should state:

* purpose;
* authority level;
* what belongs there;
* what does not belong there;
* lifecycle expectations.

Keep them concise.

---

# 14. Migration Manifest

Create a migration record such as:

```text
docs/operations/documentation/
2026-07-31-documentation-system-refactor.md
```

or another appropriate operational documentation location.

Include:

* old path;
* new path;
* classification;
* lifecycle;
* reason;
* link-update status.

A table format is preferred.

Example:

```text
| Old path | New path | Classification | Status | Reason |
```

Every moved document must appear in the manifest.

---

# 15. Preserve Historical Provenance

Do not rename historical files aggressively.

For historical sprint documents, preserving original filenames may be preferable because filenames themselves are part of provenance.

Normalize directory names more aggressively than historical filenames.

For new canonical documents, use predictable kebab-case naming.

---

# 16. Internal Link Migration

After moving files:

1. update all relative Markdown links;
2. update code references to docs paths;
3. update verification scripts;
4. update README references;
5. search for all obsolete directory paths.

Search specifically for references to:

```text
sprints para v3
sprints para v2
homepage-refactor
PropagationBaseline
lab-propagation
docs/files
docs/prompts
```

No active link should point to a removed path.

---

# 17. Do Not Break Public URLs

If any `docs/` path is used to generate or expose public URLs, inspect that behavior before moving the underlying file.

Do not change a public canonical URL solely for internal organization.

Where necessary:

* preserve generated output;
* introduce aliases;
* update build mappings;
* or avoid moving the source until compatibility is guaranteed.

Document any public-path constraint.

---

# 18. Verification

At minimum verify:

## Structural

* `docs/README.md` exists.
* governance exists.
* methods exists.
* cases exists.
* operations exists.
* product exists.
* research exists or its planned absence is documented.
* archive exists.
* no document was lost.

## Count parity

The total number of source documents before and after migration must reconcile.

Any intentional new README/index files should be reported separately.

Example:

```text
original documents: 115
moved documents: 115
new organizational documents: N
deleted documents: 0
```

## Link integrity

* all Markdown internal links resolve;
* all referenced documentation paths resolve;
* no active code points to obsolete paths.

## Semantic authority

Verify that:

* Semantic Identity Charter remains canonical.
* historical sprint content cannot override governance.
* active HORA.city lifecycle remains Active Investigation.
* old `Tracing Engineering` references may remain historically but are not promoted into current authority.
* old USMT terminology may remain historically but is not promoted.
* archive is explicitly non-authoritative.

## Application

Run:

* TypeScript;
* production build;
* existing verification suites;
* AI readiness checks;
* navigation/discovery checks;
* any documentation-specific verification.

---

# 19. Optional Documentation Verifier

If consistent with the repository architecture, create a lightweight script such as:

```text
scripts/verify-documentation-system.mjs
```

It may verify:

* required top-level documentary domains;
* docs README existence;
* no broken local Markdown links;
* no duplicate canonical Semantic Identity Charter;
* canonical documents are not located under archive;
* archive README declares historical/non-authoritative status;
* active case ID `RPJ-HORA-001` exists;
* no files remain in deprecated top-level documentary directories after migration.

Do not overengineer.

---

# 20. Git Discipline

Before changes:

* capture git status.

After changes:

* inspect complete diff;
* verify moves vs rewrites;
* ensure no unrelated production code changes;
* ensure moved files did not receive accidental content modifications.

Use git-aware moves where practical so history remains traceable.

Do not commit.

Do not push.

---

# 21. Special Requirement — Preserve Historical Text

For archive migrations, compare content hashes before and after moves where practical.

Historical documents should ideally remain byte-identical except where relative-link correction is strictly necessary.

If a historical document must be modified to repair a moved relative link, record that fact in the migration manifest.

---

# 22. Human Authority Boundaries

Do not independently create canonical answers for unresolved areas.

The following still require human methodological/editorial authority:

* final terminology policy;
* standalone evidence model specification;
* case governance policy;
* publication policy;
* citation policy;
* final method specification versions;
* lifecycle changes in Trace Engineering;
* lifecycle changes in Trace Engineer;
* HORA.city causal findings;
* HORA.city restoration;
* HORA.city verification;
* scientific validation or transferability claims.

For these, create placeholders/readmes or identify gaps.

Do not fill gaps by inference.

---

# Expected Final Architecture

The final system should communicate:

```text
docs/
│
├── README.md
│
├── governance/     # current authority
├── methods/        # current methodological specifications
├── cases/          # active and completed investigations
├── research/       # research outputs
├── operations/     # audits, propagation, publishing, execution
├── product/        # website/course/LabLog implementation
└── archive/        # historical provenance
```

The most important semantic invariant is:

```text
CURRENT AUTHORITY
!=
HISTORICAL MEMORY
```

And:

```text
archive/
cannot override
governance/
```

---

# Final Report Required

Return:

## 1. Migration summary

Explain what changed and why.

## 2. Before/after structure

Show concise trees.

## 3. Document counts

Report:

* original document count;
* moved documents;
* unchanged documents;
* new index/governance documents;
* deleted documents.

Deleted documents should equal zero unless an exact duplicate is found and human approval was explicitly provided. Without approval, preserve duplicates.

## 4. Migration manifest

Provide path to the full manifest.

## 5. Governance status

List:

* canonical governance documents that exist;
* governance areas that remain gaps.

## 6. Method status

List which methods already have canonical specifications and which still require extraction.

## 7. Case status

Confirm the new documentary home for `RPJ-HORA-001` and confirm lifecycle remains Active Investigation.

## 8. Historical preservation

Confirm old sprint/refactor/prompts material was preserved.

## 9. Link integrity

Report broken links before and after.

## 10. Verification

Report:

* TypeScript;
* production build;
* existing suites;
* documentation verifier if created;
* Markdown links;
* document count parity.

## 11. Unexpected findings

Report any document that could not be confidently classified.

## 12. Git status

Confirm:

* no commit;
* no push;
* no unrelated changes.

---

# Definition of Done

The task is complete when an unfamiliar human or AI agent can enter `docs/README.md` and correctly determine:

1. where current authority lives;
2. where current methods live;
3. where active cases live;
4. where research artefacts live;
5. where operational records live;
6. where product implementation history lives;
7. where historical material lives;
8. which sources may override others;
9. which historical sources must not be treated as current authority;
10. where the active HORA.city case is documented.

No existing documentary history may be lost.

The result should make the Payload Journey LAB documentation feel like a governed knowledge system rather than an organically accumulated folder tree.
