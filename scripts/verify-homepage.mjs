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
    "formacao",
    "case-study",
    "metodos",
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
    html.includes('href="#aprender"') && html.includes("Começar a aprender"),
    "Primary Hero CTA must point to #aprender",
  );
  assert(
    html.includes('href="#formacao"') && html.includes("Conhecer a formação"),
    "Secondary Hero CTA must point to #formacao",
  );

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
