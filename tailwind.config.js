/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '345px': '345px',
        '395px': '395px',
        '700px':"700px",
        '73px': '73px',
        '1750px': '1750px',
        '148px': '148px'
      },
      width: {
        '73px': '73px',
        '108px': '108px'
      },
      height: {
        '73px': '73px',
        '48px': '48px'
      },
      colors: {
        'primary-color': '#1E1E1E',
        'secondary-color': '#FF40FF',
        'pink-1': '#7102C1',
        'pink-2': '#FF69FF',
        'pink-3': '#E053F2',
        'light-blue': '#1B1A1F',
        'text-color': '#A19FA0',
        'grey-color':"#A3A3A3",
        'black-1':"#202020"
      },
      fontSize: {
        '10px':"10px",
        '28px': "28px",
        '26px': "26px",
        '22px': "22px",
        '32px':"32px"
      },
      borderRadius: {
        '10px': "10px"
      },
      lineHeight: {
        '25px': '25px',
        '16px': '16px'
      }
    },
  },
  plugins: [],
}