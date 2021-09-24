<template>
    <div class="m-topic-infotab">
        <div class="u-title">
            <img class="u-info-enName" src="../../assets/img/topic/yaozong.png" />
            <span
                v-for="(item, i) in 4"
                :key="i"
                :class="['u-icon' + (i + 1), index == i ? 'active' : '']"
                @click="changeIcon(i)"
            ></span>
        </div>
        <div class="u-info">
            <span class="u-arr" :class="arrClass"></span>
            <div class="u-text">
                <span
                    >{{ textInfo.title }}<b>“{{ textInfo.info }}”</b></span
                >
                <p>
                    {{ textInfo.desc }}
                </p>
            </div>
        </div>
        <imglist />
        <!-- <div class="u-btn">
            <a
                :href="item.link"
                target="_blank"
                v-for="(item, i) in btn"
                :key="i"
                >{{ item.name }}</a
            >
        </div> -->
    </div>
</template>

<script>
import imglist from './imglist.vue'
export default {
    name: "infotab",
    components: {
        imglist
    },
    props: {
        
    },
    data: function () {
        return {
            index: 0,
            arrClass: "",
           /*  btn: [
                { name: "《药宗宏库》", link: "" },
                { name: "《药宗攻略》", link: "" },
                { name: "《输出精品》", link: "" },
                { name: "《治疗精品》", link: "" },
            ], */
            text: [
                {
                    title: "刀系套路",
                    info: "行宜制方",
                    desc: "使用内力催动药草，巧妙利用药性搭配，远程治疗友方目标，是主要的治疗套路。",
                },
                {
                    title: "草系套路",
                    info: "行宜制方",
                    desc: "使用内力催动药草，巧妙利用药性搭配，远程治疗友方目标，是主要的治疗套路。",
                },
                {
                    title: "药系套路",
                    info: "行宜列药",
                    desc: "使用内力催动药草，巧妙利用药性搭配，远程治疗友方目标，是主要的治疗套路。",
                },
                {
                    title: "毒系套路",
                    info: "行宜制方",
                    desc: "使用内力催动药草，巧妙利用药性搭配，远程治疗友方目标，是主要的治疗套路。",
                },
            ],
            textInfo: {},
        };
    },
    computed: {},
    methods: {
        changeIcon: function (i) {
            this.index = i;
        },
    },
    watch: {
        index: {
            handler(val) {
                this.arrClass = "u-arr" + (val + 1);
                this.textInfo = this.text[val];
            },
            immediate: true,
            deep: true,
        },
    },
};
</script>


<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>