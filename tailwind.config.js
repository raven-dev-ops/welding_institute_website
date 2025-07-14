/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'ciwt-dark': '#000100',
        'ciwt-blue': '#1329E5',
        'ciwt-gold': '#FEBE0F',
        'ciwt-green': '#68FE03',
        'ciwt-red': '#FA0231',
        'ciwt-gray': '#93A4A8',
        'ciwt-accent': '#5CA701',
      },
    },
  },
  plugins: [],
};
