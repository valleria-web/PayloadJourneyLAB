# Asset Inventory ? Payload Journey LAB

Source of truth: `asset-inventory.json`. This file was generated mechanically from that dataset on 27 July 2026.

Assets: **45**. Stable IDs are preserved in JSON, CSV and Markdown.

## Index

| Asset ID | Asset | Category | State | Priority |
|---|---|---|---|---|
| PJL-ROUTE-001 | Institutional homepage | Public route | Published but needs revision | Critical |
| PJL-ROUTE-002 | Payload Journey canonical page | Public route | Published and stable | Medium |
| PJL-ROUTE-003 | Learning and Udemy pathway | Public route | Published but needs revision | High |
| PJL-ROUTE-004 | Cases and Evidence page | Public route | Published but needs revision | Critical |
| PJL-ROUTE-005 | USMT canonical page | Public route | Published and stable | High |
| PJL-ROUTE-006 | Methods taxonomy page | Public route | Published but needs revision | High |
| PJL-ROUTE-007 | Investigation protocol page | Public route | Published and stable | High |
| PJL-ROUTE-008 | Software System Investigation page | Public route | Published but needs revision | High |
| PJL-ROUTE-009 | LAB Definitions page | Public route | Connected to route but not externally verified | High |
| PJL-ROUTE-010 | About the LAB page | Public route | Published and stable | Medium |
| PJL-ROUTE-011 | LAB ecosystem page | Public route | Published and stable | Medium |
| PJL-ROUTE-012 | LabLog route | Conditional route | Published but needs revision | Critical |
| PJL-ROUTE-013 | Legacy /about redirect | Redirect | Connected to route but not externally verified | Medium |
| PJL-SEO-001 | robots.txt implementation | Search configuration | Connected to route but not externally verified | High |
| PJL-SEO-002 | sitemap.xml implementation | Search configuration | Connected to route but not externally verified | Critical |
| PJL-SEO-003 | Page metadata system | Metadata | Published and stable | Medium |
| PJL-SEO-004 | JSON-LD graph | Structured data | Published but needs revision | Medium |
| PJL-SEO-005 | Google Analytics tag | Analytics configuration | Connected to route but not externally verified | High |
| PJL-BRAND-001 | Primary logo | Public asset | Published and stable | Medium |
| PJL-BRAND-002 | Favicon SVG | Public asset | Published and stable | Low |
| PJL-METHOD-001 | Payload Journey method | Method | Published and stable | Medium |
| PJL-METHOD-002 | Universal System Modeling Template (USMT) | Method | Published but needs revision | High |
| PJL-METHOD-003 | Reverse Payload Journey | Method | Published and stable | High |
| PJL-METHOD-004 | Operational Payload Path | Method | Provisional | High |
| PJL-METHOD-005 | Track to Origin | Method | Provisional | High |
| PJL-METHOD-006 | Software System Investigation and Trace Engineering taxonomy | Conceptual framework | Published but needs revision | High |
| PJL-METHOD-007 | Congelar, Mapear, Detectar e Restaurar protocol | Protocol | Published and stable | High |
| PJL-METHOD-008 | Trace Engineer profile | Developing role | Provisional | High |
| PJL-METHOD-009 | LAB Definitions dataset | Glossary | Connected to route but not externally verified | High |
| PJL-CASE-001 | HORA.city — Founding Reference Case 001 | Case file | Published but needs revision | Critical |
| PJL-CASE-002 | EVD-HORA-DOC-001 editorial case record | Documentary evidence record | Published but needs revision | Critical |
| PJL-CASE-003 | EVD-HORA-DOC-002 repository presentation record | Documentary evidence record | Published but needs revision | Critical |
| PJL-LABLOG-001 | LabLog editorial model | Editorial channel | Draft | Critical |
| PJL-COURSE-001 | Payload Journey LAB Udemy course | Course | Published but needs revision | High |
| PJL-CHANNEL-001 | Official YouTube channel | External channel | Connected to route but not externally verified | High |
| PJL-CHANNEL-002 | LinkedIn personal and institutional channels | External channel | Planned | High |
| PJL-CHANNEL-003 | Contact, email, GitHub and collaboration channels | External channel | Planned | High |
| PJL-DOC-001 | Repository README | Documentation | Published but needs revision | High |
| PJL-DOC-002 | AI-readiness audit collection | Documentation collection | Present but not connected to a route | Medium |
| PJL-DOC-003 | Homepage refactor audit and screenshot collection | Documentation collection | Present but not connected to a route | Medium |
| PJL-DOC-004 | V3 sprint specifications, decisions and closure records | Documentation collection | Present but not connected to a route | Medium |
| PJL-DOC-005 | V2 and early sprint documentation | Documentation collection | Deprecated | High |
| PJL-DOC-006 | Historical LAB Definitions document | Documentation | Deprecated | High |
| PJL-DOC-007 | LabLog, YouTube and protocol documentation plan | Documentation | Draft | High |
| PJL-DOC-008 | White paper placeholders | Planned publication | Planned | Medium |

## Complete records

### PJL-ROUTE-001 ? Institutional homepage

- Asset ID: PJL-ROUTE-001
- Asset name: Institutional homepage
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/page.tsx; content/routes.ts; content/payload-journey-lab.ts
- Route: /
- Intended public URL: https://www.payloadjourneylab.com/
- Current state: Published but needs revision
- Publication evidence: Public page retrieved on 2026-07-27; current branch build and verifier pass.
- Canonical status: Canonical institutional entry
- Indexability status: Configured indexable; live indexation not verified
- Authorship status: Publisher and creator configured in root metadata
- Version or date status: No visible publication or update date
- Payload Journey LAB naming consistency: Canonical naming in current source
- HORA.city relationship: Links to /cases and summarizes the case
- Udemy CTA status: Active CTA with coupon URL
- Internal links: /payload-journey; /learn; /method; /cases; /ecosystem; /lab
- External links: Udemy; YouTube
- Evidence source: app/page.tsx:24-29; content/routes.ts:254-270; public retrieval 2026-07-27
- Risk or inconsistency: Live content differs from current branch and still links to live LabLog.
- Recommended next action: Confirm deployment commit and reconcile live navigation with the approved feature flag.
- Priority: Critical
- Confidence level: High
- External verification required: Yes — deployment identity and search indexation

### PJL-ROUTE-002 ? Payload Journey canonical page

- Asset ID: PJL-ROUTE-002
- Asset name: Payload Journey canonical page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/payload-journey/page.tsx; content/routes.ts; content/methods.ts
- Route: /payload-journey
- Intended public URL: https://www.payloadjourneylab.com/payload-journey
- Current state: Published and stable
- Publication evidence: Public page retrieved and integrated verifier passed.
- Canonical status: Canonical conceptual page
- Indexability status: In current sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No page date or version
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Provides the flow model referenced by the case
- Udemy CTA status: Indirect through navigation/footer
- Internal links: /usmt; /method; /learn
- External links: Udemy; YouTube through footer
- Evidence source: app/payload-journey/page.tsx; content/routes.ts:4-13; verify:refactor-v3
- Risk or inconsistency: No page-specific authorship, date or version.
- Recommended next action: Add editorial provenance in a future production task after human approval.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — indexation

