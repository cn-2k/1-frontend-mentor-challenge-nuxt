/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',
  './app.vue',
  './node_modules/nuxt-tailwind-lightbox/**/*.{js,ts,vue}',
];
export const theme = {
  extend: {
    fontFamily: {
      sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      primary: {
        orange: 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
      },
      neutral: {
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        'black-soft': 'hsl(0, 0%, 0.75)',
      },
    },
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
  },
};
