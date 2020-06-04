export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap'
            }

        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#13111c'},
    /*
    ** Global CSS
    */
    css: [
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/vuetify',
    ],
    vuetify: {
        /* module options */
    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    router: {
        scrollBehavior(to) {
            if (to.hash) {
                return window.scrollTo({ top: document.querySelector(to.hash).offsetTop + window.innerHeight, behavior: 'smooth' });
            }
            return window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