### PJL-ROUTE-003 ? Learning and Udemy pathway

- Asset ID: PJL-ROUTE-003
- Asset name: Learning and Udemy pathway
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/learn/page.tsx; content/site.ts; content/routes.ts
- Route: /learn
- Intended public URL: https://www.payloadjourneylab.com/learn
- Current state: Published but needs revision
- Publication evidence: Public page and Udemy destination retrieved; current branch verifier passed.
- Canonical status: Canonical learning page
- Indexability status: In current sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: Course coupon expiration is null; page has no date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Links to /cases as applied observation
- Udemy CTA status: Primary external course CTA with FOLLOW-THE-FLOW
- Internal links: /payload-journey; /cases; /method
- External links: Udemy; YouTube through footer
- Evidence source: content/site.ts:17-19,132-203; app/learn/page.tsx; public retrieval 2026-07-27
- Risk or inconsistency: Coupon validity and course publication state are temporal and not owned by repository evidence.
- Recommended next action: Verify coupon, course state and course metadata in Udemy.
- Priority: High
- Confidence level: High
- External verification required: Yes — Udemy owner dashboard

### PJL-ROUTE-004 ? Cases and Evidence page

- Asset ID: PJL-ROUTE-004
- Asset name: Cases and Evidence page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/cases/page.tsx; content/cases.ts; content/hora-city.ts
- Route: /cases
- Intended public URL: https://www.payloadjourneylab.com/cases
- Current state: Published but needs revision
- Publication evidence: Public page retrieved; current branch verifier confirms one case and two documentary sources.
- Canonical status: Canonical case registry
- Indexability status: In current sitemap and configured indexable
- Authorship status: Internal author; no case-level byline or dates
- Version or date status: openedAt and updatedAt are not confirmed
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Primary public location for RPJ-HORA-001
- Udemy CTA status: Footer only
- Internal links: /method; /protocol
- External links: Udemy; YouTube through footer
- Evidence source: content/cases.ts:57-130; app/cases/page.tsx; public retrieval 2026-07-27
- Risk or inconsistency: Calls narrative assertions public evidence although no log, trace or runtime artifact is published.
- Recommended next action: Publish sanitized technical evidence or narrow the evidence wording.
- Priority: Critical
- Confidence level: High
- External verification required: Yes — case facts and public deployment

### PJL-ROUTE-005 ? USMT canonical page

- Asset ID: PJL-ROUTE-005
- Asset name: USMT canonical page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/usmt/page.tsx; content/usmt.ts; config/site.ts
- Route: /usmt
- Intended public URL: https://www.payloadjourneylab.com/usmt
- Current state: Published and stable
- Publication evidence: Public page retrieved; build and verifier pass.
- Canonical status: Canonical conceptual page
- Indexability status: In sitemap and configured indexable
- Authorship status: CreativeWork creator links to Valéria dos Santos Reiser
- Version or date status: No method version or publication date
- Payload Journey LAB naming consistency: Consistent in current source
- HORA.city relationship: Expected-model instrument referenced by HORA.city examples
- Udemy CTA status: Footer only
- Internal links: /payload-journey; /protocol; /method
- External links: Udemy; YouTube through footer
- Evidence source: config/site.ts:20-25; lib/structured-data.ts:44-55,104-106; public retrieval 2026-07-27
- Risk or inconsistency: Historical documents use the superseded expansion Universal System Model Template.
- Recommended next action: Label historical Model Template documents as superseded and add method version provenance.
- Priority: High
- Confidence level: High
- External verification required: Yes — indexation and external authorship profiles

### PJL-ROUTE-006 ? Methods taxonomy page

- Asset ID: PJL-ROUTE-006
- Asset name: Methods taxonomy page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/method/page.tsx; content/methods.ts
- Route: /method
- Intended public URL: https://www.payloadjourneylab.com/method
- Current state: Published but needs revision
- Publication evidence: Public page retrieved; integrated verifier passed.
- Canonical status: Canonical methods index
- Indexability status: In sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No method versions or dates
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Documents RPJ and Track to Origin applied narratively to the case
- Udemy CTA status: Footer only
- Internal links: /payload-journey; /usmt; /protocol; /investigation; /cases
- External links: Udemy; YouTube through footer
- Evidence source: content/methods.ts:11-45,53-187; public retrieval 2026-07-27
- Risk or inconsistency: Defines Trace Engineering as capabilities while LAB Definitions defines it as a practice.
- Recommended next action: Human editorial decision on the taxonomic status of Trace Engineering.
- Priority: High
- Confidence level: High
- External verification required: No for repository conflict; yes for indexation

### PJL-ROUTE-007 ? Investigation protocol page

- Asset ID: PJL-ROUTE-007
- Asset name: Investigation protocol page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/protocol/page.tsx; content/methods.ts
- Route: /protocol
- Intended public URL: https://www.payloadjourneylab.com/protocol
- Current state: Published and stable
- Publication evidence: Public page retrieved; verifier confirms four phases.
- Canonical status: Canonical protocol page
- Indexability status: In sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No protocol version or effective date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Provides the investigation lifecycle expected for Case File 001
- Udemy CTA status: Footer only
- Internal links: /method; /investigation; /cases
- External links: Udemy; YouTube through footer
- Evidence source: app/protocol/page.tsx; content/methods.ts; verify:method-practice
- Risk or inconsistency: Named evidence artefacts are not present as canonical case files.
- Recommended next action: Create sanitized protocol artefacts for Case File 001.
- Priority: High
- Confidence level: High
- External verification required: Yes — indexation

### PJL-ROUTE-008 ? Software System Investigation page

- Asset ID: PJL-ROUTE-008
- Asset name: Software System Investigation page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/investigation/page.tsx; content/methods.ts
- Route: /investigation
- Intended public URL: https://www.payloadjourneylab.com/investigation
- Current state: Published but needs revision
- Publication evidence: Public page retrieved; current verifier protects proposed role language.
- Canonical status: Canonical practice page
- Indexability status: In sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No definition version or date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Frames Track Mode, evidence and restoration for the case
- Udemy CTA status: Footer only
- Internal links: /method; /protocol; /learn; /cases
- External links: Udemy; YouTube through footer
- Evidence source: content/methods.ts; app/investigation/page.tsx; public retrieval 2026-07-27
- Risk or inconsistency: Live deployment copy is older than current branch and defines the practice differently.
- Recommended next action: Confirm deployment and align current canonical taxonomy after human review.
- Priority: High
- Confidence level: High
- External verification required: Yes — deployment identity

