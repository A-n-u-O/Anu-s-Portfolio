import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#355070',
        secondary: '#6D597A',
        accent: '#E56B6F',
        accentSoft: '#B56576',
        highlight: '#EAAC8B',
      },
    },
  },
  plugins: [],
}
export default config