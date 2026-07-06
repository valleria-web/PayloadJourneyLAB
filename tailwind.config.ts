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
        ink: "#0a0a0a",
        graphite: "#3f3f46",
        muted: "#66666d",
        line: "#d9d9de",
        paper: "#ffffff",
        subtle: "#f7f7f8",
        soft: "#f2f4f5",
        accent: "#0f766e",
        "accent-muted": "#e6f2f0",
        danger: "#b42318",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
