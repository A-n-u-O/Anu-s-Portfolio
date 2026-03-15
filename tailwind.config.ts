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
        primary: '#e27396',
        secondary: '#ea9ab2',
        accent: '#efcfe3',
        muted: '#eaf2d7',
        light: '#b3dee2',
      },
    },
  },
  plugins: [],
}
export default config