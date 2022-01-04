module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", 
  theme: {
    extend: {
      /**
       * Colo(u)r scheme from: https://graphicmama.com/blog/website-color-schemes/ 
       * */
      colors: {
        "white": "#fefefe", 
        "glitter": "#e7e9f0",
        "light_glitter": "#EDEFF4",
        "oxford_blue": "#051747", 
        "payne_grey": "#535f80", 
        "royal_blue": "#081F62"
  
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}