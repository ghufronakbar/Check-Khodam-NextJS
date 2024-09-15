import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bounce-in-right": {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "60%": { opacity: "1", transform: "translateX(-20px)" },
          "80%": { transform: "translateX(10px)" },
          "100%": { transform: "translateX(0)" },
        },
        "shift-up": {
          "0%": { transform: "translateY(0)", easing: "ease-in-out" },
          "100%": { transform: "translateY(-100%)", easing: "ease-in-out" },
        },
      },
      animation: {
        "bounce-in-right": "bounce-in-right 0.5s ease-in-out",
        "shift-up": "shift-up 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
