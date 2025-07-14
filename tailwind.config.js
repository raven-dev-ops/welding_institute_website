/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',     // Orange for primary accents
        secondary: '#334155',   // Slate 800 for secondary accents
        'ciwt-dark': 'var(--ciwt-dark)',
        'ciwt-blue': 'var(--ciwt-blue)',
        'ciwt-gold': 'var(--ciwt-gold)',
        'ciwt-green': 'var(--ciwt-green)',
        'ciwt-red': 'var(--ciwt-red)',
        'ciwt-gray': 'var(--ciwt-gray)',
        'ciwt-accent': 'var(--ciwt-accent)',
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
