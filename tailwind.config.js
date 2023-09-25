/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      listStyleImage: {
        checkmark: 'url("/src/assets/images/icon-list.svg")',
      },
      borderRadius: {
        'card-tablet': '28px',
      },
      fontSize: {
        xs: '.75rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '4xl': '2.5rem',
      },
    },
    colors: {
      navy: {
        pale: '#36384D',
        dark: '#242742',
      },
      vermillion: {
        base: '#FF6155',
        light: 'rgba(255, 97, 85, .15)',
      },
      white: '#fff',
      grey: {
        25: 'rgba(25, 24, 43, 0.25)',
      },
    },
    container: {
      center: true,
      padding: {
        md: '2rem',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
