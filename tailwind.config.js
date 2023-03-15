/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xxs: "300px",

      xs: "400px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    colors: {
      transparent: "transparent",
      grn: "#15413f",
      hovergrn: "#8faf99",
      lightgreen: "#9bbea7",
      lightbeige: "#f6f2ed",
      beige: "#a18f7c",
      org: "#f3c963",
      white: "#FFFFFF",
      black: "#000000",
    },
    extend: {},
  },
  plugins: [],
};
