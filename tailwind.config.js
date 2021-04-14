module.exports = {
  purge: [
    './public/index.html',
    './src/**/*.{js,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Roboto Slab Light', 'serif']
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'background-light': '#fae7df',
      'background-dark': '#423042',
      'selection-light': '#ccffee',
      'selection-dark': '#314331',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
