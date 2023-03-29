/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        one: "#000000",
        two: "#143642",
        three: "#C5D1EB",
        four: "#FFFFFF",
        five: "#0DAB76",
        six: "#381820",
        seven: "#501820",
        eight: "#502028",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};