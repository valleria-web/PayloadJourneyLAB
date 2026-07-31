# Codex Task — AI Welcome Semantic Hardening v1.0.1

## Context

The canonical AI Welcome page is already implemented and online at:

`https://www.payloadjourneylab.com/ai-welcome`

Current page version:

`1.0.0`

A cold-read test and deliberate misinterpretation test were performed against the public page.

The page passed strongly, but three small semantic ambiguities were identified.

This task implements only those three approved corrections.

Do not redesign the page.

Do not rewrite unrelated content.

Do not introduce new methodological claims beyond the approved language below.

Target page version after this task:

**1.0.1**

---

# Objective

Strengthen semantic precision in three areas:

1. make internal canonical authority explicit;
2. formalize the current ontology of Trace Engineering;
3. explicitly name and number the LAB evidence model.

These changes should improve machine interpretation, citation discipline, Case File consistency and future reuse by the Trace Engineering Protocol, papers and cohorts.

---

# Change 1 — Clarify internal canonical authority

Locate the USMT lifecycle/status label currently rendered as:

`Canonical model`

Replace it with:

**Canonical within Payload Journey LAB**

The purpose is to avoid any possible interpretation that USMT is an externally recognized industry standard or universally canonical model.

Apply the same semantic principle anywhere in the AI Welcome content where the word `Canonical` could reasonably be interpreted as external authority rather than internal LAB authority.

Do not globally rewrite canonical URL terminology.

Distinguish:

* canonical URL → technical web concept;
* canonical within Payload Journey LAB → methodological/editorial authority inside the LAB.

Do not introduce claims of external standardization, scientific consensus or institutional recognition.

---

# Change 2 — Formalize Trace Engineering ontology

The approved canonical orientation definition is now:

**Trace Engineering is a developing investigative practice composed of capabilities for tracing operations, locating decisions, comparing expected models with execution, and producing verifiable explanations.**

Use the equivalent approved Portuguese wording if the page renders this concept in Portuguese:

**Trace Engineering é uma prática investigativa em desenvolvimento composta por capacidades para rastrear operações, localizar decisões, comparar modelos esperados com a execução e produzir explicações verificáveis.**

This definition resolves the previous ambiguity between:

* `set of capabilities`;
* `practice`.

The intended ontology is:

**Trace Engineering**
→ developing investigative practice

which is:

→ composed of investigative capabilities

including:

* tracing operations;
* locating decisions;
* comparing expected models with execution;
* producing verifiable explanations.

Update the current AI Welcome source so this relationship is explicit.

If `content/methods.ts` and another current canonical source still conflict, do not silently rewrite unrelated global method content unless doing so is required to keep the canonical datasets internally consistent.

If a canonical source must be updated, limit the change strictly to harmonizing this approved ontology.

Document every such change.

---

# Trace Engineer relationship

Do not change the guarded status of Trace Engineer.

Trace Engineer remains:

**a developing investigative function/profile**

and must not be presented as:

* an established profession;
* a recognized occupational category;
* a certification;
* an industry-standard job title.

Where useful, the relationship may be represented as:

`Trace Engineering`
→ developing investigative practice

`Trace Engineer`
→ developing investigative function/profile applying that practice

Do not imply that all practitioners must use that title.

---

# Change 3 — Name the evidence model

Rename the evidence section/model explicitly to:

# **Payload Journey LAB Evidence Model**

This name must appear visibly on the page.

The purpose is to make clear that the taxonomy is defined and used by Payload Journey LAB.

Do not present it as:

* an external scientific standard;
* a universal evidence taxonomy;
* an industry-wide evidence framework.

A short orientation sentence may state:

**The Payload Journey LAB Evidence Model distinguishes six evidence levels so that conceptual, documentary, runtime, implementation, verification and external evidence are not conflated.**

Equivalent Portuguese wording is acceptable if consistent with the page language.

---

# Number the six evidence levels

The six levels must be explicitly numbered and retain their current meaning.

Use this order:

## Level 1 — Conceptual Evidence

Expected models, definitions, diagrams, pedagogical representations or conceptual structures.

This level describes what a system or method is expected to represent.

It does not establish observed execution.

