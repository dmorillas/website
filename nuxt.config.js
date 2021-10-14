import { client, getPages } from './plugins/contentful.js'

export default {
  env: {
    SPACE: process.env.SPACE,
    DELIVERY: process.env.DELIVERY,
    ORIGIN: process.env.ORIGIN
  },

  target: 'static',

  globalName: 'pnkfrg',

  loading: {
    color: '#4af3a1',
    height: '5px'
  },

  head: {
    title: 'pnkfrg',

    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: '#4af3a1'
      },
      {
        name: 'apple-mobile-web-app-title',
        content: 'pnkfrg'
      },
      { name: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@pnkfrg' },
      { name: 'twitter:creator', content: '@pnkfrg' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'pnkfrg' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: process.env.ORIGIN + '/thumbnail.jpg'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: process.env.ORIGIN + '/thumbnail.jpg'
      }
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['@/assets/fonts/fonts.css'],

  plugins: [
    { src: '@/plugins/contentful.js' },
    { src: '@/plugins/parallax.js', mode: 'client' }
  ],

  components: true,

  modules: ['@nuxtjs/markdownit'],

  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  buildModules: ['@nuxtjs/pwa'],

  pwa: {
    icon: {
      purpose: 'any'
    },
    manifest: {
      lang: 'en',
      name: 'pnkfrg studios',
      short_name: 'pnkfrg',
      description: 'pnkfrg studios create casual games to captivate the world.',
      theme_color: '#fecdff',
      background_color: '#1126ea',
      start_url: '/'
    }
  },

  generate: {
    async routes () {
      return getPages()
    }
  }
}
