import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sprintRoot = path.join(root, "docs", "sprints para v3");
const runRefactorVerifier = process.env.CYCLE_CLOSURE_SKIP_REFACTOR !== "1";
const canonicalRoutes = [
  "",
  "payload-journey",
  "learn",
  "cases",
  "usmt",
  "method",
  "protocol",
  "investigation",
  "lab-definitions",
  "lab",
  "ecosystem",
  "lablog",
];
const requiredDocuments = [
  "Sprint 0 - Contrato Editorial e Mapa de Preservacao e Migracao.md",
  "Sprint 1 - Homepage.md",
  "Sprint 2 - LAB.md",
  "Sprint 3 - Formacao e Progressao Pedagogica.md",
  "Sprint 4 - Metodo e Pratica Investigativa.md",
  "Sprint 5 - Casos Evidencias e Proveniencia.md",
  "Sprint 6 - Navegacao Canais e Descoberta.md",
  "Sprint 7 - Metadata Structured Data e Validacao Final.md",
  "Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md",
  "README.md",
  "decisoes humanas.md",
];
const requiredSpecifications = Array.from(
  { length: 9 },
  (_, sprint) => `sprint ${sprint}.md`,
);
const locatedDedicatedPlans = [
  "plano-sprint2.md",
  "plano-sprint4.md",
  "plano-sprint5.md",
  "plano-sprint6.md",
  "plano-sprint7.md",
  "plano-sprint8.md",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function exists(relativePath) {
  return Boolean(await fs.stat(path.join(root, relativePath)).catch(() => null));
}

function runCommand(command, args, env = {}) {
  return new Promise((resolve, reject) => {
    const startedAt = Date.now();
    const child = spawn(command, args, {
      cwd: root,
      env: { ...process.env, ...env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`${command} ${args.join(" ")} falhou com código ${code}`));
        return;
      }
      resolve(Date.now() - startedAt);
    });
  });
}

try {
  let refactorVerifierDurationMs = null;
  if (runRefactorVerifier) {
    const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
    refactorVerifierDurationMs = await runCommand(
      npmCommand,
      ["run", "verify:refactor-v3"],
      { REFACTOR_V3_SKIP_CHILDREN: "1" },
    );
  }

  for (const document of requiredDocuments) {
    assert(
      await exists(path.join("docs", "sprints para v3", document)),
      `Documento obrigatório ausente: ${document}`,
    );
  }
  for (const specification of requiredSpecifications) {
    assert(
      await exists(path.join("docs", "sprints para v3", specification)),
      `Especificação obrigatória ausente: ${specification}`,
    );
  }
  for (const plan of locatedDedicatedPlans) {
    assert(
      await exists(path.join("docs", "sprints para v3", plan)),
      `Plano aprovado localizado deixou de existir: ${plan}`,
    );
  }

  const sprintIndex = await fs.readFile(path.join(sprintRoot, "README.md"), "utf8");
  for (let sprint = 0; sprint <= 8; sprint += 1) {
    assert(
      sprintIndex.includes(`Sprint ${sprint}`),
      `Índice não referencia a Sprint ${sprint}`,
    );
  }

  const finalDocument = await fs.readFile(
    path.join(
      sprintRoot,
      "Sprint 8 - Encerramento do Ciclo Release Candidate e Handoff.md",
    ),
    "utf8",
  );
  assert(
    finalDocument.includes("Release candidate preparada"),
    "Documento final não declara o estado da release candidate",
  );
  assert(
    finalDocument.includes("validação pública") &&
      finalDocument.includes("pendente"),
    "Documento final não preserva a validação pública como pendente",
  );
  assert(
    finalDocument.includes("nenhuma Sprint 9"),
    "Documento final não protege explicitamente contra Sprint 9",
  );

  const appEntries = (await fs.readdir(path.join(root, "app"), { withFileTypes: true }))
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("_"))
    .map((entry) => entry.name)
    .sort();
  const expectedAppEntries = [
    "about",
    ...canonicalRoutes.filter(Boolean),
  ].sort();
  assert(
    JSON.stringify(appEntries) === JSON.stringify(expectedAppEntries),
    `Diretórios de rota divergentes: ${appEntries.join(", ")}`,
  );

  const temporaryItems = await fs.readdir(path.join(root, ".tmp")).catch(() => []);
  assert(
    temporaryItems.length === 0,
    `.tmp contém artefatos não autorizados: ${temporaryItems.join(", ")}`,
  );
  const gitignore = await fs.readFile(path.join(root, ".gitignore"), "utf8");
  assert(
    gitignore.split(/\r?\n/).includes(".tmp/"),
    ".tmp/ não está protegido por .gitignore",
  );

  const packageJson = JSON.parse(
    await fs.readFile(path.join(root, "package.json"), "utf8"),
  );
  assert(
    packageJson.scripts["verify:refactor-v3"],
    "verify:refactor-v3 ausente",
  );
  assert(
    packageJson.scripts["verify:cycle-closure"],
    "verify:cycle-closure ausente",
  );
  assert(
    Object.keys(packageJson.dependencies).length === 4,
    "Dependência de runtime adicionada",
  );
  assert(
    Object.keys(packageJson.devDependencies).length === 8,
    "Dependência de desenvolvimento adicionada",
  );

  const sprintFiles = await fs.readdir(sprintRoot);
  assert(
    !sprintFiles.some((name) => /sprint[\s-]*9/i.test(name)),
    "Artefato da Sprint 9 localizado",
  );

  const publicRoots = ["app", "components", "config", "content", "lib", "public"];
  const sensitivePathPattern =
    /(?:[A-Z]:\\(?:Users|Documents|Desktop)\\|\/Users\/|file:\/\/|localhost|127\.0\.0\.1)/i;
  const sourceExtensions = new Set([
    ".css",
    ".html",
    ".js",
    ".json",
    ".jsx",
    ".md",
    ".mjs",
    ".svg",
    ".ts",
    ".tsx",
    ".txt",
    ".xml",
  ]);
  const exposedPaths = [];

  async function scanDirectory(directory) {
    const entries = await fs.readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const absolutePath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await scanDirectory(absolutePath);
        continue;
      }
      if (!sourceExtensions.has(path.extname(entry.name).toLowerCase())) continue;
      const content = await fs.readFile(absolutePath, "utf8");
      if (sensitivePathPattern.test(content)) {
        exposedPaths.push(path.relative(root, absolutePath));
      }
    }
  }

  for (const publicRoot of publicRoots) {
    await scanDirectory(path.join(root, publicRoot));
  }
  assert(
    exposedPaths.length === 0,
    `Path local ou localhost em superfície pública: ${exposedPaths.join(", ")}`,
  );

  console.log(JSON.stringify({
    result: "pass",
    checks: {
      refactorVerifier:
        refactorVerifierDurationMs === null
          ? "skipped-by-explicit-env"
          : { result: "pass", durationMs: refactorVerifierDurationMs },
      canonicalRoutes: canonicalRoutes.length,
      routeDirectories: appEntries.length,
      finalDocuments: 9,
      specifications: requiredSpecifications.length,
      dedicatedPlansActuallyLocated: locatedDedicatedPlans.length,
      sprintIndex: "present",
      unauthorizedTemporaryArtifacts: temporaryItems.length,
      publicLocalPaths: exposedPaths.length,
      newDependencies: 0,
      sprint9Artifacts: 0,
      productionValidation: "pending-deploy",
    },
  }, null, 2));
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