---

## Level 2 — Documentary Evidence

Repository records, investigation notes, case statements, authored documents or other documented assertions.

This level establishes that something has been recorded or stated.

It does not by itself establish runtime behavior.

---

## Level 3 — Runtime Evidence

Observed execution artefacts such as:

* traces;
* checkpoint captures;
* logs;
* payload snapshots;
* request/response captures;
* runtime state observations.

This level establishes observed execution within the bounded evidence context.

---

## Level 4 — Implementation Evidence

Source code, configuration, diffs, commits or equivalent artefacts showing an implemented system change or implementation state.

Implementation evidence does not by itself prove that the intended runtime outcome occurred.

---

## Level 5 — Verification Evidence

Replay, test, reproduction or bounded execution demonstrating the observed outcome after an implementation or restoration.

This level is used to establish that a claimed result was verified in the defined flow.

---

## Level 6 — External or Independent Evidence

Evidence produced, reproduced, reviewed or confirmed outside the founding/internal investigation context.

This is distinct from internal consistency or internal verification.

Do not imply that external evidence automatically means scientific peer review.

---

# Numbering requirements

Each evidence level must expose its number as real text.

Do not communicate numbering only through:

* color;
* icon;
* CSS counter;
* decorative badge without accessible text.

Preferred visible pattern:

`Level 1 — Conceptual Evidence`

through:

`Level 6 — External or Independent Evidence`

The number should also exist in the underlying typed data model.

For example, if compatible with the existing architecture:

```ts
{
  level: 1,
  id: "conceptual",
  name: "Conceptual Evidence",
  ...
}
```

Do not derive the level solely from array position.

The explicit level value is intended for future reuse by:

* Trace Engineering Protocol;
* Case Files;
* Evidence Records;
* papers;
* cohorts;
* teaching material;
* validation tooling.

---

# Evidence model architecture

Inspect the existing:

`content/evidence.ts`

Prefer evolving this file rather than creating a duplicate evidence taxonomy.

The evidence model should become reusable and typed.

Each evidence level should ideally expose at least:

* numeric level;
* stable ID;
* name;
* concise definition;
* interpretation boundary;
* examples if already supported.

Do not overengineer the model.

Do not add fields without a clear current or near-term use.

Preserve backwards compatibility where practical.

---

# Case File relationship

The page must continue to state correctly that the current HORA.city public evidence is primarily documentary.

Do not upgrade HORA.city automatically to Level 3, 4, 5 or 6.

The following distinction must remain clear:

`HeartCreated`
→ documentary association

not:

`HeartCreated`
→ runtime-confirmed observation

unless canonical technical evidence has actually been added since the previous implementation.

The HORA.city case remains:

**Active investigation**

unless current canonical evidence explicitly proves a lifecycle change.

Do not infer a lifecycle transition from this task.

---

# AI interpretation notes

Review the AI Usage Notes only for consistency with these three changes.

Ensure they now support the following interpretation:

* USMT is canonical within Payload Journey LAB, not asserted as an external standard.
* Trace Engineering is a developing investigative practice composed of capabilities.
* The six evidence levels belong to the Payload Journey LAB Evidence Model.

Do not add unnecessary new instructions.

Keep the section concise.

---

# Structured data

If FAQ answers contain any of the changed wording, update them through the same typed source used for visible content.

The existing invariant must remain true:

**Visible Q&A text and FAQPage structured data must derive from the same canonical source strings.**

Do not maintain separate manually duplicated versions.

If the evidence levels are represented in structured data, ensure numbering and wording match visible content.

Do not invent a schema.org type for the Payload Journey LAB Evidence Model.

Use only valid existing schema types.

---

# Version update

Update AI Welcome page version:

`1.0.0`
→
`1.0.1`

Update the review date to the actual implementation date if the repository convention treats each semantic revision as a new review.

Do not alter historical records.

The implementation documentation should record:

* previous version;
* new version;
* reason for change;
* three semantic corrections;
* files affected;
* test results.

---

# Tests

Extend the AI Welcome verifier with explicit assertions.

At minimum verify:

