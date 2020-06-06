<template>
    <div class="telegram">


        <a
            href="https://t.me/nomikz"
            target="_blank"
            class="telegram__link-tag"
        >
            <div class="mdi mdi-telegram telegram__icon"> </div>
            <div class="telegram__username">@nomikz</div>

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
        name: "TelegramLink",
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
    .telegram{
        position: fixed;
        bottom: 0;
        right: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &__link-tag {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;


            margin-bottom: 15px;
            line-height: 1;
            color: $dark-font-color;
            transition: all 0.25s;

            &:hover {
                color: $dark-primary-color;
                transform: translateY(-4px);
            }
        }



        &__icon {
            font-size: 25px;
            margin-bottom: 40px;
            transform: translateX(-2px);
        }

        &__username {
            transform: rotate(90deg);
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
            margin-top: 50px;
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
