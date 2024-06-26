/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      sans: ['"Public Sans", sans-serif', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        darkBlue: "hsl(233, 26%, 24%)",
        limeGreen: "hsl(136, 65%, 51%)",
        brightCyan: "hsl(192, 70%, 51%)",
        grayishBlue: "hsl(233, 8%, 62%)",
        lightGrayishBlue: "hsl(220, 16%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
