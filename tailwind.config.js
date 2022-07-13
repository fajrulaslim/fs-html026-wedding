/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond'],
        nautigal: ['The Nautigal'],
      },
      fontSize: {
        'button': ['13px'],
        'normal': ['22px', { lineHeight: '1em' }],
        'exlarge': ['64px']
      },
      colors: {
        brown: {
          50: '#D0B17E',
          100: '#EADABF',
          200: '#EAE2DF',
          300: '#866D62',
          500: '#625757',
        }
      }
    },
  },
  plugins: [],
}
