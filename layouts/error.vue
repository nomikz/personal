<template>
    <div class="error-page-wrapper">

        <div
            class="error light-mode-shadow"
        >
            <h4 class="error__heading">Упс ... Страница не найдена</h4>
            <p class="error__not-found">404</p>
            <p class="error__text">Вернуться на
                <nuxt-link to="/"
                           class="underlined-link"
                >
                    Главную
                </nuxt-link>
            </p>

        </div>

    </div>
</template>

<script>
    export default {
        props: {
            error: {
                type: Object,
                default: null,
            },
            created() {

            },
            head() {
                return {
                    title: this.message,
                }
            },
            computed: {
                statusCode() {
                    return this.error.statusCode || 500;
                    },
                message() {
                    return this.error.message || '';
                }
            },
        }
    }
</script>
<style scoped lang="scss">

</style>
