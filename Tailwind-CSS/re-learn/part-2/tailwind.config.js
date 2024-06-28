/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      spacing: {
        13: "3.25rem",
      },
      fontFamily: {
        robot: ["Roboto Condensed"],
      },
      colors: {
        wpu: "#bada55",
        kopi: "#c0ffee",
      },
    },
  },
  plugins: [],
};
