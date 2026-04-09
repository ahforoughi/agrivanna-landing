import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark charcoal instead of flat black
        ink: {
          950: "#14161A",
          900: "#191C21",
          800: "#21242A",
          700: "#2B2F36",
          600: "#373C44",
          500: "#4B5159",
        },
        lime: {
          400: "#A6FF3D",
          500: "#8AF51E",
          600: "#6FD40C",
        },
        bone: {
          50: "#F6F6F4",
          100: "#ECECE8",
          200: "#D4D4CE",
          300: "#B6B6AE",
          400: "#8C8C85",
        },
        cream: {
          50: "#FAFAF7",
          100: "#F3F2EC",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        // Larger floor for small text
        "2xs": "0.78rem",
        xs: "0.84rem",
        sm: "0.95rem",
        base: "1.05rem",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        fadeUp: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
