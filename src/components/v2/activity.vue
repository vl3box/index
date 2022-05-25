<template>
    <div class="m-daily-activity  m-sideblock" v-if="client == 'std'">
        <div class="m-guide-header m-sideblock-header">
            <i class="el-icon-date"></i>
            <span class="u-title">日常</span>
        </div>
        <div class="m-daily-content">
            <table>
                <thead>
                    <tr>
                        <th>活动</th>
                        <th>区服</th>
                        <th>项目</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in daily" :key="i">
                        <td>{{ item.type }}</td>
                        <td>{{ item.zone }}</td>
                        <td>{{ item.name }}</td>
                    </tr>
                    <meirentu></meirentu>
                    <lucky-pet :date="date" :client="client"></lucky-pet>
                    <furniture v-if="isCurrentWeek" :date="date" :client="client"></furniture>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { getDaily } from "@/service/spider";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isoWeek from "dayjs/plugin/isoWeek";
import meirentu from "./meirentu";
import luckyPet from "./lucky_pet";
import furniture from "./furniture";
dayjs.extend(isoWeek);
dayjs.extend(isToday);
export default {
    name: "activity",
    components: {
        meirentu,
        luckyPet,
        furniture,
    },
    data: function () {
        return {
            daily: [],
        };
    },
    computed: {
        date() {
            return dayjs(new Date()).format("YYYY-MM-DD");
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
<style lang='less'>
    @import "~@/assets/css/v2/daily.less";
</style>