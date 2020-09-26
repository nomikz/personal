<template>
    <div>
        <main class="forum-layout">

            <div class="forum-container">

                <section class="body-section">

                        <div class="feed">

                            <div class="thread">
                                <div class="thread__sidebar">

                                    <div class="thread__vote-buttons">

                                    </div>
                                </div>

                                <div class="thread__body">

                                    <div class="thread__header">
                                        <span class="thread__name">Node.js</span>
                                        <span class="thread__author-text"> - nomikz - 6 часов назад</span>
                                    </div>

                                    <div class="thread__content">
                                        Нода Шмода Хуюда.
                                    </div>

                                    <div class="thread__footer">
                                        #some-random-tags
                                    </div>

                                </div>
                            </div>


                            <div class="thread">
                                <div class="thread__sidebar">

                                    <div class="thread__vote-buttons">

                                    </div>
                                </div>

                                <div class="thread__body">

                                    <div class="thread__header">
                                        <span class="thread__name">Python</span>
                                        <span class="thread__author-text"> - nomikz - 8 часов назад</span>
                                    </div>

                                    <div class="thread__content">
                                        Пайтон Шмайтон Шитон.
                                    </div>

                                    <div class="thread__footer">
                                        #some-python-tag
                                    </div>

                                </div>
                            </div>

                            <div class="thread">
                                <div class="thread__sidebar">

                                    <div class="thread__vote-buttons">

                                    </div>
                                </div>

                                <div class="thread__body">

                                    <div class="thread__header">
                                        <span class="thread__name">Golang</span>
                                        <span class="thread__author-text"> - nomikz - 6 часов назад</span>
                                    </div>

                                    <div class="thread__content">
                                        Голанг самый быстрый дротор.
                                    </div>

                                    <div class="thread__footer">
                                        #golang-better-than-golang
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="sidebar">
                            <div class="channels">
                                <div class="channels__heading">
                                    <div class="channels__heading-text">
                                        Каналы
                                    </div>
                                </div>
                                <div class="channels__list">
                                    <ul>
                                        <li class="channels__list-item">
                                            Almaty
                                        </li>
                                        <li class="channels__list-item">
                                            Astana
                                        </li>
                                        <li class="channels__list-item">
                                            Kokshetau
                                        </li>
                                    </ul>
                                </div>
                                <button class="primary-button channels__get-all-button">
                                    Все каналы
                                </button>
                            </div>
                        </div>
                </section>

            </div>

        </main>
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: "Делись мыслями",
                meta: [
                    {
                        hid: 'description',
                        name: 'description',
                        content: '',
                    }
                ],
            }
        },
    }
</script>


<style scoped lang="scss">

    .forum-layout {
        padding-top: 115px;
    }

    .forum-container {
        margin: 0 auto;
        width: 900px;
    }

    .trending-section {
        height: 150px;
        border: 1px solid gray;
        margin-bottom: 30px;
    }

    .body-section {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .feed {

            flex: 0 1 63%;

            display: flex;
            flex-direction: column;

            .thread {
                display: flex;
                flex-direction: row;

                border: 1px solid gray;
                border-radius: 4px;

                margin-bottom: 20px;

                &__sidebar {
                    width: 40px;
                    border-right: 1px solid gray;
                    background-color: rgba(1, 0, 2, 0.15);

                }

                &__vote-buttons {
                    margin-top: 20px;
                    margin-right: auto;
                    margin-left: auto;
                    width: 15px;
                    background: #232129;
                    height: 40px;
                }

                &__body {
                    padding: 15px 20px;
                    font-size: 18px;
                }

                &__header {
                    font-size: 14px;
                    font-weight: 400;

                }

                &__content {
                    margin-top: 15px;
                    margin-bottom: 15px;
                }

                &__footer {
                    font-size: 14px;
                    font-weight: 400;
                }

            }
        }

        .sidebar {
            border: 1px solid gray;
            border-radius: 4px;

            flex: 0 1 36%;
            margin-left: 3%;



            .channels {
                &__heading {
                    height: 70px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-end;

                    padding-left: 20px;
                    padding-bottom: 10px;

                    background-color: rgba(227, 181, 253, 0.67);

                    &-text {
                        font-weight: 500;
                        font-size: 20px;
                    }
                }

                &__list {


                    &-item {
                        margin-top: 10px;
                        padding-bottom: 10px;
                        padding-left: 20px;
                        font-size: 16px;
                        font-weight: 400;

                        &:not(:last-child) {
                            border-bottom: 1px solid lightgrey;
                        }
                    }
                }

                .channels__get-all-button {
                    margin-top: 20px;
                    margin-bottom: 20px;
                    font-size: 17px;
                    line-height: 1.8;
                    width: 80%;
                    margin-left: 10%;
                }
            }
        }
    }


</style>
