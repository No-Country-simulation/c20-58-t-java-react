/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Black': '#1E2832',
        'white':'#ffffff',
        'grey_user':'#6c7078',
        'primaryBG': '#1e28320d',
        'yellowGreen_Button': '#85C226',
        'tea_borderButton':'#008285',
        'palatinateBlue_Button':'#2c45f8',
        'silver_borderInput':'#a9a9a9',
        'argentinianBlue_logo':'#61b1fd',
        'mexicanPink_logo':'#e11282',
        'internationalKleinBlue_menu':'#2227a5',
        'pennBlue_bg':'#0d0f3f'

      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'custom': 'linear-gradient(90deg, #0D0F3F 0%, #2227A5 100%)',
      },
    },
  },
  plugins: [],
}
