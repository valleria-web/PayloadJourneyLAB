# External Verification Checklist

Baseline: 27 July 2026.

Every item below is outside what can be confirmed solely from the accessible
repository. Until evidence is supplied, the status is:

`External verification required.`

## Search and deployment

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-SEARCH-001 | Deployed commit SHA and production branch | Hosting/deployment dashboard | Deployment URL, commit SHA, timestamp and environment | Valéria or hosting admin | Critical | Blocks a trustworthy Day 1 baseline |
| EXT-SEARCH-002 | Live `/lablog` intended state | Hosting plus public route | Human decision, response status and deployment evidence | Valéria | Critical | Must be resolved before propagation links |
| EXT-SEARCH-003 | Google Search Console ownership | Search Console | Verified property screenshot and owner list | Valéria/Search owner | Critical | Foundation for days 1-10 measurement |
| EXT-SEARCH-004 | Sitemap submission/status in Google | Search Console Sitemaps | Submitted URL, last read, discovered pages and errors | Search owner | High | Required for discovery baseline |
| EXT-SEARCH-005 | Google indexed-page count | Search Console Pages/URL Inspection | Export/screenshot dated 2026-07-27 or nearest available | Search owner | High | Baseline and end-of-cycle comparison |
| EXT-SEARCH-006 | Google queries, impressions, clicks and CTR | Search Console Performance | Date-bounded export with filters | Search owner | High | Measures semantic propagation |
| EXT-SEARCH-007 | Bing Webmaster Tools ownership | Bing Webmaster Tools | Verified site and owner evidence | Valéria/Search owner | High | Secondary discovery baseline |
| EXT-SEARCH-008 | Bing sitemap and indexation | Bing Webmaster Tools | Sitemap status and indexed URL export | Search owner | High | Secondary propagation tracking |
| EXT-SEARCH-009 | Live robots.txt, sitemap and redirects | Public HTTP/client or hosting logs | Status, headers and bodies for apex/www endpoints | Technical owner | Critical | Confirms crawl configuration |
| EXT-SEARCH-010 | Structured-data validity in production | Schema.org/Google Rich Results test | Dated validation output per relevant route | Technical/search owner | Medium | Supports semantic discovery |

## Analytics and traffic

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-AN-001 | GA property ownership and data collection | Google Analytics | Property ID, owner, active realtime event screenshot | Valéria/analytics admin | Critical | Establishes measurable baseline |
| EXT-AN-002 | Website traffic | GA reports | Date-bounded users, sessions and views export | Analytics admin | High | Day 1 versus cycle-end |
| EXT-AN-003 | Page-level analytics | GA Pages and screens | Route-level export for all canonical pages | Analytics admin | High | Identifies strongest assets |
| EXT-AN-004 | Referral traffic | GA Acquisition | Source/medium export | Analytics admin | High | Measures external propagation |
| EXT-AN-005 | Udemy/YouTube outbound CTA events | GA Events | Event names, counts and implementation proof | Analytics/technical owner | High | Connects discovery to progression |
| EXT-AN-006 | Privacy, consent and retention configuration | Hosting/site policy and GA admin | Consent implementation, policy URLs and retention setting | Valéria/legal/technical owner | High | Risk control before expanding traffic |

## LinkedIn

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-LI-001 | Canonical personal profile | LinkedIn | Approved URL and ownership confirmation | Valéria | High | Founder/entity consistency |
| EXT-LI-002 | Canonical institutional page | LinkedIn | Approved page URL, admin and visibility | Valéria/page admin | High | Institutional propagation channel |
| EXT-LI-003 | Followers and post metrics | LinkedIn analytics | Dated follower, impression and engagement export | Page/profile owner | Medium | Channel baseline and cycle comparison |
| EXT-LI-004 | Newsletter existence/status | LinkedIn newsletter admin | Newsletter URL, subscribers, issue list and state | Valéria | Medium | Determines publication pathway |

