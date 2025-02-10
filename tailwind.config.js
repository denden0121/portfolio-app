/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'parallax' : 'url("./sea.jpg")',
      },
      animation: {
        'left-to-right': 'left-to-right 3s ease-in-out',
        'up': 'up 2s ease-in-out',
        'up-smooth': 'up-smooth 1s ease-in-out',
        'down': 'down 2s ease-in-out',
        'show': 'show 2s ease-in-out',
        'span-l-r': 'span-l-r 2s ease-in-out',
      },
      keyframes: {
        'left-to-right': {
          '0%': { transform: 'translateX(30%)', opacity: '0' },
          '20%': { transform: 'translateX(0)', opacity: '.2' },
          '80%': { transform: 'translateX(0)', opacity: '.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
       'span-l-r': {
          '0%': { transform: 'width(0%)', opacity: '0' },
          '25%': { transform: 'width(20%)', opacity: '.2' },
          '50%': { transform: 'width(50%)', opacity: '.5' },
          '100%': { transform: 'width(100%)', opacity: '1' },
        },
        'up': {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '.2' },
          '100%': { transform: 'translateY(0)', opacity: '.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'up-smooth': {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '20%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-10%)', opacity: '1' },
        },
        'down': {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '20%': { transform: 'translateY(0)', opacity: '.2' },
          '80%': { transform: 'translateY(0)', opacity: '.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'show': {
          '0%': { transform: 'translateX(0%)', opacity: '0' },
          '50%': { transform: 'translateX(0)', opacity: '.2' },
          '80%': { transform: 'translateX(0)', opacity: '.5' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

