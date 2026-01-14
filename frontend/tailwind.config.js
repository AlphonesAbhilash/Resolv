/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primeBlob: "#7A1C63",
        secBlob: "#2E1C7A",
        accent: "#d81b8c",
        darkBg: "#1a0b2e",
        glassWhite: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
}
