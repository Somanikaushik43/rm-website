import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ REQUIRED for manual toggle

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* =====================
           BRAND COLORS
        ===================== */
        brandDark: "#002147",
        brandPrimary: "#007BFF",
        brandLight: "#F8F9FA",
        brandAccent: "#FFB400",

        /* =====================
           THEME TOKENS (IMPORTANT)
        ===================== */
        bgLight: "#f8fafc",
        bgDark: "#05051e",

        surfaceLight: "#ffffff",
        surfaceDark: "#0b0f2a",

        borderLight: "rgba(0,0,0,0.1)",
        borderDark: "rgba(255,255,255,0.1)",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },

  plugins: [],
};

export default config;
