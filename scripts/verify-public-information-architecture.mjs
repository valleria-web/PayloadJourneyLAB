import assert from "node:assert/strict";
import fs from "node:fs/promises";
import { spawn } from "node:child_process";

const source = await fs.readFile(new URL("../content/public-information-architecture.ts", import.meta.url), "utf8");
const entities = JSON.parse(source.match(/publicInformationArchitecture = ([\s\S]*?) as const/)[1]);
const published = entities.filter(e => ["KEEP", "CREATE"].includes(e.decision) && !e.canonicalPath.includes("#"));
const origin = process.env.IA_VERIFY_URL ?? "http://127.0.0.1:3220";
const canonicalOrigin = "https://www.payloadjourneylab.com";
let server;
try {
  if (!process.env.IA_VERIFY_URL) server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3220"], {stdio: "ignore", windowsHide: true});
  for (let i = 0; i < 120; i++) {
    try { if ((await fetch(origin)).ok) break; } catch {}
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  const pages = new Map();
  const titles = new Set(), descriptions = new Set();
  const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  assert.deepEqual(locations.sort(), published.map(e => canonicalOrigin + (e.canonicalPath === "/" ? "/" : e.canonicalPath)).sort());
  for (const entity of published) {
    const response = await fetch(origin + entity.canonicalPath);
    assert.equal(response.status, 200, entity.canonicalPath);
    const html = await response.text();
    pages.set(entity.canonicalPath, html);
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
    assert(title && !titles.has(title), `Unique title: ${entity.canonicalPath}`); titles.add(title);
    assert(description && !descriptions.has(description), `Unique description: ${entity.canonicalPath}`); descriptions.add(description);
    assert(html.includes(`rel="canonical" href="${canonicalOrigin}${entity.canonicalPath === "/" ? "" : entity.canonicalPath}"`), `Canonical: ${entity.canonicalPath}`);
    assert(html.includes('property="og:title"') && html.includes('name="twitter:card"'), `Social metadata: ${entity.canonicalPath}`);
    assert(!html.includes('name="robots" content="noindex"'), `Indexability: ${entity.canonicalPath}`);
    const graphs = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    assert(graphs.some(g => g['@graph']?.some(n => n['@type'] === 'WebPage')), `WebPage schema: ${entity.canonicalPath}`);
  }
  for (const entity of entities.filter(e => ["RESERVE", "DO_NOT_CREATE"].includes(e.decision) && !e.canonicalPath.includes('#'))) {
    const response = await fetch(origin + entity.canonicalPath);
    assert.equal(response.status, 404, `Unpublished: ${entity.canonicalPath}`);
    assert((await response.text()).includes('name="robots" content="noindex"'), `Reserved noindex: ${entity.canonicalPath}`);
    assert(!locations.includes(canonicalOrigin + entity.canonicalPath));
  }
  // Inspect actual anchors, excluding script payloads; check every local page and fragment.
  for (const [route, html] of pages) {
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&');
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const url = new URL(href, origin + route);
      let target = pages.get(url.pathname);
      if (!target) {
        const response = await fetch(url);
        assert(response.ok, `${route} → ${href}: ${response.status}`);
        target = await response.text();
      }
      if (url.hash) assert(target.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${route} → missing anchor ${href}`);
    }
  }
  for (const entity of entities.filter(e => e.decision === 'CREATE')) {
    assert([...pages].some(([path, html]) => path !== entity.canonicalPath && html.includes(`href="${entity.canonicalPath}"`)), `Orphan: ${entity.canonicalPath}`);
    assert(entity.outboundLinks.every(href => pages.get(entity.canonicalPath).includes(`href="${href}"`)), `Outbound progression: ${entity.canonicalPath}`);
    if (!entity.canonicalPath.startsWith('/cases/')) assert(pages.get('/method').includes(`href="${entity.canonicalPath}"`), `Method discovery: ${entity.canonicalPath}`);
  }
  for (const path of ['/trace-engineering','/protocol','/investigation','/method']) {
    const html = pages.get(path);
    for (const term of ['Trace Engineer Protocol (TEP)', 'developing protocol artifact', 'controlado/restrito', 'não equivalem automaticamente', 'Não é certificação']) assert(html.includes(term), `${path}: ${term}`);
    assert(!html.includes('Opened') && !html.includes('Frozen'), `${path}: unpublished lifecycle`);
  }
  for (const path of ['/', '/lab-definitions','/investigation','/ai-welcome','/trace-engineering']) assert(pages.get(path).includes('prática investigativa em desenvolvimento composta por capacidades'), `${path}: Trace Engineering ontology`);
  assert(pages.get('/trace-engineering').includes('Não é profissão consolidada'));
  assert(pages.get('/cases/rpj-hora-001').includes('Documentary Evidence association'));
  assert(pages.get('/cases/rpj-hora-001').includes('Lifecycle: Active investigation'));
  assert(pages.get('/cases/rpj-hora-001').includes('Causal origin, temporal authority, restoration and verification are not established'));
  console.log(JSON.stringify({status:'passed', publicRoutes: pages.size, createdRoutes: 6, reservedRoutes:'404 + noindex + excluded from sitemap', internalLinks:'all pages and fragments resolve', metadata:'unique titles/descriptions, canonicals, social, WebPage', semantics:'TEP, Trace Engineering, Trace Engineer, active documentary HORA.city'}, null, 2));
} finally { if (server) server.kill(); }
