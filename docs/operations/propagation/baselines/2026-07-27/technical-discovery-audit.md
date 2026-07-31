# Technical Discovery Audit

Baseline: 27 July 2026  
Repository: `PayloadJourneyLAB`  
Branch: `files`  
Commit: `baf4d959659de7e9824978cd8c240859d2b9b48f`

## Technical profile

The accessible workspace contains one Next.js 14 institutional-site repository,
using the App Router, React, TypeScript, Tailwind CSS and npm. It does not contain
the HORA.city application, backend, database, CMS or authentication services.

Evidence:

- `package.json`
- `app/`
- `components/`
- `content/`
- [`baseline-manifest.json`](baseline-manifest.json)
- [`evidence/commands/initial-state.txt`](evidence/commands/initial-state.txt)

## Repository structure

| Directory | Role | Tracked files at start | Audit treatment |
|---|---|---:|---|
| `app/` | App Router pages and metadata routes | 17 | Fully examined |
| `components/` | UI, page and SEO components | 51 | Fully scanned |
| `config/` | Site canonical configuration | 1 | Fully examined |
| `content/` | Central content and entity datasets | 8 | Fully examined |
| `docs/` | Audits, sprints, screenshots and plans | 327 | Systematically scanned; key sources reviewed |
| `lib/` | Metadata and JSON-LD generation | 2 | Fully examined |
| `public/` | Brand assets | 2 | Fully examined |
| `scripts/` | Verification harness | 13 | Executed through integrated verifier |
| `types/` | Content contracts | 1 | Scanned |
| `.next/` | Generated build output | not tracked | Validation evidence only |
| `node_modules/` | Dependencies | not tracked | Excluded |

No `.github` metadata, deployment workflow, `vercel.json`, middleware or
additional accessible repository was found.

## Routes and build

The current branch contains 12 page source paths:

- 11 canonical/indexable pages;
- 1 conditional LabLog page that returns 404 while its feature flag is false.

There are no dynamic routes or route groups. The build also generates:

- `/robots.txt`;
- `/sitemap.xml`;
- `/icon.svg`;
- Next.js `/_not-found`.

`next.config.mjs` defines:

1. apex `/about` to `www` `/lab#sobre`;
2. apex catch-all to `www`;
3. `/about` to `/lab#sobre`.

No rewrites were found. See
[`route-and-link-map.md`](route-and-link-map.md) and
[`evidence/routes/route-discovery.md`](evidence/routes/route-discovery.md).

## Publication-state distinction

| Layer | Current result |
|---|---|
| Present in repository | 12 page sources |
| Included in build | 12 page paths |
| Current branch behavior | 11 canonical pages; `/lablog` returns 404 |
| Current branch sitemap | 11 URLs; excludes `/lablog` |
| Publicly retrieved | 11 selected site pages including live `/lablog`; `/lab-definitions` retrieval inconclusive |
| Externally proven indexed | None |
| Deployment commit identified | No |

The public deployment is not aligned with the current branch: `/lablog` is live
and linked publicly, while the current branch hides it. This is a confirmed
publication drift, not proof that either state is the intended one.

## Metadata

`createPageMetadata()` in `lib/metadata.ts` centralizes:

- unique title;
- unique description;
- absolute canonical;
- Open Graph website metadata;
- Twitter summary metadata;
- a shared `/brand/logo.png` image.

The integrated verifier confirms all 11 canonical pages have unique titles,
unique descriptions, absolute canonicals, Open Graph and Twitter metadata. The
root layout declares `pt-BR`, creator, publisher and index/follow.

Missing or limited:

- page-level author/byline;
- publication and modification dates;
- method/version identifiers;
- case open/update dates;
- alternate-language declarations;
- route-specific social images;
- explicit licensing metadata.

Evidence:

- `lib/metadata.ts:17-50`
- `app/layout.tsx:9-45`
- [`evidence/metadata/metadata-discovery.md`](evidence/metadata/metadata-discovery.md)

## Search-readiness

### Positive conditions

