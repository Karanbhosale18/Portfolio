import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          50: "#EFF4FF",
          400: "#5B8DEF",
          500: "#2563EB",
          600: "#1D4ED8",
        },
        secondary: {
          DEFAULT: "#7C3AED",
          400: "#9F67F0",
          500: "#7C3AED",
        },
        accent: {
          DEFAULT: "#06B6D4",
          400: "#22D3EE",
          500: "#06B6D4",
        },
        canvas: {
          DEFAULT: "#09090B",
          raised: "#0F0F13",
          card: "#131318",
          border: "#1F1F26",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.25), transparent 40%), radial-gradient(circle at 80% 0%, rgba(124,58,237,0.2), transparent 40%), radial-gradient(circle at 50% 100%, rgba(6,182,212,0.15), transparent 50%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(37,99,235,0.45)",
        "glow-violet": "0 0 40px -10px rgba(124,58,237,0.45)",
        card: "0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        blink: "blink 1s step-start infinite",
        float: "float 6s ease-in-out infinite",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
