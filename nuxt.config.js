export default {
    mode: 'universal',
    head: {
        title: '%s nomi.kz',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || ''
            }
        ],
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap'
            },
        ]
    },
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        'nuxtjs-mdi-font'
    ],
    axios: {
        baseURL: "http://localhost:8000",
        credentials: true
    },
    loading: {
        color: '#b17acc',
        height: '3px',
        throttle: 0,
        duration: 1000,
        rtl: true,
        continuous: true,
    },
    build: {
        extend(config, ctx) {
        }
    },
    css: [],
    plugins: [],
    buildModules: [],
    router: {},
    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: '/login',
                        method: 'post',
                        propertyName: false
                    },
                    logout: {
                        url: '/logout',
                        method: 'post',
                        propertyName: false
                    },
                    user: {
                        url: '/api/user',
                        method: 'get',
                        propertyName: false
                    }
                },
            },
            tokenRequired: false,
            tokenType: false,
        },
    },
}