- `robots.txt` implementation exists.
- General crawlers are allowed.
- OAI-SearchBot and ChatGPT-User are allowed.
- GPTBot is intentionally blocked.
- Sitemap derives from the same route configuration.
- All 11 canonical routes use absolute canonicals.
- Apex-to-www redirects are permanent.
- No canonical route is configured `noindex`.
- No broken internal route was detected by the repository harness.

### Gaps and risks

- Live `robots.txt` and sitemap bodies were not captured.
- Sitemap has no `lastModified`.
- Search Console and Bing submission are unknown.
- Actual indexed-page counts are unknown.
- The live LabLog/current-branch conflict can produce sitemap/content drift.
- No IndexNow integration was found.
- No deploy workflow proves which commit is public.
- No legal/privacy route is published, although Google Analytics is embedded.

Do not interpret configured indexability as confirmed search-engine indexation.

## Structured data

| Type | Produced by | Pages | Notes |
|---|---|---|---|
| `Organization` | `lib/structured-data.ts` | All 11 | `sameAs` contains only YouTube |
| `WebSite` | same | All 11 | Publisher points to Organization |
| `WebPage` | same | All 11 | No dates or breadcrumbs |
| `Person` | same | `/lab`, `/usmt` | Valéria dos Santos Reiser |
| `CreativeWork` | same | `/usmt` | USMT creator points to Person |

Absent:

- `Course`;
- `Article`/`BlogPosting`;
- `VideoObject`;
- `ProfilePage`;
- `BreadcrumbList`;
- case-specific structured data;
- LabLog `ItemList`.

The omissions are not automatically defects. Current repository evidence is
insufficient to populate several of those types responsibly. Any addition must
follow entity verification, not precede it.

## Analytics and verification tags

`app/layout.tsx` embeds Google Analytics measurement ID `G-8HW6J5BBY2`. This is
a public identifier, not a secret. Repository evidence proves only that the tag
is rendered.

Not verified:

- property ownership;
- live event ingestion;
- pageview quality;
- consent/legal configuration;
- outbound Udemy/YouTube event tracking;
- Google or Bing site-verification ownership.

`External verification required.`

## Links and CTAs

The current public-source model has two rendered external destinations:

- Udemy course URL with `FOLLOW-THE-FLOW`;
- YouTube `@PayloadJourneyLAB`.

LinkedIn, contact and email are null. GitHub/contact CTAs are future and not
rendered. Missing legal-route labels are deliberately omitted from the footer.

The integrated verifier confirms all internal destinations are valid among the
11 canonical routes. There are no orphan canonical pages. `/lablog` is not an
orphan; it is intentionally unavailable in current branch behavior.

Risks:

- coupon expiration is unknown;
- YouTube ownership and video inventory are unverified;
- historical documentation contains a second handle, `@Lab-Log`;
- no public contact/collaboration path exists;
- no explicit outbound CTA analytics events were found.

## Public assets

Two brand assets exist:

- `public/brand/logo.png`;
- `app/icon.svg`.

The logo is reused as the shared social image for every page. Its dimensions are
declared as 1254×1254. No route-specific Open Graph image, author portrait, case
diagram or published evidence image exists in `public/`.

The 235 PNG files under `docs/` are predominantly implementation and responsive
screenshots. They are repository evidence, not public web assets.

## Verification results

- TypeScript: pass.
- Production build: pass.
- Integrated V3 verifier: pass.
- Nine inherited suites: all pass.
- Cycle closure: pass.
- JSON parsing: pending final validation at the time of this document section.
- Production deployment validation: pending.

Full command evidence:
[`evidence/commands/validation-results.txt`](evidence/commands/validation-results.txt).

## Technical conclusion

The branch is technically coherent and buildable, with strong centralized
metadata, route, content and validation infrastructure. The largest propagation
risks are not compilation defects. They are:

1. branch/deployment drift;
2. lack of deployment provenance;
3. absence of case technical evidence;
4. undated/unversioned canonical definitions;
5. unverified external channels and search properties.
