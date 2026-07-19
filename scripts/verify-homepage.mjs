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
    "lab",
    "metodos",
    "ecossistema",
    "case-study",
    "formacao",
    "lablog",
    "sobre",
  ];
  const navigationAnchors = [
    "inicio",
    "lab",
    "metodos",
    "case-study",
    "formacao",
    "lablog",
    "sobre",
  ];
  const essentialContent = [
    "PAYLOAD JOURNEY LAB",
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
