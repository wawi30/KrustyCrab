/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".-rotate-y-180": {
      transform: "rotateY(-180deg)",
    },
  });
});

module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#07031A",
        "color-primary-light": "#07031A",
        "color-primary-dark": "#07031A",
        "color-secondary": "#FFFFFF",
        "color-gray": "#FFFFFF",
        "color-white": "#FFFFFF",
        "color-blob": "#FFFFFF",
        "color-it": "rgb(143, 134, 118)"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        md: "50px",
      },
    },
  },
  plugins: [rotateY],
};
