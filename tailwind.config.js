/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
          colors:{
            "car": "#FF3811",
            "car2nd": "#151515"
          }
        },
        daisyui:{
          themes: [
            "dark", "light"
          ]
        }
    },
    plugins: [require("daisyui")],
}