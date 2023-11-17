/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'header':' #003786',
        'main-home': '#E1A54D',
        'btn-home': '#0048AE',
        'btn-vagas':' #005BD2',
        'btn-orange': '#E8A023',
        'font': '#302C29',
        'header-empresa': '#243B53',
        'main-empresa': '#E8A023',
        'detalhes-empresa': '#2F4E6D',
        'main-landing': '#F0F2FF',
      },
    },
  },
  plugins: [],
}
