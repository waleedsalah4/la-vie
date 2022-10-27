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
      'blue': '#337FFF',
      'border': 'rgba(0, 0, 0, 0.26)',
      'blogText': '#6C6C6C',
      'heat': 'rgba(26, 188, 0, 0.05)',
      'footer': '#FAFAFA',
    },
    fontFamily: {
      'Poppins': ['Poppins'],
      'Meddon': ['Meddon']
    }
  },
  plugins: [],
}
