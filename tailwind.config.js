/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        limeBright: 'hsl(150, 88%, 59%)',
        limeBrightLight: 'hsl(150, 88%, 69%)',
        limeBrightSupLight: 'hsl(150, 88%, 95%)',
        limePale: 'hsl(146, 100%, 96%)',
        pinkBrightLight: 'hsl(335, 85%, 70%)',
        pinkBright: 'hsl(335, 85%, 60%)',
        pinkDark: 'hsl(330, 39%, 23%)',
        pinkDarkGrayish: 'hsl(329, 12%, 61%)',
        pinkVeryDark: 'hsl(233, 12%, 13%)',
        grayVeryLight: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [],
}
