/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
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
      xl: '1280px',
      xxl: '1440px',
    },

    extend: {
      colors: {
        "dark-green": "#386641",
        "light-green": "#A7C957",
        "frog": "#afe1a1",
        "champagne": "#F2E8CF",
        "alice-blue": "#EDF6F9",
        "watermelon-red": "#BC4749",
        "font-dark": "#313030",
      },

      backgroundImage: {
        "forest": "url('https://shopprogression.com/wp-content/uploads/2022/08/i.shgcdn-scaled.webp')",
        "scientist": "url('https://studenthub.africa/app/uploads/careers/M5usarbpr7lZHAcpTUKGgSS5sbhm3bpD.jpg')",
        "earthDay": "url(https://www.yardi.com/blog/wp-content/uploads/sites/15/2022/04/rsz_adobestock_332835800.jpg)",
        "not-found": "url(https://grist.org/wp-content/uploads/2022/03/GettyImages-1072438388.jpg)"
      }

    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")],
}

