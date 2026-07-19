import type { Config } from "tailwindcss";

const color = (property: string) => `rgb(var(${property}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: color("--color-ink"),
        "text-primary": color("--color-ink"),
        graphite: color("--color-graphite"),
        muted: color("--color-graphite"),
        "text-muted": color("--color-graphite"),
        line: color("--color-line"),
        "border-default": color("--color-line"),
        "border-active": color("--color-accent"),
        paper: color("--color-paper"),
        "surface-page": color("--color-paper"),
        "surface-card": color("--color-surface-card"),
        subtle: color("--color-subtle"),
        soft: color("--color-soft"),
        "surface-soft": color("--color-soft"),
        blush: color("--color-blush"),
        "accent-soft": color("--color-blush"),
        accent: color("--color-accent"),
        "accent-green": color("--color-accent"),
        "accent-technical": color("--color-accent"),
        "accent-readable": color("--color-accent-text"),
        terminal: color("--color-terminal"),
        pink: color("--color-pink"),
        "accent-cta": color("--color-pink"),
        "pink-dark": color("--color-pink-dark"),
        "cta-contrast-text": color("--color-cta-contrast-text"),
        focus: color("--color-focus"),
        "accent-muted": color("--color-accent-muted"),
        danger: color("--color-danger"),
        "case-section": color("--color-case-section"),
        "case-card": color("--color-case-card"),
        "case-panel": color("--color-case-panel"),
        "role-transport": color("--color-role-transport"),
        "role-transport-surface": color("--color-role-transport-surface"),
        "role-transform": color("--color-role-transform"),
        "role-transform-surface": color("--color-role-transform-surface"),
        "role-decide": color("--color-role-decide"),
        "role-decide-surface": color("--color-role-decide-surface"),
        "role-present": color("--color-role-present"),
        "role-present-surface": color("--color-role-present-surface"),
      },
      fontFamily: {
        sans: ["var(--font-family-sans)"],
        mono: ["var(--font-family-mono)"],
      },
      fontSize: {
        "technical-sm": "var(--font-size-technical-sm)",
        technical: "var(--font-size-technical)",
        "technical-lg": "var(--font-size-technical-lg)",
      },
      spacing: {
        "foundation-card": "var(--space-card)",
      },
      letterSpacing: {
        technical: "var(--tracking-technical)",
        "technical-wide": "var(--tracking-technical-wide)",
      },
      borderRadius: {
        "foundation-control": "var(--radius-control)",
        "foundation-card": "var(--radius-card)",
      },
      boxShadow: {
        "foundation-button": "var(--shadow-button-primary)",
        "foundation-card": "var(--shadow-card)",
        "foundation-card-technical": "var(--shadow-card-technical)",
        "foundation-card-cta": "var(--shadow-card-cta)",
        "foundation-highlight": "var(--shadow-highlight)",
        "foundation-flow": "var(--shadow-flow)",
        "foundation-investigation": "var(--shadow-investigation)",
      },
      transitionDuration: {
        foundation: "var(--motion-duration-base)",
      },
    },
  },
  plugins: [],
};

export default config;