### PJL-ROUTE-009 ? LAB Definitions page

- Asset ID: PJL-ROUTE-009
- Asset name: LAB Definitions page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/lab-definitions/page.tsx; content/lab-definitions.ts
- Route: /lab-definitions
- Intended public URL: https://www.payloadjourneylab.com/lab-definitions
- Current state: Connected to route but not externally verified
- Publication evidence: Current build and verifier pass; public web retrieval returned cache miss.
- Canonical status: Declared canonical definitions page
- Indexability status: In current sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No definition version or date
- Payload Journey LAB naming consistency: Canonical term Trace Engineering in current source
- HORA.city relationship: Contains qualified conceptual HORA.city examples
- Udemy CTA status: Footer only
- Internal links: /; /lab; /method
- External links: Udemy; YouTube through footer
- Evidence source: app/lab-definitions/page.tsx; content/lab-definitions.ts; verify:lab-definitions
- Risk or inconsistency: Trace Engineering definition conflicts with content/methods.ts taxonomy.
- Recommended next action: Resolve the definition conflict and externally verify the route after deployment.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-ROUTE-010 ? About the LAB page

- Asset ID: PJL-ROUTE-010
- Asset name: About the LAB page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/lab/page.tsx; content/payload-journey-lab.ts
- Route: /lab
- Intended public URL: https://www.payloadjourneylab.com/lab
- Current state: Published and stable
- Publication evidence: Public page retrieved; current verifier passed.
- Canonical status: Canonical institutional and founder page
- Indexability status: In sitemap and configured indexable
- Authorship status: Founder identified; Person JSON-LD present
- Version or date status: No page publication or update date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Explains LAB origin in the HORA.city investigation
- Udemy CTA status: Footer only
- Internal links: /method; /investigation; /cases; /learn
- External links: Udemy; YouTube; no LinkedIn
- Evidence source: app/lab/page.tsx; lib/structured-data.ts:99-103; public retrieval 2026-07-27
- Risk or inconsistency: Founder has no externally linked profile and page has no dated provenance.
- Recommended next action: Verify and add approved external identity links and editorial dates.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — identity profiles and indexation

### PJL-ROUTE-011 ? LAB ecosystem page

- Asset ID: PJL-ROUTE-011
- Asset name: LAB ecosystem page
- Category: Public route
- Repository: PayloadJourneyLAB
- File or directory path: app/ecosystem/page.tsx; content/payload-journey-lab.ts
- Route: /ecosystem
- Intended public URL: https://www.payloadjourneylab.com/ecosystem
- Current state: Published and stable
- Publication evidence: Public page retrieved; current branch verifier passed.
- Canonical status: Canonical ecosystem page
- Indexability status: In sitemap and configured indexable
- Authorship status: Site-level creator and publisher only
- Version or date status: No page date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Places the case within applied investigation
- Udemy CTA status: Footer only
- Internal links: /learn; /cases; /lab
- External links: Udemy; YouTube through footer
- Evidence source: app/ecosystem/page.tsx; content/routes.ts:98-106; public retrieval 2026-07-27
- Risk or inconsistency: Collaboration is described but no contact path is configured.
- Recommended next action: Define a verified collaboration/contact channel before stronger propagation.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — indexation

### PJL-ROUTE-012 ? LabLog route

- Asset ID: PJL-ROUTE-012
- Asset name: LabLog route
- Category: Conditional route
- Repository: PayloadJourneyLAB
- File or directory path: app/lablog/page.tsx; content/cases.ts; config/site.ts
- Route: /lablog
- Intended public URL: https://www.payloadjourneylab.com/lablog
- Current state: Published but needs revision
- Publication evidence: Live page retrieved, but current branch returns 404 by feature flag and omits it from sitemap.
- Canonical status: Deployment/branch conflict
- Indexability status: Excluded in current branch; live indexability unknown
- Authorship status: No entries and no entry-level authorship
- Version or date status: Zero dated entries
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: No structured entries linked to the case
- Udemy CTA status: Live footer; omitted from branch route body because route is hidden
- Internal links: /cases; /lab; /protocol
- External links: Udemy; live page channel state differs from current content
- Evidence source: config/site.ts:9-12; app/lablog/page.tsx:14-16; public retrieval 2026-07-27
- Risk or inconsistency: Critical publication drift between deployment and repository.
- Recommended next action: Choose intended public state, identify deployed commit and align route, sitemap and navigation.
- Priority: Critical
- Confidence level: High
- External verification required: Yes — deployment and indexation

### PJL-ROUTE-013 ? Legacy /about redirect

- Asset ID: PJL-ROUTE-013
- Asset name: Legacy /about redirect
- Category: Redirect
- Repository: PayloadJourneyLAB
- File or directory path: next.config.mjs
- Route: /about
- Intended public URL: https://www.payloadjourneylab.com/lab#sobre
- Current state: Connected to route but not externally verified
- Publication evidence: Three redirect rules build successfully; public redirect retrieval was unavailable.
- Canonical status: Compatibility redirect to /lab#sobre
- Indexability status: Permanent redirect configured
- Authorship status: Not applicable
- Version or date status: No deployment proof
- Payload Journey LAB naming consistency: Not applicable
- HORA.city relationship: None
- Udemy CTA status: None
- Internal links: /lab#sobre
- External links: Apex-to-www canonical host redirect
- Evidence source: next.config.mjs:3-25; verify:refactor-v3
- Risk or inconsistency: Public redirect behavior cannot be tied to the current commit.
- Recommended next action: Verify both apex and www redirect responses after deployment.
- Priority: Medium
- Confidence level: High
- External verification required: Yes

### PJL-SEO-001 ? robots.txt implementation

- Asset ID: PJL-SEO-001
- Asset name: robots.txt implementation
- Category: Search configuration
- Repository: PayloadJourneyLAB
- File or directory path: app/robots.ts
- Route: /robots.txt
- Intended public URL: https://www.payloadjourneylab.com/robots.txt
- Current state: Connected to route but not externally verified
- Publication evidence: Build emits /robots.txt; live fetch was unavailable.
- Canonical status: Single source in app/robots.ts
- Indexability status: General crawlers, OAI-SearchBot and ChatGPT-User allowed; GPTBot blocked
- Authorship status: Not applicable
- Version or date status: No policy date
- Payload Journey LAB naming consistency: Not applicable
- HORA.city relationship: Affects case discoverability
- Udemy CTA status: Not applicable
- Internal links: Sitemap declaration
- External links: None
- Evidence source: app/robots.ts:4-28; build output
- Risk or inconsistency: Live policy not retrieved and policy has no effective date.
- Recommended next action: Capture live response headers/body and record policy ownership.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-SEO-002 ? sitemap.xml implementation

