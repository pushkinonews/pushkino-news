module.exports = {
  /*
  ** Headers of the page
  */
  css: [
    'static/spectre.min.css',
    {src: 'static/main.less', lang: 'less'}
  ],
  head: {
    title: 'Пушкинское телевидение',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        name: 'description',
        content: 'Первый новостной в Пушкинском районе М.О.'
      },
      {
        name: 'keywords',
        content: 'pushkino news, pushkino tv, пушкинкино тв, пушкинское телевидение, реклама на телевидение в пушкино, пуш тв, реклама в пушкино, твой пушкинский'
      }
    ],
    /*
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ] */
  },
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  *  Плагины
  * */
  plugins: [
    {src: '~plugins/ga.js', ssr: false},
    {src: '~plugins/jivosite.js', ssr: false}
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
