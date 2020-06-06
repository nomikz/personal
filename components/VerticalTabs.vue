<template>
    <div class="tabs">

        <div class="tabs__nav">
            <div class="tabs__nav__line-box">
                <div
                    class="tabs__nav__vertical-line"
                >
                </div>

                <div
                    class="tabs__nav__vertical-slider"
                    :style="getSliderPosition"
                ></div>
            </div>
            <ul class="tabs__nav__ul">
                <li
                    class="tabs__nav__button"
                    v-for="(object, num) in jobsArr"
                    @mouseenter="setSliderPosition(num)"
                    @click="setTabContent($event, num)"
                >
                    <a
                        v-text="object.companyName"
                    ></a>
                </li>
            </ul>
        </div>


        <div class="tabs__content-box">
            <h4 class="tabs__content-box__heading">
                {{selectedObj.position}}
                <a class="underlined-link" :href="selectedObj.link">
                    @ {{selectedObj.companyName}}
                </a>
            </h4>
            <p class="tabs__content-box__date">
                <span>{{selectedObj.date}}</span>
            </p>

            <ul class="tabs__ul">
                <li
                    class="tabs__content-box__point"
                    v-for="task in selectedObj.tasksArr"
                    v-text="task"
                ></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'VerticalTab',
    created() {
        this.selectedObj = this.jobsArr[0];
    },
    data() {
        return {
            sliderCurrentItem: 0,
            selectedObj: {},
            jobsArr: [
                {
                    position: 'Full  developer',
                    companyName: 'place #1',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearh' +
                        'ead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
                {
                    position: 'Full stack ',
                    companyName: 'place #2',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
                {
                    position: 'Fuk developer',
                    companyName: 'place #3',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
                {
                    position: 'Full sveloper',
                    companyName: 'place #4',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
                {
                    position: 'the place I worked',
                    companyName: 'place #5',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
                {
                    position: 'Full stack de',
                    companyName: 'place #6',
                    link: '#',
                    date: 'August 2019 - May 2020',
                    tasksArr: [
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                        'Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern',
                    ]
                },
            ]
        }
    },
    methods: {
        setSliderPosition(num) {
            this.sliderCurrentItem = num;
        },
        setTabContent(e, num) {
            const buttons = Array.from(document.querySelectorAll('.tabs__nav__button'));
            buttons.forEach(button => {

                button.classList.remove('selected');
            });
            this.selectedObj = this.jobsArr[num];
            e.target.classList.add('selected');

            buttons[num].classList.add('selected');
        }
    },
    computed: {
        getSliderPosition() {
            if(process.client) {
                const windowWidth = window.innerWidth;

                if (windowWidth > 651) {
                    return 'top:' + (this.sliderCurrentItem * 50) + 'px';
                }

                return 'left:' + (this.sliderCurrentItem * 100) + 'px';

            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>
