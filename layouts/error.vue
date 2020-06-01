<template>

    <div>
        error message: {{error.message}}
        <div v-if="error.statusCode === 404">
            return to home <nuxt-link to="/">Home</nuxt-link>
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
