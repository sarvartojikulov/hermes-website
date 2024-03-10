import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary : "#005BBB",
        "primary-dark" : "#003670",
        secondary: "#FFD500",
      },
      textDecorationThickness: {
        10: '10px',
      },
      borderWidth: {
        '10': '10px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
