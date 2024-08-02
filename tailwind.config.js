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
        custom: "linear-gradient(90deg, #002530 0%, #367667 164.1%)"
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        alethia: ['AlethiaPro', 'sans-serif'],
      },
      boxShadow:{
        custom: '0px -16px 40px 0px #0000001F',
      }
    },
  },
  plugins: [],
};
