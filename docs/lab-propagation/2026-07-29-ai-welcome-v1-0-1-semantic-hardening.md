# AI Welcome v1.0.1 semantic hardening

## Purpose and version

- Previous version: `1.0.0`
- New version: `1.0.1`
- Review date: `2026-07-29`
- Route: `/ai-welcome`
- Canonical URL: `https://www.payloadjourneylab.com/ai-welcome`

This revision resolves three ambiguities identified by cold-read and deliberate-misinterpretation testing. The review date remains 2026-07-29 because the initial implementation and this semantic revision occurred on the same date.

## Change 1 — Internal canonical authority

`Canonical model` was replaced by `Canonical within Payload Journey LAB`.

The same internal-authority wording is now used for the Payload Journey status, approved internal resource labels, and the page orientation status. Links to complete concept definitions are labelled `Payload Journey LAB source`.

Technical canonical URL terminology remains unchanged.

Reason: prevent methodological or editorial authority inside the LAB from being interpreted as external standardization, scientific consensus, or industry recognition.

## Change 2 — Trace Engineering ontology

The shared canonical method definition in `content/methods.ts` is now:

> Trace Engineering é uma prática investigativa em desenvolvimento composta por capacidades para rastrear operações, localizar decisões, comparar modelos esperados com a execução e produzir explicações verificáveis.

The same file was harmonized only where required by this ontology:

- the method/practice distinction;
- the method taxonomy role and description;
- the investigation-page lifecycle status.

Trace Engineer remains a developing investigative function/profile that may apply the practice. The orientation explicitly states that it is not an established profession, recognized role, official certification, or mandatory title.

Reason: remove the ambiguity between a practice and the capabilities that compose it.

## Change 3 — Payload Journey LAB Evidence Model

The evidence section is visibly named `Payload Journey LAB Evidence Model`.

`content/evidence.ts` now defines six reusable typed levels. Each object contains:

- explicit numeric `level`;
- stable `id`;
- `name`;
- concise `definition`;
- interpretation `boundary`;
- supported `examples`.

The fixed order is:

1. Conceptual Evidence
2. Documentary Evidence
3. Runtime Evidence
4. Implementation Evidence
5. Verification Evidence
6. External or Independent Evidence

The rendered headings expose `Level 1` through `Level 6` as real text. The levels are not represented as a new schema.org entity.

Reason: establish reusable semantic infrastructure for the Trace Engineering Protocol, Case Files, Evidence Records, papers, cohorts, teaching material, and future validation tooling without claiming an external or universal standard.

## HORA.city safeguards

- Founding Reference Case 001 remains `Active investigation`.
- The investigation identifier remains `RPJ-HORA-001`.
- Current public case evidence remains documentary.
- `HeartCreated` remains a documentary association.
- No runtime, implementation, verification, or external evidence level was added to the case.
- Origin, authority, restoration, and verification remain unconfirmed.

## FAQ and structured data

Changed FAQ answers continue to derive from the same typed strings rendered visibly on the page. The existing `FAQPage`, `Question`, and `Answer` structure remains unchanged and introduces no invented evidence-model schema type.

## Files affected

- `content/ai-welcome.ts`
- `content/evidence.ts`
- `content/methods.ts`
- `content/routes.ts`
- `types/content.ts`
- `components/sections/AiWelcomeSections.tsx`
- `scripts/verify-ai-welcome.mjs`
- `scripts/verify-homepage.mjs`
- `scripts/verify-method-practice.mjs`
- this implementation record

No primary navigation, HORA.city lifecycle data, deployment configuration, or AI-specific text file changed.

## Verification

Completed on 2026-07-29:

- `npx tsc --noEmit` — pass
- `npm run verify:ai-welcome` — pass
  - version `1.0.1`
  - 22 visible FAQ answers matched to structured data
  - exactly six explicitly numbered evidence levels
  - level order `1, 2, 3, 4, 5, 6`
  - all six names matched
  - typed source contained all explicit level values
  - internal canonical-authority, ontology, Trace Engineer, HORA.city, and evidence safeguards passed
- `npm run verify:refactor-v3` — pass
  - all inherited design, AI-readiness, homepage, LAB, definitions, learning, method/practice, case/evidence, navigation, metadata, structured-data, sitemap, and safety verifiers passed
- `npm run verify:cycle-closure` — pass
- clean `npm run build` — pass
  - `/ai-welcome` statically prerendered
  - no new dependency

The successful build emitted only the existing non-fatal webpack cache snapshot warnings.
