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

async function waitForHomepage() {
  const startedAt = Date.now();
  let lastError;

  while (Date.now() - startedAt < startupTimeoutMs) {
    try {
      const response = await fetch(targetUrl, { redirect: "follow" });
      if (response.ok) return response;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error(
    `Homepage did not become ready within ${startupTimeoutMs}ms: ${lastError?.message ?? "unknown error"}`,
  );
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
    serverProcess = spawn(
      process.execPath,
      [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port],
      {
        cwd: repositoryRoot,
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    serverProcess.stdout.on("data", (chunk) => {
      serverOutput += chunk.toString();
    });
    serverProcess.stderr.on("data", (chunk) => {
      serverOutput += chunk.toString();
    });
  }

  const response = await waitForHomepage();
  const html = await response.text();
  const anchors = [
    "inicio",
    "aprender",
    "competencias",
    "trilha",
    "demo",
    "lab",
    "metodos",
    "ecossistema",
    "case-study",
    "formacao",
    "lablog",
    "sobre",
  ];
  const navigationAnchors = [
    "aprender",
    "trilha",
    "demo",
    "formacao",
    "case-study",
    "lab",
  ];
  const essentialContent = [
    "Payload Journey LAB",
    "Aprenda a seguir o payload",
    "Reduza uma codebase grande a um único flow investigável.",
    "Não abra arquivos aleatoriamente",
    "Transforme milhares de arquivos numa rota investigável.",
    "Sem tracing",
    "Com tracing",
    "Uma estratégia para compreender sistemas pelo flow",
    "Identificar o payload",
    "Rastrear a origem",
    "Seu caminho no Payload Journey LAB",
    "Você passa a enxergar informação atravessando o sistema.",
    "Você consegue reconstruir um flow de ponta a ponta.",
    "Você deixa de adivinhar e começa a investigar.",
    "Você consegue explicar onde e por que uma decisão ocorreu.",
    "Veja o payload atravessar o sistema",
    "Uma representação pedagógica de um flow operacional.",
    "Clique",
    "Structured Payload",
    "Projection",
    "Transporta",
    "Transforma",
    "Decide",
    "Apresenta",
    "O LAB",
    "Métodos para compreender sistemas",
    "Um ecossistema para compreender sistemas",
    "HORA.city",
    "Do método à prática",
    "LabLog",
    "Sobre o Payload Journey LAB",
    "Primeiro círculo de estudantes do LAB",
    "Payload Journey",
    "USMT",
    "Reverse Payload Journey",
    "Operational Payload Path",
    "Track to Origin",
    "HeartCreated",
    "createdAt incorreto",
  ];
  const externalDestinations = [
    "https://www.udemy.com/course/payload-journey-lab-siga-o-flow-entenda-o-sistema/?couponCode=FOLLOW-THE-FLOW",
    "https://www.youtube.com/@PayloadJourneyLAB",
    "https://www.youtube.com/@Lab-Log",
  ];

  assert(response.status === 200, `Expected HTTP 200, received ${response.status}`);
  assert(occurrences(html, /<h1\b/g) === 1, "Expected exactly one h1 in rendered HTML");
  assert(
    /<h1\b[^>]*>\s*Aprenda a seguir o payload\s*<\/h1>/.test(html),
    "The homepage h1 does not contain the Sprint 3 message",
  );
  assert(
    html.includes('aria-controls="mobile-navigation"'),
    "Mobile navigation trigger is missing",
  );
  assert(html.includes('aria-expanded="false"'), "Mobile navigation initial state is missing");

  for (const anchor of anchors) {
    assert(html.includes(`id="${anchor}"`), `Missing homepage section id: ${anchor}`);
  }

  for (const anchor of navigationAnchors) {
    assert(html.includes(`href="#${anchor}"`), `Missing navigation href: #${anchor}`);
  }

  assert(
    html.includes('href="#demo"') && html.includes("Ver o payload atravessar o sistema"),
    "Primary Hero CTA must point to #demo",
  );
  assert(
    html.includes('href="#trilha"') && html.includes("Explorar a trilha"),
    "Secondary Hero CTA must point to #trilha",
  );
  assert(
    html.includes('href="#trilha"') && html.includes("Começar"),
    "Header CTA must point to #trilha",
  );
  assert(
    html.includes('href="#case-study"') && html.includes("Ver o caso real HORA.city"),
    "Demo CTA must point to #case-study",
  );

  const orderedSectionIds = ["aprender", "competencias", "trilha", "demo", "lab"];
  let previousSectionIndex = -1;
  for (const id of orderedSectionIds) {
    const sectionIndex = html.indexOf(`id="${id}"`);
    assert(sectionIndex > previousSectionIndex, `Homepage section order is incorrect at #${id}`);
    previousSectionIndex = sectionIndex;
  }

  const learningPathIds = [
    "understand-payload",
    "payload-journey",
    "reverse-payload-journey",
    "track-to-origin",
  ];
  const flowNodeIds = [
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
  for (const orderedIds of [learningPathIds, flowNodeIds]) {
    let previousIdIndex = -1;
    for (const id of orderedIds) {
      const idIndex = html.indexOf(`id="${id}"`);
      assert(idIndex > previousIdIndex, `Rendered order is incorrect at stable id: ${id}`);
      previousIdIndex = idIndex;
    }
  }

  const renderedIds = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
  const internalDestinations = [...html.matchAll(/\shref="#([^"]+)"/g)].map(
    (match) => match[1],
  );
  for (const destination of internalDestinations) {
    assert(renderedIds.has(destination), `Internal link points to missing id: #${destination}`);
  }

  for (const content of essentialContent) {
    assert(html.includes(content), `Missing essential homepage content: ${content}`);
  }

  const normalizedHtml = html.replaceAll("&amp;", "&");
  for (const destination of externalDestinations) {
    assert(normalizedHtml.includes(destination), `Missing external destination: ${destination}`);
  }

  const canonicalSources = await Promise.all([
    fs.readFile(path.join(repositoryRoot, "content", "site.ts"), "utf8"),
    fs.readFile(path.join(repositoryRoot, "content", "methods.ts"), "utf8"),
    fs.readFile(path.join(repositoryRoot, "content", "hora-city.ts"), "utf8"),
    fs.readFile(path.join(repositoryRoot, "content", "payload-journey-lab.ts"), "utf8"),
  ]);
  const canonicalSource = canonicalSources.join("\n");
  const stableIds = [
    "payload-journey",
    "usmt",
    "reverse-payload-journey",
    "operational-payload-path",
    "track-to-origin",
    "freeze",
    "map",
    "detect",
    "restore",
    "track-mode",
    "trace-engineer",
    "software-system-investigation",
    "hora-city",
    "lablog",
    "choose-flow",
    "find-payload",
    "follow-transformations",
    "locate-decision",
    "identify-payload",
    "recognize-representations",
    "follow-flow",
    "distinguish-responsibilities",
    "position-checkpoints",
    "document-path",
    "reconstruct-anomalies",
    "trace-origin",
    "understand-payload",
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

  for (const id of stableIds) {
    assert(canonicalSource.includes(`"${id}"`), `Missing canonical stable id: ${id}`);
  }

  assert(
    canonicalSource.includes('editorialResolution: "unresolved"'),
    "HORA.city editorial variants must remain explicitly unresolved",
  );
  assert(
    canonicalSource.includes('resolutionStatus: "unresolved"'),
    "YouTube canonical destination must remain explicitly unresolved",
  );
  assert(
    canonicalSource.includes("expiration: null"),
    "Campaign expiration must remain explicitly unknown",
  );

  const siteSource = await fs.readFile(path.join(repositoryRoot, "content", "site.ts"), "utf8");
  const footerSource = await fs.readFile(
    path.join(repositoryRoot, "components", "layout", "SiteFooter.tsx"),
    "utf8",
  );
  assert(
    siteSource.includes("navigation: [") && footerSource.includes("footerContent.navigation"),
    "Footer navigation must remain independent from simplified Header navigation",
  );
  assert(
    !footerSource.includes("siteContent.nav"),
    "Footer must not consume the Header navigation source",
  );
  const headerNavigationSource = siteSource.match(
    /export const siteNavigation = \[([\s\S]*?)\] satisfies NavItem\[\];/,
  )?.[1];
  assert(headerNavigationSource, "Could not inspect the canonical Header navigation");
  assert(
    !headerNavigationSource.includes("homepageAnchors.methods"),
    "Methods may leave only the Header; its Footer destination must remain independent",
  );
  assert(
    siteSource.includes("homepageAnchors.methods") && html.includes('id="metodos"'),
    "The legacy Methods anchor must remain available",
  );
  assert(
    !html.includes("demonstração completa") && !html.includes("execução em tempo real"),
    "The pedagogical demo must not promise a nonexistent real execution",
  );
  const mobileNavigationSource = await fs.readFile(
    path.join(repositoryRoot, "components", "layout", "MobileNavigation.tsx"),
    "utf8",
  );
  assert(
    mobileNavigationSource.includes('event.key !== "Escape"') &&
      mobileNavigationSource.includes("triggerRef.current?.focus()"),
    "MobileNavigation must own Escape handling and focus return",
  );

  const sourceRoots = ["app", "components", "content", "lib"];
  const sourceFiles = (
    await Promise.all(sourceRoots.map((root) => listSourceFiles(path.join(repositoryRoot, root))))
  ).flat();
  const clientDirectives = (
    await Promise.all(sourceFiles.map((filePath) => fs.readFile(filePath, "utf8")))
  ).reduce((count, source) => count + occurrences(source, /^\s*["']use client["'];/gm), 0);
  assert(clientDirectives === 1, `Expected one Client Component boundary, found ${clientDirectives}`);

  console.log(
    JSON.stringify(
      {
        result: "pass",
        url: targetUrl,
        checks: {
          httpStatus: response.status,
          h1Count: 1,
          sectionIds: anchors.length,
          navigationAnchors: navigationAnchors.length,
          essentialContent: essentialContent.length,
          externalDestinations: externalDestinations.length,
          stableIds: stableIds.length,
          internalDestinations: new Set(internalDestinations).size,
          clientComponentBoundaries: clientDirectives,
          footerNavigationIndependent: true,
          mobileEscapeAndFocusReturnProtected: true,
          mobileNavigationInitialState: true,
          unresolvedEditorialDecisionsProtected: true,
          learningPathSteps: learningPathIds.length,
          flowNodes: flowNodeIds.length,
          flowNodeHtmlOrderPreserved: true,
          operationalRolesExplicit: 4,
          pedagogicalDemoDisclosure: true,
        },
      },
      null,
      2,
    ),
  );
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
