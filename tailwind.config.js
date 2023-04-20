/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        navy: "#14213d",
        lightGray: "#e5e5e5",
        yellowOrange: "#fca311",
      },
    },
  },
  plugins: [],
};
