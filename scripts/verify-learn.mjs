import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");
const configuredUrl = process.env.LEARN_VERIFY_URL;
const port = process.env.LEARN_VERIFY_PORT ?? "3214";
const targetUrl = configuredUrl ?? `http://127.0.0.1:${port}`;
const internalRoutes = ["/payload-journey", "/usmt", "/method", "/protocol", "/cases"];

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
      const response = await fetch(`${targetUrl}/learn`);
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`/learn did not become ready: ${lastError?.message ?? "unknown error"}`);
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
    serverProcess.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    serverProcess.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const response = await fetch(`${targetUrl}/learn`);
  const html = await response.text();

  assert(response.status === 200, `/learn returned HTTP ${response.status}`);
  assert(occurrences(html, /<h1\b/g) === 1, "/learn must render exactly one h1");
  assert(
    /<h1\b[^>]*>\s*Começar por um payload\. Avançar para o sistema\.\s*<\/h1>/.test(html),
    "/learn must render the approved pedagogical h1",
  );

  const orderedIds = [
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
  ];
  assertOrdered(html, orderedIds.map((id) => `id="${id}"`), "/learn narrative");

  const flowHtml = html.slice(
    html.indexOf('id="aprender-por-flow"'),
    html.indexOf('id="progressao"'),
  );
  assertOrdered(
    flowHtml,
    [
      "intenção ou ocorrência",
      "evento",
      "payload",
      "interpretação",
      "decisão",
      "estado",
      "efeito observável",
    ],
    "Investigative chain",
  );

  for (const [title, status] of [
    ["Uma operação concreta", "Conteúdo disponível"],
    ["Flow entre camadas", "Conteúdo disponível"],
    ["Investigação estruturada", "Documentado"],
    ["Sistemas complexos", "Aprofundamento em construção"],
    ["Requisitos e sistemas críticos", "Direção futura de pesquisa e formação"],
  ]) {
    const levelIndex = html.indexOf(`>${title}</h3>`);
    assert(levelIndex > -1, `/learn is missing level ${title}`);
    assert(
      html.slice(Math.max(0, levelIndex - 900), levelIndex).includes(`>${status}</span>`),
      `${title} must render status ${status}`,
    );
  }

  for (const requirement of [
    "O método não pensa pelo estudante.",
    "ler código",
    "compreender arquitetura",
    "observar runtime",
    "documentar conclusões",
    "Payload Journey e Software System Investigation não substituem os fundamentos",
    "A arquitetura mostra responsabilidades.",
    "Observabilidade oferece sinais.",
    "O que já pode orientar a aprendizagem",
    "Seis passos possíveis para começar",
    "Curso beta como canal de aprofundamento",
    "não representa formação profissional concluída",
    "HORA.city é um caso real em investigação",
    "O LAB não presume que um método é eficaz apenas porque foi criado",
  ]) {
    assert(html.includes(requirement), `/learn is missing Sprint 3 invariant: ${requirement}`);
  }

  const hero = html.slice(html.indexOf('id="aprender"'), html.indexOf('id="aprender-por-flow"'));
  assert(hero.includes('href="/payload-journey"'), "/learn hero must link to Payload Journey");
  assert(hero.includes('href="/cases"'), "/learn hero must link to HORA.city");
  assert(!/udemy/i.test(hero), "/learn hero must not mention Udemy");

  const courseIndex = html.indexOf('id="formacao"');
  const progressionIndex = html.indexOf('id="progressao"');
  assert(courseIndex > progressionIndex, "Udemy must remain subordinate to the pedagogical progression");
  assert(
    html.slice(courseIndex).includes("https://www.udemy.com/course/"),
    "/learn course section must preserve the configured external channel",
  );

  for (const route of internalRoutes) {
    assert(html.includes(`href="${route}"`), `/learn is missing internal destination ${route}`);
    const linkedResponse = await fetch(`${targetUrl}${route}`);
    assert(linkedResponse.status === 200, `${route} returned HTTP ${linkedResponse.status}`);
  }

  const metadataDescription =
    "Aprenda progressivamente a seguir flows, payloads, decisões e evidências de runtime, do primeiro evento à investigação estruturada de sistemas de software.";
  assert(
    html.includes(`content="${metadataDescription}"`),
    "/learn metadata description is not approved",
  );
  assert(
    html.includes('rel="canonical" href="https://www.payloadjourneylab.com/learn"'),
    "/learn canonical is missing",
  );
  assert(html.includes('"@type":"Organization"'), "/learn must identify the LAB organization");
  assert(html.includes("https://www.youtube.com/@PayloadJourneyLAB"), "/learn must expose the official YouTube channel");
  assert(!html.includes("https://www.youtube.com/@Lab-Log"), "/learn must not expose the alternate YouTube channel");
  assert(!html.includes('href="/lablog"'), "/learn must not link to hidden LabLog");

  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert(new Set(ids).size === ids.length, "/learn contains duplicate DOM ids");
  const headingLevels = [...html.matchAll(/<h([1-4])\b/g)].map((match) => Number(match[1]));
  assert(headingLevels[0] === 1, "/learn heading hierarchy must start at h1");
  for (let index = 1; index < headingLevels.length; index += 1) {
    assert(
      headingLevels[index] <= headingLevels[index - 1] + 1,
      `/learn heading hierarchy skips from h${headingLevels[index - 1]} to h${headingLevels[index]}`,
    );
  }
  for (const anchor of html.matchAll(/<a\b[^>]*>([\s\S]*?)<\/a>/g)) {
    const accessibleText = anchor[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    assert(
      accessibleText.length > 0 || /aria-label="[^"]+"/.test(anchor[0]),
      "/learn contains an unnamed link",
    );
  }

  for (const prohibitedClaim of [
    /reduz comprovadamente (?:o )?onboarding/i,
    /acelera comprovadamente (?:a )?aprendizagem/i,
    /aumenta (?:a )?empregabilidade/i,
    /transforma (?:um )?juniors? em seniors?/i,
    /método universal/i,
    /transferibilidade (?:já )?(?:comprovada|demonstrada)/i,
    /formação mission-critical (?:disponível|validada|completa)/i,
    /substitui (?:a )?(?:arquitetura|formação fundamental)/i,
    /torna a compreensão fácil/i,
  ]) {
    assert(!prohibitedClaim.test(html), `/learn renders prohibited claim: ${prohibitedClaim}`);
  }

  console.log(
    JSON.stringify(
      {
        result: "pass",
        url: `${targetUrl}/learn`,
        checks: {
          singlePedagogicalH1: true,
          orderedSections: orderedIds.length,
          pedagogicalLevels: 5,
          presentConstructionFutureSeparated: true,
          effortExplicit: true,
          foundationsComplementary: true,
          availableContentLocated: true,
          internalRoutes: internalRoutes.length,
          udemySecondary: true,
          horaCityInvestigativeStatus: true,
          pedagogicalEvidenceSeparated: true,
          prohibitedClaimsOmitted: true,
          headingHierarchy: true,
          namedLinks: true,
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
