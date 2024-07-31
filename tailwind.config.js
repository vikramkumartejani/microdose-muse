/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        alethia: ['AlethiaPro', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
