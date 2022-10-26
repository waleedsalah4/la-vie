/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'green': '#1ABC00',
      'white': '#fff',
      'grey': '#8D8D8D',
      'black': '#000',
      'footer': '##FAFAFA'
    },
    fontFamily: {
      'Poppins': ['Poppins'],
      'Meddon': ['Meddon']
    }
  },
  plugins: [],
}
