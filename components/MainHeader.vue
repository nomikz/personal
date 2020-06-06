<template>

    <header
        class="header"
        :class="{'decreased': isHeaderDecreased}"
    >

        <div class="header__logo-box" @mouseenter="animateLogo">
            <img
                :class="animationClass"
                class="header__logo"
                src="~assets/images/logo.png"
            >
        </div>

        <nav class="header__nav">
            <ul class="inline-ul">
                <li v-for="(link, index) in menuLinks" :key="index">
                    <span
                        class="header__link-counter"
                        v-text="getLinkCounter(index)"
                    ></span>
                    <nuxt-link
                        class="header__link"
                        :to="link.href"
                        v-text="link.text"
                    ></nuxt-link>
                </li>

                <li>
                    <nuxt-link
                        tag="button"
                        class="header__cta primary-button"
                        to="#"
                    >
                        Resume
                    </nuxt-link>
                </li>
                <li>
                    <div class="switcher">

                        <div
                            @click="$emit('themeSwitched')"
                            class="switcher__item mdi"
                            :class="switcherClass"
                        ></div>


                    </div>
                </li>

            </ul>
        </nav>
    </header>
</template>


<script>
    export default {
        name: 'MainHeader',
        props: {
            isLightMode: {
                type: Boolean,
                default: false
            }
        },
        mounted () {
            window.addEventListener('scroll', this.onScroll);


            setInterval(() => {
                this.animateLogo();
            }, 6000);
        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.onScroll)
        },
        data() {
            return {
                lightThemeClassString: 'switcher__item--light mdi-white-balance-sunny',
                darkThemeClassString: 'switcher__item--dark mdi-weather-night',
                menuLinks: [
                    {
                        href: '',
                        text: 'About',
                    },
                    {
                        href: '',
                        text: 'Experience',
                    },
                    {
                        href: '',
                        text: 'Work',
                    },
                    {
                        href: '',
                        text: 'Contact',
                    },
                ],

                scrollPosition: 0,
                isAnimating: false,
            }
        },
        methods: {
            getLinkCounter(index) {
                index++;
                return '0' + index + '.';
            },
            onScroll() {
                this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            },
            animateLogo() {
                this.isAnimating = true;

                setTimeout(() => {
                    this.isAnimating = false;
                },1250);
            }
        },
        computed: {
            switcherClass() {
                return this.isLightMode ? this.lightThemeClassString : this.darkThemeClassString;
            },
            animationClass() {
                const classesArr = [
                    'rotate-left',
                    'rotate-right'
                ];
                const arrIndex = () => Math.floor(Math.random() * 2);
                return this.isAnimating ? classesArr[arrIndex()] : '';
            },
            isHeaderDecreased() {
                return this.scrollPosition > 40
            }
        }
    }
</script>

<style scoped lang="scss">
    .decreased {
        height: 70px;
        border-bottom: 1px solid #232129;
        box-shadow: rgba(0, 0, 0, 0.97) 0px 10px 30px -10px;
    }


    .theme-light .header.decreased {
        border-bottom: 1px solid #f0f0f2;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 10px 30px -10px;
    }


    //.scrolling-down {
    //    transform: translateY(-150px);
    //}

</style>
