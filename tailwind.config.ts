import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Светлый минимализм: белый фон, графитовый текст, синий акцент
        ink: {
          DEFAULT: "#0E1116",
          900: "#0E1116",
          800: "#1F2733",
          700: "#2C3542",
          600: "#3D4757",
        },
        muted: {
          DEFAULT: "#5A6472",
          light: "#8A93A2",
        },
        line: {
          DEFAULT: "#E7EAEF",
          soft: "#EEF1F5",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FA",
          softer: "#FBFCFD",
        },
        brand: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
          light: "#3B82F6",
          soft: "#EFF4FF",
          ring: "#BFD3FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans-loaded)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono-loaded)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(16,17,22,0.04), 0 12px 32px -16px rgba(16,17,22,0.12)",
        "card-hover":
          "0 1px 2px rgba(16,17,22,0.04), 0 18px 40px -22px rgba(16,17,22,0.22)",
        "card-blue":
          "0 1px 2px rgba(16,17,22,0.04), 0 18px 40px -20px rgba(37,99,235,0.35)",
        btn: "0 12px 28px -12px rgba(37,99,235,0.5)",
      },
      letterSpacing: {
        tightish: "-0.02em",
        "extra-tight": "-0.035em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
