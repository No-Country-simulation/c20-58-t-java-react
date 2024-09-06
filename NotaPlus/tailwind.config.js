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
        'primaryBG': '#0f124b',
        'yellowGreen_Button': '#85C226',
        'tea_borderButton':'#008285',
        'palatinateBlue_Button':'#2c45f8',
        'resolutionBlue_footer':'#292782',
        'silver_borderInput':'#a9a9a9',
        'argentinianBlue_logo':'#61b1fd',
        'mexicanPink_logo':'#e11282',
        'internationalKleinBlue_menu':'#2227a5',
        'pennBlue_bg':'#0d0f3f'


      },
      fontFamily: {
        'primary': ['Roboto', 'sans-serif'],
        'secondary':['Raleway', 'sans-serif']
      },
      backgroundImage: {
        'custom': 'linear-gradient(90deg, #0D0F3F 0%, #2227A5 100%)',
        'fondoOpcion1': "url('/src/asset/fondoOpcion1.png')",
        'fondoOpcion2': "url('/src/asset/fondoOpcion2.png')"

      },
    },

  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

