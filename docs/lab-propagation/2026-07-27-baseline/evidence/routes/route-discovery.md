# Route discovery evidence

## Sources

- `app/**/page.tsx`
- `content/routes.ts:264-270`
- `content/site.ts:79-98, 245-388`
- `next.config.mjs:3-25`
- `app/sitemap.ts`
- `app/robots.ts`
- `npm.cmd run build`
- `npm.cmd run verify:refactor-v3`

## Results

- Page source paths: 12 (`/` plus 11 named directories).
- Canonical/indexable routes in current branch: 11.
- Conditional source route: `/lablog`; `config/site.ts:11` is `false`, and
  `app/lablog/page.tsx:14-16` calls `notFound()`.
- No dynamic route, route group, middleware file or rewrite was found.
- `next.config.mjs` defines three permanent redirect rules:
  two host canonicalization rules and one `/about` compatibility redirect.
- The build emits `/robots.txt` and `/sitemap.xml`.
- The integrated verifier found no broken internal route destination and no
  orphan among the 11 canonical routes.
- The primary navigation has five entries; the footer has five groups.
- All 11 canonical routes receive a continuation path or global navigation.

## Important distinction

The successful build lists `/lablog` because its source route is compiled. The
current application state still returns 404 for that route because the page
executes `notFound()` when `labLogPublic` is false. Therefore:

- present in source/build: yes;
- public in current branch behavior: no;
- live on the observed deployment: yes;
- deployment aligned with branch: no.
