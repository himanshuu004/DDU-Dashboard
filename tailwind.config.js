/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
        display: ['Poppins', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        govBlue: {
          50: '#e6f1ff',
          100: '#b3d9ff',
          200: '#80c1ff',
          300: '#4da9ff',
          400: '#1a91ff',
          500: '#0079e6',
          600: '#0061b3',
          700: '#004980',
          800: '#00314d',
          900: '#00191a',
        },
        govGreen: {
          50: '#e6f5f0',
          100: '#b3e6d1',
          200: '#80d7b2',
          300: '#4dc893',
          400: '#1ab974',
          500: '#009a55',
          600: '#007b44',
          700: '#005c33',
          800: '#003d22',
          900: '#001e11',
        },
      },
    },
  },
  plugins: [],
}

