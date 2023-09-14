
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
   './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    
  ],
  theme: {
    extend: {
      height: {
        'h-custom': '90vh',
      },
      colors: {
        'custom-color': 'rgba(16,16,16,0.85)',
      },
    },
  },

  darkMode: "class",
  plugins: [nextui()],
}
