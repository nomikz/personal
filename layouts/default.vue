<template>
    <div id="app">

        <main-header />

        <nuxt/>

        <main-footer />

        <social-links />
        <telegram-link />
    </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';
import SocialLinks from '~/components/SocialLinks';
import TelegramLink from '~/components/TelegramLink';

export default {
    head() {
        return {
            titleTemplate: "%s - Blog",
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
        SocialLinks,
        TelegramLink,
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/styles.scss';
</style>
