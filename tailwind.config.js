/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        header: '#E4B062',
        border: '#27569C',
        input: '#D9D9D9',
      },
      borderWidth: {
        5: '5px',
      },
      maxWidth: {
        37.5: '150px',
      },
    },
  },
  plugins: [],
}
