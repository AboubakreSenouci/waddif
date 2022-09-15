/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '890px'},

      'sm': {'max': '550px'},

      'menu': {'min': '890px'},

      'Sjob': {'min': '1023px'},
    },
    extend: {},
  },
  plugins: [],
}
