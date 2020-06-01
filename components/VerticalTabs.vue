<template>
    <div class="tab-horizontal-flex">

        <div class="tab-jobs-tab">
            <div class="tab-vertical-line-box">
                <div class="tab-vertical-line"></div>
                <div :style="'top:' + getSliderPosition" class="tab-vertical-slider"></div>
            </div>
            <ul>
                <li v-for="(object, num) in jobsArr" @mouseenter="setSliderPosition(num)" @click="setTabContent($event, num)">
                    <a v-text="object.companyName"></a>
                </li>
            </ul>
        </div>

        <div class="tab-content">
            <h4>
                <span>
                    {{selectedObj.position}}
                </span>
                <a class="cool-link" :href="selectedObj.link">
                    @ {{selectedObj.companyName}}
                </a>
            </h4>
            <p class="date">
                <span>{{selectedObj.date}}</span>
            </p>

            <ul>
                <li v-for="task in selectedObj.tasksArr" v-text="task"></li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
    name: 'VerticalTab',
    created() {
        this.selectedObj = this.jobsArr[0];
        // this.jobsArr.forEach((jobObj, index)=> {
        //     jobObj
        // });


    },
    data() {
        return {
            sliderCurrentItem: 0,
            selectedObj: {},
            jobsArr: [
                {
                    position: 'Full  developer',
                    companyName: 'the place worked #1',
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
                    companyName: 'the place worked #2',
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
                    companyName: 'the place worked #3',
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
                    companyName: 'the pwfwerwerlace worked #4',
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
                    companyName: 'the place worked #5',
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
                    companyName: 'the place worked #6',
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
            this.selectedObj = this.jobsArr[num];

        }
    },
    computed: {
        getSliderPosition() {
            return this.sliderCurrentItem * 42 + 'px';
        }
    }
}
</script>

<style scoped lang="scss">

    $dark-primary-color: #b17acc;


    .tab-horizontal-flex {
        display: flex;
        align-items: flex-start;
        width: 100%;
    }


    .tab-jobs-tab {
        width: 33%;
    }


    .tab-content {
        width: 66%;
    }

    .tab-content {
        padding-top: 8px;
        padding-left: 20px;

        h4 {
            margin-bottom: 10px;
            font-size: 22px;
            font-weight: 500;
        }

        h4 a {
            color: $dark-primary-color;
            display: inline-block;
        }

        h4 a:after {
            display: block;
            content: '';
            border-bottom: solid 1px $dark-primary-color;
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
            transform-origin:  0 50%;
        }

        h4 a:hover:after {
            transform: scaleX(1);
            transform-origin:  0 50%;
        }

        .date {
            margin-bottom: 30px;
        }

        ul li {
            padding-left: 30px;
            position: relative;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.3;
        }

        ul li:before {
            content: "▹";
            color: $dark-primary-color;
            position: absolute;
            left: 0px;
        }
    }


    .tab-jobs-tab ul li {
        padding-left: 19px;
        padding-right: 19px;
        font-size: 15px;
        height: 42px;
        line-height: 42px;
        transition: background-color 0.45s ease-in-out;
        cursor: pointer;
    }

    .tab-jobs-tab ul li:hover {
        background-color: rgba($dark-primary-color, 0.3);
        border-radius: 1px;
        transition: background-color 0.3s ease-in-out;
        transition-delay: 0.15s;
    }




    .tab-vertical-line-box {
        position: relative;
    }

    .tab-vertical-line {
        position: absolute;
        top: 0;
        background-color: rgba(255,255,255,0.45);
        width: 2px;
        height: calc(42px * 6) ;
    }

    .tab-vertical-slider {
        position: absolute;
        top: 0px;
        background-color: pink;
        border-radius: 5px;
        width: 3px;
        height: 42px;
        transition: top 0.4s ease-in-out;
    }

</style>
