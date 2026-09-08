---
document_id: PJL-PRODUCT-WEB-IA-IMPL-001
title: Public Information Architecture v1 implementation
version: 1.0
status: stable
authority: product
document_type: implementation-record
owner: Payload Journey LAB
last_reviewed: 2026-09-08
---

# Implementation — 2026-09-08

The [architecture matrix](public-information-architecture-v1.0.md) defines page ownership, lifecycle, reader questions, audiences, CTAs and contextual relationships. Its typed implementation is `content/public-information-architecture.ts`.

## Baseline and decisions

The baseline had 12 indexable routes: `/`, `/ai-welcome`, `/payload-journey`, `/learn`, `/cases`, `/usmt`, `/method`, `/protocol`, `/investigation`, `/lab-definitions`, `/lab` and `/ecosystem`. They are preserved. `/lablog` remains disabled with its existing 404/noindex behavior. The existing `/about` permanent redirect to `/lab#sobre` is preserved. No new redirects were introduced.

Six canonical routes were created: `/payload-tracing`, `/reverse-payload-journey`, `/operational-payload-path`, `/track-to-origin`, `/trace-engineering` and `/cases/rpj-hora-001`.

`/trace-engineer-protocol`, `/papers` and `/author/valeria-dos-santos-reiser` remain reserved, without pages, navigation links or sitemap entries. `/glossary` is not created: `/lab-definitions` owns the glossary. Trace Engineer is a developing function/profile section at `/trace-engineering#trace-engineer`. Founder context remains `/lab#founder`.

## Public TEP integration

TEP is mentioned on `/trace-engineering`, `/protocol`, `/investigation`, `/method`, and in the repository README. The four public routes reuse `content/tep.ts` through `TepOrientation`.

Public definition: **Trace Engineer Protocol (TEP) is a developing protocol artifact within Payload Journey LAB for structuring the progression of a software system investigation through explicit states, gates, evidence and validation.**

Lifecycle: **Developing protocol artifact**. Internal materials remain controlled/restricted and the full artifact is not yet public. No templates, downloads, internal state enumeration, external validation, certification, industry standard, full implementation or HORA.city protocol completion are claimed. The public four-phase procedure is explicitly distinguished from the full internal TEP model. No approved public source for publishing that state model was located.

The homepage keeps its existing composition and Methods/Case/Learn entry points. Its Trace Engineering summary now reuses the approved canonical definition. A separate TEP homepage block was not needed for discovery through the existing hubs.

## Semantic reconciliation and case

The glossary definition and homepage summary now reuse `canonicalMethodDefinitions.traceEngineering`. `/method`, `/investigation` and `/ai-welcome` retain the same approved developing-practice ontology; the README already matched it. The Trace Engineer shared definition now explicitly identifies the developing function/profile. Track to Origin follows the Charter's canonical investigative mission status, while evidence limits remain unchanged.

The dedicated HORA.city page reuses the current `publicCases`, `caseEvidence` and founding case identity. The existing documentary question, anomaly, expected/recorded behavior, two documentary sources, hypotheses, unknowns and next steps support a useful page without inventing evidence. The shared canonical case destination now points to `/cases/rpj-hora-001`; `/cases` and its legacy case anchor remain available.

The page prominently states active investigation and founder-owned internal reference investigation. `HeartCreated` remains a Documentary Evidence association. Runtime confirmation, causal origin, temporal authority, restoration and verification are not publicly established. The case is not external validation and is not closed.

## Navigation, CTAs and metadata

Primary navigation remains compact. The method hub links to all five new concept/practice/method pages. Navigation-area highlighting includes the new methods and nested case. Investigation leads to Trace Engineering and protocol; reverse investigation leads to protocol and case; path mapping leads to related investigation and the case's mapping limits; origin leads to investigation and case; case leads to related methods and Learn. Learning retains its existing course content.

