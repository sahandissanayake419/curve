const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ['sans']:['product-sans',...defaultTheme.fontFamily.sans]
      },
      colors:{
        
      },
      scale:{
        '175':'1.75'
      }
    },
  },
  plugins: [],
};
