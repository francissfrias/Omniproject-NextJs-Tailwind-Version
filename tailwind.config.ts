import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e67e22',
        tintWhite: '#fdf2e9',
        tintBeige: '#fae5d3',
        tintOrange: '#eb984e',
        shadeOrange: '#cf711f',
        shadeDarkOrange: '#45260a',
        accentGray: '#888',
        accentLightestGray: '#767676',
        accentLightGray: '#6f6f6f',
        accentDarkGray: '#555',
        accentDarkestGray: '#333',
      },
      boxShadow: {
        insideShadow: 'inset 0 0 0 3px #fff',
      },
    },
  },
  plugins: [],
};
export default config;
