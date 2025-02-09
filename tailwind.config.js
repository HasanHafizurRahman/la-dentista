import { tailwindConfigs } from "./plugins/tailwindConfigPlugin";
import colorThemes from "./theme.json";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colorThemes.primary
      }
    },
  },
  plugins: [tailwindConfigs({ colorThemes })],
}