/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js", // (Assuming you still have Flowbite)
  ],
  // ADD THIS LINE RIGHT HERE:
  darkMode: 'class', 
  theme: {
    extend: {},
  },
  plugins: [],
}