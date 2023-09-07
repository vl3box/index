<!-- 江湖模块 包含开服、日常、周常、买卖入口等 -->
<template>
    <div class="m-world m-sideblock" v-if="isStd">
        <div class="m-world-header m-sideblock-header">
            <div class="u-left">
                <i class="u-icon el-icon-s-flag"></i>
                <a class="u-title" href="/pvg/gonggao/daily" target="_blank">江湖快报</a>
            </div>
            <div class="u-right">
                <span class="world-tip">{{ world_tip }}</span>
            </div>
        </div>
        <div class="m-world-content m-sideblock-list">
            <!-- 日常 名望 休闲 -->
            <div class="m-world-left">
                <daily></daily>
                <celebrity></celebrity>
                <template v-if="isSpc">
                    <horse></horse>
                    <furniture v-if="isCurrentWeek" :date="date" :client="client"></furniture>
                    <lucky-pet :date="date" :client="client"></lucky-pet>
                </template>
            </div>
            <div class="m-baizhan">
                <el-divider>本周百战地图</el-divider>
                <baizhan-map :class="isPhone && 'is-map-phone'" mode="simple"></baizhan-map>
            </div>
            <div v-if="!isSpc" class="m-world-right">
                <horse></horse>
                <furniture v-if="isCurrentWeek" :date="date" :client="client"></furniture>
                <lucky-pet :date="date" :client="client"></lucky-pet>
            </div>
        </div>
    </div>
</template>

<script>
import daily from "@/components/v4/world/daily.vue";
import celebrity from "@/components/v4/world/celebrity.vue";
import horse from "@/components/v4/world/horse.vue";
import luckyPet from "@/components/v4/world/lucky_pet";
import furniture from "@/components/v4/world/furniture";
import BaizhanMap from "@jx3box/jx3box-bmap/src/components/BMap.vue";
import dayjs from "dayjs";
export default {
    name: "JX3World",
    components: {
        daily,
        luckyPet,
        furniture,
        celebrity,
        horse,
        BaizhanMap,
    },
    provide() {
        return {
            celebrity: () => this.celebrityData,
        };
    },
    data() {
        return {
            celebrityData: {
                list: [],
                currentDate: {
                    d: new Date().getDay(),
                    h: new Date().getHours(),
                    m: new Date().getMinutes(),
                },
            },
            world_tip: dayjs().format("YYYY-MM-DD HH:mm"),
            isSpc: false,
            isPhone: false,
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
        isStd() {
            return this.$store.state.client === "std";
        },
        date() {
            // 当7点以前，请求前面一天的日常 当7~24点，请求当天的日常
            const hour = dayjs().get("hours");
            return 0 <= hour && hour < 7
                ? dayjs().subtract(1, "day").format("YYYY-MM-DD")
                : dayjs().format("YYYY-MM-DD");
        },
        isCurrentWeek() {
            let week = dayjs(this.date).isoWeek();
            let currentWeek = dayjs().isoWeek();
            return week === currentWeek;
        },
    },
    methods: {},
    created() {},
    mounted() {
        this.isPhone = document.documentElement.clientWidth <= 768;
        this.isSpc = document.documentElement.clientWidth <= 1680;
        window.onresize = () => {
            this.isPhone = document.documentElement.clientWidth <= 768;
            this.isSpc = document.documentElement.clientWidth <= 1680;
        };
        setInterval(() => {
            if (
                this.celebrityData.currentDate.h !== new Date().getHours() ||
                this.celebrityData.currentDate.m !== new Date().getMinutes()
            ) {
                this.celebrityData.currentDate = {
                    d: new Date().getDay(),
                    h: new Date().getHours(),
                    m: new Date().getMinutes(),
                };
                this.world_tip = dayjs().format("YYYY-MM-DD HH:mm");
            }
        }, 1000);
    },
};
</script>

<style lang="less">
@import "~@/assets/css/v4/jx3world.less";
</style>
