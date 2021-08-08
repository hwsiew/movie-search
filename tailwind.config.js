const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#7faae4',
        'secondary': '#834db7',
        'tertiary': '#34283f'
      },
      fontSize: {
        'heading': '18px',
        'body': '16px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
