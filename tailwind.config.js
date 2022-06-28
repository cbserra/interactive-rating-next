/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        'black-gradient-radial': 'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
      }),
      colors: {
        'transparent': 'transparent',
        'current': 'currentColor',
        'orange': 'hsl(25, 97%, 53%)',
        'white': 'hsl(0, 0%, 100%)',
        'light-grey': 'hsl(217, 12%, 63%)',
        'medium-grey': 'hsl(216, 12%, 54%)',
        'dark-blue': 'hsl(213, 19%, 18%)',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif']
      },
      spacing: {
        5.5: '1.375rem',
        10.5: '2.625rem'
      }
    },
  },
  plugins: [],
}
