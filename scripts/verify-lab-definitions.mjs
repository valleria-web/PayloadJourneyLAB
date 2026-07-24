import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const configuredUrl = process.env.LAB_DEFINITIONS_VERIFY_URL;
const port = process.env.LAB_DEFINITIONS_VERIFY_PORT ?? "3218";
const origin = configuredUrl ?? `http://127.0.0.1:${port}`;
const route = "/lab-definitions";
const expectedMetadataDescription =
  "Definições oficiais de Software Engineering, sistema, operação, caminho, payload, Payload Journey, tracing, Trace Engineering, Trace Engineer, compreensão, decisão e evidência utilizadas pelo Payload Journey LAB.";
const definitionIds = [
  "software",
  "software-engineering",
  "sistema",
  "caminho",
  "intencao",
  "expectativa",
  "operacao",
  "payload",
  "significado-operacional",
  "payload-journey",
  "tracing",
  "trace-engineering",
  "trace-engineer",
  "compreensao",
  "o-que-o-software-faz",
  "por-que-o-software-faz",
  "onde-o-software-decide",
  "decisao",
  "estado",
  "evidencia",
  "flow",
];
let server;
let serverOutput = "";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function occurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

async function waitForSite() {
  for (let attempt = 0; attempt < 240; attempt += 1) {
    try {
      if ((await fetch(origin)).ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("Servidor de LAB Definitions não ficou disponível");
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
    server.stdout.on("data", (chunk) => (serverOutput += chunk.toString()));
    server.stderr.on("data", (chunk) => (serverOutput += chunk.toString()));
  }

  await waitForSite();
  const [homeResponse, pageResponse, sitemapResponse] = await Promise.all([
    fetch(origin),
    fetch(`${origin}${route}`),
    fetch(`${origin}/sitemap.xml`),
  ]);
  const [home, page, sitemap] = await Promise.all([
    homeResponse.text(),
    pageResponse.text(),
    sitemapResponse.text(),
  ]);

  assert(homeResponse.status === 200, `Homepage: HTTP ${homeResponse.status}`);
  assert(pageResponse.status === 200, `${route}: HTTP ${pageResponse.status}`);
  assert(occurrences(page, /<h1\b/g) === 1, `${route}: deve existir exactamente um H1`);
  assert(/<h1\b[^>]*>\s*LAB Definitions\s*<\/h1>/.test(page), `${route}: H1 incorreto`);
  assert(
    page.includes(`name="description" content="${expectedMetadataDescription}"`),
    `${route}: metadata description incorreta`,
  );
  assert(
    page.includes('rel="canonical" href="https://www.payloadjourneylab.com/lab-definitions"'),
    `${route}: canonical ausente`,
  );
  assert(page.includes('"@type":"WebPage"'), `${route}: WebPage JSON-LD ausente`);
  assert(page.includes('"@type":"Organization"'), `${route}: Organization JSON-LD ausente`);

  const proposalIndex = home.indexOf('id="proposal"');
  const definitionsIndex = home.indexOf('id="lab-definitions"');
  const demoIndex = home.indexOf('id="demo"');
  assert(
    proposalIndex > -1 && definitionsIndex > proposalIndex && demoIndex > definitionsIndex,
    "Homepage: LAB Definitions deve ficar entre proposta e demo",
  );
  const homeDefinitions = home.slice(definitionsIndex, demoIndex);
  assert(occurrences(homeDefinitions, /<dt\b/g) === 6, "Homepage: devem existir seis definições breves");
  assert(homeDefinitions.includes('href="/lab-definitions"'), "Homepage: CTA para LAB Definitions ausente");
  for (const title of [
    "Software Engineering",
    "Sistema",
    "Caminho",
    "Payload",
    "Trace Engineering",
    "Compreensão",
  ]) {
    assert(homeDefinitions.includes(`>${title}</dt>`), `Homepage: definição breve ausente — ${title}`);
  }

  for (const id of definitionIds) {
    assert(page.includes(`id="definition-${id}"`), `${route}: definição ausente — ${id}`);
  }
  assert(
    occurrences(page, /id="definition-[^"]+"/g) === definitionIds.length,
    `${route}: quantidade de definições divergente`,
  );
  assert(definitionIds.length === 21, `${route}: devem existir 21 definições completas`);
  const expectationIndex = page.indexOf('id="definition-expectativa"');
  const operationIndex = page.indexOf('id="definition-operacao"');
  const payloadIndex = page.indexOf('id="definition-payload"');
  assert(
    expectationIndex > -1 &&
      operationIndex > expectationIndex &&
      payloadIndex > operationIndex,
    `${route}: Operação deve ficar depois de Expectativa e antes de Payload`,
  );
  const operationDefinition = page.slice(operationIndex, payloadIndex);
  assert(
    operationDefinition.includes(
      "A operação é a unidade causal completa que liga uma origem a um resultado",
    ),
    `${route}: unidade causal de Operação ausente`,
  );
  assert(
    operationDefinition.includes("Operação não é payload") &&
      page.includes("O payload representa partes da operação; não é a operação completa"),
    `${route}: distinção entre Operação e Payload ausente`,
  );
  assert(
    operationDefinition.includes(
      "Uma mesma operação pode produzir e consumir vários payloads enquanto atravessa o sistema",
    ),
    `${route}: multiplicidade de payloads da Operação ausente`,
  );
  assert(
    operationDefinition.includes("No modelo esperado do HORA.city") &&
      operationDefinition.includes("Como exemplo conceptual") &&
      operationDefinition.includes("O tracing da codebase real deverá verificar"),
    `${route}: Create/Join não está qualificado dentro de Operação`,
  );
  assert(
    homeDefinitions.includes(
      "o runtime e os mecanismos de transporte tornam a sua travessia efectiva",
    ),
    "Homepage: definição breve de Sistema não inclui runtime e transporte",
  );
  for (const systemRequirement of [
    "permite que operações sejam recebidas, executadas, transportadas, decididas, persistidas e apresentadas",
    "ambiente operacional formado por runtime, memória, sistema operativo, processos, rede",
    "devem ser considerados sempre que participem causalmente da execução",
    "O payload não se transporta sozinho.",
    "O runtime torna a travessia executável.",
    "Os componentes dão estrutura e responsabilidade à operação; o runtime e os mecanismos de transporte tornam a travessia efectiva.",
  ]) {
    assert(
      page.includes(systemRequirement),
      `${route}: precisão de Sistema ausente — ${systemRequirement}`,
    );
  }
  for (const semanticRequirement of [
    "O payload é uma representação operacional produzida, transportada ou transformada durante a execução de uma operação.",
    "Uma mesma operação pode produzir e consumir diferentes payloads enquanto atravessa o sistema.",
    "Um caminho é a sequência percorrida por uma operação dentro de um sistema.",
    "Payload Journey é a jornada observável de uma operação através dos payloads, componentes, boundaries, estados, regras e decisões",
    "Tracing é o acto de seguir e reconstruir uma operação concreta durante a sua execução.",
    "correlaciona as diferentes representações e verifica a continuidade causal, semântica e temporal da operação",
    "É reconstruir uma operação completa entre a sua origem e o seu resultado",
    "Uma evidência isolada representa um ponto da operação; um conjunto de evidências causalmente conectado permite reconstruí-la.",
    "A operação é a unidade causal completa que liga origem e resultado.",
    "O payload representa partes da operação. O tracing reconstrói a operação completa.",
    "A expectativa descreve o comportamento que deveria acontecer.",
    "A Trace Engineering acompanha, reconstrói e verifica a operação entre a sua origem e o seu resultado.",
  ]) {
    assert(
      page.includes(semanticRequirement),
      `${route}: integração semântica de Operação ausente — ${semanticRequirement}`,
    );
  }
  assert(page.includes("Trace Engineering é a prática sistemática"), `${route}: definição canónica de Trace Engineering ausente`);
  assert(!page.includes("Tracing Engineering"), `${route}: nome não canónico Tracing Engineering exposto`);
  assert(
    page.includes("Trace Engineer é uma função e um perfil investigativo em desenvolvimento"),
    `${route}: estado de Trace Engineer ausente`,
  );
  assert(!page.includes("Trace Engineer é o profissional"), `${route}: Trace Engineer apresentado como profissão`);
  for (const qualifier of [
    "No modelo esperado do HORA.city",
    "Como exemplo conceptual",
    "O tracing da codebase real deverá identificar",
  ]) {
    assert(page.includes(qualifier), `${route}: qualificador de HORA.city ausente — ${qualifier}`);
  }
  assert(!page.includes("Actualmente o domínio decide Create ou Join"), `${route}: claim actual não confirmado`);
  assert(!page.includes("Join já ocorre dentro do raio de 30 metros"), `${route}: claim de distância não confirmado`);

  for (const id of [
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
  ]) {
    assert(home.includes(`id="${id}"`), `Homepage: secção anterior removida — ${id}`);
  }

  assert(page.includes('aria-current="page"') && page.includes(">LAB</a>"), `${route}: área LAB não está activa`);
  assert(page.includes('href="/"'), `${route}: retorno à homepage ausente`);
  assert(home.includes('href="/lab-definitions"'), "Footer/homepage: rota não descobrível");
  assert(sitemapResponse.status === 200, `Sitemap: HTTP ${sitemapResponse.status}`);
  assert(
    sitemap.includes("https://www.payloadjourneylab.com/lab-definitions"),
    "Sitemap: LAB Definitions ausente",
  );

  const ids = [...page.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert(ids.length === new Set(ids).size, `${route}: IDs duplicados`);
  const headings = [...page.matchAll(/<h([1-4])\b/g)].map((match) => Number(match[1]));
  for (let index = 1; index < headings.length; index += 1) {
    assert(headings[index] <= headings[index - 1] + 1, `${route}: salto de heading`);
  }

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      homepageDefinitions: 6,
      fullDefinitions: definitionIds.length,
      operationPosition: "expectativa -> operacao -> payload",
      operationIsCompleteCausalUnit: true,
      operationPayloadDistinction: true,
      operationSupportsMultiplePayloads: true,
      homepagePosition: "proposal -> lab-definitions -> demo",
      canonicalTerm: "Trace Engineering",
      traceEngineerProfessionalClaim: false,
      horaCityExamplesQualified: true,
      systemIncludesRuntimeAndOperationalEnvironment: true,
      payloadTransportMechanismsExplicit: true,
      canonicalMetadata: true,
      sitemapEntry: true,
      activeArea: "LAB",
      existingHomepageSectionsPreserved: 11,
      serverRendered: true,
      uniqueIds: true,
      headingHierarchy: true,
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  if (serverOutput) console.error(serverOutput.trim());
  process.exitCode = 1;
} finally {
  await stopServer();
}
