<template>
    <div class="socials">

        <a
            href="https://github.com/nomikz"
            target="_blank"
        >
            <span class="mdi mdi-github socials__link"></span>
        </a>

        <a
            href="https://www.linkedin.com/in/namazbek-bekarysuly-15b567117/"
            target="_blank"
        >
            <span class="mdi mdi-linkedin socials__link"></span>
        </a>

        <a
            href="https://www.facebook.com/profile.php?id=100012009068221"
            target="_blank"
        >
            <span class="mdi mdi-facebook socials__link"></span>
        </a>

        <a
            href="https://www.instagram.com/nomi.kz/"
            target="_blank"
        >
            <span class="mdi mdi-instagram socials__link"></span>
        </a>


        <div
            @mouseenter="hovered()"
            :class="{ 'animating': isAnimating }"
            class="line-box"
        >
            <div></div>
        </div>
    </div>
</template>

<script>


export default {
    name: "SocialLinks",
    data() {
        return {
            isAnimating: false,
        }
    },
    methods: {
        hovered() {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 800);
        }
    }
}
</script>

<style scoped lang="scss">
    $dark-font-color: rgba(217, 215, 224, 0.87);
    $dark-primary-color: #ddd0ff;

    $icon-color: #a8b2d1;
    .socials{

        position: fixed;
        bottom: 0;
        left: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__link {
            margin-bottom: 30px;
            font-size: 25px;
            line-height: 1;
            color: $dark-font-color;
            display: inline-block;
            transition: all 0.25s;

            &:hover {
                color: $dark-primary-color;
                transform: translateY(-4px);
            }
        }





        @keyframes topdown {
            10% {
                transform: translateY(30px);
            }

            50% {
                transform: translateY(-400px);
            }
            90% {
                transform: translateY(30px);
            }
        }

        .line-box {
            content: '';
            height: 90px;
            width: 10px;
            &.animating {
                animation-name: topdown;
                animation-duration: 0.8s;
            }

            display: flex;
            justify-content: center;

            > div {
                height: 90px;
                width: 1px;
                background-color: $dark-font-color;

            }
        }

    }
</style>
