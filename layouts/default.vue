<template>
    <div id="app">
        <nuxt/>
    </div>
</template>

<script>

export default {
    head() {
        return {
            titleTemplate: "%s- blog",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Lifestyle deconstructed',
                }
            ],
        }
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/styles.scss';
</style>