Page introductions use the architecture CTA when appropriate, including investigation → Trace Engineering, protocol → case, case index → individual case, and method entry points for Payload Journey and USMT. New pages use the architecture's primary/secondary CTA definitions and contextual return links.

All six additions use existing metadata and WebPage structured-data helpers: unique titles/descriptions, absolute canonicals, Open Graph, Twitter and sitemap entries. No FAQ schema or invented schema types were added. Sitemap now contains 18 public canonical URLs, excluding all reserved routes, hidden LabLog and the legacy redirect.

## Verification

All final checks passed:

- TypeScript: `npx.cmd tsc --noEmit`.
- Production build: `npm.cmd run build`, including lint/type validation and static generation.
- Existing suites: homepage, LAB, LAB Definitions, Learn, design foundation, AI readiness, AI Welcome, method/practice, cases/evidence, navigation/discovery, refactor-v3, cycle-closure, documentation system and root README semantics.
- New suite: `npm run verify:public-information-architecture`; 18 public routes, six CREATE routes, reserved 404/noindex and sitemap exclusions, contextual discovery, every local anchor/link, unique metadata, canonical URLs, social metadata, WebPage JSON-LD and lifecycle/evidence guardrails.
- `git diff --check` with the repository's configured line-ending behavior.

The runtime suites were run against the production build. Refactor-v3 also independently checked all 18 routes and three redirect behaviors using its own local server. Refactor-v3/cycle-closure child invocations were disabled only to avoid rerunning suites already executed separately. Public deployment/hosting behavior was not tested.

Existing verifiers were updated where historical route prohibitions, route inventories, CTA expectations and the previous Trace Engineering wording conflicted with this approved task. Assertions for reserved routes and evidence boundaries were retained or extended. Temporary runner/results files were removed after verification.

An initial production build compiled but failed on a missing generated `/_document` module. Clearing only the verified workspace `.next` directory and rebuilding resolved that failure. Webpack reported dependency snapshot cache warnings; the clean production build completed successfully.

## Unresolved human decisions

Future publication requires approval of a releasable TEP artifact and its lifecycle, a genuine first paper, a publication-driven need for a separate author page, and publishable runtime/verification evidence for HORA.city. None is inferred here. Deployment and live-host validation are outside this task.

## Git and scope

No commit and no push. The supplied task file was already untracked at baseline and was not edited. All implementation changes belong to this task; no unrelated product/course changes or dependencies were introduced.

## Files created or modified

- `README.md`
- `app/cases/rpj-hora-001/page.tsx`
- `app/investigation/page.tsx`
- `app/method/page.tsx`
- `app/operational-payload-path/page.tsx`
- `app/payload-tracing/page.tsx`
- `app/protocol/page.tsx`
- `app/reverse-payload-journey/page.tsx`
- `app/trace-engineering/page.tsx`
- `app/track-to-origin/page.tsx`
- `components/pages/CanonicalEntityPage.tsx`
- `components/pages/SitePage.tsx`
- `components/sections/TepOrientation.tsx`
- `content/canonical-entity-pages.ts`
- `content/case-identities.ts`
- `content/lab-definitions.ts`
- `content/methods.ts`
- `content/public-information-architecture.ts`
- `content/routes.ts`
- `content/site.ts`
- `content/tep.ts`
- `docs/product/README.md`
- `docs/product/website/information-architecture/2026-09-08-public-information-architecture-v1-implementation.md`
- `docs/product/website/information-architecture/public-information-architecture-v1.0.md`
- `package.json`
- `scripts/verify-ai-readiness.mjs`
- `scripts/verify-cases-evidence.mjs`
- `scripts/verify-cycle-closure.mjs`
- `scripts/verify-homepage.mjs`
- `scripts/verify-lab-definitions.mjs`
- `scripts/verify-method-practice.mjs`
- `scripts/verify-navigation-discovery.mjs`
- `scripts/verify-public-information-architecture.mjs`
- `scripts/verify-refactor-v3.mjs`
- `types/content.ts`
