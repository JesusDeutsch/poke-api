/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pokemon: {
          red: '#FF0000',
          blue: '#3B4CCA',
          yellow: '#FFDE00',
          white: '#FFFFFF',
          black: '#000000',
          gray: '#A4A4A4',
        },
      },
    },
  },
  plugins: [],

  

}

