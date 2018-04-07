module.exports = {
  head: {
    title: "bitraten",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }
    ]
  },
  css: [
    "typeface-source-sans-pro",
    "typeface-vollkorn",
    "@/assets/css/layout.css",
    "@/assets/css/style.css"
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
