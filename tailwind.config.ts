import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        forest: "var(--brand-forest)",
        sage: "var(--brand-sage)",
        beige: "var(--brand-beige)",
        clay: "var(--brand-clay)",
        ink: "var(--fg)",
        muted: "var(--muted)",
        background: "var(--bg)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      boxShadow: {
        subtle: "0 20px 45px -25px rgba(46, 92, 79, 0.35)",
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