1. `Canonical model` is no longer rendered as the USMT status.
2. `Canonical within Payload Journey LAB` is present.
3. Trace Engineering contains the approved ontology:

   * developing investigative practice;
   * composed of capabilities.
4. Trace Engineer remains guarded as a developing function/profile.
5. `Payload Journey LAB Evidence Model` is visible.
6. Exactly six evidence levels exist.
7. Evidence levels are explicitly numbered 1 through 6.
8. Level numbers are present in the typed source model.
9. Level names remain:

   * Conceptual Evidence
   * Documentary Evidence
   * Runtime Evidence
   * Implementation Evidence
   * Verification Evidence
   * External or Independent Evidence
10. HORA.city is not upgraded to runtime evidence.
11. `HeartCreated` remains documentary association unless runtime evidence actually exists.
12. Case status remains Active Investigation unless canonical evidence proves otherwise.
13. No external-standard claim is introduced for USMT.
14. No industry-standard claim is introduced for the Evidence Model.
15. FAQ visible/schema parity remains intact.
16. TypeScript passes.
17. Production build passes.
18. Existing verification suites pass.

Also preserve existing scans against:

* `Aura.city`;
* `Tracing Engineering`;
* established-profession language for Trace Engineer;
* false HORA.city closure;
* conceptual/runtime evidence conflation.

---

# Scope boundaries

Allowed:

* `content/ai-welcome.ts`;
* `content/evidence.ts`;
* Trace Engineering canonical source if necessary for consistency;
* relevant types;
* AI Welcome rendering component;
* structured data derived from changed content;
* verification scripts;
* implementation documentation;
* version metadata.

Not allowed:

* redesigning the page;
* changing primary navigation;
* altering unrelated LAB definitions;
* changing HORA.city lifecycle;
* adding HORA.city runtime artefacts;
* creating new methodological frameworks;
* creating `llms.txt`;
* changing deployment configuration;
* rewriting unrelated pages.

---

# Documentation

Create a concise implementation record following the existing documentation convention.

Suggested name:

`2026-07-29-ai-welcome-v1-0-1-semantic-hardening.md`

or use the repository's actual current implementation date.

Document:

## Change 1

`Canonical model`
→
`Canonical within Payload Journey LAB`

Reason:
prevent internal canonical authority from being misread as external standardization.

## Change 2

Formal Trace Engineering ontology:

**developing investigative practice composed of capabilities**

Reason:
remove ambiguity between practice and capability set.

## Change 3

Formal model name:

**Payload Journey LAB Evidence Model**

with six explicitly numbered evidence levels.

Reason:
establish reusable semantic infrastructure for TEP, Case Files, papers, cohorts and future evidence tooling.

---

# Final validation

Before finishing:

1. inspect git diff;
2. verify only intended files changed;
3. run TypeScript;
4. run production build;
5. run existing verification suites;
6. run AI Welcome verifier;
7. verify FAQ visible/schema parity;
8. verify six evidence levels;
9. verify evidence level ordering;
10. verify sitemap/canonical remain unchanged and valid;
11. verify no unrelated content regressions.

Do not commit.

Do not push.

---

# Final response required

Report:

## 1. Semantic changes completed

Confirm all three approved changes.

## 2. Files changed

List created and modified files.

## 3. Evidence model structure

Report the final typed representation of the six levels.

## 4. Trace Engineering ontology

Report exactly where the approved definition is now canonicalized.

## 5. HORA.city safeguards

Confirm no evidence or lifecycle upgrade occurred.

## 6. Verification results

Include:

* TypeScript;
* build;
* existing verifiers;
* AI Welcome verifier;
* FAQ parity;
* evidence level count/order.

## 7. Version

Confirm AI Welcome version `1.0.1`.

## 8. Git status

Confirm:

* no commit;
* no push;
* no unrelated changes.

---

# Definition of done

The task is complete when the public semantic model expressed by AI Welcome unambiguously communicates:

**USMT**
→ canonical within Payload Journey LAB

**Trace Engineering**
→ developing investigative practice composed of capabilities

**Payload Journey LAB Evidence Model**
→ six explicitly numbered evidence levels

while preserving all existing safeguards around Trace Engineer, HORA.city, runtime evidence and investigation lifecycle.
