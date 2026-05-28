import { type Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-kodchasan)", "var(--font-nunito)", "sans-serif"],
        heading: ["var(--font-kodchasan)", "sans-serif"],
      },
    },
  },

  plugins: [],
} satisfies Config;
