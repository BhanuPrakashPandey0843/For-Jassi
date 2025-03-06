// this is my tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", 
      },
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"], 
      },

    },
  },
  plugins: [],
};
