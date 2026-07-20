import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const configuredUrl = process.env.AI_READINESS_VERIFY_URL;
const port = process.env.AI_READINESS_VERIFY_PORT ?? "3211";
const targetUrl = configuredUrl ?? `http://127.0.0.1:${port}`;
const canonicalOrigin = "https://www.payloadjourneylab.com";
const apexOrigin = "https://" + "payloadjourneylab.com";
const incorrectUsmtName = ["Universal System", "Model Template"].join(" ");
const indexableRoutes = [
  "/",
  "/payload-journey",
  "/learn",
  "/cases",
  "/usmt",
  "/method",
  "/protocol",
  "/investigation",
  "/lab",
  "/ecosystem",
  "/lablog",
];

let serverProcess;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function occurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function getMetaContent(html, attribute, value) {
  const pattern = new RegExp(`<meta[^>]+${attribute}="${value}"[^>]+content="([^"]+)"|<meta[^>]+content="([^"]+)"[^>]+${attribute}="${value}"`, "i");
  const match = html.match(pattern);
  return match?.[1] ?? match?.[2] ?? null;
}

function getCanonical(html) {
  return html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"|<link[^>]+href="([^"]+)"[^>]+rel="canonical"/i)?.slice(1).find(Boolean) ?? null;
}

function getJsonLdGraphs(html) {
  return [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => JSON.parse(match[1]));
}

function requestWithHost(pathname, host) {
  return new Promise((resolve, reject) => {
    const request = http.request({
      hostname: "127.0.0.1",
      port,
      path: pathname,
      method: "GET",
      headers: { Host: host },
    }, (response) => {
      response.resume();
      response.on("end", () => resolve({
        status: response.statusCode,
        location: response.headers.location ?? null,
      }));
    });
    request.on("error", reject);
    request.end();
  });
}

async function waitForSite() {
  const startedAt = Date.now();
  while (Date.now() - startedAt < 60_000) {
    try {
      const response = await fetch(targetUrl);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("AI-readiness verification server did not become ready");
}

async function stopServer() {
  if (!serverProcess || serverProcess.exitCode !== null) return;
  serverProcess.kill("SIGTERM");
  await Promise.race([
    new Promise((resolve) => serverProcess.once("exit", resolve)),
    new Promise((resolve) => setTimeout(resolve, 5_000)),
  ]);
  if (serverProcess.exitCode === null) serverProcess.kill("SIGKILL");
}

try {
  if (!configuredUrl) {
    const nextCli = path.join(repositoryRoot, "node_modules", "next", "dist", "bin", "next");
    serverProcess = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port], {
      cwd: repositoryRoot,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    serverProcess.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    serverProcess.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const pages = new Map();
  for (const route of indexableRoutes) {
    const response = await fetch(`${targetUrl}${route === "/" ? "" : route}`);
    const html = await response.text();
    assert(response.status === 200, `${route} returned HTTP ${response.status}`);
    const expectedUrl = `${canonicalOrigin}${route === "/" ? "" : route}`;
    assert(getCanonical(html) === expectedUrl, `${route} canonical is not ${expectedUrl}`);
    assert(getMetaContent(html, "property", "og:url") === expectedUrl, `${route} og:url is not canonical`);
    assert(!html.includes(apexOrigin), `${route} leaks the apex origin`);

    const graphs = getJsonLdGraphs(html);
    assert(graphs.length === 1, `${route} must expose one JSON-LD graph`);
    const graph = graphs[0]["@graph"];
    assert(Array.isArray(graph), `${route} JSON-LD must use @graph`);
    const ids = graph.map((node) => node["@id"]).filter(Boolean);
    assert(new Set(ids).size === ids.length, `${route} JSON-LD contains duplicate @id values`);
    assert(graph.every((node) => !JSON.stringify(node).includes(apexOrigin)), `${route} JSON-LD leaks apex URLs`);
    assert(graph.every((node) => node["@type"] !== "Organization"), `${route} must not imply an Organization entity`);
    pages.set(route, { html, graph });
  }

  const labTypes = pages.get("/lab").graph.map((node) => node["@type"]);
  assert(labTypes.includes("Person"), "/lab JSON-LD must identify the founder as Person");
  const usmtTypes = pages.get("/usmt").graph.map((node) => node["@type"]);
  for (const type of ["WebSite", "WebPage", "Person", "CreativeWork"]) {
    assert(usmtTypes.includes(type), `/usmt JSON-LD is missing ${type}`);
  }
  const usmtWork = pages.get("/usmt").graph.find((node) => node["@type"] === "CreativeWork");
  assert(usmtWork.name === "Universal System Modeling Template", "USMT CreativeWork has an incorrect name");
  assert(usmtWork.alternateName === "USMT", "USMT CreativeWork has an incorrect alternateName");
  assert(usmtWork.creator?.["@id"] === `${canonicalOrigin}/lab#founder`, "USMT creator must resolve to the founder");

  const visibleRequirements = {
    "/lab": ["Valéria dos Santos Reiser", "Esse processo deu origem ao Payload Journey LAB"],
    "/usmt": ["A USMT é um template metodológico autoral desenvolvido no Payload Journey LAB"],
    "/method": ["Os métodos do LAB não competem entre si"],
    "/protocol": ["O processo operacional do Payload Journey LAB"],
    "/investigation": ["O Payload Journey LAB reúne procedimento, métodos e evidências"],
    "/cases": ["ambiente de investigação aplicada do Payload Journey LAB", "Investigação em andamento"],
    "/lablog": ["O LabLog registra", "desenvolvimento público dos métodos do LAB"],
  };
  for (const [route, requirements] of Object.entries(visibleRequirements)) {
    for (const requirement of requirements) {
      assert(pages.get(route).html.includes(requirement), `${route} lacks contextual provenance: ${requirement}`);
    }
  }

  const publicCorpus = [...pages.values()].map(({ html }) => html).join("\n");
  assert(!publicCorpus.includes(incorrectUsmtName), "An incorrect USMT expansion remains public");
  assert(occurrences(pages.get("/usmt").html, /id="usmt-element-/g) === 12, "USMT must preserve 12 elements");
  for (const lens of ["where", "how", "logic", "safe"]) {
    assert(pages.get("/usmt").html.includes(`id="usmt-lens-${lens}"`), `USMT must preserve ${lens.toUpperCase()}`);
  }

  const sitemapResponse = await fetch(`${targetUrl}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  assert(sitemapResponse.status === 200, "Sitemap must return 200");
  assert(occurrences(sitemap, /<loc>/g) === indexableRoutes.length, "Sitemap must contain 11 canonical routes");
  assert(!sitemap.includes(apexOrigin), "Sitemap leaks apex URLs");
  assert(!sitemap.includes("/about"), "Sitemap must exclude /about");

  const robotsResponse = await fetch(`${targetUrl}/robots.txt`);
  const robots = await robotsResponse.text();
  assert(robotsResponse.status === 200, "robots.txt must return 200");
  assert(robots.includes(`Host: ${canonicalOrigin}`), "robots.txt host must be canonical");
  assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), "robots.txt sitemap must be canonical");
  for (const directive of ["User-Agent: OAI-SearchBot\nAllow: /", "User-Agent: ChatGPT-User\nAllow: /", "User-Agent: GPTBot\nDisallow: /"]) {
    assert(robots.includes(directive), `robots.txt changed crawler policy: ${directive}`);
  }

  const operationalFiles = [
    "app/layout.tsx",
    "app/robots.ts",
    "app/sitemap.ts",
    "config/site.ts",
    "content/routes.ts",
    "content/usmt.ts",
    "content/methods.ts",
    "content/payload-journey-lab.ts",
    "lib/metadata.ts",
    "lib/structured-data.ts",
    "scripts/verify-ai-readiness.mjs",
    "scripts/verify-homepage.mjs",
  ];
  const operationalSources = (await Promise.all(operationalFiles.map((file) => fs.readFile(path.join(repositoryRoot, file), "utf8")))).join("\n");
  assert(!operationalSources.includes(apexOrigin), "Operational sources contain an apex absolute URL");
  assert(!operationalSources.includes(incorrectUsmtName), "Operational sources contain an incorrect USMT expansion");

  let applicationHostRedirect = "not-tested-against-configured-url";
  if (!configuredUrl) {
    const apexPath = await requestWithHost("/method?source=sprint11", "payloadjourneylab.com");
    assert(apexPath.status === 308, "Application apex redirect must be permanent");
    assert(apexPath.location === `${canonicalOrigin}/method?source=sprint11`, "Application apex redirect must preserve path and query");
    const apexAbout = await requestWithHost("/about?source=sprint11", "payloadjourneylab.com");
    assert(apexAbout.status === 308, "Application apex /about redirect must be permanent");
    assert(apexAbout.location === `${canonicalOrigin}/lab?source=sprint11#sobre`, "Application apex /about redirect must avoid an application-level chain");
    applicationHostRedirect = "pass";
  }

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      canonicalRoutes: indexableRoutes.length,
      sitemapRoutes: indexableRoutes.length,
      crawlerPolicyPreserved: true,
      officialUsmtName: true,
      usmtElements: 12,
      usmtLenses: 4,
      contextualProvenanceRoutes: Object.keys(visibleRequirements).length,
      structuredDataTypes: ["WebSite", "WebPage", "Person", "CreativeWork"],
      organizationOmitted: true,
      applicationHostRedirect,
      hostingRedirect: "requires-public-validation-after-deploy",
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
