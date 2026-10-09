/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sea-blue': '#129246',
        'sea-blue-dark': '#0f7a39',
        'sea-blue-light': '#16a855',
        'yellow-accent': '#fbbf24',
        'yellow-accent-dark': '#f59e0b',
      },
    },
  },
  plugins: [],
}
