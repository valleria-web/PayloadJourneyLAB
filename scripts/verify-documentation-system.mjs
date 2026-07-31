import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsRoot = path.join(root, "docs");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function exists(target) {
  return Boolean(await fs.stat(target).catch(() => null));
}

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(target));
    else files.push(target);
  }
  return files;
}

function frontMatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match?.[1] ?? "";
}

const requiredDomains = [
  "governance",
  "methods",
  "cases",
  "research",
  "operations",
  "product",
  "archive",
];
const legacyDirectories = [
  "files",
  "prompts",
  "PropagationBaseline",
  "lab-propagation",
  "homepage-refactor",
  "sprints",
  "sprints para v2",
  "sprints para v3",
  "ai-readiness",
];
const methodDirectories = [
  "payload-journey",
  "usmt",
  "reverse-payload-journey",
  "operational-payload-path",
  "track-to-origin",
  "trace-engineering",
];

assert(await exists(path.join(docsRoot, "README.md")), "docs/README.md is missing");
for (const domain of requiredDomains) {
  assert(await exists(path.join(docsRoot, domain)), `Required documentation domain missing: ${domain}`);
  assert(await exists(path.join(docsRoot, domain, "README.md")), `Domain README missing: ${domain}`);
}
for (const legacy of legacyDirectories) {
  assert(!await exists(path.join(docsRoot, legacy)), `Deprecated top-level directory remains: ${legacy}`);
}

const allFiles = await walk(docsRoot);
const markdownFiles = allFiles.filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
const charters = allFiles.filter((file) => path.basename(file) === "semantic-identity-charter-v1.0.md");
assert(charters.length === 1, `Expected one Semantic Identity Charter, found ${charters.length}`);
assert(!charters[0].includes(`${path.sep}archive${path.sep}`), "Semantic Identity Charter cannot live in archive");

const archiveReadme = await fs.readFile(path.join(docsRoot, "archive", "README.md"), "utf8");
assert(
  archiveReadme.includes("historical provenance != current authority"),
  "Archive README does not declare its non-authoritative status",
);

const caseReadme = await fs.readFile(
  path.join(docsRoot, "cases", "RPJ-HORA-001", "README.md"),
  "utf8",
);
assert(caseReadme.includes("Founding Reference Case 001 — HORA.city"), "Active case identity is missing");
assert(caseReadme.includes("Investigation ID: `RPJ-HORA-001`"), "Active case ID is missing");
assert(caseReadme.includes("Lifecycle: Active investigation"), "Active case lifecycle changed or is missing");

for (const method of methodDirectories) {
  const readmePath = path.join(docsRoot, "methods", method, "README.md");
  assert(await exists(readmePath), `Method index missing: ${method}`);
  const readme = await fs.readFile(readmePath, "utf8");
  assert(readme.includes("Document status: index only"), `Method README is not explicitly index-only: ${method}`);
  assert(
    readme.includes("Canonical standalone specification: not yet published"),
    `Method README does not declare the specification gap: ${method}`,
  );
}

for (const file of markdownFiles.filter((item) => item.includes(`${path.sep}archive${path.sep}`))) {
  const metadata = frontMatter(await fs.readFile(file, "utf8"));
  assert(!/^status:\s*canonical\s*$/mi.test(metadata), `Canonical document found under archive: ${file}`);
  assert(!/^authority:\s*governance\s*$/mi.test(metadata), `Governance authority found under archive: ${file}`);
}

const requiredOperationalRecords = [
  path.join(docsRoot, "operations", "documentation", "2026-07-31-documentation-system-refactor.md"),
  path.join(docsRoot, "operations", "documentation", "inventory", "before-refactor-documentation-system.md"),
  path.join(docsRoot, "operations", "documentation", "inventory", "after-refactor-documentation-system.md"),
];
for (const record of requiredOperationalRecords) {
  assert(await exists(record), `Required documentation-system record missing: ${record}`);
}

const brokenLinks = [];
let localLinks = 0;
for (const file of markdownFiles) {
  const markdown = await fs.readFile(file, "utf8");
  const linkPattern = /!?\[[^\]]*\]\(([^)]+)\)/g;
  for (const match of markdown.matchAll(linkPattern)) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, "");
    if (/^(https?:|mailto:|tel:|#|data:)/.test(rawTarget)) continue;
    const pathPart = rawTarget.split("#", 1)[0];
    if (!pathPart) continue;
    let decoded = pathPart;
    try { decoded = decodeURIComponent(pathPart); } catch {}
    localLinks += 1;
    const target = path.resolve(path.dirname(file), decoded);
    if (!await exists(target)) brokenLinks.push(`${path.relative(root, file)} -> ${rawTarget}`);
  }
}
assert(brokenLinks.length === 0, `Broken local Markdown links:\n${brokenLinks.join("\n")}`);

const scriptsRoot = path.join(root, "scripts");
const scriptFiles = (await walk(scriptsRoot)).filter((file) => /\.(?:mjs|js|ts|tsx)$/.test(file));
const obsoletePathPattern = /docs[\\/](?:sprints para v3|sprints para v2|homepage-refactor|PropagationBaseline|lab-propagation|files|prompts)(?:[\\/]|["'])/;
const obsoleteReferences = [];
for (const file of scriptFiles) {
  const content = await fs.readFile(file, "utf8");
  if (obsoletePathPattern.test(content)) obsoleteReferences.push(path.relative(root, file));
}
assert(obsoleteReferences.length === 0, `Scripts reference obsolete documentation paths: ${obsoleteReferences.join(", ")}`);

console.log(JSON.stringify({
  result: "pass",
  documentationDomains: requiredDomains.length,
  markdownFiles: markdownFiles.length,
  localLinks,
  brokenLinks: brokenLinks.length,
  semanticIdentityCharters: charters.length,
  methodIndexes: methodDirectories.length,
  activeCase: "RPJ-HORA-001",
  activeCaseLifecycle: "Active investigation",
  deprecatedTopLevelDirectories: 0,
  obsoleteScriptReferences: 0,
}, null, 2));
