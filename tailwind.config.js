const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: "#333",
        gainsboro: "#dcdcdc",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        profile: "auto, minmax(0, 1fr)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
