/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/assets/images/hero.jpg")',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
      },

      screens: {
        "1040px": "1040px",
        "400px": "425px",
      },
    },
  },
  plugins: [],
};
