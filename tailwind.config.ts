import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        switzer: ["switzer", "sans-serif"],
      },
      colors: {
        beige: "#E8E8E8",
        green: "#e0e5d6",
        mint: "#F0FFF0",
        nobel: "#b2aba9",
        silk: "#beb2a7",
        black: "#312f2f",
        beige2: "#FFF8E8",
        white: "#EEF7FF",
      },
    },
  },
  plugins: [],
};
export default config;
