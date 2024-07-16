module.exports = {
  darkMode: 'class', // Use 'media' if you prefer to use the user's system preference
  content: [
    './index.html', // Path to your HTML file
    './assets/**/*.css', // Path to your CSS files in the assets folder
    './styles.css' // Path to your main styles.css file
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
