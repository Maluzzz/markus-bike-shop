import type { Config } from "tailwindcss";

export default {
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
          DEFAULT: "#525479",
          light: "#7274a1",
          dark: "#393c57",
        },
        secondary: {
          DEFAULT: "#ff6b6b",
          light: "#ff8787",
          dark: "#e25555",
        },
        accent: {
          DEFAULT: "#2ecc71",
          light: "#58d68d",
          dark: "#27ae60",
        },
        warning: {
          DEFAULT: "#e91e63",
          light: "#f06292",
          dark: "#c2185b",
        },
        error: {
          DEFAULT: "#e74c3c",
          light: "#f1948a",
          dark: "#c0392b",
        },
        success: {
          DEFAULT: "#27ae60",
          light: "#58d68d",
          dark: "#1f8b4e",
        },
        info: {
          DEFAULT: "#3498db",
          light: "#5dade2",
          dark: "#2c81ba",
        },
      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(180deg, #525479 55%, #ff8787 )", 
      },
    },
  },
  plugins: [],
} satisfies Config;