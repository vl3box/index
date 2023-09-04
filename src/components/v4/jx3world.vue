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
            <div class="m-other-list">
                <celebrity></celebrity>
                <daily></daily>
                <horse></horse>
                <leisure></leisure>
            </div>
            <baizhan-map></baizhan-map>
        </div>
    </div>
</template>

<script>
import daily from "@/components/v4/world/daily.vue";
import leisure from "@/components/v4/world/leisure.vue";
import celebrity from "@/components/v4/world/celebrity.vue";
import horse from "@/components/v4/world/horse.vue";
import BaizhanMap from "@/components/v4/world/map.vue";
import dayjs from "dayjs";
export default {
    name: "JX3World",
    components: {
        daily,
        leisure,
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
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
        isStd() {
            return this.$store.state.client === "std";
        },
    },
    methods: {},
    created() {},
    mounted() {
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
