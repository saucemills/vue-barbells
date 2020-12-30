import { faBars } from "@fortawesome/free-solid-svg-icons";

const customIcons = {
  bars: {
    viewBox: "0 0 448 512",
    path: `<path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/>`
  }
};

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "vue-barbells",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ["@chakra-ui/nuxt", "@nuxtjs/emotion"],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
  chakra: {
    extendTheme: {
      colors: {
        brand: {
          /* ... */
        }
      }
    },
    icons: {
      extend: {
        ...customIcons
      },
      // Here we state that we use `fa`
      // icons library for Chakra's
      // internal icon parser
      iconPack: "fa",
      iconSet: {
        faBars
      }
    }
  }
};
