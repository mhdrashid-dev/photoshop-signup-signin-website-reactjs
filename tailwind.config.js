/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:'Roboto'
      }
    },
    backgroundImage:{
      'hero':"url('/vscode/photoshop-website/src/Assets/account.jpg')"
    }    
  },
  plugins: [],
}
