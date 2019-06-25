import pkg from './package'

export default {
    mode: 'universal',

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
    env: {
        // baseUrl: 'http://127.0.0.1:9000/'
        baseUrl: 'http://134.209.45.60:81/'
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/css/page-transition.css',
        '~/assets/font-awesome/css/font-awesome.min.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/axios' },
        { src: '~/plugins/user' },
        { src: '~/plugins/localStorage', ssr: false },
        { src: '~/plugins/notification' },
        { src: '~/plugins/asyncComputed', ssr: false }
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

       // baseURL: 'http://127.0.0.1:9000/api/'
        baseURL: 'http://134.209.45.60:81/api/'

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
    },
    generate: {
        minify: {
            collapseWhitespace: false
        }
    }
}
