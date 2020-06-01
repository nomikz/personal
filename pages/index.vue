<template>
    <div>
        <main-header></main-header>
        <div id="main">


            <section class="intro-section">

                <p class="intro-section__hello">
                    Hi, my name is
                </p>

                <h1 class="intro-section__name">
                    Bekarysuly Namazbek
                </h1>

                <p class="intro-section__specialization">
                    I build things for the web.
                </p>

                <p class="intro-section__info">
                        I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.
                </p>

                <button class="primary-button intro-section__contact-me">
                    Get in touch
                </button>

            </section>




            <section class="about-section">

                <h2 class="section-heading about-section__heading">
                    About me
                </h2>

                <div class="about-section__flexbox">

                    <div class="about-section__text-box">

                        <p>
                            Hello! I'm Brittany, a software engineer based in Boston, MA.
                        </p>

                        <p>
                            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                        </p>

                        <p>
                            Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.
                        </p>

                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>

                        <div class="about-section__skill-box">

                            <ul>
                                <li>
                                    php
                                </li>
                                <li>
                                    php
                                </li>
                                <li>
                                    php
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    php
                                </li>
                                <li>
                                    php
                                </li>
                                <li>
                                    php
                                </li>

                            </ul>

                        </div>
                    </div>

                    <div class="about-section__image-box">
                        <img class="image" src="~assets/images/my-image.jpg" alt="">
                    </div>
                </div>
            </section>




            <section class="experience-section">

                <h2 class="section-heading experience-section__heading">
                    Where I've Worked
                </h2>

                <vertical-tabs></vertical-tabs>

            </section>




            <section class="portfolio-section">

                <h2 class="section-heading portfolio-section__heading">
                    Some things I've built
                </h2>

                <!--first-->
                <div class="portfolio-item">

                    <div class="portfolio-item__image">
                        <div class="wip-image-wrapper">
                            <a
                                href="#"
                            >
                                <img
                                    class="image"
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
                        <div class="portfolio-item__description">
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

                    <div class="portfolio-item__image">
                        <div class="wip-image-wrapper">
                            <a
                                href="#"
                            >
                                <img
                                    class="image"
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
                        <div class="portfolio-item__description">
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

            <section class="contact-section">
                <h2 class="section-heading contact-section__heading">
                    Get in touch
                </h2>
                <p class="contact-section__text">
                    Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <button class="primary-button">
                    Say hello
                </button>
            </section>
        </div>

        <footer class="footer">
            <div class="footer__text">
                <p>Built by Bekarysuly Namazbek.</p>
                <p>
                    Design inspiration <a class="underlined" href="https://brittanychiang.com/">Brittany Chiang</a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script>
import VerticalTabs from '~/components/VerticalTabs';
import MainHeader from '~/components/MainHeader';

export default {
    created() {
        setTimeout(() => {
            this.preloading = false;
        }, 1000)
    },
    data() {
        return {
            preloading: true,
        }
    },
    components: {
        VerticalTabs,
        MainHeader
    },
    name: 'list',
    head() {
        return {
            title: "Events",
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: 'All events for this summer',
                }
            ],
        }
    },
    async fetch({store, error}) {

    },
    computed: {},
}
</script>

