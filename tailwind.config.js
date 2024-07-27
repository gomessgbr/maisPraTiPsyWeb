/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ['alegrevaRegular', 'sans-serif'],
        alegreyaBold: ['alegrevaBold', 'sans-serif'],
        alegreyaSemibold: ['alegrevaSemibold', 'sans-serif'],
        montserrat: ['montserratRegular', 'sans-serif'],
        montserratBold: ['montserratBold', 'sans-serif'],
        montserratSemibold: ['montserratSemibold', 'sans-serif'],
      },
      colors:{
        black: '#101004',
        white: '#FCFCF5',
        primary: '#f8f525',
        secondary: '#85e7f0',
        accent: '#5c78ea'
      }
    },
  },
  plugins: [],
}

