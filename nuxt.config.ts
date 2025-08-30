// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/style.css"],
  // way 3: using nuxt.config.ts for global meta tags 
  app: {
    head: {
      title: "My Nuxt.js Application",
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "My Nuxt.js Application",
        },
        {
          name: "keywords",
          content: "development, Vuejs, Nuxtjs",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
