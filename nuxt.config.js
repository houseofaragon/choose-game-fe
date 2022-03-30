import { resolve } from 'path'
import axios from "axios";

let dynamicRoutes = async () => {
  const pages = await axios.get(`http://localhost:1337/api/pages`)
  
  return pages.data.data.map(page => {
    return {
      route: `/story/${page.attributes.slug}`,
      payload: {...page.attributes}
    }
  })
}

export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Choose your own adventure',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=VT323&display=swap' }
    ],
    script: [
      {
        src: "https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js",
      },
    ],
  },
  generate: {
    routes: dynamicRoutes
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.scss'
  ],

  colorMode: {
    classSuffix: ""
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/getPagesData.server.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    //'troisjs'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
  purgeCSS: {mode: 'postcss'},

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.GRAPHQL_URL || "http://localhost:1337/graphql"
      }
    }
  },
  env: {
    strapiBaseUri: process.env.API_URL || "http://localhost:1337"
  },
}
