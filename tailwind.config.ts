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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1E3A8A", // Warna utama (biru gelap)
          light: "#3B82F6", // Warna varian yang lebih terang
          dark: "#1E40AF", // Warna varian yang lebih gelap
        },
        secondary: {
          DEFAULT: "#F59E0B", // Warna sekunder (kuning)
          light: "#FCD34D", // Warna varian yang lebih terang
          dark: "#D97706", // Warna varian yang lebih gelap
        },
        tertiary: {
          DEFAULT: "#10B981", // Warna tersier (hijau)
          light: "#6EE7B7", // Warna varian yang lebih terang
          dark: "#047857", // Warna varian yang lebih gelap
        },
      },
    },
  },
  plugins: [],
};
export default config;
