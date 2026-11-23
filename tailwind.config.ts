import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF4D1C",
          "orange-deep": "#E93616",
          "orange-dark": "#C0250A",
          yellow: "#FFC247",
          dark: "#171717",
          "dark-subtle": "#111111",
          surface: "#222222",
          "surface-muted": "#1C1C1C",
          muted: "#A3A3A3",
          secondary: "#D6D6D6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "Impact", "Arial Black", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(ellipse at 50% 40%, rgba(255, 77, 28, 0.45) 0%, rgba(233, 54, 22, 0.25) 35%, rgba(23, 23, 23, 0.95) 75%, #171717 100%)",
        "radial-highlight": "radial-gradient(circle at center, rgba(255, 194, 71, 0.2) 0%, rgba(255, 77, 28, 0.1) 40%, transparent 70%)",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 4s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
