import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configuredUrl = process.env.AI_WELCOME_VERIFY_URL;
const port = process.env.AI_WELCOME_VERIFY_PORT ?? "3218";
const origin = configuredUrl ?? `http://127.0.0.1:${port}`;
const canonicalOrigin = "https://www.payloadjourneylab.com";
const route = "/ai-welcome";
const canonical = `${canonicalOrigin}${route}`;
const expectedTitle = "AI Welcome | Payload Journey LAB";
const expectedDescription =
  "Canonical orientation to Payload Journey LAB, Payload Journey, USMT, Reverse Payload Journey, Trace Engineering, evidence levels and HORA.city Founding Reference Case 001.";
const obsoleteSystemName = ["Aura", ".city"].join("");
const obsoleteEngineeringTerm = ["Tracing", "Engineering"].join(" ");
let server;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function getMeta(html, attribute, value) {
  const pattern = new RegExp(
    `<meta[^>]+${attribute}="${value}"[^>]+content="([^"]+)"|<meta[^>]+content="([^"]+)"[^>]+${attribute}="${value}"`,
    "i",
  );
  return html.match(pattern)?.slice(1).find(Boolean) ?? null;
}

function getCanonical(html) {
  return html.match(
    /<link[^>]+rel="canonical"[^>]+href="([^"]+)"|<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i,
  )?.slice(1).find(Boolean) ?? null;
}

function decodeHtml(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replace(/\s+/g, " ")
    .trim();
}

async function waitForSite() {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("AI Welcome verification server did not become ready");
}

async function stopServer() {
  if (!server || server.exitCode !== null) return;
  server.kill("SIGTERM");
  await Promise.race([
    new Promise((resolve) => server.once("exit", resolve)),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ]);
  if (server.exitCode === null) server.kill("SIGKILL");
}

try {
  if (!configuredUrl) {
    const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
    server = spawn(
      process.execPath,
      [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port],
      {
        cwd: root,
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    server.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    server.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const response = await fetch(`${origin}${route}`);
  const html = await response.text();
  const visibleText = decodeHtml(html);

  assert(response.status === 200, `${route}: HTTP ${response.status}`);
  assert((html.match(/<h1\b/g) ?? []).length === 1, `${route}: expected one h1`);
  assert(html.includes("<main>") && html.includes("<article>"), `${route}: semantic main/article missing`);
  assert(html.includes(`<title>${expectedTitle}</title>`), `${route}: title mismatch`);
  assert(getMeta(html, "name", "description") === expectedDescription, `${route}: description mismatch`);
  assert(getCanonical(html) === canonical, `${route}: canonical mismatch`);
  assert(getMeta(html, "property", "og:url") === canonical, `${route}: Open Graph URL mismatch`);
  assert(!/name="robots" content="[^"]*noindex/i.test(html), `${route}: accidentally noindex`);

  const jsonLdMatches = [...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )];
  assert(jsonLdMatches.length === 1, `${route}: expected one JSON-LD graph`);
  const jsonLd = JSON.parse(jsonLdMatches[0][1]);
  const graph = jsonLd["@graph"];
  assert(Array.isArray(graph), `${route}: JSON-LD graph missing`);
  const topLevelTypes = graph.map((node) => node["@type"]);
  for (const type of ["Organization", "WebSite", "Person", "WebPage", "FAQPage"]) {
    assert(topLevelTypes.includes(type), `${route}: JSON-LD missing ${type}`);
  }
  const faq = graph.find((node) => node["@type"] === "FAQPage");
  assert(faq["@id"] === `${canonical}#faq`, `${route}: FAQPage id mismatch`);
  assert(Array.isArray(faq.mainEntity) && faq.mainEntity.length === 22, `${route}: FAQ entry count mismatch`);
  for (const entry of faq.mainEntity) {
    assert(entry["@type"] === "Question", `${route}: FAQ item is not Question`);
    assert(entry.acceptedAnswer?.["@type"] === "Answer", `${route}: accepted answer type mismatch`);
    assert(visibleText.includes(entry.name), `${route}: FAQ question is not visible — ${entry.name}`);
    assert(
      visibleText.includes(entry.acceptedAnswer.text),
      `${route}: FAQ answer is not visible — ${entry.name}`,
    );
  }

  for (const requiredText of [
    "Canonical orientation page",
    "1.0.0",
    "29 July 2026",
    canonical,
    "Founding Reference Case 001 — HORA.city",
    "RPJ-HORA-001",
    "Active investigation",
    "incorreto",
    "createdAt",
    "HeartCreated",
    "Reverse Payload Journey",
    "Track to Origin",
    "Documentary evidence",
    "Runtime evidence",
    "Implementation evidence",
    "Verification evidence",
    "External or independent evidence",
    "Não é profissão consolidada",
    "not observed execution traces",
  ]) {
    assert(visibleText.includes(requiredText), `${route}: missing safeguard text — ${requiredText}`);
  }
  assert(!visibleText.includes(obsoleteSystemName), `${route}: obsolete system name introduced`);
  assert(!visibleText.includes(obsoleteEngineeringTerm), `${route}: obsolete terminology introduced`);
  assert(!/Trace Engineer (?:is|é) (?:an? |uma )?(?:established|consolidated) profession/i.test(visibleText), `${route}: Trace Engineer overstated`);
  assert(!/(?:case|investigation)\s+(?:is|está|foi)\s+(?:closed|complete|encerrad[oa]|concluíd[oa])/i.test(visibleText), `${route}: case closure overstated`);
  assert(!/conceptual (?:HORA\.city )?flows are observed execution traces/i.test(visibleText), `${route}: conceptual flow presented as runtime`);
  assert(!/fluxos conceituais (?:do HORA\.city )?são traces observados/i.test(visibleText), `${route}: conceptual flow presented as runtime`);

  const internalHrefs = [...html.matchAll(/\shref="(\/[^"]*)"/g)]
    .map((match) => match[1])
    .filter((href) => !href.startsWith("/_next/"));
  const checkedPaths = new Set();
  for (const href of internalHrefs) {
    const pathname = new URL(href, origin).pathname;
    if (checkedPaths.has(pathname)) continue;
    checkedPaths.add(pathname);
    const destination = await fetch(`${origin}${pathname}`);
    assert(destination.status === 200, `${route}: internal link ${href} returned ${destination.status}`);
  }

  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  assert(sitemap.includes(`<loc>${canonical}</loc>`), "Sitemap is missing /ai-welcome");

  const routeSource = await fs.readFile(path.join(root, "content", "routes.ts"), "utf8");
  assert(routeSource.includes('path: "/ai-welcome"'), "Canonical route model is missing /ai-welcome");
  const publicFiles = await fs.readdir(path.join(root, "public"));
  assert(!publicFiles.includes("llms.txt") && !publicFiles.includes("llms-full.txt"), "AI-specific text files were added outside scope");

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      route: 1,
      uniqueMetadata: true,
      absoluteCanonical: canonical,
      indexable: true,
      sitemap: true,
      structuredDataTypes: topLevelTypes,
      faqQuestionsMatched: faq.mainEntity.length,
      internalLinkPaths: checkedPaths.size,
      terminologySafeguards: true,
      caseLifecycleSafeguards: true,
      evidenceSafeguards: true,
      aiSpecificFilesAdded: 0,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