- Asset ID: PJL-SEO-002
- Asset name: sitemap.xml implementation
- Category: Search configuration
- Repository: PayloadJourneyLAB
- File or directory path: app/sitemap.ts; content/routes.ts
- Route: /sitemap.xml
- Intended public URL: https://www.payloadjourneylab.com/sitemap.xml
- Current state: Connected to route but not externally verified
- Publication evidence: Build emits sitemap; verifier confirms 11 URLs; live fetch unavailable.
- Canonical status: Derived from publicRoutePaths
- Indexability status: 11 configured URLs; /lablog excluded
- Authorship status: Not applicable
- Version or date status: No lastModified values
- Payload Journey LAB naming consistency: Not applicable
- HORA.city relationship: Includes /cases
- Udemy CTA status: Not applicable
- Internal links: 11 canonical routes
- External links: None
- Evidence source: app/sitemap.ts; content/routes.ts:264-270; verify:ai-readiness
- Risk or inconsistency: No lastModified and live contents unverified; deployed LabLog may conflict.
- Recommended next action: Verify live sitemap and Search Console submission; decide LabLog state.
- Priority: Critical
- Confidence level: High
- External verification required: Yes

### PJL-SEO-003 ? Page metadata system

- Asset ID: PJL-SEO-003
- Asset name: Page metadata system
- Category: Metadata
- Repository: PayloadJourneyLAB
- File or directory path: lib/metadata.ts; app/layout.tsx; content/routes.ts
- Route: All 11 canonical routes
- Intended public URL: https://www.payloadjourneylab.com/
- Current state: Published and stable
- Publication evidence: Verifier confirms 11 unique titles, descriptions, absolute canonicals, OG and Twitter blocks.
- Canonical status: Centralized current implementation
- Indexability status: robots index/follow globally
- Authorship status: Root creator and publisher; no per-page author
- Version or date status: No publication or modified dates
- Payload Journey LAB naming consistency: Consistent in current source
- HORA.city relationship: Cases metadata is hypothesis-aware
- Udemy CTA status: Not applicable
- Internal links: Canonical URLs for all pages
- External links: Shared logo URL
- Evidence source: lib/metadata.ts:17-50; app/layout.tsx:9-45; verify:refactor-v3
- Risk or inconsistency: Shared square logo is used as all social images; no dates or page authors.
- Recommended next action: Create page-appropriate social assets and an approved editorial provenance model.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — rendered live metadata

### PJL-SEO-004 ? JSON-LD graph

- Asset ID: PJL-SEO-004
- Asset name: JSON-LD graph
- Category: Structured data
- Repository: PayloadJourneyLAB
- File or directory path: lib/structured-data.ts; components/seo/JsonLd.tsx
- Route: All 11 canonical routes
- Intended public URL: https://www.payloadjourneylab.com/
- Current state: Published but needs revision
- Publication evidence: Verifier confirms Organization, WebSite, WebPage, Person and CreativeWork.
- Canonical status: Centralized graph generator
- Indexability status: Rendered on canonical pages
- Authorship status: Person connected to LAB and USMT
- Version or date status: No dateCreated/dateModified/version
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: No case-specific schema
- Udemy CTA status: Course schema intentionally omitted
- Internal links: Organization; WebSite; WebPage; Person; CreativeWork
- External links: Organization sameAs includes only YouTube
- Evidence source: lib/structured-data.ts; verify:refactor-v3
- Risk or inconsistency: Generic graph lacks case, course, article, breadcrumb and dated provenance; omission may be appropriate until evidence exists.
- Recommended next action: Add schema types only after corresponding public entities and fields are verified.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — schema validator and live HTML

### PJL-SEO-005 ? Google Analytics tag

- Asset ID: PJL-SEO-005
- Asset name: Google Analytics tag
- Category: Analytics configuration
- Repository: PayloadJourneyLAB
- File or directory path: app/layout.tsx
- Route: All pages
- Intended public URL: https://www.googletagmanager.com/gtag/js?id=G-8HW6J5BBY2
- Current state: Connected to route but not externally verified
- Publication evidence: Public identifier embedded in root layout; dashboard access unavailable.
- Canonical status: Single hard-coded measurement ID
- Indexability status: Not applicable
- Authorship status: Ownership not established from repository
- Version or date status: No configuration date
- Payload Journey LAB naming consistency: Not applicable
- HORA.city relationship: Could measure /cases but no data was accessed
- Udemy CTA status: No explicit CTA event instrumentation found
- Internal links: All pages
- External links: Google Tag Manager script
- Evidence source: app/layout.tsx:7,54-65
- Risk or inconsistency: Repository proves tag presence, not data collection, consent, ownership or event quality.
- Recommended next action: Verify property ownership, consent requirements, data flow and CTA events.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-BRAND-001 ? Primary logo

- Asset ID: PJL-BRAND-001
- Asset name: Primary logo
- Category: Public asset
- Repository: PayloadJourneyLAB
- File or directory path: public/brand/logo.png; public/brand/README.md
- Route: /brand/logo.png
- Intended public URL: https://www.payloadjourneylab.com/brand/logo.png
- Current state: Published and stable
- Publication evidence: Used in header/footer metadata and build.
- Canonical status: Current shared brand and social image
- Indexability status: Public static asset
- Authorship status: Repository asset; rights/provenance not documented
- Version or date status: No asset version
- Payload Journey LAB naming consistency: Alt text canonical
- HORA.city relationship: None
- Udemy CTA status: None
- Internal links: Metadata; header; footer
- External links: None
- Evidence source: public/brand/logo.png; lib/metadata.ts:13-18
- Risk or inconsistency: A square logo is reused for every social page and rights provenance is absent.
- Recommended next action: Document rights and create route-specific Open Graph assets.
- Priority: Medium
- Confidence level: High
- External verification required: No for repository presence; yes for live delivery

### PJL-BRAND-002 ? Favicon SVG

- Asset ID: PJL-BRAND-002
- Asset name: Favicon SVG
- Category: Public asset
- Repository: PayloadJourneyLAB
- File or directory path: app/icon.svg
- Route: /icon.svg
- Intended public URL: https://www.payloadjourneylab.com/icon.svg
- Current state: Published and stable
- Publication evidence: Emitted by successful build.
- Canonical status: Current app icon
- Indexability status: Public static metadata asset
- Authorship status: Repository asset; provenance not documented
- Version or date status: No version
- Payload Journey LAB naming consistency: Contains LAB initials
- HORA.city relationship: None
- Udemy CTA status: None
- Internal links: Root layout metadata convention
- External links: None
- Evidence source: app/icon.svg; build output
- Risk or inconsistency: No documented asset ownership/version.
- Recommended next action: Add brand asset provenance.
- Priority: Low
- Confidence level: High
- External verification required: No

### PJL-METHOD-001 ? Payload Journey method

