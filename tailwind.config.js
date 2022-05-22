module.exports = {
  content: ["./src/**/*.{jsx, css}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Oswald"', 'sans-serif']
    },
    extend: {
      colors : {
        blue : '#1B72E8',
        purple : '#4A154B',
        }
      }
    },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}