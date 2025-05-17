/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        cyan: {
          100: '#E0F7FA',
          200: '#B2EBF2',
          300: '#4DD0E1',
          400: '#26C6DA',
          500: '#00BCD4',
        },
        teal: {
          800: '#115E59',
          900: '#0F4C45',
        },
      },
      animation: {
        pulse: 'pulse 2s infinite',
      },
      blur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
      },
    },
  },
  plugins: [],
};
