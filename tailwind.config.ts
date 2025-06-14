import type { Config } from "tailwindcss";

const config: Config = {
  darkMode:'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      xxxl: "1800px",
    },
    borderRadius: {
      none: "0",
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem",
      full: "9999px",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
      poiret: ['"Poiret One"', 'cursive'],
      inria: ['"Inria Serif"', 'serif'],
    },
    fontSize: {
      defaultsize: "0.813rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
    extend: {
      colors: {
        background: {
          DEFAULT: '#fff',
          dark: '#000'
        },
        foreground: "var(--foreground)",
        black: "#000000",
        base: {
          DEFAULT: '#000000',
          dark: '#ffff'
        }
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;