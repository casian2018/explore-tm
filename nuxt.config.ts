// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt3-appwrite",
    "@pinia/nuxt",
    "nuxt3-leaflet",
  ],
  appwrite: {
    proxyRoute: "/appwrite",
  },
});
