/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: { title_red: "#FE0000", title_blue: "#2196F3" },
    extend: {
      fontFamily: {
        popponi: ["Popponi", "sans-serif"],
      },
      screens:{
        'laptop':'1024px'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
