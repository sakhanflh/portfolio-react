/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserat': 'Montserrat, sans-serif',
        'Russo': 'Russo One, sans-serif'
      },
      colors: {
        textcolor: '#FFD95A',
        bgcolor: 'rgb(20, 20, 20)',
      },
    },
  },
  plugins: [],
}

