# Metadata and structured-data evidence

## Metadata

`lib/metadata.ts:17-50` generates:

- absolute title;
- description;
- canonical URL;
- Open Graph website metadata;
- locale, site name and URL;
- shared social image;
- Twitter summary card.

`app/layout.tsx:9-45` adds:

- metadata base;
- application name;
- root creator and publisher;
- root canonical;
- global robots index/follow.

The integrated verifier confirmed all 11 canonical routes have:

- unique titles;
- unique descriptions;
- absolute canonical URLs;
- Open Graph metadata;
- Twitter metadata;
- one H1.

No page-specific publication date, modification date, method version, case
version, article byline or alternate-language link was found.

## Structured data

`lib/structured-data.ts` produces:

- `Organization` on all canonical pages;
- `WebSite` on all canonical pages;
- `WebPage` on all canonical pages;
- `Person` on `/lab` and `/usmt`;
- `CreativeWork` for USMT on `/usmt`.

The `Person` node identifies Valéria dos Santos Reiser and is linked as creator
of the USMT. `Organization.sameAs` contains only the configured YouTube URL.

No `Course`, `Article`, `VideoObject`, `ProfilePage`, `BreadcrumbList`,
`ItemList`, `BlogPosting` or case-specific schema is produced. The verifier
explicitly confirms Course and article types are omitted; the omission avoids
claiming structured entities whose required public evidence is incomplete.

## Search-readiness configuration

- `app/robots.ts`: general indexing allowed; OAI-SearchBot and ChatGPT-User
  allowed; GPTBot blocked.
- `app/sitemap.ts`: 11 current canonical URLs; no `lastModified`.
- No `noindex` directive on the canonical pages.
- No IndexNow implementation found.
- No middleware or custom indexing headers found.
- Google Analytics public measurement ID is embedded in `app/layout.tsx`; data,
  property ownership and consent state were not verified.
