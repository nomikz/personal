<template>
    <div id="app">

        <main-header></main-header>
        <nuxt/>
        <main-footer></main-footer>

        <!--todo floater for social links-->
        <!--todo floater for quick contact-->
    </div>
</template>

<script>
import MainHeader from '~/components/MainHeader';
import MainFooter from '~/components/MainFooter';

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
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/styles.scss';
</style>
