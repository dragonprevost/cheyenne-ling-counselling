import type { Config } from "tailwindcss";

const config: Config = {
  //darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        backgroundDark: "var(--background-dark)",
        foreground: "var(--foreground)",
        foregroundDark: "var(--foreground-dark)",
        attention: "var(--attention)",
        attentionDark: "var(--attention-dark)",
        surface: "var(--surface)",
        surfaceDark: "var(--surface-dark)",
        primary: "var(--primary)",
        primaryDark: "var(--primary-dark)",
        secondary: "var(--secondary)",
        secondaryDark: "var(--secondary-dark)",
      },
      fontFamily: {
        cooper: ['"Cooper Black Regular"', 'sans-serif'],
        souvenir: ['"Souvenir"', 'sans-serif']
      }
    },
  },
  plugins: [],
};

export default config;