- Asset ID: PJL-METHOD-001
- Asset name: Payload Journey method
- Category: Method
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; content/lab-definitions.ts
- Route: /payload-journey; /method; /lab-definitions
- Intended public URL: https://www.payloadjourneylab.com/payload-journey
- Current state: Published and stable
- Publication evidence: Canonical route and definitions in current source; live route retrieved.
- Canonical status: Canonical page plus centralized definition
- Indexability status: Canonical route in sitemap
- Authorship status: Attributed institutionally to LAB; no method publication record
- Version or date status: Undated and unversioned
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Flow-following basis of RPJ-HORA-001
- Udemy CTA status: Core course topic
- Internal links: /method; /learn; /cases
- External links: Udemy
- Evidence source: content/methods.ts:11-13,53-78; content/lab-definitions.ts:220-233
- Risk or inconsistency: No published version or independent reference.
- Recommended next action: Create a dated canonical method publication.
- Priority: Medium
- Confidence level: High
- External verification required: Yes — external citations

### PJL-METHOD-002 ? Universal System Modeling Template (USMT)

- Asset ID: PJL-METHOD-002
- Asset name: Universal System Modeling Template (USMT)
- Category: Method
- Repository: PayloadJourneyLAB
- File or directory path: config/site.ts; content/usmt.ts; content/methods.ts
- Route: /usmt; /method
- Intended public URL: https://www.payloadjourneylab.com/usmt
- Current state: Published but needs revision
- Publication evidence: Current route and CreativeWork schema are published; live route retrieved.
- Canonical status: Canonical expansion is Universal System Modeling Template
- Indexability status: Canonical route in sitemap
- Authorship status: Valéria dos Santos Reiser linked as creator
- Version or date status: No version/date
- Payload Journey LAB naming consistency: Current source consistent; historical docs conflict
- HORA.city relationship: Expected-model reference for HORA.city examples
- Udemy CTA status: Course topic
- Internal links: /payload-journey; /method; /protocol
- External links: Udemy
- Evidence source: config/site.ts:20-25; content/usmt.ts; docs/ai-readiness/02-sprint-11-canonical-entity-map.md:22-23
- Risk or inconsistency: Historical Model Template expansion remains discoverable in repository documents.
- Recommended next action: Mark superseded documents and publish a dated definition/version.
- Priority: High
- Confidence level: High
- External verification required: Yes — external publication record

### PJL-METHOD-003 ? Reverse Payload Journey

- Asset ID: PJL-METHOD-003
- Asset name: Reverse Payload Journey
- Category: Method
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; content/hora-city.ts
- Route: /method; /learn; /cases
- Intended public URL: https://www.payloadjourneylab.com/method
- Current state: Published and stable
- Publication evidence: Definition is rendered on /method and applied narratively to HORA.city.
- Canonical status: Canonical definition in content/methods.ts; no dedicated route
- Indexability status: Discoverable within indexed routes
- Authorship status: Institutional authorship only
- Version or date status: No version/date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Recorded method for RPJ-HORA-001
- Udemy CTA status: Included in beta messaging
- Internal links: /method; /cases; /learn
- External links: Udemy
- Evidence source: content/methods.ts:110-133; content/hora-city.ts:17-21
- Risk or inconsistency: No technical case evidence demonstrates a completed reverse journey.
- Recommended next action: Publish a sanitized worked trace before claiming demonstrated results.
- Priority: High
- Confidence level: High
- External verification required: No for presence; yes for claimed application outcome

### PJL-METHOD-004 ? Operational Payload Path

- Asset ID: PJL-METHOD-004
- Asset name: Operational Payload Path
- Category: Method
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; README.md
- Route: /method
- Intended public URL: https://www.payloadjourneylab.com/method
- Current state: Provisional
- Publication evidence: Definition is rendered; repository explicitly says no canonical OPP file was located.
- Canonical status: Defined concept, no produced canonical artefact
- Indexability status: Discoverable within /method
- Authorship status: Institutional authorship only
- Version or date status: No version/date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Intended map of the case flow; no map exists
- Udemy CTA status: No direct CTA
- Internal links: /method; /protocol; /cases
- External links: None
- Evidence source: content/methods.ts:136-160; public /method retrieval
- Risk or inconsistency: A method output is described but no example or template is published.
- Recommended next action: Create a sanitized OPP template and Case File 001 instance.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-METHOD-005 ? Track to Origin

- Asset ID: PJL-METHOD-005
- Asset name: Track to Origin
- Category: Method
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; content/hora-city.ts
- Route: /method; /learn; /cases
- Intended public URL: https://www.payloadjourneylab.com/method
- Current state: Provisional
- Publication evidence: Definition rendered and case mission recorded; source labels it in development.
- Canonical status: Defined practice in development
- Indexability status: Discoverable within indexed routes
- Authorship status: Institutional authorship only
- Version or date status: No version/date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Recorded mission for RPJ-HORA-001
- Udemy CTA status: Learning progression topic
- Internal links: /method; /learn; /cases
- External links: Udemy
- Evidence source: content/methods.ts:162-187; content/hora-city.ts:19-21
- Risk or inconsistency: Origin and authority are still unknown in the only documented case.
- Recommended next action: Retain in-development qualifier and publish evidence when origin is located.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-METHOD-006 ? Software System Investigation and Trace Engineering taxonomy

- Asset ID: PJL-METHOD-006
- Asset name: Software System Investigation and Trace Engineering taxonomy
- Category: Conceptual framework
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; content/lab-definitions.ts
- Route: /investigation; /method; /lab-definitions
- Intended public URL: https://www.payloadjourneylab.com/investigation
- Current state: Published but needs revision
- Publication evidence: Rendered across current canonical routes.
- Canonical status: Competing canonical definitions exist
- Indexability status: Discoverable on indexed pages
- Authorship status: Proposed/developing practice attributed to LAB
- Version or date status: No definition version/date
- Payload Journey LAB naming consistency: Name consistent; category inconsistent
- HORA.city relationship: Framework for the founding case
- Udemy CTA status: Learning pathway context
- Internal links: /method; /investigation; /lab-definitions
- External links: Udemy
- Evidence source: content/methods.ts:16-20,45; content/lab-definitions.ts:261-275
- Risk or inconsistency: Trace Engineering is both a set of capabilities and a practice.
- Recommended next action: Human decision and dated canonical glossary update.
- Priority: High
- Confidence level: High
- External verification required: No for conflict; yes for external validation

### PJL-METHOD-007 ? Congelar, Mapear, Detectar e Restaurar protocol

- Asset ID: PJL-METHOD-007
- Asset name: Congelar, Mapear, Detectar e Restaurar protocol
- Category: Protocol
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; app/protocol/page.tsx
- Route: /protocol
- Intended public URL: https://www.payloadjourneylab.com/protocol
- Current state: Published and stable
- Publication evidence: Four phases rendered and verified.
- Canonical status: Canonical protocol
- Indexability status: Canonical route in sitemap
- Authorship status: Institutional authorship only
- Version or date status: No protocol version/date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Expected lifecycle; case currently at Mapear
- Udemy CTA status: Indirect
- Internal links: /method; /investigation; /cases
- External links: None
- Evidence source: content/methods.ts; verify:method-practice
- Risk or inconsistency: Protocol artefact names exist without files for the founding case.
- Recommended next action: Create the minimum sanitized case artefact set.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-METHOD-008 ? Trace Engineer profile

