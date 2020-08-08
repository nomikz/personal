<template>
    <div id="app" :class="getThemeClass">
        <div class="wrapper">
            <main-header
                @themeSwitched="switchTheme"
                :isLightMode="isLightMode"
            ></main-header>

            <nuxt/>

            <main-footer />
        </div>
    </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';

export default {
    computed: {
        getThemeClass() {
            return this.isLightMode ? 'theme-light' : 'theme-dark';
        }
    },
    data() {
        return {
            isLightMode: true,
        }
    },
    methods: {
        switchTheme() {
            this.isLightMode = !this.isLightMode;
        }
    },
    head() {
        return {
            titleTemplate: "%s - nomi.kz",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'This is personal blog of the self taught software developer',
                }
            ],
        }
    },
    components: {
        MainHeader,
        MainFooter,
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/styles.scss';
</style>
