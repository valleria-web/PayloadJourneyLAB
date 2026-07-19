import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(scriptDirectory, "..");

const files = {
  tokens: path.join(repositoryRoot, "app", "globals.css"),
  tailwind: path.join(repositoryRoot, "tailwind.config.ts"),
  container: path.join(repositoryRoot, "components", "ui", "Container.tsx"),
  section: path.join(repositoryRoot, "components", "ui", "Section.tsx"),
  sectionHeader: path.join(repositoryRoot, "components", "ui", "SectionHeader.tsx"),
  button: path.join(repositoryRoot, "components", "ui", "Button.tsx"),
  card: path.join(repositoryRoot, "components", "ui", "Card.tsx"),
  badge: path.join(repositoryRoot, "components", "ui", "Badge.tsx"),
};

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function tokenRgb(source, token) {
  const match = source.match(new RegExp(`${token}:\\s*(\\d+)\\s+(\\d+)\\s+(\\d+);`));
  assert(match, `Expected an RGB value for ${token}`);
  return match.slice(1).map(Number);
}

function relativeLuminance(rgb) {
  const channels = rgb.map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(first, second) {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  const lighter = Math.max(firstLuminance, secondLuminance);
  const darker = Math.min(firstLuminance, secondLuminance);
  return (lighter + 0.05) / (darker + 0.05);
}

const sources = Object.fromEntries(
  await Promise.all(
    Object.entries(files).map(async ([name, filePath]) => [name, await fs.readFile(filePath, "utf8")]),
  ),
);

const requiredTokenGroups = {
  color: [
    "--color-paper",
    "--color-ink",
    "--color-graphite",
    "--color-line",
    "--color-accent",
    "--color-terminal",
    "--color-pink",
    "--color-focus",
    "--color-accent-text",
    "--color-cta-contrast-text",
  ],
  typography: ["--font-family-sans", "--font-family-mono", "--font-size-technical"],
  layout: ["--container-default", "--space-container-inline", "--space-section-block"],
  shape: ["--radius-control", "--radius-card", "--shadow-card"],
  motion: ["--motion-duration-fast", "--motion-duration-base", "--motion-easing-standard"],
};

for (const [group, tokens] of Object.entries(requiredTokenGroups)) {
  for (const token of tokens) {
    assert(sources.tokens.includes(`${token}:`), `Missing ${group} token: ${token}`);
  }
}

assert(
  !/#[\da-f]{3,8}/i.test(sources.tailwind),
  "Tailwind must reference CSS custom properties instead of duplicating color literals",
);
assert(
  sources.tailwind.includes("<alpha-value>"),
  "Tailwind color aliases must preserve opacity modifier support",
);
assert(
  sources.tailwind.includes('"accent-readable": color("--color-accent-text")') &&
    sources.tailwind.includes('"cta-contrast-text": color("--color-cta-contrast-text")'),
  "Sprint 3 contrast aliases must reference additive CSS custom properties",
);

const readableGreenContrast = contrastRatio(
  tokenRgb(sources.tokens, "--color-accent-text"),
  tokenRgb(sources.tokens, "--color-paper"),
);
const contrastCtaRatio = contrastRatio(
  tokenRgb(sources.tokens, "--color-ink"),
  tokenRgb(sources.tokens, "--color-pink"),
);
assert(readableGreenContrast >= 4.5, "Readable green must meet WCAG AA on paper");
assert(contrastCtaRatio >= 4.5, "Contrast CTA must meet WCAG AA with dark text");
assert(
  sources.button.includes('primary:\n    "border-accent-cta bg-accent-cta text-white'),
  "The preexisting primary Button variant must remain unchanged",
);
assert(
  sources.button.includes("contrast:") && sources.button.includes("text-cta-contrast-text"),
  "The additive contrast Button variant is missing",
);
assert(
  sources.tokens.includes("@media (prefers-reduced-motion: reduce)"),
  "Reduced-motion protection is missing",
);

assert(
  sources.sectionHeader.includes('export type SectionHeadingLevel = "h2" | "h3" | "h4"'),
  "SectionHeader must restrict levels to h2, h3, and h4",
);
assert(!sources.sectionHeader.includes('"h1"'), "SectionHeader must never expose h1");
assert(
  sources.sectionHeader.includes('level = "h2"'),
  "SectionHeader must default to h2 for compatibility",
);

assert(
  sources.button.includes("export type LinkButtonProps") &&
    sources.button.includes("export type ActionButtonProps"),
  "Button must distinguish link and action contracts",
);
assert(
  sources.button.includes("disabled?: never"),
  "Link CTAs must not expose a disabled prop",
);
assert(
  sources.button.includes("<button") && sources.button.includes("disabled={disabled}"),
  "Disabled state must use a native button",
);

for (const component of ["container", "section", "sectionHeader", "button", "card", "badge"]) {
  assert(!sources[component].includes('"use client"'), `${component} must remain a Server Component`);
}

let legacyHeaderAdapterExists = true;
try {
  await fs.access(path.join(repositoryRoot, "components", "sections", "SectionHeader.tsx"));
} catch {
  legacyHeaderAdapterExists = false;
}
assert(!legacyHeaderAdapterExists, "Legacy SectionHeader adapter should not remain after migration");

console.log(
  JSON.stringify(
    {
      result: "pass",
      checks: {
        tokenGroups: Object.keys(requiredTokenGroups).length,
        cssCustomPropertiesAreCanonical: true,
        tailwindColorLiterals: 0,
        sectionHeaderLevels: ["h2", "h3", "h4"],
        linkDisabledStateRejected: true,
        nativeButtonDisabledState: true,
        newClientBoundaries: 0,
        legacyAdapterRemoved: true,
        readableGreenContrast: Number(readableGreenContrast.toFixed(2)),
        contrastCtaRatio: Number(contrastCtaRatio.toFixed(2)),
        preexistingButtonDefaultsPreserved: true,
      },
    },
    null,
    2,
  ),
);
