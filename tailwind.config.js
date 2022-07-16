/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond'],
        nautigal: ['The Nautigal'],
        grand: ['Grand Hotel'],
        quicksand: ['Quicksand']
      },
      width: {
        18: '70px'
      },
      fontSize: {
        'button': ['13px'],
        'normal': ['22px', { lineHeight: '1em' }],
        'exlarge': ['64px']
      },
      colors: {
        brown: {
          50: '#D0B17E',
          70: '#EBEAE7',
          80: '#B19385',
          100: '#EADABF',
          200: '#EAE2DF',
          250: '#EBEAE7',
          275: '#F2F1EE',
          300: '#866D62',
          400: '#434343',
          500: '#625757',
        },
        grey: {
          100: '#625757',
          200: '#7F7F7F',
        },
        black: {
          500: '#171717'
        }
      },
      borderRadius: {
        frame: '40px 100px 40px 100px',
        20: '20px',
        40: '40px',
        50: '50px',
        200: '200px',
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in forwards"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      },
      variants: {
        animation: ["motion-safe"]
      }
    },
  },
  plugins: [],
}
