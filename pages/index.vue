<template>
    <div>
        <main class="about-page">
            <section class="intro-section">
                <p class="intro-section__hello">
                    Hi, there! Меня зовут
                </p>

                <h1 class="intro-section__name">
                    Бекарысулы Намазбек
                </h1>

                <p class="intro-section__specialization">
                    Я фулл стек разработчик.
                </p>

                <p class="intro-section__info">
                    Я работаю полное время в компании. В остальное время, я обучаюсь новым вещам. Мой стек php, postgre, laravel, js, vue, nuxt. До разработки, я занимался SEO.
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
                            Я живу в алматы.
                        </p>
                        <p>
                            До 9 класса, был в Актобе. Потом после 11 как то жил в Астане. Потом приехал обратно в Алматы для учебы в универе.
                        </p>

                        <p>
                            Учился в АУЭС. Специальность: Приборостроение. Университетские годы прошли интересно: прочитал много книг, работал репетитором по английскому языку.
                        </p>

                        <p>
                            На 4 ом курсе, я сильно заинтересовался интернет маркетингом. Примерно в это время, я познакомился с программированием. В первое время занимался wordpress разработкой и seo.
                        </p>

                        <p>
                            Но только в августе 2019-го, я устроился в свою первую серьезную компанию Tarlan Payments. Там был такой стек:
                        </p>

                        <div class="about-section__ul-box">

                            <ul class="">
                                <li class="about-section__ul-li">
                                    php
                                </li>
                                <li class="about-section__ul-li">

                                    laravel
                                </li>
                                <li class="about-section__ul-li">
                                    postgre
                                </li>
                            </ul>

                            <ul>
                                <li class="about-section__ul-li">
                                    js
                                </li>
                                <li class="about-section__ul-li">
                                    vue
                                </li>
                                <li class="about-section__ul-li">
                                    scss
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
                            href="#"
                        >
                            <img
                                class="portfolio-item__image"
                                src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""
                            >
                        </a>
                    </div>

                    <div class="portfolio-item__info-box">

                        <p class="portfolio-item__featured">
                            Featured project
                        </p>
                        <a
                            href="#"
                            class="portfolio-item__link"
                        >
                            OctoProfile
                        </a>
                        <div class="portfolio-item__description light-mode-shadow">
                            <p>
                                A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                            </p>
                        </div>

                        <ul class="portfolio-item__list inline-ul">
                            <li>Laravel</li>
                            <li>Vue</li>
                            <li>Vuex</li>
                            <li>RestAPI</li>
                        </ul>
                    </div>
                </div>

                <!--second-->
                <div class="portfolio-item portfolio-item--reverse">

                    <div class="portfolio-item__image-box">
                        <div class="wip-image-wrapper">
                            <a
                                href="#"
                            >
                                <img
                                    class="portfolio-item__image"
                                    src="https://www.wpexplorer.com/wp-content/uploads/wordpress-image-optimization-guide.jpg" alt=""
                                >
                            </a>
                        </div>
                    </div>

                    <div class="portfolio-item__info-box">

                        <p class="portfolio-item__featured">
                            Featured project
                        </p>
                        <a
                            href="#"
                            class="portfolio-item__link"
                        >
                            OctoProfile
                        </a>
                        <div class="portfolio-item__description light-mode-shadow">
                            <p>
                                A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                            </p>
                        </div>

                        <ul class="portfolio-item__list inline-ul">
                            <li>Laravel</li>
                            <li>Vue</li>
                            <li>Vuex</li>
                            <li>RestAPI</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" class="contact-section">
                <h2 class="section-heading section-heading--contact">
                    Обращайся
                </h2>
                <p class="contact-section__text">
                    В скором времени, начну на сайте вести блог. Есть некоторые темы которые я давно хотел опубликовать. Но хотел это сделать на своем сайте.
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

