/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // manual dark mode toggle

  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
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
           THEME TOKENS
        ===================== */
        bgLight: "#f8fafc",
        bgDark: "#05051e",

        surfaceLight: "#ffffff",
        surfaceDark: "#0b0f2a",

        borderLight: "rgba(0,0,0,0.1)",
        borderDark: "rgba(255,255,255,0.1)",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};
