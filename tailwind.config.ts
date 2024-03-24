import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {

    extend: {
      colors: {
        under: "#738FFF",
        back: "#292B32",
        cardBack: "#3B3E47",
        button: "#2C9CF0",
        "gradient1": "#18282A",
        "gradient2": "#221A2C",
        arrow: "#2C9CF0",
        "gradient3": "#F9F8FF",
        "gradient4": "#F3F9FF",
        darkWhite: "#FFFFFF",
        darkTextWhite: "#525965",

      }
    },
  },
  plugins: [],
};
export default config;
