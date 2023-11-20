<template>
    <div v-if="today.length" class="m-world-daily">
        <el-divider content-position="left">活动&nbsp;·&nbsp;{{ dailyToday }}</el-divider>
        <div class="m-daily-content">
            <div class="u-table-body">
                <div class="u-row" v-for="(item, i) in today" :key="i">
                    <div class="u-item">{{ item.key }}</div>
                    <el-tooltip
                        v-if="getLen(item.val) > 36"
                        class="box-item"
                        effect="dark"
                        :content="item.val"
                        placement="top"
                    >
                        <div class="u-item">{{ item.val }}</div>
                    </el-tooltip>
                    <div class="u-item" v-else>{{ item.val }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { getDailyFromOs } from "@/service/spider";
import dayjs from "@/utils/day";
import dailyKeys from "@/assets/data/daily_keys.json";
import dailyDays from "@/assets/data/daily_days.json";
export default {
    name: "Today",
    data: function () {
        return {
            today: [],
        };
    },
    computed: {
        day() {
            // 当7点以前，请求前面一天的日常 当7~24点，请求当天的日常
            const hour = dayjs.tz().get("hours");
            const day = 0 <= hour && hour < 7 ? dayjs.tz().subtract(1, "day").day() : dayjs.tz().day();
            return day === 0 ? 7 : day;
        },
        client() {
            return this.$store.state.client;
        },
        dailyKeyMap() {
            return dailyKeys.reduce((acc, cur) => {
                return { ...acc, [cur["key"]]: cur.name };
            }, {});
        },
        dailyToday() {
            return dailyDays.find((item) => item.key === this.day)?.name;
        },
    },
    methods: {
        getLen(str) {
            if (!str) return 0;
            if (typeof str !== "string") {
                str += "";
            }
            return str.replace(/[^\x00-\xff]/g, "01").length;
        },
        loadToday() {
            const params = {
                client: this.client,
                day: this.day,
            };
            getDailyFromOs(params).then((res) => {
                const list = res.data.data || [];
                this.today = list.map((item) => {
                    return {
                        key: this.dailyKeyMap[item.key],
                        val: item.val,
                    };
                });
            });
        },
    },
    mounted: function () {
        this.loadToday();
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v4/world/daily.less";
</style>
