const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

const colors = require("tailwindcss/colors");

const svgToDataUri = require("mini-svg-data-uri");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}", // ✅ Added App Router support
    "./components/**/*.{ts,tsx}", // ✅ Ensure Tailwind scans components
    "./pages/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  darkMode: "class", // ✅ Enables dark mode support

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      /* ✅ Custom Aurora Animation */
      animation: {
        aurora: "aurora 60s linear infinite",
      },

      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 0%, 0% 0%" },
          "100%": { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },

      /* ✅ Custom Colors */
      colors: {
        black: {
          DEFAULT: "#000",
          100: '#000319',
          200: '#00072b',
          300: '#000c46',
          400: '#001160'
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },

      /* ✅ Responsive Container */
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },

      /* ✅ Custom Border Radius */
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },

  plugins: [
    addVariablesForColors, // ✅ Keeps color variables working
  ],
};

/* ✅ This plugin adds each Tailwind color as a CSS variable */
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({ ":root": newVars });
}
