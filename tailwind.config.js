/** @type {import('tailwindcss').Config} */
export default { 
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero': "url('https://media.cntraveler.com/photos/61e886f19580ae68b5219023/master/pass/Oji%20Seichi%20Toronto_Oji%20Food-Food%20Spread_Roberto%20Caruso.jpg')",
        'hero2':"url('https://wallpapers.com/images/featured/food-photography-background-iyvy1e8yztvry3g8.jpg')"
      }
    },
    
  },
  plugins: [],
  prefix: 'tw-',
}