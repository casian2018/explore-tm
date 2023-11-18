// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt3-appwrite",
    "@pinia/nuxt",
    "nuxt3-leaflet",
    "nuxt-chatgpt"
  ],
  appwrite: {
    proxyRoute: "/appwrite",
  },
  chatgpt: {
    apiKey: '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'
  },
});
