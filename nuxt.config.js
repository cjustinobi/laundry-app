const pkg = require('./package')


module.exports = {
    mode: 'universal',
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:4000'
    },
    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/font-awesome/css/font-awesome.min.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/user', ssr: false },
        { src: '~/plugins/localStorage', ssr: false },
        { src: '~/plugins/notification', ssr: false },
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        '@nuxtjs/style-resources',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        baseURL: 'http://159.65.241.148/'
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extractCSS: true,
        styleResources: {
            scss: [
                './assets/scss/_mixins.scss'
            ]
        },
        extend(config, ctx) {

        }
    }
}
