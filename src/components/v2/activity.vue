<template>
    <div class="m-daily-activity m-sideblock" v-if="client == 'std'">
        <div class="m-guide-header m-sideblock-header">
            <a class="u-title" href="/calendar" target="_blank"><i class="el-icon-s-order"></i> 日常活动</a>
            <el-select class="u-server" v-model="server" placeholder="请选择服务器" size="mini">
                <el-option v-for="serve in servers" :key="serve" :label="serve" :value="serve"></el-option>
            </el-select>
            <a href="/calendar" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                <i class="el-icon-more"></i>
            </a>
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
import servers_std from "@jx3box/jx3box-data/data/server/server_std.json";
import servers_origin from "@jx3box/jx3box-data/data/server/server_origin.json";
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
        servers: function () {
            if (this.client == "std") {
                return servers_std;
            } else {
                return servers_origin;
            }
        },
        my_server: function () {
            return this.$store.state.server;
        },
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
    watch: {
        my_server: function (val) {
            if (val) this.server = val;
        },
    },
    mounted: function () {
        this.loadDaily();
    },
};
</script>
<style lang="less">
@import "~@/assets/css/v2/daily.less";
</style>
