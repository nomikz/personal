<template>
    <div>
        <main class="about-page">
            <section class="intro-section">
                <p class="intro-section__hello">
                    Hi, there 👋  Меня зовут
                </p>

                <h1 class="intro-section__name">
                    Бекарысулы Намазбек
                </h1>

                <p class="intro-section__specialization">
                    Я бекенд разработчик.
                </p>

                <p class="intro-section__info">
                    - Мне 23. Живу в Алматы. Работаю в <a class="underlined-link" href="https://onay.kz/">Онай</a>.
                    <br style="margin-bottom: 10px;">
                    - Мой стек: php, sql, js. Из фреймоврков laravel, vue&nuxt.
                    <br style="margin-bottom: 10px;">
                    - Eat, Sleep and Breathe code. Don't code without coffee <span class="emoji">☕️</span>.
                </p>


                <a href="https://t.me/nomikz">
                    <button class="primary-button intro-section__contact-me">
                        <div class="mdi mdi-telegram icon"></div>
                        Написать телеграм
                    </button>
                </a>
            </section>

            <section id="about" class="about-section">
                <h2 class="section-heading section-heading--about">
                    Если подробнее
                </h2>

                <div class="about-section__flexbox">

                    <div class="about-section__text-box">

                        <p>
                            В Казахстане, я бы не смог жить нигде кроме как в Алматы. Благоприятный климат. Горы. И главное кипящая жинь 🥃 🌮 ⛸️.
                        </p>

                        <p>
                            Однако, в идеале жить где-то в Лондоне, Мюнхене, Нью-йорке. Сейчас, я не представляю это возможнным.
                        </p>

                        <p>
                            Сейчас работаю бекенд разработчиком в Онай. Основной стек laravel, phalcon. Однако, сейчас часто приглядываюсь к golang.
                        </p>

                        <p>
                            Вещй без которых не выхожу из дома:
                        </p>

                        <div class="about-section__ul-box">

                            <ul class="">
                                <li class="about-section__ul-li">
                                    Рюкзак: Samsonite.
                                </li>
                                <li class="about-section__ul-li">
                                    Ноутбук: Macbook pro 15.
                                </li>
                                <li class="about-section__ul-li">
                                    Наушники: Marshall major 2.
                                </li>
                            </ul>

                            <ul>
                                <li class="about-section__ul-li">
                                    Телефон: Samsung 7 edge.
                                </li>
                                <li class="about-section__ul-li">
                                    Контейнеры с едой. 🍳🍳
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div class="about-section__image-box">
                        <img class="image" src="~assets/images/my-image.jpg" alt="">
                    </div>
                </div>
            </section>

            <section id="portfolio" class="portfolio-section">

                <h2 class="section-heading section-heading--portfolio">
                    Проекты которые разработал
                </h2>

                <!--first-->
                <div class="portfolio-item">

                    <div class="portfolio-item__image-box">
                        <a
                            href="http://admin.karatenz.co.nz/login"
                        >
                            <img
                                class="portfolio-item__image"
                                src="~assets/images/custom-cms.gif" alt=""
                            >
                        </a>
                    </div>

                    <div class="portfolio-item__info-box">

                        <p class="portfolio-item__featured">
                            Featured project
                        </p>
                        <a
                            href="https://github.com/nomikz/custom-cms"
                            class="portfolio-item__link"
                        >
                            Custom CMS
                        </a>
                        <div class="portfolio-item__description light-mode-shadow">
                            <p>
                                CMS который я сделал когда работал в Mars Studio для клиентов с Новой Зеландии. Сделал API для основного сайта и для приложении Android Ios. Админка SPA на vue&vuetify. Ссылка на <a class="underlined-link" href="https://github.com/nomikz/custom-cms">git</a>. Можете стянуть потыкать.
                            </p>
                        </div>

                        <ul class="portfolio-item__list inline-ul">
                            <li>Laravel</li>
                            <li>Vue, Vuetify</li>
                            <li>RestAPI</li>
                        </ul>
                    </div>
                </div>

                <!--second-->
                <div class="portfolio-item portfolio-item--reverse">

                    <div class="portfolio-item__image-box">
                        <div class="wip-image-wrapper">
                            <a
                                href="https://ekonomist.kz/"
                            >
                                <img
                                    class="portfolio-item__image"
                                    src="~assets/images/ekonomist.gif" alt=""
                                >
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item__info-box">

                        <p class="portfolio-item__featured">
                            Featured project
                        </p>
                        <a
                            href="https://ekonomist.kz/"
                            class="portfolio-item__link"
                        >
                            Ekonomist.kz
                        </a>
                        <div class="portfolio-item__description light-mode-shadow">
                            <p>
                                <a href="https://ekonomist.kz/">Ekonomist.kz</a> онлайн-площадка для профессиональных дискуссий на экономические темы в Казахстане. Этот проект еще сделал во время универа. Для паблишинга решил сделать на грязно и быстро wordpress-е. В команде много редакторов и функционал вордпресса вплоне подходил.
                            </p>
                        </div>

                        <ul class="portfolio-item__list inline-ul">
                            <li>Wordpress</li>
                            <li>SEO consulting</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact-section">
                <h2 class="section-heading section-heading--contact">
                    Обращайся
                </h2>
                <p class="contact-section__text">
                    Если есть интересные проекты, можете меня тянуть. Я больше доступен в телеграм.
                </p>
                <button class="primary-button">
                    <span class="mdi mdi-telegram icon"></span>
                    Написать телеграм
                </button>
            </section>
        </main>

        <social-links />

        <telegram-link />
    </div>
</template>

<script>
import SocialLinks from '~/components/SocialLinks';
import TelegramLink from '~/components/TelegramLink';


export default {
    created() {
        this.$axios.get('http://localhost:8000/api/data').then(({data}) => {
            console.log(data);
        });
    },
    data() {
        return {
            //
        }
    },
    components: {
        SocialLinks,
        TelegramLink,
    },
    name: 'list',
    head() {
        return {
            title: "About me",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Коротко про меня',
                }
            ],
        }
    },
    async fetch({store, error}) {

    },
    computed: {},
}
</script>

