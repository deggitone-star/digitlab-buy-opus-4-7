import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#07070C",
          900: "#0A0A14",
          850: "#0E0E18",
          800: "#141625",
          700: "#1C1F30",
          600: "#252A3D",
          500: "#3A4055",
          400: "#5A6275",
          300: "#A8A8B8",
          200: "#C8CCD8",
          100: "#E4E6EE",
          50: "#F4F5F8",
        },
        accent: {
          blue: "#5B6FFF",
          indigo: "#5B5BF6",
          violet: "#7C5BFF",
          magenta: "#C566FF",
          orange: "#FF8A4C",
          peach: "#FFB37A",
          DEFAULT: "#7C5BFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, #FF8A4C 0%, #C566FF 40%, #7C5BFF 100%)",
        "brand-gradient-cool":
          "linear-gradient(135deg, #5B6FFF 0%, #7C5BFF 50%, #C566FF 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(124,91,255,0.25), transparent 70%)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        "card-hover":
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 16px 40px -16px rgba(124,91,255,0.3)",
        glow: "0 0 0 1px rgba(124,91,255,0.4), 0 8px 32px -8px rgba(124,91,255,0.5)",
        "glow-orange":
          "0 0 0 1px rgba(255,138,76,0.4), 0 8px 32px -8px rgba(255,138,76,0.5)",
        "hero-shell": "0 32px 100px -32px rgba(124, 91, 255, 0.4)",
      },
      letterSpacing: {
        tightish: "-0.02em",
        "extra-tight": "-0.04em",
      },
      keyframes: {
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(80px, -60px) scale(1.1)" },
          "66%": { transform: "translate(-50px, 40px) scale(0.95)" },
        },
        "blob-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-100px, 80px) scale(1.15)" },
        },
        "blob-drift-3": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(60px, -50px) scale(0.9)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "soft-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "node-appear": {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "pulse-ring": {
          "0%": { opacity: "0.7", transform: "scale(0.95)" },
          "100%": { opacity: "0", transform: "scale(1.4)" },
        },
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              "0 0 0 1px rgba(124,91,255,0.4), 0 8px 24px -8px rgba(124,91,255,0.4)",
          },
          "50%": {
            boxShadow:
              "0 0 0 1px rgba(124,91,255,0.6), 0 12px 32px -8px rgba(124,91,255,0.6)",
          },
        },
      },
      animation: {
        "blob-drift": "blob-drift 22s ease-in-out infinite",
        "blob-drift-2": "blob-drift-2 26s ease-in-out infinite",
        "blob-drift-3": "blob-drift-3 24s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        "soft-pulse": "soft-pulse 2.5s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "node-appear": "node-appear 0.6s ease-out backwards",
        "pulse-ring": "pulse-ring 2.5s ease-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
