/** @type {import('tailwindcss').Config} */
import defaultColors from "tailwindcss/colors";

const colors = {
  ...defaultColors,
  viridian: "#5B8266",
  "raisin-black": "#272727",
  "majorelle-blue": "#623CEA",
  snow: "#F9F5F6",
  "coral-pink": "#FA9884",
};

const screens = {
  sm: "480px",
  md: "768px",
  lg: "976px",
  xl: "1440px",
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens,
    colors,
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
