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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
