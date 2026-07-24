import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = process.env.REFACTOR_V3_VERIFY_PORT ?? "3217";
const origin = `http://127.0.0.1:${port}`;
const canonicalOrigin = "https://www.payloadjourneylab.com";
const runChildren = process.env.REFACTOR_V3_SKIP_CHILDREN !== "1";
const inheritedVerifiers = [
  "verify:foundation",
  "verify:ai-readiness",
  "verify:homepage",
  "verify:lab",
  "verify:lab-definitions",
  "verify:learn",
  "verify:method-practice",
  "verify:cases-evidence",
  "verify:navigation-discovery",
];
const routeMetadata = new Map([
  ["/", {
    title: "Payload Journey LAB — Compreender sistemas pelo flow",
    description: "Laboratório de Software System Investigation que pesquisa como flow, payload tracing, modelagem, checkpoints e evidências de runtime podem ajudar estudantes e developers a compreender codebases complexas.",
  }],
  ["/payload-journey", {
    title: "Payload Journey — Siga o payload, entenda o sistema",
    description: "Aprenda a seguir uma operação por eventos, payloads, camadas, decisões, estados e efeitos observáveis para construir uma compreensão progressiva do sistema.",
  }],
  ["/learn", {
    title: "Aprender Software System Investigation — Payload Journey LAB",
    description: "Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software.",
  }],
  ["/cases", {
    title: "Casos e Evidências — Payload Journey LAB",
    description: "Explore o caso HORA.city com flows, estados, hipóteses, evidências, limitações e conclusões proporcionais ao que foi observado.",
  }],
  ["/usmt", {
    title: "USMT — Modelo esperado de sistemas de software",
    description: "Use a USMT para explicitar estados, eventos, transições, regras, invariantes e limites e confrontar o modelo esperado com o comportamento observado.",
  }],
  ["/method", {
    title: "Métodos do Payload Journey LAB",
    description: "Conheça os instrumentos do LAB e as perguntas que Payload Journey, USMT, Reverse Payload Journey, Operational Payload Path e Track to Origin ajudam a investigar.",
  }],
  ["/protocol", {
    title: "Congelar, Mapear, Detectar e Restaurar",
    description: "Conheça o protocolo do LAB para delimitar flows, preservar comportamentos, produzir evidências, localizar divergências e validar restaurações.",
  }],
  ["/investigation", {
    title: "Software System Investigation e Trace Engineering",
    description: "Compreenda a prática que combina modelagem, payload tracing, checkpoints, runtime e evidências para explicar como operações se transformam em decisões e estados.",
  }],
  ["/lab-definitions", {
    title: "LAB Definitions | Payload Journey LAB",
    description: "Definições oficiais de Software Engineering, sistema, caminho, payload, Payload Journey, tracing, Trace Engineering, Trace Engineer, compreensão, decisão e evidência utilizadas pelo Payload Journey LAB.",
  }],
  ["/lab", {
    title: "Sobre o Payload Journey LAB",
    description: "Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
  }],
  ["/ecosystem", {
    title: "Ecossistema do Payload Journey LAB",
    description: "Conheça como o LAB conecta formação, pesquisa metodológica, investigação aplicada, casos e futuras possibilidades de colaboração.",
  }],
]);
const allowedJsonLdTypes = new Set(["Organization", "WebSite", "WebPage", "Person", "CreativeWork"]);
const forbiddenJsonLdTypes = new Set([
  "Course",
  "Article",
  "BlogPosting",
  "Blog",
  "SearchAction",
  "ItemList",
]);
const officialYoutube = "https://www.youtube.com/@PayloadJourneyLAB";
const alternateYoutube = "https://www.youtube.com/@Lab-Log";
const childResults = [];
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
  const match = html.match(pattern);
  return match?.[1] ?? match?.[2] ?? null;
}

function getLink(html, rel) {
  const pattern = new RegExp(
    `<link[^>]+rel="${rel}"[^>]+href="([^"]+)"|<link[^>]+href="([^"]+)"[^>]+rel="${rel}"`,
    "i",
  );
  return html.match(pattern)?.slice(1).find(Boolean) ?? null;
}