- Asset ID: PJL-METHOD-008
- Asset name: Trace Engineer profile
- Category: Developing role
- Repository: PayloadJourneyLAB
- File or directory path: content/methods.ts; content/lab-definitions.ts; README.md
- Route: /investigation; /lab-definitions; /lab
- Intended public URL: https://www.payloadjourneylab.com/investigation
- Current state: Provisional
- Publication evidence: Current pages and verifier qualify it as a function/profile in development.
- Canonical status: Developing role, not established profession
- Indexability status: Discoverable on indexed routes
- Authorship status: Developed in LAB context
- Version or date status: No definition version/date
- Payload Journey LAB naming consistency: Current source guarded; historical sources vary
- HORA.city relationship: Role expected to perform the investigation
- Udemy CTA status: Course limits deny professional certification
- Internal links: /investigation; /lab; /learn
- External links: Udemy
- Evidence source: content/lab-definitions.ts:277-300; content/methods.ts:833; README.md:60-63
- Risk or inconsistency: README and historical LAB Definitions use professional language.
- Recommended next action: Label historical professional wording as superseded.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-METHOD-009 ? LAB Definitions dataset

- Asset ID: PJL-METHOD-009
- Asset name: LAB Definitions dataset
- Category: Glossary
- Repository: PayloadJourneyLAB
- File or directory path: content/lab-definitions.ts
- Route: /lab-definitions
- Intended public URL: https://www.payloadjourneylab.com/lab-definitions
- Current state: Connected to route but not externally verified
- Publication evidence: Verifier confirms 21 full definitions and six homepage definitions.
- Canonical status: Declared official definitions; conflicts remain with methods taxonomy
- Indexability status: Route in sitemap
- Authorship status: Institutional authorship only
- Version or date status: No glossary version/date
- Payload Journey LAB naming consistency: Current terminology mostly canonical
- HORA.city relationship: Contains qualified conceptual Send Heart examples
- Udemy CTA status: Indirect
- Internal links: /; /lab; /method
- External links: None
- Evidence source: content/lab-definitions.ts; verify:lab-definitions
- Risk or inconsistency: Official label may overstate finality while definitions are still developing.
- Recommended next action: Add status/version to every definition and resolve Trace Engineering taxonomy.
- Priority: High
- Confidence level: High
- External verification required: Yes — live route

### PJL-CASE-001 ? HORA.city — Founding Reference Case 001

- Asset ID: PJL-CASE-001
- Asset name: HORA.city — Founding Reference Case 001
- Category: Case file
- Repository: PayloadJourneyLAB
- File or directory path: content/hora-city.ts; content/cases.ts; README.md
- Route: /cases
- Intended public URL: https://www.payloadjourneylab.com/cases#case-hora-city
- Current state: Published but needs revision
- Publication evidence: Case ID, anomaly, payload, methods and open status are published; no technical artefact is published.
- Canonical status: Only documented case; designated Founding Reference Case 001 by this baseline
- Indexability status: Contained in /cases
- Authorship status: Internal case led by method creator
- Version or date status: Opened and updated dates not confirmed
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: The asset itself
- Udemy CTA status: Indirect case-to-course pathway
- Internal links: /payload-journey; /method; /protocol
- External links: None case-specific
- Evidence source: content/hora-city.ts:11-24; content/cases.ts:57-130; public /cases retrieval
- Risk or inconsistency: No HORA.city codebase, runtime traces, payload snapshots, checkpoints, database/projection evidence or restoration proof is accessible.
- Recommended next action: Create a sanitized evidence repository and full investigation record before propagation as a demonstrated case.
- Priority: Critical
- Confidence level: High
- External verification required: Yes — underlying system and evidence

### PJL-CASE-002 ? EVD-HORA-DOC-001 editorial case record

- Asset ID: PJL-CASE-002
- Asset name: EVD-HORA-DOC-001 editorial case record
- Category: Documentary evidence record
- Repository: PayloadJourneyLAB
- File or directory path: content/cases.ts
- Route: /cases
- Intended public URL: https://www.payloadjourneylab.com/cases
- Current state: Published but needs revision
- Publication evidence: Record is in source and summarized on the case page.
- Canonical status: Internal editorial source, not independent evidence
- Indexability status: Summary discoverable in /cases
- Authorship status: Produced by investigator
- Version or date status: Observed date unconfirmed
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Supports identity and documented anomaly only
- Udemy CTA status: None
- Internal links: /cases
- External links: None
- Evidence source: content/cases.ts:9-32
- Risk or inconsistency: Self-authored record has no downloadable source or technical observation.
- Recommended next action: Assign date/version and link a sanitized source artefact.
- Priority: Critical
- Confidence level: High
- External verification required: Yes

### PJL-CASE-003 ? EVD-HORA-DOC-002 repository presentation record

- Asset ID: PJL-CASE-003
- Asset name: EVD-HORA-DOC-002 repository presentation record
- Category: Documentary evidence record
- Repository: PayloadJourneyLAB
- File or directory path: content/cases.ts; README.md
- Route: /cases
- Intended public URL: https://www.payloadjourneylab.com/cases
- Current state: Published but needs revision
- Publication evidence: Record references the repository presentation; public location of source is not confirmed.
- Canonical status: Corroborating internal document, not independent verification
- Indexability status: Summary discoverable in /cases
- Authorship status: Internal
- Version or date status: Observed date unconfirmed
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Repeats case ID, anomaly, payload and mission
- Udemy CTA status: None
- Internal links: /cases
- External links: None
- Evidence source: content/cases.ts:34-54; README.md:72-89
- Risk or inconsistency: Repeats the same internal claim and is not independent evidence.
- Recommended next action: Do not count as independent validation; add technical evidence.
- Priority: Critical
- Confidence level: High
- External verification required: Yes

### PJL-LABLOG-001 ? LabLog editorial model

- Asset ID: PJL-LABLOG-001
- Asset name: LabLog editorial model
- Category: Editorial channel
- Repository: PayloadJourneyLAB
- File or directory path: content/cases.ts; components/sections/LabLogPageSections.tsx
- Route: /lablog
- Intended public URL: https://www.payloadjourneylab.com/lablog
- Current state: Draft
- Publication evidence: Model and live empty page exist; branch deliberately returns 404; zero entries.
- Canonical status: Editorial contract exists; publication state unresolved
- Indexability status: Excluded by branch feature flag
- Authorship status: Provenance model defined but no authored entries
- Version or date status: Zero dated entries
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: No entry connected to Case File 001
- Udemy CTA status: None in content body
- Internal links: /cases; /lab; /protocol
- External links: YouTube described as companion channel
- Evidence source: content/cases.ts:132,183-235; app/lablog/page.tsx:14-16; verify:cases-evidence
- Risk or inconsistency: Public live empty route and hidden branch state conflict; no publication corpus.
- Recommended next action: Make a human publication decision and create the first sourced entry before re-enabling.
- Priority: Critical
- Confidence level: High
- External verification required: Yes

