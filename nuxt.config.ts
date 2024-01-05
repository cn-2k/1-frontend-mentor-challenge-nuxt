// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Welcome to Nuxt',
      meta: [{ name: 'description', content: 'My awesome Nuxt project' }],
      link: [{ rel: 'icon', href: '/favicon.ico' }],
    },
  },

  css: ['~/assets/scss/main.scss'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-tailwind-lightbox',
    'nuxt-icons',
    'nuxt-headlessui',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],

  eslint: {
    lintOnStart: false,
    formatter: 'visualstudio',
  },

  googleFonts: {
    families: {
      'Kumbh Sans': {
        wght: [400, 700],
      },
    },
  },

  tailwindcss: {},

  headlessui: {
    prefix: 'Headless',
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  ssr: false,

  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
});
