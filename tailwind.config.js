/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#050c17',
        'bg-splash': '#2a0005',
        'red-accent': '#FF003C',
        'cyan-accent': '#00f0ff',
        'green-accent': '#00FF9D',
        'purple-accent': '#b026ff',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
        'mono': ['"Fira Code"', 'monospace'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
