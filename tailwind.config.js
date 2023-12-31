/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       width: {
         "30" : "30%",
          "48" : "48%",
          "72" :"72%",
          "25" :"25%"
       },
       lineHeight: {
        'p': '1.6', 
      },
      height: {
        "90vh" : "90vh"
      }
    },
  },
  plugins: [],
}

