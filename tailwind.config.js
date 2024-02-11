/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        customFont: ["Mulish", "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
