import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const configuredUrl = process.env.HOMEPAGE_VERIFY_URL;
const port = process.env.HOMEPAGE_VERIFY_PORT ?? "3210";
const targetUrl = configuredUrl ?? `http://127.0.0.1:${port}`;
const startupTimeoutMs = 60_000;
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
const forbiddenRoutes = [
  "/mapping",
  "/reverse-payload-journey",
  "/resources",
  "/privacy-policy",
  "/terms-of-use",
];

let serverProcess;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function occurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

async function listSourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? listSourceFiles(entryPath) : [entryPath];
    }),
  );
  return files.flat().filter((filePath) => /\.(?:ts|tsx)$/.test(filePath));
}

async function waitForSite() {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < startupTimeoutMs) {
    try {
      const response = await fetch(targetUrl, { redirect: "follow" });
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Site did not become ready: ${lastError?.message ?? "unknown error"}`);
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

function assertOrderedIds(html, ids, label) {
  let previous = -1;
  for (const id of ids) {
    const current = html.indexOf(`id="${id}"`);
    assert(current > previous, `${label} order is incorrect at ${id}`);
    previous = current;
  }
}

try {
  if (!configuredUrl) {
    const nextCli = path.join(repositoryRoot, "node_modules", "next", "dist", "bin", "next");
    serverProcess = spawn(
      process.execPath,
      [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port],
      {
        cwd: repositoryRoot,
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );
    serverProcess.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    serverProcess.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const pages = new Map();
  for (const route of indexableRoutes) {
    const response = await fetch(`${targetUrl}${route === "/" ? "" : route}`);
    const html = await response.text();
    assert(response.status === 200, `${route} returned HTTP ${response.status}`);
    assert(occurrences(html, /<h1\b/g) === 1, `${route} must render exactly one h1`);
    assert(/<link[^>]+rel="canonical"/i.test(html), `${route} is missing canonical metadata`);
    assert(/<meta[^>]+name="description"/i.test(html), `${route} is missing description metadata`);
    assert(html.includes('aria-controls="mobile-navigation"'), `${route} is missing mobile navigation`);
    assert(html.includes('aria-expanded="false"'), `${route} mobile navigation must start closed`);
    pages.set(route, html);
  }

  const aboutRedirect = await fetch(`${targetUrl}/about`, { redirect: "manual" });
  assert(aboutRedirect.status === 308, `/about must return HTTP 308; received ${aboutRedirect.status}`);
  assert(
    aboutRedirect.headers.get("location") === "/lab#sobre",
    `/about must redirect directly to /lab#sobre; received ${aboutRedirect.headers.get("location")}`,
  );

  for (const route of forbiddenRoutes) {
    const response = await fetch(`${targetUrl}${route}`);
    assert(response.status === 404, `${route} must remain absent; received HTTP ${response.status}`);
  }

  const home = pages.get("/");
  assert(
    /<h1\b[^>]*>\s*O código acelera\. A compreensão precisa acompanhar\.\s*<\/h1>/.test(home),
    "Homepage must preserve the approved h1",
  );
  assertOrderedIds(
    home,
    [
      "inicio",
      "why-now",
      "audience-investigation",
      "proposal",
      "demo",
      "method-overview",
      "evidence-hypothesis",
      "pedagogical-progression",
      "formation",
      "ecosystem-overview",
      "lab-overview",
    ],
    "Synthetic homepage",
  );
  for (const destination of ["/usmt", "/payload-journey", "/protocol", "/cases", "/ecosystem", "/learn", "/lablog", "/lab"]) {
    assert(home.includes(`href="${destination}"`), `Homepage is missing real CTA ${destination}`);
  }
  for (const requirement of [
    "PAYLOAD JOURNEY LAB",
    "Começar pelo Payload Journey",
    "Ver o caso HORA.city",
    "A IA deve ampliar a capacidade de compreensão dos engenheiros, não substituir sua autoridade sobre o sistema.",
    "estudantes de Engenharia de Software",
    "developers em início de carreira",
    "codebases desconhecidas, legadas ou complexas",
    "A hipótese investigada",
    "Intenção",
    "Payload",
    "Interpretação",
    "Decisão",
    "Estado",
    "Efeito",
    "Veja como uma intenção atravessa o sistema",
    "Instrumentos para investigar o flow",
    "O LAB não presume a resposta. Investiga.",
    "O que já existe",
    "O que o LAB investiga",
    "HORA.city",
    "Horizonte futuro",
    "sistemas distribuídos e mission-critical permanecem direção futura",
    "Explorar a trilha de aprendizagem",
    "Conhecer a formação na Udemy",
  ]) {
    assert(home.includes(requirement), `Homepage is missing Sprint 1 invariant: ${requirement}`);
  }
  assert(occurrences(home, />Horizonte futuro</g) === 2, "Homepage must mark levels 4 and 5 as future");
  assert(home.includes('href="/method"'), "Homepage methods must link to /method");
  assert(home.includes('href="/cases"'), "Homepage evidence must link to /cases");
  assert(home.includes('href="/learn"'), "Homepage formation must link primarily to /learn");
  for (const removedHomepageEmphasis of [
    "DO ZERO AO PILOTO",
    "Estamos construindo um laboratório de investigação de sistemas",
    "Método reproduzível",
    "Caso real documentado",
    "Capacidade transferível",
  ]) {
    assert(!home.includes(removedHomepageEmphasis), `Homepage still emphasizes internal LAB construction: ${removedHomepageEmphasis}`);
  }
  for (const prohibitedClaim of [
    "profissão reconhecida",
    "garantia de empregabilidade",
    "onboarding mais rápido garantido",
    "eficácia universal",
    "capacidade transferível comprovada",
  ]) {
    assert(!home.toLowerCase().includes(prohibitedClaim.toLowerCase()), `Homepage renders prohibited claim: ${prohibitedClaim}`);
  }

  const flowIds = [
    "interaction",
    "structured-payload",
    "request",
    "api",
    "domain",
    "repository",
    "response",
    "projection",
    "ui",
  ];
  for (const route of ["/", "/payload-journey"]) {
    const html = pages.get(route);
    assertOrderedIds(html, flowIds, `${route} payload flow`);
    for (const text of ["Clique", "Structured Payload", "Request", "API", "Domain", "Repository", "Response", "Projection", "UI"]) {
      assert(html.includes(text), `${route} is missing flow content: ${text}`);
    }
  }

  const routeRequirements = {
    "/payload-journey": [
      "Não abra arquivos aleatoriamente",
      "Transforme milhares de arquivos numa rota investigável.",
      "Uma estratégia para compreender sistemas pelo flow",
      "Identificar o payload",
      "Rastrear a origem",
      "Uma representação pedagógica de um flow operacional.",
    ],
    "/learn": [
      "Começar por um payload. Avançar para o sistema.",
      "Uma operação concreta reduz o recorte, não a complexidade",
      "Do primeiro evento à investigação estruturada",
      "Aprofundamento em construção",
      "Direção futura de pesquisa e formação",
      "Investigar exige pensar, observar e confrontar",
      "O que já pode orientar a aprendizagem",
      "Seis passos possíveis para começar",
      "Curso beta como canal de aprofundamento",
      "Payload Journey LAB: Siga o flow, entenda o sistema",
      "Conhecer o curso",
      "Rever a trilha",
      "Um caso serve para praticar perguntas e limites",
      "Ensinar também é investigar",
    ],
    "/cases": [
      "Investigações reais, conclusões proporcionais às evidências",
      "Um caso localizado, sem simular escala",
      "RPJ-HORA-001",
      "Fatos confirmados",
      "Hipóteses",
      "Desconhecidos",
      "Cronologia pública ainda não localizada",
      "Conclusões não autorizadas",
    ],
    "/usmt": [
      "USMT — Universal System Modeling Template",
      "A USMT é um template metodológico autoral desenvolvido no Payload Journey LAB",
      "Entenda o sistema que o payload atravessa.",
      "Doze elementos para tornar o sistema investigável",
      "Quatro lentes para investigar qualquer fluxo",
      "Do modelo esperado ao comportamento observado",
      "software system investigation",
      "system modeling",
      "payload tracing",
    ],
    "/protocol": [
      "Procedimento investigativo",
      "Congelar. Mapear. Detectar. Restaurar.",
      "Qual comportamento precisa ser preservado antes de qualquer alteração?",
      "Por onde o payload realmente atravessa o sistema?",
      "Em que ponto o comportamento observado diverge do esperado ou do modelo?",
      "Que autoridade, regra ou comportamento precisa ser corrigido e validado?",
    ],
    "/method": [
      "Métodos do LAB",
      "Instrumentos diferentes para perguntas diferentes",
      "Os termos cumprem responsabilidades diferentes",
      "Payload Journey",
      "USMT",
      "Reverse Payload Journey",
      "Operational Payload Path",
      "Track to Origin",
    ],
    "/investigation": [
      "Prática investigativa",
      "Compreender antes de modificar",
      "Conhecer o protocolo",
      "Track Mode",
      "Trace Engineer",
      "Software System Investigation",
      "Capacidades em desenvolvimento",
      "Função e perfil investigativo em desenvolvimento",
    ],
    "/lab": [
      "Um laboratório para investigar como sistemas realmente funcionam",
      "O Payload Journey LAB é um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
      "Recuperar compreensão e autoridade sobre o sistema",
      "Quando produzir ficou mais rápido do que compreender",
      "Transformar perda de compreensão em método",
      "HUMAN DIRECTION · AI ASSISTANCE",
      "Valéria dos Santos Reiser",
      "Uma visão que já possui instrumentos, caso e conteúdo público",
      "Do método autoral a uma capacidade transferível",
      "Um horizonte inicial de seis meses",
      "O verdadeiro teste do piloto",
      "Uma função investigativa em desenvolvimento",
      "Direção futura de pesquisa e formação",
      "Compreender antes de modificar",
      "Siga o payload. Encontre a causalidade. Recupere a compreensão.",
    ],
    "/ecosystem": [
      "Quatro áreas conectadas pelo mesmo propósito",
      "Pesquisa metodológica",
      "Investigação aplicada",
      "Colaboração",
      "Estas são possibilidades de colaboração",
    ],
    "/lablog": [
      "A investigação enquanto acontece",
      "Um registro datado, não um caso completo",
      "Nenhuma entrada estruturada foi localizada",
      "0 entradas publicadas",
      "Responsabilidade humana permanece explícita",
    ],
  };
  for (const [route, requirements] of Object.entries(routeRequirements)) {
    const html = pages.get(route);
    for (const requirement of requirements) {
      assert(html.includes(requirement), `${route} is missing preserved content: ${requirement}`);
    }
  }

  assertOrderedIds(
    pages.get("/learn"),
    [
      "aprender",
      "aprender-por-flow",
      "progressao",
      "nivel-1-operacao",
      "nivel-2-camadas",
      "nivel-3-investigacao",
      "nivel-4-sistemas-complexos",
      "nivel-5-requisitos",
      "esforco",
      "fundamentos",
      "conteudo-disponivel",
      "trilha",
      "formacao",
      "casos-aprendizagem",
      "evidencia-pedagogica",
    ],
    "Learning architecture",
  );
  assertOrderedIds(pages.get("/cases"), ["case-reading-guide", "case-registry", "case-hora-city", "case-evidence", "case-timeline", "case-conclusions"], "HORA.city evidence registry");
  assertOrderedIds(pages.get("/lablog"), ["lablog-guide", "lablog-inventory", "lablog-case-relation", "lablog-provenance"], "LabLog evidence registry");
  assertOrderedIds(pages.get("/protocol"), ["freeze", "map", "detect", "restore"], "Protocol");
  assertOrderedIds(pages.get("/method"), ["method-payload-journey", "method-usmt", "method-reverse-payload-journey", "method-operational-payload-path", "method-track-to-origin"], "Methods");
  assertOrderedIds(pages.get("/investigation"), ["investigation-characteristics", "investigation-practice", "track-mode", "trace-engineering", "trace-engineer", "investigation-questions", "investigation-relations", "investigation-authority", "investigation-limits"], "Investigative practice");
  assert(
    pages.get("/investigation").includes('href="/protocol"') &&
      pages.get("/investigation").includes('href="/method"'),
    "/investigation must link to the protocol and methods",
  );
  assert(
    pages.get("/investigation").indexOf("Conhecer o protocolo") < pages.get("/investigation").indexOf("Voltar à homepage"),
    "/investigation protocol CTA must render before the homepage return link",
  );
  assertOrderedIds(pages.get("/lab"), ["lab", "sobre", "mission", "principle", "origin", "how-the-lab-works", "human-ai", "founder", "current-state", "lab-construction", "pilot", "trace-engineer", "vision", "long-term-vision", "public-commitment"], "Unified institutional page");
  assertOrderedIds(pages.get("/ecosystem"), ["education", "methodological-research", "applied-investigation", "collaboration"], "Institutional pillars");
  assertOrderedIds(pages.get("/usmt"), ["usmt-element-description", "usmt-element-delimitation", "usmt-element-states", "usmt-element-events", "usmt-element-allowed-transitions", "usmt-element-forbidden-transitions", "usmt-element-invalidation", "usmt-element-termination", "usmt-element-invariants", "usmt-element-layers", "usmt-element-metrics", "usmt-element-spec"], "USMT elements");
  assertOrderedIds(pages.get("/usmt"), ["usmt-lens-where", "usmt-lens-how", "usmt-lens-logic", "usmt-lens-safe"], "USMT lenses");

  const corpus = [...pages.values()].join("\n");
  const normalizedCorpus = corpus.replaceAll("&amp;", "&");
  for (const destination of [
    "https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=FOLLOW-THE-FLOW",
  ]) {
    assert(normalizedCorpus.includes(destination), `Missing preserved external link: ${destination}`);
  }
  for (const unresolvedDestination of [
    "https://www.youtube.com/@PayloadJourneyLAB",
    "https://www.youtube.com/@Lab-Log",
  ]) {
    assert(!normalizedCorpus.includes(unresolvedDestination), `Unresolved YouTube link rendered: ${unresolvedDestination}`);
  }
  assert(!/Política de privacidade|Termos de uso|Impressum/.test(corpus), "Nonexistent legal pages must not be rendered");
  assert(!/parcerias ativas|pilotos ativos|contratos ativos/i.test(corpus), "Unconfirmed collaboration claims must not render");
  assert(!/profissão reconhecida|cargo padronizado|standard externo/i.test(corpus), "External recognition claims must not render");
  assert(!/piloto (?:foi|está) concluído|protocolo (?:já )?reproduzido por outras pessoas/i.test(corpus), "Unverified pilot results must not render");
  assert(!/estudantes formados pelo LAB (?:já )?são comprovadamente mais valiosos|garantia de empregabilidade|tracing substitui (?:a )?arquitectura/i.test(corpus), "Unverified education claims must not render");
  assert(!/Send Heart|create\/join|informação não disponível/i.test(corpus), "Unconfirmed HORA.city facts must not render");
  assert(!corpus.includes('href="/about"'), "Indexable pages must link directly to /lab, never /about");

  const sitemapResponse = await fetch(`${targetUrl}/sitemap.xml`);
  const sitemap = await sitemapResponse.text();
  assert(sitemapResponse.status === 200, `/sitemap.xml returned HTTP ${sitemapResponse.status}`);
  assert(sitemap.includes("https://www.payloadjourneylab.com/lab"), "Sitemap must include canonical /lab");
  assert(!sitemap.includes("https://www.payloadjourneylab.com/about"), "Sitemap must exclude /about");

  for (const [route, html] of pages) {
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert(new Set(ids).size === ids.length, `${route} contains duplicate DOM ids`);
    for (const href of [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1])) {
      if (href.startsWith("#")) {
        assert(ids.includes(href.slice(1)), `${route} links to missing local id ${href}`);
      } else if (
        href.startsWith("/") &&
        !href.startsWith("/_next/") &&
        !href.startsWith("/icon.svg")
      ) {
        const [pathname, fragment] = href.split("#");
        assert(indexableRoutes.includes(pathname || "/"), `${route} links to missing route ${pathname}`);
        if (fragment) assert(pages.get(pathname || "/").includes(`id="${fragment}"`), `${route} links to missing destination ${href}`);
      }
    }
  }

  const sources = await Promise.all([
    "content/site.ts",
    "content/hora-city.ts",
    "content/payload-journey-lab.ts",
  ].map((file) => fs.readFile(path.join(repositoryRoot, file), "utf8")));
  const payloadJourneyLabSource = sources[2];
  const canonicalSource = sources.join("\n");
  assert(canonicalSource.includes('editorialResolution: "unresolved"'), "HORA.city must remain unresolved");
  assert(canonicalSource.includes('resolutionStatus: "unresolved"'), "YouTube must remain unresolved");
  assert(canonicalSource.includes("expiration: null"), "Coupon expiration must remain null");
  assert(canonicalSource.includes('historicalPolicies: ["Política de privacidade", "Termos de uso"]'), "Historical legal labels must remain server-side");
  assert(canonicalSource.includes('professionalLink: siteLinks.linkedin.personal') && canonicalSource.includes('personal: null') && canonicalSource.includes('institutional: null'), "Personal and institutional LinkedIn links must remain distinct and null");
  assert(!/^\s{2}about:\s*\{/m.test(payloadJourneyLabSource), "A duplicate institutional runtime source must not remain");

  const historicalCopies = [
    "O HORA.city é um sistema geolocalizado utilizado pelo Payload Journey LAB como caso real de investigação aplicada.",
    "O HORA.city é um caso real de investigação aplicada no Payload Journey LAB, marcado por uma expansão acelerada",
    "Phenomenon description",
    "State Enumeration",
  ];
  for (const copy of historicalCopies) assert(!corpus.includes(copy), `Historical-only copy leaked into public HTML: ${copy}`);

  const footerSource = await fs.readFile(path.join(repositoryRoot, "components/layout/SiteFooter.tsx"), "utf8");
  const siteSource = await fs.readFile(path.join(repositoryRoot, "content/site.ts"), "utf8");
  assert(footerSource.includes("footerContent.groups") && !footerSource.includes("siteNavigation"), "Footer navigation must remain independent");
  assert(siteSource.includes('labLogCurrent: "https://www.youtube.com/@PayloadJourneyLAB"') && siteSource.includes('footerCurrent: "https://www.youtube.com/@Lab-Log"'), "Both YouTube destinations must remain distinct");

  const sourceRoots = ["app", "components", "content", "lib"];
  const sourceFiles = (await Promise.all(sourceRoots.map((root) => listSourceFiles(path.join(repositoryRoot, root))))).flat();
  const clientDirectives = (await Promise.all(sourceFiles.map((file) => fs.readFile(file, "utf8")))).reduce(
    (count, source) => count + occurrences(source, /^\s*["']use client["'];/gm),
    0,
  );
  assert(clientDirectives === 1, `Expected one Client Component boundary, found ${clientDirectives}`);

  console.log(JSON.stringify({
    result: "pass",
    url: targetUrl,
    checks: {
      indexableRoutes: indexableRoutes.length,
      permanentCompatibilityRedirects: 1,
      absentUnsupportedRoutes: forbiddenRoutes.length,
      pagesWithSingleH1AndMetadata: indexableRoutes.length,
      preservedFullSections: Object.keys(routeRequirements).length,
      demoSharedRoutes: 2,
      flowNodes: flowIds.length,
      internalLinksValidated: true,
      externalDestinations: 1,
      clientComponentBoundaries: clientDirectives,
      footerNavigationIndependent: true,
      unresolvedEditorialDecisionsProtected: true,
      nonexistentLegalPagesOmitted: true,
      publicContentPreservationGuarded: true,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
