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
        // hero: 'url("/assets/images/hero.mp4")',
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      screens: {
        "1040px": "1040px",
        "400px": "425px",
        "end": "1440px",
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        
      },
    },
  },
  plugins: [],
};
