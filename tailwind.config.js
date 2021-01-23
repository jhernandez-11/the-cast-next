module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': {'max': '1500px'},
      'min-2xl': {'min': '1500px'},
      'xl': {'max': '1200px'},
      'min-xl': {'min': '1200px'},
      'lg': {'max': '1080px'},
      'min-lg': {'min': '1080px'},
      'md': {'max': '780px'},
      'min-md': {'min': '780px'},
      'sm': {'max': '660px'},
      'min-sm': {'min': '660px'},
      'xs': {'max': '450px'},
      'min-xs': {'min': '450px'}
    },
    maxHeight: {
      '120': '30rem'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
