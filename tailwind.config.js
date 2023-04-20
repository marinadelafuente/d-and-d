/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007CBE',
        secondary: '#884EB1',
        tertiary: '#5D6BBB',
        warning: '#BE0900',
        ok: '#4C8534',
        white: '#FFFFFF',
        black50: 'rgba(0, 0, 0, 0.5)',
        'blueberry-50': '#F0F2F9',
        'blueberry-100': '#C9CEE9',
        'blueberry-200': '#A5ACDA',
        'blueberry-300': '#818CCA',
        'blueberry-400': '#5D6BBB',
        'blueberry-500': '#4451A2',
        'blueberry-600': '#353F7E',
        'blueberry-700': '#222953',
        'blueberry-800': '#0F1224',
        'neutral-100': '#F2F2F2',
        'neutral-200': '#DBDBDB',
        'neutral-300': '#BDBDBD',
        'neutral-400': '#9C9C9C',
        'neutral-500': '#767676',
        'neutral-600': '#545454',
        'neutral-700': '#333333',
        'neutral-800': '#0D0D0D'
      },
      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        md: '1.4rem',
        xl: '2rem',
        '2xl': '2.6rem',
        '3xl': '3.2rem',
        '4xl': '4rem',
        '5xl': '4.8rem'
      }
    }
  },
  plugins: []
}
