import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Графитовая база
        graphite: {
          950: "#0A0B0F",
          900: "#0E1015",
          800: "#14171F",
          700: "#1C2029",
          600: "#252A36",
          500: "#3A4050",
          400: "#5A6275",
          300: "#8B92A5",
          200: "#B8BDCC",
          100: "#E4E6EE",
          50: "#F4F5F8",
        },
        // Акцент: сине-фиолетовый
        accent: {
          blue: "#3B6FF6",
          indigo: "#5B5BF6",
          violet: "#7A5BF6",
          DEFAULT: "#5B5BF6",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "accent-gradient":
          "linear-gradient(135deg, #3B6FF6 0%, #5B5BF6 50%, #7A5BF6 100%)",
        "hero-radial":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(91,91,246,0.18), transparent 70%)",
        "grid-pattern":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)",
        "card-hover":
          "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 16px 40px -16px rgba(91,91,246,0.25)",
        glow: "0 0 0 1px rgba(91,91,246,0.4), 0 8px 32px -8px rgba(91,91,246,0.5)",
      },
      letterSpacing: {
        tightish: "-0.02em",
      },
      keyframes: {
        // Медленно плывущие градиентные пятна
        "blob-drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
        "blob-drift-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-40px, 30px) scale(1.05)" },
          "66%": { transform: "translate(30px, -20px) scale(0.9)" },
        },
        // Перетекание текстового градиента
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        // Sheen — бегущий блик по кнопке
        sheen: {
          "0%": { transform: "translateX(-100%) skewX(-20deg)" },
          "100%": { transform: "translateX(200%) skewX(-20deg)" },
        },
        // Тонкая пульсация для бейджей
        "soft-pulse": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        // Медленное движение сетки
        "grid-flow": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "56px 56px" },
        },
        // Появление снизу с фейдом
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Плавающее свечение логотипа
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 0 1px rgba(91,91,246,0.4), 0 8px 24px -8px rgba(91,91,246,0.4)" },
          "50%": { boxShadow: "0 0 0 1px rgba(91,91,246,0.6), 0 12px 32px -8px rgba(91,91,246,0.6)" },
        },
      },
      animation: {
        "blob-drift": "blob-drift 18s ease-in-out infinite",
        "blob-drift-2": "blob-drift-2 22s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease-in-out infinite",
        sheen: "sheen 3s ease-in-out infinite",
        "soft-pulse": "soft-pulse 2.5s ease-in-out infinite",
        "grid-flow": "grid-flow 20s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