function getJsonLd(html) {
  const matches = [...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )];
  assert(matches.length === 1, "Cada rota deve renderizar um grafo JSON-LD");
  return JSON.parse(matches[0][1]);
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const child = spawn(command, args, {
      cwd: root,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      const durationMs = Date.now() - startedAt;
      if (code !== 0) {
        reject(new Error(`${args.join(" ")} falhou com código ${code}`));
        return;
      }
      resolve(durationMs);
    });
  });
}

async function waitForSite() {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Servidor integrado não ficou disponível");
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

try {
  if (runChildren) {
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    for (const verifier of inheritedVerifiers) {
      const durationMs = await runCommand(npmCommand, ["run", verifier]);
      childResults.push({ verifier, result: "pass", durationMs });
    }
  }

  const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
  server = spawn(process.execPath, [
    nextCli,
    "dev",
    "--hostname",
    "127.0.0.1",
    "--port",
    port,
  ], {
    cwd: root,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  server.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
  server.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  await waitForSite();

  const pages = new Map();
  const seenTitles = new Set();
  const seenDescriptions = new Set();
  const seenCanonical = new Set();
  const seenTypes = new Set();
  const socialImage = `${canonicalOrigin}/brand/logo.png`;

  for (const [route, expected] of routeMetadata) {
    const response = await fetch(`${origin}${route}`);
    const html = await response.text();
    assert(response.status === 200, `${route}: HTTP ${response.status}`);
    assert((html.match(/<h1\b/g) ?? []).length === 1, `${route}: H1 deve ser único`);
    assert(html.includes(`<title>${expected.title}</title>`), `${route}: title divergente`);
    assert(getMeta(html, "name", "description") === expected.description, `${route}: description divergente`);
    assert(getMeta(html, "property", "og:title") === expected.title, `${route}: og:title divergente`);
    assert(getMeta(html, "property", "og:description") === expected.description, `${route}: og:description divergente`);
    assert(getMeta(html, "name", "twitter:title") === expected.title, `${route}: twitter:title divergente`);
    assert(getMeta(html, "name", "twitter:description") === expected.description, `${route}: twitter:description divergente`);

    const canonical = `${canonicalOrigin}${route === "/" ? "" : route}`;
    assert(getLink(html, "canonical") === canonical, `${route}: canonical incorreto`);
    assert(getMeta(html, "property", "og:url") === canonical, `${route}: og:url incorreto`);
    assert(getMeta(html, "property", "og:type") === "website", `${route}: og:type incorreto`);
    assert(getMeta(html, "property", "og:locale") === "pt_BR", `${route}: locale incorreto`);
    assert(getMeta(html, "property", "og:image") === socialImage, `${route}: imagem OG incorreta`);
    assert(getMeta(html, "property", "og:image:width") === "1254", `${route}: largura OG incorreta`);
    assert(getMeta(html, "property", "og:image:height") === "1254", `${route}: altura OG incorreta`);
    assert(getMeta(html, "property", "og:image:alt") === "Logo do Payload Journey LAB", `${route}: alt OG incorreto`);
    assert(getMeta(html, "name", "twitter:card") === "summary", `${route}: Twitter card incorreto`);
    assert(getMeta(html, "name", "twitter:image") === socialImage, `${route}: imagem Twitter incorreta`);

    assert(!seenTitles.has(expected.title), `${route}: title repetido`);
    assert(!seenDescriptions.has(expected.description), `${route}: description repetida`);
    assert(!seenCanonical.has(canonical), `${route}: canonical repetido`);
    seenTitles.add(expected.title);
    seenDescriptions.add(expected.description);
    seenCanonical.add(canonical);

    const jsonLd = getJsonLd(html);
    const graph = jsonLd["@graph"];
    assert(jsonLd["@context"] === "https://schema.org", `${route}: contexto JSON-LD`);
    assert(Array.isArray(graph), `${route}: JSON-LD sem @graph`);
    const ids = graph.map((node) => node["@id"]).filter(Boolean);
    assert(ids.length === new Set(ids).size, `${route}: @id duplicado`);
    const page = graph.find((node) => node["@type"] === "WebPage");
    assert(page, `${route}: WebPage ausente`);
    assert(page["@id"] === `${canonical}#webpage`, `${route}: WebPage @id`);
    assert(page.url === canonical, `${route}: WebPage url`);
    assert(page.name === expected.title, `${route}: WebPage name divergente`);
    assert(page.description === expected.description, `${route}: WebPage description divergente`);

    for (const node of graph) {
      const types = Array.isArray(node["@type"]) ? node["@type"] : [node["@type"]];
      for (const type of types.filter(Boolean)) {
        seenTypes.add(type);
        assert(allowedJsonLdTypes.has(type), `${route}: tipo JSON-LD não autorizado — ${type}`);
        assert(!forbiddenJsonLdTypes.has(type), `${route}: tipo JSON-LD proibido — ${type}`);
      }
      if (node["@type"] === "Organization") {
        assert(
          Array.isArray(node.sameAs) && node.sameAs.length === 1 && node.sameAs[0] === officialYoutube,
          `${route}: sameAs institucional incorreto`,
        );
      } else {
        assert(!("sameAs" in node), `${route}: sameAs fora da entidade institucional`);
      }
    }

    assert(html.includes(officialYoutube), `${route}: canal oficial do YouTube ausente`);
    assert(!html.includes(alternateYoutube), `${route}: canal alternativo do YouTube exposto`);
    assert(!html.includes('href="/lablog"'), `${route}: LabLog oculto possui link público`);
    assert(!/[A-Z]:\\(?:Users|Documents|Desktop)\\/i.test(html), `${route}: path Windows exposto`);
    assert(!/\/Users\//i.test(html), `${route}: path macOS exposto`);
    assert(!/file:\/\//i.test(html), `${route}: file URI exposta`);
    assert(!/localhost|127\.0\.0\.1/i.test(html), `${route}: localhost exposto`);
    assert(!/(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[=:]\s*["'][^"']+/i.test(html), `${route}: segredo exposto`);
    pages.set(route, html);
  }

  const hiddenLabLog = await fetch(`${origin}/lablog`);
  assert(hiddenLabLog.status === 404, `/lablog deve retornar 404`);

  assert(seenTypes.has("Organization"), "Organization institucional ausente");
  assert(seenTypes.has("Person"), "Person da fundadora ausente");
  assert(seenTypes.has("CreativeWork"), "CreativeWork da USMT ausente");
  for (const forbidden of forbiddenJsonLdTypes) {
    assert(!seenTypes.has(forbidden), `Tipo proibido presente: ${forbidden}`);
  }

  const publicCorpus = [...pages.values()].join("\n");
  for (const prohibitedClaim of [
    /garantia de empregabilidade/i,
    /onboarding comprovadamente mais r[aá]pido/i,
    /Trace Engineer (?:é|representa) (?:uma )?profiss[aã]o consolidada/i,
    /transferibilidade (?:foi|est[aá]) demonstrada/i,
    /efic[aá]cia (?:foi|est[aá]) comprovada/i,
    /certifica(?:ção|do) profissional (?:garantida|reconhecida|oficial)/i,
  ]) {
    assert(!prohibitedClaim.test(publicCorpus), `Claim proibido: ${prohibitedClaim}`);
  }
  assert(publicCorpus.includes("Função e perfil investigativo em desenvolvimento"), "Trace Engineer perdeu estado");
  assert(publicCorpus.includes("Direção futura de pesquisa e formação"), "Direção futura ausente");
  assert(publicCorpus.includes("não constitui evidência externa"), "Limite de evidência externa ausente");
  assert(publicCorpus.includes("Caso interno conduzido pela criadora do método"), "HORA.city perdeu contexto interno");
  assert(publicCorpus.includes("Formação na Udemy"), "Udemy secundária ausente");
  assert(publicCorpus.includes(">YouTube · LAB Log</a>"), "YouTube oficial ausente");
  assert(!publicCorpus.includes(">LinkedIn"), "LinkedIn não confirmado renderizado");

  const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
  const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  assert(sitemapLocations.length === routeMetadata.size, "Sitemap deve conter somente URLs públicas");
  assert(new Set(sitemapLocations).size === routeMetadata.size, "Sitemap contém URL duplicada");
  for (const route of routeMetadata.keys()) {
    const canonical = `${canonicalOrigin}${route === "/" ? "/" : route}`;
    assert(sitemapLocations.includes(canonical), `Sitemap sem ${canonical}`);
  }
  assert(!/<priority>|<changefreq>|<lastmod>/i.test(sitemap), "Sitemap contém sinal sem fonte");
  assert(!sitemap.includes("/about"), "Sitemap contém redirect");
  assert(!sitemap.includes("/lablog"), "Sitemap contém LabLog oculto");

  const robots = await (await fetch(`${origin}/robots.txt`)).text();
  for (const directive of [
    "User-Agent: *\nAllow: /",
    "User-Agent: OAI-SearchBot\nAllow: /",
    "User-Agent: ChatGPT-User\nAllow: /",
    "User-Agent: GPTBot\nDisallow: /",
    `Host: ${canonicalOrigin}`,
    `Sitemap: ${canonicalOrigin}/sitemap.xml`,
  ]) {
    assert(robots.includes(directive), `robots divergente: ${directive}`);
  }

  const localAbout = await fetch(`${origin}/about`, { redirect: "manual" });
  assert(localAbout.status === 308, "/about local deve retornar 308");
  assert((localAbout.headers.get("location") ?? "").endsWith("/lab#sobre"), "/about local deve preservar #sobre");
  const apexAbout = await requestWithHost("/about?source=refactor-v3", "payloadjourneylab.com");
  assert(apexAbout.status === 308, "/about no apex deve retornar 308");
  assert(
    apexAbout.location === `${canonicalOrigin}/lab?source=refactor-v3#sobre`,
    "/about no apex não deve criar chain",
  );

  const appEntries = (await fs.readdir(path.join(root, "app"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();
  const expectedAppEntries = [
    "about",
    "cases",
    "ecosystem",
    "investigation",
    "lab",
    "lab-definitions",
    "lablog",
    "learn",
    "method",
    "payload-journey",
    "protocol",
    "usmt",
  ];
  assert(JSON.stringify(appEntries) === JSON.stringify(expectedAppEntries), "Diretórios de rota divergentes");

  const temporaryRoot = path.join(root, ".tmp");
  const temporaryItems = await fs.readdir(temporaryRoot).catch(() => []);
  assert(temporaryItems.length === 0, `.tmp contém artefatos: ${temporaryItems.join(", ")}`);
  const gitignore = await fs.readFile(path.join(root, ".gitignore"), "utf8");
  assert(gitignore.split(/\r?\n/).includes(".tmp/"), ".tmp/ não está ignorado");
  assert(
    !(await fs.stat(path.join(temporaryRoot, "sprint6-before-reconstruction")).catch(() => null)),
    "Reconstrução temporária da Sprint 6 reapareceu",
  );

  const packageJson = JSON.parse(await fs.readFile(path.join(root, "package.json"), "utf8"));
  assert(Object.keys(packageJson.dependencies).length === 4, "Nova dependência de runtime");
  assert(Object.keys(packageJson.devDependencies).length === 8, "Nova dependência de desenvolvimento");
  assert(packageJson.scripts["verify:refactor-v3"], "Script integrado ausente");

  console.log(JSON.stringify({
    result: "pass",
    children: runChildren ? childResults : "skipped-by-explicit-env",
    checks: {
      canonicalRoutes: routeMetadata.size,
      uniqueTitles: seenTitles.size,
      uniqueDescriptions: seenDescriptions.size,
      absoluteCanonicals: seenCanonical.size,
      openGraphRoutes: routeMetadata.size,
      twitterRoutes: routeMetadata.size,
      socialImage: "/brand/logo.png",
      structuredDataTypes: [...seenTypes].sort(),
      organizationPublished: true,
      courseOmitted: true,
      articleTypesOmitted: true,
      labLogItemListOmitted: true,
      sitemapRoutes: sitemapLocations.length,
      sitemapSignalsWithoutSource: 0,
      crawlerPolicyPreserved: true,
      redirects: 3,
      youtubeCanonical: officialYoutube,
      linkedinPublicLinks: 0,
      collaborationCta: false,
      localPathsExposed: 0,
      sensitivePatternsExposed: 0,
      unauthorizedTemporaryArtifacts: 0,
      newRoutes: 1,
      newDependencies: 0,
      productionValidation: "pending-deploy",
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
