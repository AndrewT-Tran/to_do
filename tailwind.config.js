/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html', './src/components/**/*{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      sans: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

