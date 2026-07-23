import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configuredUrl = process.env.METHOD_PRACTICE_VERIFY_URL;
const port = process.env.METHOD_PRACTICE_VERIFY_PORT ?? "3214";
const origin = configuredUrl ?? `http://127.0.0.1:${port}`;
const canonicalOrigin = "https://www.payloadjourneylab.com";
const routes = ["/method", "/protocol", "/investigation"];
let server;
let output = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function ordered(html, values, label) {
  let previous = -1;
  for (const value of values) {
    const current = html.indexOf(value);
    assert(current > previous, `${label}: ordem incorreta em ${value}`);
    previous = current;
  }
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

try {
  if (!configuredUrl) {
    const nextCli = path.join(root, "node_modules", "next", "dist", "bin", "next");
    server = spawn(process.execPath, [nextCli, "dev", "--hostname", "127.0.0.1", "--port", port], {
      cwd: root,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: ["ignore", "pipe", "pipe"],
    });
    server.stdout.on("data", (chunk) => (output += chunk.toString()));
    server.stderr.on("data", (chunk) => (output += chunk.toString()));
  }
  await waitForSite();

  const pages = new Map();
  for (const route of routes) {
    const response = await fetch(`${origin}${route}`);
    const html = await response.text();
    assert(response.status === 200, `${route}: HTTP ${response.status}`);
    assert((html.match(/<h1\b/g) ?? []).length === 1, `${route}: deve existir um H1`);
    const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert(ids.length === new Set(ids).size, `${route}: IDs duplicados`);
    const headingLevels = [...html.matchAll(/<h([1-4])\b/g)].map((match) => Number(match[1]));
    for (let index = 1; index < headingLevels.length; index += 1) {
      assert(headingLevels[index] <= headingLevels[index - 1] + 1, `${route}: salto de heading`);
    }
    assert(html.includes(`<link rel="canonical" href="${canonicalOrigin}${route}"/>`), `${route}: canonical ausente`);
    assert(html.includes('property="og:url"'), `${route}: OG URL ausente`);
    assert(html.includes('name="twitter:card"'), `${route}: Twitter metadata ausente`);
    pages.set(route, html);
  }

  const method = pages.get("/method");
  for (const text of [
    "Instrumentos diferentes para perguntas diferentes",
    "Software System Investigation",
    "Trace Engineering",
    "Trace Engineer",
    "Payload Journey",
    "USMT",
    "Reverse Payload Journey",
    "Operational Payload Path",
    "Track to Origin",
    "Checkpoints",
    "Documentos de investigação",
    "Não localizado",
    "Uma sequência possível, não uma receita única",
  ]) assert(method.includes(text), `/method: conteúdo ausente — ${text}`);
  assert(method.includes('href="/payload-journey"') && method.includes('href="/usmt"'), "/method: páginas canônicas sem links");
  ordered(method, ["method-taxonomy", "methods", "supporting-instruments", "method-relationship", "method-limits"], "/method");

  const protocol = pages.get("/protocol");
  ordered(protocol, ['id="freeze"', 'id="map"', 'id="detect"', 'id="restore"'], "/protocol");
  for (const text of [
    "Objetivo:",
    "Entradas",
    "Atividades",
    "Evidências possíveis",
    "Critério de saída:",
    "quando os checkpoints revelam que o caminho estava incompleto",
    "Nomear um artefato não significa que ele já esteja disponível",
    "Não localizado",
    "não garante causa raiz",
  ]) assert(protocol.toLowerCase().includes(text.toLowerCase()), `/protocol: conteúdo ausente — ${text}`);

  const investigation = pages.get("/investigation");
  for (const text of [
    "Software System Investigation é a prática estruturada",
    "Trace Engineering é o conjunto de capacidades",
    "Track Mode",
    "Função e perfil investigativo em desenvolvimento",
    "não é profissão consolidada",
    "Tracing conecta perspectivas; não as substitui.",
    "A autoridade final",
    "Direção futura de pesquisa e formação",
    "sistemas distribuídos",
    "mission-critical",
  ]) assert(investigation.includes(text), `/investigation: conteúdo ausente — ${text}`);
  assert(!investigation.slice(0, investigation.indexOf("</main>")).includes("Aprender sobre payload e tracing"), "/investigation: CTA Udemy permaneceu no conteúdo principal");

  const appEntries = (await fs.readdir(path.join(root, "app"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name);
  for (const forbidden of ["mapping", "reverse-payload-journey", "track-to-origin", "trace-engineering"]) {
    assert(!appEntries.includes(forbidden), `Nova rota metodológica proibida: /${forbidden}`);
  }
  const changedComponents = [
    "components/pages/PageIntro.tsx",
    "components/pages/SitePage.tsx",
    "components/sections/MethodsSection.tsx",
    "components/sections/InvestigationCycleSection.tsx",
    "components/sections/InvestigationPracticeSection.tsx",
  ];
  for (const file of changedComponents) {
    const source = await fs.readFile(path.join(root, file), "utf8");
    assert(!source.includes('"use client"'), `${file}: Client Component novo`);
  }

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      routes: routes.length,
      singleH1: true,
      uniqueIds: true,
      sequentialHeadings: true,
      canonicalDefinitions: 10,
      protocolPhases: 4,
      traceEngineerStatusProtected: true,
      futureScopeProtected: true,
      newMethodRoutes: 0,
      newClientComponents: 0,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (output) console.error(output.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
