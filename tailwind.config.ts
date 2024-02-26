import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      dusky: '#0b0a10',
      'dusky-alt': 'rgba(11,10,16,0.5)',
      moonlit: '#f5f5f7',
      midnight: '#343436',
      noon: '#efeef2',
				'neon-blue': '#4353ff',
				'light-green': '#7cea9cff',
				'french-rose': '#f75590ff',
				'space-cadet': '#2e294eff',
				'dark-orange': '#f58f29ff',
				'raisin-black': '#1c1e23',
				'front-white': '#fbfbfd',
				'lilla-uk': '#7068fa',
				'gray-cool': '#2a3036',
				'gray-chacra': '#718096',
				'sun-beam': '#d69e2e',
      },
      animation: {
				'infinite-scroll': 'infinite-scroll 25s linear infinite',
			},
      keyframes: {
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' },
				},
			},

    },
  },
  plugins: [],
};
export default config;
