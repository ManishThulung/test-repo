/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "src/**/*.{js,ts,jsx,tsx}"
  ],
  important: "#root",
  theme: {
    fontFamily: {
      open_sans: ["var(--open_sans)"],
      inter: ["var(--inter)"],
    },
  },
  plugins: [],
};
