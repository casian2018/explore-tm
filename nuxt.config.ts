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
