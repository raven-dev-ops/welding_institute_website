/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F97316", // Orange for primary accents
        secondary: "#334155", // Slate 800 for secondary accents
        "ciwt-dark": "var(--ciwt-dark)",
        "ciwt-blue": "var(--ciwt-blue)",
        "ciwt-gold": "var(--ciwt-gold)",
        "ciwt-green": "var(--ciwt-green)",
        "ciwt-red": "var(--ciwt-red)",
        "ciwt-gray": "var(--ciwt-gray)",
        "ciwt-accent": "var(--ciwt-accent)",
        cta: "var(--color-cta)",
        "cta-hover": "var(--color-cta-hover)",
        "link-red": "var(--color-link-red)",
      },
      fontFamily: {
        opensans: ["var(--font-open-sans)", "sans-serif", ...fontFamily.sans],
        sans: ["Source Sans Pro", ...defaultTheme.fontFamily.sans],
        staatliches: ["var(--font-staatliches)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        Ionicons: ["Ionicons", "sans-serif"],
      },
    },
  },
  plugins: [],
};
