/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "myFont":[ 'Poppins', 'sans-serif'],
        "myFont1":[ 'Lilita One', 'cursive'],
        "myHeader":[ 'Lilita One', 'cursive'],

      }
    },
  },
  plugins: [require('flowbite/plugin'),require("daisyui"),require('@tailwindcss/line-clamp') ],
}