### PJL-COURSE-001 ? Payload Journey LAB Udemy course

- Asset ID: PJL-COURSE-001
- Asset name: Payload Journey LAB Udemy course
- Category: Course
- Repository: PayloadJourneyLAB
- File or directory path: content/site.ts
- Route: /learn; global CTAs
- Intended public URL: https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=FOLLOW-THE-FLOW
- Current state: Published but needs revision
- Publication evidence: Udemy page retrieved on 2026-07-27 and repository contains repeated CTA.
- Canonical status: Single centralized course URL
- Indexability status: External platform; not measured
- Authorship status: Instructor/owner not verified from repository baseline
- Version or date status: Beta; coupon expiration null
- Payload Journey LAB naming consistency: Course title consistent with LAB
- HORA.city relationship: Case is used as learning pathway context, not verified course content
- Udemy CTA status: Active in header, learn page, footer and other global CTAs
- Internal links: /learn
- External links: Udemy
- Evidence source: content/site.ts:17-19,49-51,103-142; public Udemy retrieval 2026-07-27
- Risk or inconsistency: Coupon lifetime, enrollments, reviews, sales, syllabus and instructor state require external access.
- Recommended next action: Verify course dashboard, coupon validity, public metadata and approved canonical URL.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-CHANNEL-001 ? Official YouTube channel

- Asset ID: PJL-CHANNEL-001
- Asset name: Official YouTube channel
- Category: External channel
- Repository: PayloadJourneyLAB
- File or directory path: config/site.ts; content/site.ts
- Route: Global footer; LabLog context
- Intended public URL: https://www.youtube.com/@PayloadJourneyLAB
- Current state: Connected to route but not externally verified
- Publication evidence: URL is centralized and linked; public tool could not retrieve channel content.
- Canonical status: Current source marks @PayloadJourneyLAB canonical
- Indexability status: External platform; not measured
- Authorship status: Account ownership not verified
- Version or date status: No channel verification date
- Payload Journey LAB naming consistency: Canonical handle matches LAB
- HORA.city relationship: Intended LabLog companion; no case video inventory
- Udemy CTA status: Separate channel
- Internal links: Footer and LabLog content
- External links: YouTube
- Evidence source: config/site.ts:13-15; content/site.ts:52-54,284-312
- Risk or inconsistency: Historical docs record competing @Lab-Log handle; ownership and metrics unverified.
- Recommended next action: Verify account ownership and inventory channel videos/descriptions.
- Priority: High
- Confidence level: Medium
- External verification required: Yes

### PJL-CHANNEL-002 ? LinkedIn personal and institutional channels

- Asset ID: PJL-CHANNEL-002
- Asset name: LinkedIn personal and institutional channels
- Category: External channel
- Repository: PayloadJourneyLAB
- File or directory path: content/site.ts
- Route: Not rendered
- Intended public URL: Unknown
- Current state: Planned
- Publication evidence: Both publicHref values are null.
- Canonical status: No canonical URL
- Indexability status: Not applicable
- Authorship status: Not configured
- Version or date status: No date
- Payload Journey LAB naming consistency: Not assessable
- HORA.city relationship: None observed
- Udemy CTA status: None
- Internal links: None
- External links: None
- Evidence source: content/site.ts:55-59,314-326
- Risk or inconsistency: Propagation plan references LinkedIn but repository provides no destination.
- Recommended next action: Valéria must approve and provide canonical personal/institutional URLs and newsletter state.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-CHANNEL-003 ? Contact, email, GitHub and collaboration channels

- Asset ID: PJL-CHANNEL-003
- Asset name: Contact, email, GitHub and collaboration channels
- Category: External channel
- Repository: PayloadJourneyLAB
- File or directory path: content/site.ts; content/payload-journey-lab.ts; components/sections/ContactSection.tsx
- Route: Not rendered
- Intended public URL: Unknown
- Current state: Planned
- Publication evidence: Contact and email are null; GitHub CTA is future; ContactSection is unused.
- Canonical status: No canonical public contact destination
- Indexability status: Not applicable
- Authorship status: Not configured
- Version or date status: No date
- Payload Journey LAB naming consistency: Consistent placeholders
- HORA.city relationship: No public evidence/contact channel
- Udemy CTA status: Separate
- Internal links: None
- External links: GitHub remote exists but no site CTA; contact absent
- Evidence source: content/site.ts:57-60; content/payload-journey-lab.ts:1319-1338; components/sections/ContactSection.tsx
- Risk or inconsistency: No conversion path for institutional collaboration or evidence requests.
- Recommended next action: Human approval of public contact, GitHub organization and collaboration workflow.
- Priority: High
- Confidence level: High
- External verification required: Yes

### PJL-DOC-001 ? Repository README

- Asset ID: PJL-DOC-001
- Asset name: Repository README
- Category: Documentation
- Repository: PayloadJourneyLAB
- File or directory path: README.md
- Route: GitHub repository landing document
- Intended public URL: https://github.com/valleria-web/PayloadJourneyLAB
- Current state: Published but needs revision
- Publication evidence: Tracked repository root document.
- Canonical status: Repository-level introduction, not site canonical content
- Indexability status: GitHub visibility not externally verified
- Authorship status: Payload Journey LAB; founder named
- Version or date status: No README version/date
- Payload Journey LAB naming consistency: Consistent
- HORA.city relationship: Documents RPJ-HORA-001 at narrative level
- Udemy CTA status: No Udemy CTA
- Internal links: No repository-relative ecosystem navigation
- External links: Public site
- Evidence source: README.md:1-225
- Risk or inconsistency: Calls Trace Engineer a professional role and development-status section is partly outdated.
- Recommended next action: Update only in a future production/documentation change after terminology approval.
- Priority: High
- Confidence level: High
- External verification required: Yes — GitHub public visibility

### PJL-DOC-002 ? AI-readiness audit collection

- Asset ID: PJL-DOC-002
- Asset name: AI-readiness audit collection
- Category: Documentation collection
- Repository: PayloadJourneyLAB
- File or directory path: docs/ai-readiness/
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Present but not connected to a route
- Publication evidence: Four tracked Markdown reports.
- Canonical status: Technical audit record
- Indexability status: Repository-only
- Authorship status: Internal
- Version or date status: Sprint 11 context; no consolidated document version
- Payload Journey LAB naming consistency: Documents current and historical conflicts
- HORA.city relationship: Provenance matrix includes case claims
- Udemy CTA status: Course schema intentionally omitted
- Internal links: References site routes
- External links: Canonical site URLs
- Evidence source: docs/ai-readiness/01-04
- Risk or inconsistency: Earlier findings may be superseded but are not uniformly labeled.
- Recommended next action: Add superseded/current status headers to historical audits.
- Priority: Medium
- Confidence level: High
- External verification required: No

