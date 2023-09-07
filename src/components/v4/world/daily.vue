<template>
    <div v-if="daily.length" class="m-world-daily">
        <el-divider content-position="left">日常</el-divider>
        <div class="m-daily-content">
            <div class="u-table-header">
                <div class="u-row">
                    <div class="u-item">活动</div>
                    <div class="u-item">区服</div>
                    <div class="u-item">项目</div>
                </div>
            </div>
            <div class="u-table-body">
                <div class="u-row" v-for="(item, i) in daily" :key="i">
                    <div class="u-item">{{ item.type }}</div>
                    <div class="u-item">{{ item.zone }}</div>
                    <div class="u-item">{{ item.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getDaily } from "@/service/spider";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(isoWeek);
dayjs.extend(isToday);
export default {
    name: "Daily",
    data: function () {
        return {
            daily: [],
        };
    },
    computed: {
        date() {
            // 当7点以前，请求前面一天的日常 当7~24点，请求当天的日常
            const hour = dayjs().get("hours");
            return 0 <= hour && hour < 7
                ? dayjs().subtract(1, "day").format("YYYY-MM-DD")
                : dayjs().format("YYYY-MM-DD");
        },
        client() {
            return this.$store.state.client;
        },
        isCurrentWeek() {
            let week = dayjs(this.date).isoWeek();
            let currentWeek = dayjs().isoWeek();
            return week === currentWeek;
        },
    },
    methods: {
        loadDaily() {
            getDaily({ date: this.date }).then((res) => {
                let list = res.data.data || [];
                this.daily = list.map((item) => {
                    return {
                        type: item.task_type,
                        zone: "全服",
                        name: item.activity_name,
                    };
                });
            });
        },
    },
    mounted: function () {
        this.loadDaily();
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v4/world/daily.less";
</style>
