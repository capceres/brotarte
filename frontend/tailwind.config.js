export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-50px) rotate(0deg)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
      },
      animation: {
        fall: 'fall linear infinite',
      },
       fontFamily: {
        akshar: ['"Akshar"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
