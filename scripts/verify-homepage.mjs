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
    "procedimento",
    "pratica-investigativa",
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
    "Comece a aprender Payload Tracing",
    "Payload Journey LAB: Siga o flow, entenda o sistema",
    "Entrar na formação",
    "Rever a trilha",
    "Veja o Payload Tracing aplicado numa codebase real",
    "Da aprendizagem à investigação aplicada",
    "Flow selecionado",
    "Caso documentado como investigação aplicada do LAB.",
    "Acompanhar o caso no LabLog",
    "Rever o flow",
    "Procedimento investigativo",
    "Congelar, Mapear, Detectar e Restaurar",
    "Qual comportamento precisa ser preservado antes de qualquer alteração?",
    "Por onde o payload realmente atravessa o sistema?",
    "Em que ponto o comportamento observado diverge do esperado ou do modelo?",
    "Que autoridade, regra ou comportamento precisa ser corrigido e validado?",
    "registro da divergência detectada",
    "validação do comportamento restaurado",
    "Métodos e instrumentos",
    "Cada método responde a uma pergunta diferente",
    "O procedimento define a sequência investigativa.",
    "Prática investigativa",
    "Da observação à restauração",
    "Função investigativa proposta e desenvolvida pelo LAB.",
    "Prática organizada e desenvolvida no contexto do Payload Journey LAB.",
    "Conhecer o LAB",
    "O LAB",
    "Um ecossistema para compreender sistemas",
    "HORA.city",
    "LabLog",
    "Sobre o Payload Journey LAB",
    "Primeiro círculo de estudantes do LAB",
    "Payload Journey",
    "USMT",
    "Reverse Payload Journey",
    "Operational Payload Path",
    "Track to Origin",
    "HeartCreated",
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
    html.includes('href="#formacao"') && html.includes("Começar pela formação"),
    "Demo CTA must point to #formacao",
  );

  const orderedSectionIds = [
    "aprender",
    "competencias",
    "trilha",
    "demo",
    "formacao",
    "case-study",
    "procedimento",
    "metodos",
    "pratica-investigativa",
    "lab",
    "ecossistema",
    "lablog",
    "sobre",
  ];
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

  const procedureIds = ["freeze", "map", "detect", "restore"];
  let previousProcedureIndex = -1;
  for (const id of procedureIds) {
    const idIndex = html.indexOf(`id="${id}"`);
    assert(idIndex > previousProcedureIndex, `Investigation procedure order is incorrect at: ${id}`);
    previousProcedureIndex = idIndex;
  }
  assert(
    html.includes("Confronte evidências produzidas nos checkpoints") &&
      html.includes("Uma divergência sustentada por evidências, não apenas uma hipótese."),
    "Detect must be defined through evidence confrontation rather than random debugging",
  );
  assert(
    html.includes("percorra novamente o flow para validar o resultado") &&
      html.includes("validado através do mesmo flow investigado"),
    "Restore must include validation through the investigated flow",
  );

  const methodDomIds = [
    "method-payload-journey",
    "method-usmt",
    "method-reverse-payload-journey",
    "method-operational-payload-path",
    "method-track-to-origin",
  ];
  let previousMethodIndex = -1;
  for (const id of methodDomIds) {
    const idIndex = html.indexOf(`id="${id}"`);
    assert(idIndex > previousMethodIndex, `Methods order is incorrect at: ${id}`);
    previousMethodIndex = idIndex;
  }
  assert(
    occurrences(html, /Relação com o procedimento/g) >= 5,
    "Every method must expose its textual relationship with the procedure",
  );
  assert(
    occurrences(html, /Pergunta respondida/g) >= 5 && occurrences(html, /Quando utilizar/g) >= 5,
    "Every method must expose its question and usage context",
  );
  assert(
    !html.includes("Phenomenon description") && !html.includes("State Enumeration"),
    "The complete twelve-element USMT must remain outside the homepage",
  );
  assert(
    !/única (?:linha|arquivo)|uma linha única|um arquivo único/i.test(html),
    "Track to Origin must not promise a single line or file",
  );

  for (const id of [
    "practice-track-mode",
    "practice-trace-engineer",
    "practice-software-system-investigation",
  ]) {
    assert(html.includes(`id="${id}"`), `Missing investigative practice block: ${id}`);
  }
  assert(
    html.includes("Evidência") && html.includes("Autoridade") && html.includes("Restauração"),
    "Investigative practice must expose evidence, authority, and restoration",
  );
  assert(
    html.includes('href="#lab"') && html.includes("Conhecer o LAB"),
    "Investigative practice CTA must point to the existing #lab anchor",
  );

  const caseSectionIds = [
    "case-context",
    "case-anomaly",
    "case-selected-flow",
    "case-payload",
    "case-investigation",
    "case-evidence",
    "case-current-status",
  ];
  let previousCaseIndex = -1;
  for (const id of caseSectionIds) {
    const idIndex = html.indexOf(`id="${id}"`);
    assert(idIndex > previousCaseIndex, `HORA.city public narrative order is incorrect at: ${id}`);
    previousCaseIndex = idIndex;
  }

  assert(
    html.includes('href="#trilha"') && html.includes("Rever a trilha"),
    "Training secondary CTA must point to #trilha",
  );
  assert(
    html.includes('href="#lablog"') && html.includes("Acompanhar o caso no LabLog"),
    "Case primary CTA must point to the existing #lablog anchor",
  );
  assert(
    html.includes('href="#demo"') && html.includes("Rever o flow"),
    "Case secondary CTA must point to #demo",
  );
  assert(
    !/Send Heart|create\/join|informação não disponível/i.test(html),
    "The public case narrative must omit unconfirmed technical names and empty-field messages",
  );
  assert(
    !/certifica(?:do|ção)|Practitioner|Expert/i.test(html),
    "The fundamental training must not introduce nonexistent certification language",
  );
  assert(
    !/profissão reconhecida|cargo padronizado|standard externo|disciplina formalmente padronizada/i.test(
      html,
    ),
    "Investigative practice must not claim external recognition or standardization",
  );

  const renderedIdList = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  const renderedIds = new Set(renderedIdList);
  assert(
    renderedIds.size === renderedIdList.length,
    "Every rendered DOM id must be unique across the homepage",
  );
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
    canonicalSource.includes('sourceStrategy: "shared-confirmed-facts"'),
    "HORA.city public narrative must declare its shared confirmed facts strategy",
  );
  assert(
    canonicalSource.includes('anomaly: "createdAt incorreto"') &&
      canonicalSource.includes('payload: "HeartCreated"'),
    "The historical HORA.city anomaly and payload facts must remain preserved in source",
  );
  assert(
    canonicalSource.includes('historicalLabel: trainingContent.name') &&
      canonicalSource.includes('name: "Formação Beta na Udemy"'),
    "The historical training label must remain separately preserved",
  );
  const auditedVariantCopy =
    "O HORA.city é um sistema geolocalizado utilizado pelo Payload Journey LAB como caso real de investigação aplicada. Após uma expansão acelerada com agentes de IA, o sistema passou de aproximadamente 6 mil para 40 mil linhas de código e perdeu parte de sua observabilidade estrutural.";
  const renderedVariantCopy =
    "O HORA.city é um caso real de investigação aplicada no Payload Journey LAB, marcado por uma expansão acelerada e por perda de observabilidade estrutural.";
  assert(
    canonicalSource.includes(auditedVariantCopy) && canonicalSource.includes(renderedVariantCopy),
    "Both complete HORA.city editorial variants must remain in the server-side source",
  );
  assert(
    !html.includes(auditedVariantCopy) && !html.includes(renderedVariantCopy),
    "Complete HORA.city editorial variants must not be rendered in the public HTML",
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
          operationalRolesExplicit: 7,
          pedagogicalDemoDisclosure: true,
          trainingAndCaseOrderProtected: true,
          trainingPresentationProtected: true,
          casePublicNarrativeSections: caseSectionIds.length,
          caseSharedFactsStrategyProtected: true,
          completeEditorialVariantsExcludedFromHtml: true,
          unconfirmedCaseFactsOmitted: true,
          investigationProcedureSteps: procedureIds.length,
          investigationMethods: methodDomIds.length,
          investigativePracticeBlocks: 3,
          uniqueDomIds: renderedIds.size,
          methodProcedureRelationshipsTextual: true,
          externalRecognitionClaimsRejected: true,
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
