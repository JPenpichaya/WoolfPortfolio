/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        glow: {
          '0%, 100%': { transform: 'translateY(-2px)', textShadow: '0 0 10px #00C8FF' },
          '50%': { transform: 'translateY(4px)', textShadow: '0 0 20px #00C8FF' },
        },
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