## YouTube

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-YT-001 | Ownership of `@PayloadJourneyLAB` | YouTube Studio | Channel ID, handle and owner/admin evidence | Valéria/channel admin | Critical | Canonical entity link |
| EXT-YT-002 | Whether `@Lab-Log` is obsolete or separate | YouTube/account records | Channel ownership and human canonical decision | Valéria | High | Eliminates historical ambiguity |
| EXT-YT-003 | Subscribers and video metrics | YouTube Studio Analytics | Dated export of subscribers, views and watch time | Channel admin | Medium | Baseline and cycle tracking |
| EXT-YT-004 | Video inventory, descriptions and timestamps | YouTube channel/Studio | URL, title, date, description, timestamps and LAB links | Channel admin | High | Enables asset-level inventory |
| EXT-YT-005 | HORA.city/LabLog video relationship | YouTube | Video-to-case mapping and evidence status | Channel admin/investigator | High | Case propagation without overclaiming |

## Udemy

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-UD-001 | Course publication and instructor ownership | Udemy instructor dashboard | Course ID, state, instructor and public URL | Valéria/Udemy instructor | Critical | Primary conversion destination |
| EXT-UD-002 | Coupon validity and expiration | Udemy promotions | Coupon code, start/end, price and status | Udemy instructor | Critical | Prevents broken/misleading CTAs |
| EXT-UD-003 | Enrolments | Instructor analytics | Date-bounded enrollment export | Udemy instructor | Medium | External baseline metric |
| EXT-UD-004 | Reviews and rating | Instructor/public page | Count, rating and dated evidence | Udemy instructor | Medium | Course evidence without fabrication |
| EXT-UD-005 | Sales/revenue | Instructor revenue report | Private aggregate export selected by owner | Udemy instructor | Low | Business metric; not required publicly |
| EXT-UD-006 | Syllabus/material and HORA.city coverage | Course curriculum | Approved outline and case-use statement | Instructor | High | Aligns site claims with course reality |

## GitHub and publication platforms

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-GH-001 | Repository public visibility | GitHub | Anonymous public URL test and repository settings | Valéria/GitHub admin | High | Repository discoverability |
| EXT-GH-002 | GitHub organization existence/visibility | GitHub | Organization URL, members/admin and public profile | GitHub admin | Medium | Institutional identity propagation |
| EXT-PUB-001 | Zenodo records/DOIs | Zenodo | Record URLs, DOI, version, authors and dates | Valéria/publication owner | Medium | Citable method/case artefacts |
| EXT-PUB-002 | ORCID identity | ORCID | Approved ORCID URL and public works | Valéria | Medium | Founder authorship consistency |
| EXT-PUB-003 | DEV Community publications | dev.to | Profile and article inventory | Valéria | Low | External content distribution |
| EXT-PUB-004 | Medium publications | Medium | Profile/publication and article inventory | Valéria | Low | External content distribution |
| EXT-PUB-005 | Instagram account/content | Instagram | Approved account URL and content metrics | Valéria | Low | Optional awareness channel |

## External authority and backlinks

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-AUTH-001 | External backlinks | Search Console/link index tools | Export of source URL, target and date | Search owner | Medium | Measures semantic propagation |
| EXT-AUTH-002 | University references | University sites/repositories | Direct URL, institution, author and context | Valéria/research owner | Medium | Evidence of academic reach |
| EXT-AUTH-003 | Institutional references | Organization sites/reports | Direct URL and publication metadata | Valéria/partnership owner | Medium | Evidence of institutional reach |
| EXT-AUTH-004 | Independent uses of methods | External repositories/publications | Reproducible case, author and evidence package | Research owner | High | Required for transferability claims |

## HORA.city evidence access

| ID | What must be verified | Where | Evidence to capture | Access provider | Priority | 30-day relationship |
|---|---|---|---|---|---|---|
| EXT-HORA-001 | Accessible HORA.city codebase and exact commit | Source repository | Repository, branch, SHA and access scope | Valéria/HORA owner | Critical | Required for Case File 001 |
| EXT-HORA-002 | `createdAt` anomaly reproduction | Controlled runtime | Sanitized steps, expected/observed result and timestamp | HORA technical owner | Critical | Establishes technical evidence |
| EXT-HORA-003 | `HeartCreated` payload and checkpoints | Source/runtime | Sanitized request/event/snapshot sequence | HORA technical owner | Critical | Enables Payload Journey |
| EXT-HORA-004 | Restoration and verification | PR/commit/test/runtime | Diff, test, replay and verified outcome | HORA technical owner | Critical | Required before case closure |

External metrics must remain:

`Not measured from repository on 27 July 2026.`
