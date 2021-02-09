module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce .6s linear infinite',
        'bounce-slowest': 'bounce .7s linear infinite',
        'bounce-slower': 'bounce .8s linear infinite'
      },
      keyframes: {
        bouncing: {
          '0%, 100%': { transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
          '50%': { transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
