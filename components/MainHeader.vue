<template>

    <header
        class="header"
        :class="{
                'decreased': lastScrollPosition > 90,

            }"
    >
        <img class="header__logo" src="https://raw.githubusercontent.com/Gherciu/gatsby-all-in/master/static/logo.png" alt="">
        <nav class="header__nav">
            <ul class="inline-ul">
                <li>
                    <span>01.</span>
                    <nuxt-link
                        to="#"
                    >
                        About
                    </nuxt-link>
                </li>
                <li>
                    <span>02.</span>
                    <nuxt-link
                        to="#"
                    >
                        Experience
                    </nuxt-link>
                </li>
                <li>
                    <span>03.</span>
                    <nuxt-link
                        to="#"
                    >
                        Work
                    </nuxt-link>
                </li>
                <li>
                    <span>04.</span>

                    <nuxt-link
                        to="#"
                    >
                        Contact
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                        tag="button"
                        class="primary-button"
                        to="#"
                    >
                        Resume
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script>
    export default {
        name: 'MainHeader',
        data() {
            return {
                lastScrollPosition: 0,
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        methods: {
            onScroll() {
                this.lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            },
        },

    }
</script>

<style>
    .decreased {
        height: 70px;
        border-bottom: 1px solid #232129;
        box-shadow: rgba(0, 0, 0, 0.97) 0px 10px 30px -10px;
    }

    .scrolling-down {
        transform: translateY(-150px);
    }

</style>
