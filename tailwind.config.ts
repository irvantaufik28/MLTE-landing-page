import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f2f5f9',
          100: '#e1e8f2',
          200: '#c7d5e7',
          300: '#9fb9d6',
          400: '#7197c1',
          500: '#5079aa',
          600: '#3e608e',
          700: '#334e73',
          800: '#2d4360',
          900: '#1b2535',
          950: '#0b0f17', // deep navy background
        },
        pitch: {
          500: '#10b981', // emerald green for status/accents
          600: '#059669',
        }
      },
    },
  },
  plugins: [],
};
export default config;
