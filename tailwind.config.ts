import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B14",
          900: "#0A1128",
          850: "#0F1A3A",
          800: "#132247",
          700: "#1C315E",
          600: "#227C9D",
        },
        brass: {
          50: "#FBF9F4",
          100: "#F6F1E5",
          200: "#EDE2CA",
          300: "#DFCCA3",
          400: "#D1B67C",
          500: "#C5A880",
          600: "#B38F56",
          700: "#9E7D47",
          800: "#806437",
          900: "#634D2A",
        },
        parchment: {
          50: "#FDFCFA",
          100: "#FAF9F6",
          200: "#F5F3ED",
          300: "#EBE7DF",
          400: "#DDD7CB",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)",
        card: "0 4px 20px -2px rgba(10, 17, 40, 0.06), 0 2px 6px -1px rgba(10, 17, 40, 0.03)",
        elevated: "0 10px 30px -4px rgba(10, 17, 40, 0.12), 0 4px 12px -2px rgba(10, 17, 40, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
