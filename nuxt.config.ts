// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  // router: {
  // middleware: "auth",
  // },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxtjs/i18n"],
  plugins: [
    "~/plugins/sso.client.js",
    "~/plugins/server.js",
    "~/plugins/vayu-vue.client.js",
    "~/plugins/vee-validate.js",
  ],

  // I18n Config
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.js",
      },
      {
        code: "gj",
        name: "Gujarati",
        file: "gj.js",
      },
      {
        code: "hi",
        name: "Hindi",
        file: "hi.js",
      },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "locale_",
      redirectOn: "root",
    },
  },

  // PWA App Options
  pwa: {
    manifest: {
      name: "Nuxt3 PWA Test",
      short_name: "Nuxt3 PWA",
      theme_color: "#ffffff",
      description: "Testing Nuxt3 PWA",
      icons: [
        {
          src: "/assets/icons/icon-72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-128x128.png",
          sizes: "128x128",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-152x152.png",
          sizes: "152x152",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-384x384.png",
          sizes: "384x384",
          type: "image/png",
        },
        {
          src: "/assets/icons/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  // Run Time Providers
  runtimeConfig: {
    public: {
      API_ENDPOINT: process.env.API_ENDPOINT || "",
      APP_VERSION: process.env.APP_VERSION || "",
    },
  },
});
