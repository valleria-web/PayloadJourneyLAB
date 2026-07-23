import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configuredUrl = process.env.CASES_EVIDENCE_VERIFY_URL;
const port = process.env.CASES_EVIDENCE_VERIFY_PORT ?? "3215";
const origin = configuredUrl ?? `http://127.0.0.1:${port}`;
const canonicalOrigin = "https://www.payloadjourneylab.com";
const routes = ["/cases", "/lablog"];
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
    const headings = [...html.matchAll(/<h([1-4])\b/g)].map((match) => Number(match[1]));
    for (let index = 1; index < headings.length; index += 1) {
      assert(headings[index] <= headings[index - 1] + 1, `${route}: salto de heading`);
    }
    assert(html.includes(`<link rel="canonical" href="${canonicalOrigin}${route}"/>`), `${route}: canonical ausente`);
    assert(html.includes('property="og:url"'), `${route}: OG URL ausente`);
    assert(html.includes('name="twitter:card"'), `${route}: Twitter metadata ausente`);
    assert(!/[A-Z]:\\(?:Users|Documents|Desktop)\\/i.test(html), `${route}: path local exposto`);
    assert(!/file:\/\//i.test(html), `${route}: URI local exposta`);
    assert(!/(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[=:]\s*["'][^"']+/i.test(html), `${route}: padrão de segredo exposto`);
    pages.set(route, html);
  }

  const cases = pages.get("/cases");
  for (const text of [
    "Investigações reais, conclusões proporcionais às evidências",
    "Não demonstra automaticamente eficácia geral, transferibilidade ou validade universal.",
    "Um caso localizado, sem simular escala",
    "RPJ-HORA-001",
    "Em mapeamento",
    "Fatos confirmados",
    "Hipóteses",
    "Desconhecidos",
    "Limitações do caso",
    "Fontes documentais localizadas; artefatos técnicos ainda ausentes",
    "Cronologia pública ainda não localizada",
    "0 marcos públicos datados",
    "Conclusões autorizadas",
    "Conclusões não autorizadas",
    "Restauração",
    "Não localizada",
    "Ainda não validada",
  ]) assert(cases.includes(text), `/cases: conteúdo ausente — ${text}`);
  assert((cases.match(/id="case-record-rpj-hora-001"/g) ?? []).length === 1, "/cases: registro deve conter exatamente um caso");
  ordered(cases, [
    'id="case-reading-guide"',
    'id="case-registry"',
    'id="case-hora-city"',
    'id="case-evidence"',
    'id="case-timeline"',
    'id="case-conclusions"',
  ], "/cases");
  for (const destination of ["/lablog", "/method", "/protocol", "/investigation", "/learn"]) {
    assert(cases.includes(`href="${destination}"`), `/cases: link ausente — ${destination}`);
  }

  const lablog = pages.get("/lablog");
  for (const text of [
    "A investigação enquanto acontece",
    "Um registro datado, não um caso completo",
    "Nenhuma entrada estruturada foi localizada",
    "0 entradas publicadas",
    "Não há entradas para apresentar.",
    "O caso mostra o conjunto da investigação. O LabLog preserva como ela evoluiu no tempo.",
    "Responsabilidade humana permanece explícita",
    "canal de YouTube permanece oculto enquanto os dois destinos localizados não possuem decisão canônica",
  ]) assert(lablog.includes(text), `/lablog: conteúdo ausente — ${text}`);
  assert(!/<article\b/i.test(lablog), "/lablog: entrada não localizada foi renderizada");
  ordered(lablog, [
    'id="lablog-guide"',
    'id="lablog-inventory"',
    'id="lablog-case-relation"',
    'id="lablog-provenance"',
  ], "/lablog");
  for (const destination of ["/cases", "/method", "/protocol", "/learn", "/lab"]) {
    assert(lablog.includes(`href="${destination}"`), `/lablog: link ausente — ${destination}`);
  }

  const source = await fs.readFile(path.join(root, "content", "cases.ts"), "utf8");
  assert(source.includes("export const labLogEntries = []"), "Fonte deve preservar zero entradas LabLog");
  assert(!source.includes("Restauração validada\",") && source.includes('validation: "Ainda não validada"'), "Fonte não pode declarar restauração validada");
  assert(source.includes("não constituem evidência externa") || source.includes("não constitui evidência externa"), "Fonte deve negar evidência externa");

  const appEntries = (await fs.readdir(path.join(root, "app"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  for (const forbidden of ["case", "case-study", "hora-city", "lablogs"]) {
    assert(!appEntries.includes(forbidden), `Nova rota de caso não autorizada: /${forbidden}`);
  }

  const serverFiles = [
    "components/sections/CasesPageSections.tsx",
    "components/sections/LabLogPageSections.tsx",
    "app/cases/page.tsx",
    "app/lablog/page.tsx",
  ];
  for (const file of serverFiles) {
    const fileSource = await fs.readFile(path.join(root, file), "utf8");
    assert(!fileSource.includes('"use client"'), `${file}: Client Component novo`);
  }

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      routes: routes.length,
      publishedCases: 1,
      locatedDocumentarySources: 2,
      publishedTechnicalArtifacts: 0,
      publishedLabLogEntries: 0,
      uniqueIds: true,
      sequentialHeadings: true,
      localPathsExposed: 0,
      sensitivePatternsExposed: 0,
      newCaseRoutes: 0,
      newClientComponents: 0,
      applicationSeparatedFromEfficacy: true,
      externalEvidenceClaimed: false,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (output) console.error(output.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
