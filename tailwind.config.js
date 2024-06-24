/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        search: '0px 0px 10px 1px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        hero: 'url("/images/hero.png")',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        brand: "#D92750",
        "gray-1": "#464545",
        "red-euro": "#ff0000",
        "blue-euro": "#004494",
      },
      screens: {
        "1040px": "1040px",
        "xsm": "425px",
        "end": "1440px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "llg": "1120px",
        "xl": "1280px",
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
