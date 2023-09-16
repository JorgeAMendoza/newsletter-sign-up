/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      navy: {
        pale: '#36384D',
        dark: '#242742',
      },
      vermillion: '#FF6155',
      white: '#fff',
    },
    container: {
      center: true,
      padding: {
        md: '2rem',
      },
    },
    fontSize: {
      '4xl': '2.5rem',
    },
  },
  plugins: [],
}
