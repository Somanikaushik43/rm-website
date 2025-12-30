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
           RISKMAN BRAND COLORS
        ===================== */
        brandDark: "#001F3F",      // Deep navy blue from logo
        brandNavy: "#003366",       // Medium navy
        brandPrimary: "#004080",    // Bright navy blue
        brandLight: "#F5F5F5",      // Light background
        brandAccent: "#FFC000",     // Golden yellow from logo
        brandGold: "#FFB800",       // Bright gold

        /* =====================
           THEME TOKENS
        ===================== */
        bgLight: "#FAFAFA",         // Very light gray
        bgDark: "#001122",          // Very dark navy

        surfaceLight: "#FFFFFF",    // Pure white
        surfaceDark: "#001A33",     // Dark navy surface

        borderLight: "rgba(0, 31, 63, 0.1)",   // Navy with transparency
        borderDark: "rgba(255, 192, 0, 0.15)", // Gold with transparency
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },

  plugins: [],
};