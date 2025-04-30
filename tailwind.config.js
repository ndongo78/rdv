/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind.config.js
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textPrimary: "#C5D9D0",
        primary: "#025940",
        background: "#012619",
        secondary: "#72A68E",
        accent: "#0D0D0D",
      }
    },
  },
  plugins: [],
}

