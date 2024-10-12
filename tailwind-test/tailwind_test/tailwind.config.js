/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FF00FF",
        secondary: "#ff49db",
        quadrado: "#880044"
      }
    },
    },
  }
  plugins: []