### PJL-DOC-003 ? Homepage refactor audit and screenshot collection

- Asset ID: PJL-DOC-003
- Asset name: Homepage refactor audit and screenshot collection
- Category: Documentation collection
- Repository: PayloadJourneyLAB
- File or directory path: docs/homepage-refactor/
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Present but not connected to a route
- Publication evidence: 30 Markdown reports plus baseline and sprint screenshots.
- Canonical status: Historical implementation evidence
- Indexability status: Repository-only
- Authorship status: Internal
- Version or date status: Sprint-specific, mixed currentness
- Payload Journey LAB naming consistency: Mixed historical states
- HORA.city relationship: Extensive case presentation history, not technical case evidence
- Udemy CTA status: Documents course CTA evolution
- Internal links: References routes and anchors
- External links: Udemy and historical YouTube handles
- Evidence source: docs/homepage-refactor/
- Risk or inconsistency: Historical screenshots and reports can be mistaken for current publication state.
- Recommended next action: Create a collection index marking current and superseded reports.
- Priority: Medium
- Confidence level: High
- External verification required: No

### PJL-DOC-004 ? V3 sprint specifications, decisions and closure records

- Asset ID: PJL-DOC-004
- Asset name: V3 sprint specifications, decisions and closure records
- Category: Documentation collection
- Repository: PayloadJourneyLAB
- File or directory path: docs/sprints para v3/
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Present but not connected to a route
- Publication evidence: Tracked sprint 0-8 specifications, reports, decisions, validation JSON and screenshots.
- Canonical status: Strongest internal decision and implementation history
- Indexability status: Repository-only
- Authorship status: Internal; AI assistance discussed
- Version or date status: Sprint-scoped; closure document present
- Payload Journey LAB naming consistency: Contains approved terminology guardrails
- HORA.city relationship: Defines case evidence and provenance limits
- Udemy CTA status: Documents learning/course decisions
- Internal links: References all routes
- External links: Public site and course references
- Evidence source: docs/sprints para v3/README.md; Sprint 0-8 documents
- Risk or inconsistency: Large volume and duplication reduce discoverability of canonical decisions.
- Recommended next action: Publish a concise current-decision index.
- Priority: Medium
- Confidence level: High
- External verification required: No

### PJL-DOC-005 ? V2 and early sprint documentation

- Asset ID: PJL-DOC-005
- Asset name: V2 and early sprint documentation
- Category: Documentation collection
- Repository: PayloadJourneyLAB
- File or directory path: docs/sprints para v2/; docs/sprints/
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Deprecated
- Publication evidence: Tracked historical sprint documents.
- Canonical status: Historical; superseded by current source and V3 decisions
- Indexability status: Repository-only
- Authorship status: Internal
- Version or date status: Sprint-labelled but not uniformly marked superseded
- Payload Journey LAB naming consistency: Contains superseded terminology and route assumptions
- HORA.city relationship: Historical case presentation, not case evidence
- Udemy CTA status: Historical CTA decisions
- Internal links: References obsolete anchors/routes
- External links: Historical channel references
- Evidence source: docs/sprints para v2/; docs/sprints/
- Risk or inconsistency: Search can surface outdated definitions as if current.
- Recommended next action: Add prominent superseded labels and link to current canonical records.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-DOC-006 ? Historical LAB Definitions document

- Asset ID: PJL-DOC-006
- Asset name: Historical LAB Definitions document
- Category: Documentation
- Repository: PayloadJourneyLAB
- File or directory path: docs/files/LAB Definitions.md
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Deprecated
- Publication evidence: Tracked Markdown document.
- Canonical status: Superseded by content/lab-definitions.ts
- Indexability status: Repository-only
- Authorship status: Internal
- Version or date status: No superseded banner or version
- Payload Journey LAB naming consistency: Uses non-canonical Tracing Engineering
- HORA.city relationship: Contains conceptual HORA.city examples
- Udemy CTA status: None
- Internal links: None
- External links: None
- Evidence source: docs/files/LAB Definitions.md:131-566
- Risk or inconsistency: Non-canonical term occurs repeatedly and Trace Engineer is called a professional.
- Recommended next action: Add a superseded notice pointing to /lab-definitions and current source.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-DOC-007 ? LabLog, YouTube and protocol documentation plan

- Asset ID: PJL-DOC-007
- Asset name: LabLog, YouTube and protocol documentation plan
- Category: Documentation
- Repository: PayloadJourneyLAB
- File or directory path: docs/files/plano-implementacao-lablog-youtube-documentacao.md; docs/files/files-structure.md
- Route: Not connected to a site route
- Intended public URL: None identified
- Current state: Draft
- Publication evidence: Two tracked planning documents.
- Canonical status: Planning source, not proof of implementation
- Indexability status: Repository-only
- Authorship status: Internal
- Version or date status: No completion status header
- Payload Journey LAB naming consistency: Current LAB name; historical channel conflict documented
- HORA.city relationship: Proposes future Case File and evidence structures
- Udemy CTA status: Mentions formation
- Internal links: Proposed routes and directories
- External links: Two historical YouTube handles
- Evidence source: docs/files/plano-implementacao-lablog-youtube-documentacao.md; docs/files/files-structure.md
- Risk or inconsistency: Planned evidence repository can be mistaken for existing artefacts.
- Recommended next action: Mark implementation status item by item.
- Priority: High
- Confidence level: High
- External verification required: No

### PJL-DOC-008 ? White paper placeholders

- Asset ID: PJL-DOC-008
- Asset name: White paper placeholders
- Category: Planned publication
- Repository: PayloadJourneyLAB
- File or directory path: content/payload-journey-lab.ts; components/sections/WhitePapersSection.tsx
- Route: No public route
- Intended public URL: No verified URL
- Current state: Planned
- Publication evidence: Three data placeholders and a future CTA; component delegates to LabLog.
- Canonical status: No canonical paper published
- Indexability status: Not indexable as papers
- Authorship status: Not established per paper
- Version or date status: No dates or versions
- Payload Journey LAB naming consistency: Consistent titles in source
- HORA.city relationship: Potential future case/method publication only
- Udemy CTA status: None
- Internal links: Future /white-papers path only
- External links: None
- Evidence source: content/payload-journey-lab.ts:1284-1317,1347; components/sections/WhitePapersSection.tsx
- Risk or inconsistency: Component name implies papers but renders LabLog; no publication exists.
- Recommended next action: Keep unpublicized until real paper files, authorship, dates and routes exist.
- Priority: Medium
- Confidence level: High
- External verification required: No

