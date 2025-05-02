/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f7f4',
          100: '#f0ede5',
          200: '#e0d8c7',
          300: '#cebea3',
          400: '#b9a07c',
          500: '#a6896a',
          600: '#96795f',
          700: '#7c634f',
          800: '#665144',
          900: '#54443a',
          950: '#2c231e',
        },
        accent: {
          50: '#f3fcf9',
          100: '#d6f5eb',
          200: '#adeada',
          300: '#79d7c2',
          400: '#49bdaa',
          500: '#36a491',
          600: '#2a7f73',
          700: '#27665d',
          800: '#24524c',
          900: '#214540',
          950: '#0e2927',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'about-pattern': "url('https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        'services-pattern': "url('https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      },
    },
  },
  plugins: [],
}
