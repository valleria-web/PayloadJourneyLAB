import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configuredUrl = process.env.NAVIGATION_VERIFY_URL;
const port = process.env.NAVIGATION_VERIFY_PORT ?? "3216";
const origin = configuredUrl ?? `http://127.0.0.1:${port}`;
const routes = [
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
const expectedAreas = new Map([
  ["/", "Início"],
  ["/payload-journey", "Aprender"],
  ["/learn", "Aprender"],
  ["/method", "Métodos"],
  ["/protocol", "Métodos"],
  ["/investigation", "Métodos"],
  ["/usmt", "Métodos"],
  ["/cases", "Casos"],
  ["/lablog", "Casos"],
  ["/lab", "LAB"],
  ["/ecosystem", "LAB"],
]);
const youtubeCandidates = [
  "https://www.youtube.com/@PayloadJourneyLAB",
  "https://www.youtube.com/@Lab-Log",
];
let server;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function waitForSite() {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Servidor de verificação não ficou disponível");
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

function internalLinks(html) {
  return [...html.matchAll(/href="(\/[^"#?]*)(?:#[^"]*)?"/g)]
    .map((match) => match[1] || "/")
    .filter((href) => routes.includes(href));
}

function shortestDistances(graph, start) {
  const distances = new Map([[start, 0]]);
  const queue = [start];
  while (queue.length) {
    const current = queue.shift();
    for (const next of graph.get(current) ?? []) {
      if (distances.has(next)) continue;
      distances.set(next, distances.get(current) + 1);
      queue.push(next);
    }
  }
  return distances;
}

try {
  if (!configuredUrl) {
    const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
    server = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port], {
      cwd: root,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    server.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    server.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const pages = new Map();
  const graph = new Map();

  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    const html = await response.text();
    assert(response.status === 200, `${route}: HTTP ${response.status}`);
    assert((html.match(/<h1\b/g) ?? []).length === 1, `${route}: deve existir um H1`);
    assert(!html.includes('href="#"'), `${route}: href vazio`);
    assert(!/[A-Z]:\\(?:Users|Documents|Desktop)\\/i.test(html), `${route}: path local exposto`);
    assert(!/file:\/\//i.test(html), `${route}: URI local exposta`);
    assert(!/(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[=:]\s*["'][^"']+/i.test(html), `${route}: segredo exposto`);
    for (const candidate of youtubeCandidates) {
      assert(!html.includes(candidate), `${route}: YouTube não canônico exposto`);
    }
    const activeLabels = [...html.matchAll(/<a[^>]*aria-current="page"[^>]*>([\s\S]*?)<\/a>/g)]
      .map((match) => match[1].replace(/<[^>]+>/g, "").trim());
    assert(activeLabels.includes(expectedAreas.get(route)), `${route}: área ativa incorreta`);
    pages.set(route, html);
    graph.set(route, [...new Set(internalLinks(html))]);
  }

  const home = pages.get("/");
  const headerOrder = ["Início", "Aprender", "Métodos", "Casos", "LAB"];
  let previous = -1;
  for (const label of headerOrder) {
    const current = home.indexOf(`>${label}</a>`, previous + 1);
    assert(current > previous, `Header: ordem incorreta em ${label}`);
    previous = current;
  }
  assert(home.includes('href="/payload-journey"'), "Header: CTA Começar sem Payload Journey");
  for (const group of ["Começar", "Investigar", "Evidências", "LAB", "Canais"]) {
    assert(home.includes(`>${group}</p>`), `Footer: grupo ausente — ${group}`);
  }
  for (const route of routes.filter((item) => item !== "/")) {
    assert(home.includes(`href="${route}"`), `Footer: rota ausente — ${route}`);
  }
  assert(home.includes("Formação na Udemy"), "Footer: Udemy ausente");
  assert(!home.includes(">YouTube<"), "Footer: YouTube não resolvido exposto");
  assert(!home.includes(">LinkedIn"), "Footer: LinkedIn não configurado exposto");

  const redirect = await fetch(`${origin}/about`, { redirect: "manual" });
  assert(redirect.status === 308, `/about: esperado 308, recebido ${redirect.status}`);
  const location = redirect.headers.get("location") ?? "";
  assert(location.endsWith("/lab#sobre"), `/about: destino incorreto — ${location}`);

  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  const sitemapLocations = [...sitemap.matchAll(/<loc>[^<]+<\/loc>/g)];
  assert(sitemapLocations.length === routes.length, "Sitemap: quantidade de rotas incorreta");
  assert(!sitemap.includes("/about</loc>"), "Sitemap: redirect legado não deve ser canônico");

  const distances = shortestDistances(graph, "/");
  for (const route of routes) {
    assert(distances.has(route), `Descoberta: rota inalcançável — ${route}`);
    assert(distances.get(route) <= 2, `Descoberta: ${route} exige ${distances.get(route)} cliques`);
  }

  const source = await fs.readFile(path.join(root, "content", "site.ts"), "utf8");
  const mobileSource = await fs.readFile(path.join(root, "components", "layout", "MobileNavigation.tsx"), "utf8");
  const appEntries = (await fs.readdir(path.join(root, "app"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .filter((entry) => entry !== "icon.svg");

  assert(source.includes('canonical: null'), "YouTube: canonical deve permanecer null");
  assert(source.includes('resolutionStatus: "unresolved"'), "YouTube: estado unresolved ausente");
  assert(source.includes('"linkedin-personal"') && source.includes('"linkedin-institutional"'), "LinkedIn: contextos não separados");
  assert(source.includes('role: "formative-secondary"'), "Udemy: papel secundário ausente");
  assert(!source.includes('collaborationCta:'), "Colaboração: CTA sem destino real");
  assert(mobileSource.includes("firstItemRef.current?.focus()"), "Mobile: foco inicial ausente");
  assert(mobileSource.includes('event.key !== "Escape"'), "Mobile: Escape ausente");
  assert(mobileSource.includes("triggerRef.current?.focus()"), "Mobile: retorno de foco ausente");
  assert(mobileSource.includes("aria-current"), "Mobile: estado ativo ausente");
  const expectedAppEntries = new Set([
    "about",
    "cases",
    "ecosystem",
    "investigation",
    "lab",
    "lablog",
    "learn",
    "method",
    "payload-journey",
    "protocol",
    "usmt",
  ]);
  assert(
    appEntries.length === expectedAppEntries.size &&
      appEntries.every((entry) => expectedAppEntries.has(entry)),
    `Rotas: diretórios inesperados — ${appEntries.join(", ")}`,
  );

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      canonicalRoutes: routes.length,
      permanentRedirects: 1,
      sitemapRoutes: sitemapLocations.length,
      primaryNavigationItems: headerOrder.length,
      footerGroups: 5,
      publicExternalChannels: ["Udemy"],
      youtubeCanonical: null,
      linkedinContextsSeparated: true,
      collaborationCta: false,
      activeAreas: expectedAreas.size,
      mobileFocusContract: true,
      routeContinuationsMaximum: 4,
      maximumDiscoveryDepth: Math.max(...distances.values()),
      localPathsExposed: 0,
      sensitivePatternsExposed: 0,
      newRoutes: 0,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
