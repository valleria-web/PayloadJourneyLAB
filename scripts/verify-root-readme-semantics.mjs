import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readmePath = path.join(root, "README.md");
const readme = await fs.readFile(readmePath, "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const requiredSemanticStatements = [
  "Trace Engineering is a **developing investigative practice** composed of capabilities",
  "tracing operations",
  "locating decisions",
  "comparing expected models with execution",
  "producing verifiable explanations",
  "Trace Engineer is a **developing investigative function/profile**",
  "Founding Reference Case 001 — HORA.city",
  "Investigation ID: RPJ-HORA-001",
  "Lifecycle: Active investigation",
  "founder-owned internal reference investigation",
  "Association evidence: Documentary",
  "Runtime confirmation of this association has not been established",
  "Universal System Modeling Template",
  "Payload Journey LAB Evidence Model",
  "Conceptual, Documentary, Runtime, Implementation, Verification, and External or Independent Evidence",
  "docs/README.md",
  "docs/governance/semantic-identity/semantic-identity-charter-v1.0.md",
];

for (const statement of requiredSemanticStatements) {
  assert(readme.includes(statement), `Required semantic statement missing: ${statement}`);
}

assert(!readme.includes("professional role"), "README still describes Trace Engineer as a professional role");
assert(!readme.includes("Tracing Engineering"), "README contains deprecated current term: Tracing Engineering");
assert(!readme.includes("Aura.city"), "README contains deprecated case name: Aura.city");
assert(
  readme.includes("It is not presented by Payload Journey LAB as an established profession"),
  "Trace Engineer profession guardrail is missing",
);
assert(
  readme.includes("does not constitute external independent or scientific validation"),
  "Internal case external-validation guardrail is missing",
);
assert(
  readme.includes("has not established causal origin, temporal authority, restoration, a verified fix, final outcome, or closure"),
  "Active case outcome guardrails are incomplete",
);
assert(
  readme.includes("USMT is canonical within Payload Journey LAB") &&
    readme.includes("It is not presented as an external industry standard"),
  "USMT authority boundary is incomplete",
);
assert(
  readme.includes("navigation indexes, not substitute specifications"),
  "README may imply that method indexes are standalone specifications",
);
assert(
  readme.includes("This repository README is an orientation document and does not override governance"),
  "README does not declare its relationship to governance",
);

const markdownLinks = [...readme.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)];
const brokenLinks = [];
let localLinks = 0;
for (const match of markdownLinks) {
  const rawTarget = match[1].trim().replace(/^<|>$/g, "");
  if (/^(https?:|mailto:|tel:|#|data:)/.test(rawTarget)) continue;
  const pathPart = rawTarget.split("#", 1)[0];
  if (!pathPart) continue;
  let decoded = pathPart;
  try { decoded = decodeURIComponent(pathPart); } catch {}
  localLinks += 1;
  const target = path.resolve(path.dirname(readmePath), decoded);
  if (!await fs.stat(target).catch(() => null)) brokenLinks.push(rawTarget);
}

assert(brokenLinks.length === 0, `Broken local README links: ${brokenLinks.join(", ")}`);

console.log(JSON.stringify({
  result: "pass",
  semanticStatements: requiredSemanticStatements.length,
  traceEngineeringLifecycle: "developing investigative practice",
  traceEngineerLifecycle: "developing investigative function/profile",
  activeCase: "RPJ-HORA-001",
  activeCaseLifecycle: "Active investigation",
  heartCreatedEvidence: "Documentary association; runtime not confirmed",
  evidenceLevels: 6,
  localLinks,
  brokenLinks: brokenLinks.length,
  deprecatedCurrentTerms: 0,
}, null, 2));
