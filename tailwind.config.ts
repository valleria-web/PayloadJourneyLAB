import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        graphite: "#4B4B4B",
        muted: "#6f6f6f",
        line: "#D8D6D1",
        paper: "#F8F7F4",
        subtle: "#F3F1EC",
        soft: "#E9E7E2",
        blush: "#F7D6EA",
        accent: "#2FAE42",
        terminal: "#78E65D",
        pink: "#EB5CB8",
        "pink-dark": "#D842A3",
        "accent-muted": "#E9F8E6",
        danger: "#b42318",
      },
      fontFamily: {
        sans: ["Space Grotesk", "Inter", "Arial", "Helvetica", "sans-serif"],
        mono: ["IBM Plex Mono", "\"Courier New\"", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
