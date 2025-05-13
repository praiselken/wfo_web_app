/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl': "6rem",
        },
      },
      keyframes: {
        flashColors: {
          '0%': { color: '#CDF239' },
          '25%': { color: '#F24CBE' },
          '50%': { color: '#00F6ED' },
          '75%': { color: '#81089F' },
          '100%': { color: '#CDF239' },
        },
      },
      animation: {
        flash: 'flashColors 2s infinite',
      },
    },
  },
  plugins: [],
};
