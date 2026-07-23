import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const configuredUrl = process.env.LAB_VERIFY_URL;
const port = process.env.LAB_VERIFY_PORT ?? "3212";
const targetUrl = configuredUrl ?? `http://127.0.0.1:${port}`;
const linkedRoutes = ["/payload-journey", "/method", "/investigation", "/cases", "/learn"];

let serverProcess;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function occurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

function assertOrdered(html, values, label) {
  let previous = -1;
  for (const value of values) {
    const current = html.indexOf(value);
    assert(current > previous, `${label} order is incorrect at ${value}`);
    previous = current;
  }
}

async function waitForSite() {
  const startedAt = Date.now();
  let lastError;
  while (Date.now() - startedAt < 60_000) {
    try {
      const response = await fetch(`${targetUrl}/lab`);
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`LAB did not become ready: ${lastError?.message ?? "unknown error"}`);
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
  const response = await fetch(`${targetUrl}/lab`);
  const html = await response.text();
  assert(response.status === 200, `/lab returned HTTP ${response.status}`);
  assert(occurrences(html, /<h1\b/g) === 1, "/lab must render exactly one h1");
  assert(
    /<h1\b[^>]*>\s*Um laboratório para investigar como sistemas realmente funcionam\s*<\/h1>/.test(html),
    "/lab must render the approved institutional h1",
  );

  const orderedIds = [
    "lab",
    "sobre",
    "mission",
    "principle",
    "origin",
    "how-the-lab-works",
    "human-ai",
    "founder",
    "current-state",
    "lab-construction",
    "pilot",
    "trace-engineer",
    "vision",
    "long-term-vision",
    "public-commitment",
  ];
  assertOrdered(html, orderedIds.map((id) => `id="${id}"`), "/lab narrative");

  const requirements = [
    "O Payload Journey LAB é um laboratório autoral de formação, pesquisa metodológica e investigação aplicada em sistemas de software.",
    "À medida que agentes de inteligência artificial aceleram a produção",
    "O Payload Journey LAB investiga se — e até que ponto —",
    "Esse benefício ainda está sendo investigado.",
    "Quando produzir ficou mais rápido do que compreender",
    "No desenvolvimento do HORA.city",
    "Transformar perda de compreensão em método",
    "A inteligência artificial participa da construção do LAB como assessoria técnica",
    "a responsabilidade sobre as conclusões permanecem humanas",
    "A IA deve ampliar a capacidade de compreensão dos engenheiros",
    "Valéria dos Santos Reiser",
    "criadora do Payload Journey LAB e da Universal System Modeling Template",
    "Este inventário apresenta somente elementos localizados no repositório",
    "Uma visão que já possui instrumentos, caso e conteúdo público",
    "Do método autoral a uma capacidade transferível",
    "Um horizonte inicial de seis meses",
    "O verdadeiro teste do piloto",
    "Evidência inicial de transferibilidade",
    "Piloto de capacidade transferível",
    "Uma função investigativa em desenvolvimento",
    "Não é profissão consolidada.",
    "Não é cargo reconhecido pelo mercado.",
    "Não é certificação oficial.",
    "Direção futura de pesquisa e formação",
    "Compreender antes de modificar",
    "Siga o payload. Encontre a causalidade. Recupere a compreensão.",
  ];
  for (const requirement of requirements) {
    assert(html.includes(requirement), `/lab is missing Sprint 2 invariant: ${requirement}`);
  }

  assertOrdered(
    html,
    ["Definir", "Formalizar", "Aplicar", "Evidenciar", "Ensinar", "Transferir"],
    "Pilot commitments",
  );
  const pilotHtml = html.slice(html.indexOf('id="pilot"'), html.indexOf('id="trace-engineer"'));
  for (const [title, status] of [
    ["Definir", "Evidência parcial"],
    ["Formalizar", "Evidência parcial"],
    ["Aplicar", "Em investigação"],
    ["Evidenciar", "Em construção"],
    ["Ensinar", "Evidência parcial"],
    ["Transferir", "Ainda não validado"],
  ]) {
    const titleIndex = pilotHtml.indexOf(`>${title}</h3>`);
    assert(titleIndex > -1, `Pilot commitment is missing: ${title}`);
    assert(
      pilotHtml.slice(Math.max(0, titleIndex - 700), titleIndex).includes(`>${status}</span>`),
      `${title} must render status ${status}`,
    );
  }
  for (const status of ["Evidência parcial", "Em investigação", "Em construção", "Ainda não validado"]) {
    assert(html.includes(status), `/lab is missing visible status: ${status}`);
  }
  assert(html.includes("uma pessoa externa"), "/lab must preserve the 1x1 initial transferability criterion");
  assert(html.includes("duas pessoas externas") && html.includes("duas investigações distintas"), "/lab must preserve the 2x2 transferable pilot criterion");

  const heroEnd = html.indexOf('id="mission"');
  const hero = html.slice(html.indexOf('id="lab"'), heroEnd);
  assert(hero.includes('href="/method"'), "/lab hero must link to /method");
  assert(hero.includes('href="/cases"'), "/lab hero must link to /cases");
  assert(!/udemy/i.test(hero), "/lab hero must not mention Udemy");
  for (const route of linkedRoutes) {
    assert(html.includes(`href="${route}"`), `/lab is missing continuation link ${route}`);
    const linkedResponse = await fetch(`${targetUrl}${route}`);
    assert(linkedResponse.status === 200, `${route} returned HTTP ${linkedResponse.status}`);
  }

  const metadataDescription = "Conheça a missão, a origem e a construção do Payload Journey LAB, um laboratório de formação, pesquisa metodológica e investigação aplicada em sistemas de software.";
  assert(html.includes(`content="${metadataDescription}"`), "/lab metadata description is not approved");
  assert(html.includes('rel="canonical" href="https://www.payloadjourneylab.com/lab"'), "/lab canonical is missing");
  assert(html.includes('"@type":"Person"'), "/lab JSON-LD must identify the founder as Person");
  assert(html.includes('"@id":"https://www.payloadjourneylab.com/lab#founder"'), "/lab founder JSON-LD id is missing");
  assert(!html.includes('"@type":"Organization"'), "/lab must not imply an Organization entity");

  const duplicateIds = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert(new Set(duplicateIds).size === duplicateIds.length, "/lab contains duplicate DOM ids");
  const headingLevels = [...html.matchAll(/<h([1-4])\b/g)].map((match) => Number(match[1]));
  assert(headingLevels[0] === 1, "/lab heading hierarchy must start at h1");
  for (let index = 1; index < headingLevels.length; index += 1) {
    assert(headingLevels[index] <= headingLevels[index - 1] + 1, `/lab heading hierarchy skips from h${headingLevels[index - 1]} to h${headingLevels[index]}`);
  }
  for (const anchor of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
    const accessibleText = anchor[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    assert(accessibleText.length > 0 || /aria-label="[^"]+"/.test(anchor[0]), "/lab contains an unnamed link");
  }

  for (const unsupportedArtifact of [
    "Case Brief",
    "Checkpoint Plan",
    "Freeze Record",
    "Detection Report",
    "Trace Evidence Record",
    "Trace Evidence Package",
    "USMT Evidence-Aligned",
  ]) {
    assert(!html.includes(unsupportedArtifact), `/lab presents an unlocated artifact as existing: ${unsupportedArtifact}`);
  }
  for (const prohibitedClaim of [
    /Trace Engineer é (?:uma )?profissão consolidada/i,
    /Trace Engineer é (?:um )?cargo reconhecido/i,
    /piloto (?:está|foi) concluído/i,
    /capacidade transferível (?:já |foi )?(?:existe|demonstrada|comprovada)/i,
    /garantia de (?:empregabilidade|produtividade|autonomia)/i,
    /especialização atual em .*mission-critical/i,
  ]) {
    assert(!prohibitedClaim.test(html), `/lab renders prohibited claim: ${prohibitedClaim}`);
  }

  const aboutRedirect = await fetch(`${targetUrl}/about`, { redirect: "manual" });
  assert(aboutRedirect.status === 308, `/about must return HTTP 308; received ${aboutRedirect.status}`);
  assert(aboutRedirect.headers.get("location") === "/lab#sobre", "/about must preserve /lab#sobre compatibility");

  console.log(JSON.stringify({
    result: "pass",
    url: `${targetUrl}/lab`,
    checks: {
      singleInstitutionalH1: true,
      orderedSections: orderedIds.length,
      visiblePilotCommitments: 6,
      commitmentStatusesProtected: true,
      transferabilityCriteria: ["1x1 initial evidence", "2x2 transferable pilot"],
      locatedArtifactsOnly: true,
      visibleStatuses: true,
      founderPersonJsonLd: true,
      continuationRoutes: linkedRoutes.length,
      compatibilityAnchors: ["sobre", "founder", "pilot"],
      prohibitedClaimsOmitted: true,
      headingHierarchy: true,
      namedLinks: true,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
