/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: { myYellow: '#ffea00',
        bgcl: '#d2d4da'
       },
    },
  },
  plugins: [],
}

