module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
         'poppins': ['Poppins', 'sans'],
      },
    },
    screens:{
      mobile : "380px",
      sm : "640px",
      md : "768px",
      lg : "1064px"
    }
  },
  plugins: [],
}