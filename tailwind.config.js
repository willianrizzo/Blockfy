/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Bitcoin': "url('assets/backgroung.svg')"
      }
    },
  },
  plugins: [],
}

