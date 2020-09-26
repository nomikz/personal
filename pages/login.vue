<template>
    <div class="temp">
        <div class="login">

            <div>
                <input
                    id="email"
                    v-model="email"
                    type="email"
                >
                <label for="email">
                    Email
                </label>
            </div>

            <div>
                <input
                    id="password"
                    v-model="password"
                    type="password"
                >
                <label for="password">
                    Password
                </label>
            </div>

            <button
                @click="login"
                class="login__button"
            >
                Login
            </button>


            <button
                @click="logout"
                class="login__button"
            >
                Logout
            </button>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                email: '',
                password: '',
                error: null,
            }
        },
        mounted() {
            this.$axios.$get('/sanctum/csrf-cookie');
        },
        methods: {
            async login() {
                await this.$auth.loginWith('local', {
                    data: {
                        email: 'nomikztop@gmail.com',
                        password: '1423qrwe',
                    }
                });
            },
            async logout() {
                await this.$auth.logout('local');
            },
        },
        head() {
            return {
                title: "login",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: 'Логин',
                    }
                ],
            }
        },
        async fetch({store, error}) {

        },
        computed: {},
    }
</script>

<style scoped lang="scss">
    .temp {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login {
        background-color: rgba(127, 130, 139, 0.47);
        flex: 0 1 20%;
    }
</style>
