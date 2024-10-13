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
        custom: "linear-gradient(90deg, #002530 0%, #367667 164.1%)",
        'custom-one': "linear-gradient(96.16deg, #855AF3 0.54%, #28887A 50.77%, #EC945F 100%)",
        'custom-two': "linear-gradient(180deg, #855AF3 0%, #EC945F 100%)"
      },
      fontFamily:{
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        alethia: ['AlethiaPro', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      boxShadow:{
        custom: '0px -16px 40px 0px #0000001F',
      },
      rotate: {
        '17': '20deg',
        '210': '210deg',
      }
    },
  },
  plugins: [],
};
