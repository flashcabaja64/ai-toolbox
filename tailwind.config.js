/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero": "url('./assets/hero_image.png')"
      },
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        "white": "#ffffff",
        "primary": "#1B2129",
        "secondary": "#282D34"
      },
      screens: {
        "2xl": { max: "1535px" },
        xl: { max: "1279px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "639px" },
        xs: { max: "479px" },
      },
      keyframes: {
        fadeInSlideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(100px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        fadeInSlideDown: 'fadeInSlideDown 0.5s ease-out',
        fadeInSlideUp: 'fadeInSlideUp 0.5s ease-out'
      }
    },
  },
  plugins: [],
}

