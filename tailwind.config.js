/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
      },
      colors: {
        // #14213d
        navy: "#2c406d",
        lightGray: "#e5e5e5",
        yellowOrange: "#fca311",
      },
    },
  },
  plugins: [],
};
