module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
        
      },
      content: {
      },
      colors: {
        primary: '#0054a6',
        secondary: '#f0f0f0',
        tertiary: '#c5e3f6',
        accent: {
          DEFAULT: '#2f89fc',
          hover: '#2d6cdf',
        },
        paragraph: '#00000',
      },
      
    },
  },
  plugins: [],
};