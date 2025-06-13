/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        behruz: '1400px',
        sem: '200px'

      },
    },
    container: {
      padding: '10px',
      center: true,
      screens: {
        sem: '200px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1180px',
        behruz: '1400px'
      }
    },
  },
  plugins: [],
}

