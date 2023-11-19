// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt3-appwrite",
    "@pinia/nuxt",
    "nuxt3-leaflet",
    "nuxt-chatgpt",
  ],
  appwrite: {
    proxyRoute: "/appwrite",
  },
  chatgpt: {
    apiKey: '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'
  },
  routeRules: {
    '/csuki/**': {
        proxy: { to: "https://www.csuki.com/app/**", },
    },
    '/etwow/**': {
        proxy: { to: "http://e-twow.app/gps/**", },
    },
    '/trotm/**': {
        proxy: { to: "http://trotm.ro/gps/**", },
    },
  }
});
