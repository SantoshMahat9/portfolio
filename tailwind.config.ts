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
        heist: {
          black: "#090909",
          dark: "#141414",
          surface: "#1C1C1C",
          surfaceElevated: "#222222",
          red: "#E50914",
          "red-dark": "#720D12",
          "red-glow": "rgba(229, 9, 20, 0.45)",
          border: "#292929",
          "border-light": "#383838",
          text: "#F5F5F5",
          muted: "#999999",
          dim: "#555555",
        },
      },
      fontFamily: {
        bebas: ["var(--font-bebas)", "Bebas Neue", "Impact", "sans-serif"],
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        technical: ["var(--font-technical)", "Space Grotesk", "monospace"],
      },
      backgroundImage: {
        "heist-radial": "radial-gradient(circle at 75% 35%, rgba(229, 9, 20, 0.22) 0%, rgba(114, 13, 18, 0.12) 40%, transparent 70%)",
        "spotlight-cone": "radial-gradient(ellipse at 50% 0%, rgba(229, 9, 20, 0.35) 0%, rgba(9, 9, 9, 0.95) 70%)",
      },
      animation: {
        "pulse-slow": "pulseSlow 4s ease-in-out infinite",
        "scanline": "scanline 8s linear infinite",
        "red-flicker": "redFlicker 3s infinite",
      },
      keyframes: {
        pulseSlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.02)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        redFlicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.75" },
          "70%": { opacity: "0.95" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
