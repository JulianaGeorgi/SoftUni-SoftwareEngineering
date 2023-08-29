/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      colors: {
        "dark-green": "#386641",
        "light-green": "#A7C957",
        "champagne": "#F2E8CF",
        "alice-blue": "#EDF6F9",
        "watermelon-red": "#BC4749",
        "font-dark": "#313030",
      },

        backgroundImage: {
          'forest': "url('https://img.freepik.com/free-photo/aerial-view-green-forest_144627-45271.jpg?w=2000')",
        }
  
    },
  },
  plugins: [],
}

