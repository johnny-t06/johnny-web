import type { Config } from "tailwindcss";

// Desktop sizes come from the 1920px-wide design. `fluid(px, min)` scales a
// design value with the viewport, never going below `min` and stopping at
// its 2560px size so very wide screens don't keep growing.
const fluid = (px: number, min: number) =>
  `clamp(${min}px, ${+(px / 19.2).toFixed(3)}vw, ${Math.round((px * 4) / 3)}px)`;

const config: Config = {
  darkMode: "class",
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
      // Desktop (lg) tokens, all built with `fluid`. Used as lg:px-gutter,
      // lg:size-portrait, lg:text-hero-title, and so on.
      spacing: {
        gutter: fluid(160, 80),
        "col-gap": fluid(120, 48),
        "header-h": fluid(88, 72),
        logo: fluid(48, 40),
        "work-logo": fluid(56, 44),
        "work-row-y": fluid(22, 14),
        "work-gap": fluid(20, 16),
        "hero-gap": fluid(56, 28),
        portrait: fluid(340, 180),
        "text-gap": fluid(20, 12),
        "section-top": fluid(80, 48),
        "footer-top": fluid(160, 96),
        "ticket-pad": fluid(64, 40),
        "ticket-inset": fluid(24, 16),
        avatar: fluid(80, 60),
        "contact-row-h": fluid(120, 72),
        "contact-row-x": fluid(32, 20),
      },
      maxWidth: {
        page: "2560px",
      },
      borderRadius: {
        "work-logo": fluid(12, 10),
        portrait: fluid(24, 14),
        ticket: fluid(40, 28),
        avatar: fluid(19, 14),
        "contact-row": fluid(24, 16),
      },
      fontSize: {
        nav: fluid(17, 15),
        "work-title": fluid(22, 17),
        "work-desc": fluid(18, 14),
        "work-date": fluid(16, 13),
        hint: fluid(14, 13),
        "hero-title": fluid(80, 44),
        "hero-body": fluid(22, 12),
        about: fluid(26, 18),
        "avatar-name": fluid(24, 18),
        "avatar-place": fluid(19, 15),
        "say-hi": fluid(120, 72),
        "ticket-body": fluid(24, 17),
        "ticket-label": fluid(15, 13),
        "contact-title": fluid(29, 20),
        "contact-handle": fluid(20, 14),
        "footer-note": fluid(18, 14),
        wordmark: fluid(336, 0),
      },
      // The peek hint's birdie flying along its arc (see PeekHint).
      keyframes: {
        serve: {
          "0%": { offsetDistance: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "70%": { offsetDistance: "100%", opacity: "1" },
          "85%, 100%": { offsetDistance: "100%", opacity: "0" },
        },
      },
      animation: {
        serve: "serve 2.8s cubic-bezier(.3,.1,.3,1) infinite",
      },
      fontFamily: {
        satoshi: ["satoshi", "sans-serif"],
        "satoshi-bold": ["satoshi-bold", "sans-serif"],
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
        espresso: "#3b2f29",
        cream: "#f7efe6",
        "cream-muted": "#e0d3c7",
        muted: "#5b6370",
        line: "#dbe5ee",
      },
    },
  },
  plugins: [],
};
export default config;
