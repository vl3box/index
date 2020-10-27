<template>
    <div class="m-price m-sideblock">
        <div class="m-price-header m-sideblock-header">
            <i class="el-icon-s-marketing"></i
            ><a class="u-title" href="/app/price" target="_blank">金价走势</a>
            <a href="/app/price" class="u-more" title="查看更多" target="_blank"><i class="el-icon-more"></i></a>
        </div>
        <div class="m-price-content">
            <el-row class="u-group" type="flex">
                <el-col class="u-label" :span="4"
                    ><div>
                        <em>当前最高</em>
                        <b>{{ highest_server }}</b>
                    </div></el-col
                >
                <el-col :span="15"
                    ><div class="u-progress">
                        <b
                            class="u-bar"
                            :style="{ width: highest_bar }"
                        ></b></div
                ></el-col>
                <el-col class="u-price" :span="5"
                    ><div>
                        <b>{{ highest }}</b
                        ><em>金/元</em>
                    </div></el-col
                >
            </el-row>
            <el-row class="u-group" type="flex">
                <el-col class="u-label" :span="4"
                    ><div>
                        <em>当前最低</em>
                        <b>{{ lowest_server }}</b>
                    </div></el-col
                >
                <el-col :span="15"
                    ><div class="u-progress">
                        <b
                            class="u-bar"
                            :style="{ width: lowest_bar }"
                        ></b></div
                ></el-col>
                <el-col class="u-price" :span="5"
                    ><div>
                        <b>{{ lowest }}</b
                        ><em>金/元</em>
                    </div></el-col
                >
            </el-row>
            <el-row class="u-group" type="flex">
                <el-col class="u-label" :span="4"
                    ><div>
                        <em>均价趋势</em>
                        <b>{{ chart_title }}</b>
                    </div></el-col
                >
                <el-col :span="15"
                    ><div
                        class="u-progress"
                    >
                        <b
                            class="u-bar u-yesterday"
                            :style="{ width: yesterday_avg_per }"
                        ></b>
                        <b
                            class="u-bar u-today"
                            :style="{ width: today_avg_per }"
                        ></b>
                        <b class="u-num">{{yesterday_avg}} → {{today_avg}}</b>
                    </div
                ></el-col>
                <el-col class="u-price" :span="5"
                    ><div>
                        <b :style="{ color: trend_color }">{{ avg_trend }}</b
                        ><em>{{ avg_trend_value }}金/元</em>
                    </div></el-col
                >
            </el-row>
        </div>
        <!-- <div class="m-price-charts-title">{{ chart_title }}</div> -->
        <!-- <div class="m-price-charts" id="index-price-charts"></div> -->
    </div>
</template>

<script>
import { server_dict } from "@jx3box/jx3box-data/data/server/server.json";
import { getPrice } from "../service/spider";
import _ from "lodash";
import { Line } from "@antv/g2plot";
import User from "@jx3box/jx3box-common/js/user";
import moment from "moment";

export default {
    name: "price",
    props: [],
    data: function() {
        return {
            data: [],
            highest: 0,
            highest_server: "",
            lowest: "",
            lowest_server: "",
            chartsData: [],
            dates: [],
            trend: 0,
        };
    },
    computed: {
        highest_bar: function() {
            return this.toBar(this.highest);
        },
        lowest_bar: function() {
            return this.toBar(this.lowest);
        },
        chart_title: function() {
            return this.custom_server
                ? server_dict[this.custom_server]
                : "全服";
        },
        custom_server: function() {
            if (this.$store.state.isLogin) {
                return this.getServerGate(this.$store.state.profile.server);
            } else {
                return "";
            }
        },
        yesterday_avg_list: function() {
            let list = [];
            for (let key in this.data) {
                let item = this.data[key];
                list.push(item.yesterday_average);
            }
            return list;
        },
        yesterday_avg: function() {
            if (this.custom_server) {
                return _.get(this.data[this.custom_server],'yesterday_average')
            } else {
                let len = this.yesterday_avg_list.length;
                let total = 0;
                this.yesterday_avg_list.forEach((item) => {
                    if (!isNaN(item)) total += ~~item;
                });
                return (total / len).toFixed(2);
            }
        },
        yesterday_avg_per: function() {
            return this.toBar(this.yesterday_avg);
        },
        today_avg_list: function() {
            let summary = _.get(this.data, "gate0000.average_arr");
            return summary && summary.split(",");
        },
        today_avg: function() {
            if (this.custom_server) {
                return _.get(this.data[this.custom_server],'average')
            } else {
                if (!this.today_avg_list) return;

                let len = _.get(this.today_avg_list, "length");
                let total = 0;
                this.today_avg_list.forEach((item) => {
                    if (!isNaN(item)) total += ~~item;
                });
                return (total / len).toFixed(2);
            }
        },
        today_avg_per: function() {
            return this.toBar(this.today_avg);
        },
        avg_trend: function() {
            let trend = ~~(this.today_avg - this.yesterday_avg);
            if (trend > 0) {
                return "涨"; // + Math.abs(trend);
            } else if (trend < 0) {
                return "跌"; // + Math.abs(trend);
            } else {
                return "平";
            }
        },
        avg_trend_value: function() {
            let trend = ~~(this.today_avg - this.yesterday_avg);
            return Math.abs(trend);
        },
        trend_color: function() {
            const colormap = {
                涨: "#f00",
                跌: "#49c10f",
                平: "#fba524",
            };
            return colormap[this.avg_trend];
        },
    },
    methods: {
        buildDates: function() {
            let sevenDatesList = [];
            let day = 24 * 60 * 60 * 1000;
            let today = new Date(new Date().setHours(0, 0, 0, 0) - 0 * day);
            for (let i = 1; i <= 7; i++) {
                sevenDatesList.push(
                    moment(new Date(today - i * day)).format("MM-DD")
                );
            }
            return sevenDatesList.reverse();
        },
        getServerGate: function(val) {
            let gates = Object.keys(server_dict);
            let servers = Object.values(server_dict);
            let i = servers.indexOf(val);
            if (i >= 0) {
                return gates[i];
            } else {
                return false;
            }
        },
        getData() {
            return getPrice().then((data) => {
                let current = _.get(data, "gate0000");
                if (current) {
                    this.highest = current.highest;
                    this.highest_server = server_dict[current.highest_server];
                    this.lowest = current.lowest;
                    this.lowest_server = server_dict[current.lowest_server];
                }

                return data;

                // 旧逻辑废弃

                let trends = [];
                let chartsData = [];
                if (this.custom_server && data[this.custom_server]) {
                    trends = data[this.custom_server]["trends"]
                        .split(",")
                        .slice(0, 7)
                        .reverse();
                } else {
                    trends = current.average_arr
                        .split(",")
                        .slice(0, 7)
                        .reverse();
                }
                trends.forEach((item, i) => {
                    chartsData.push({
                        date: this.dates[i],
                        均价: ~~item,
                    });
                });
                this.chartsData = chartsData;
                let min = Math.min(...trends);
                let max = Math.max(...trends);
                return { chartsData, min, max };
            });
        },
        doCharts({ chartsData, min, max }) {
            if (!chartsData.length) return;

            const linePlot = new Line(
                document.getElementById("index-price-charts"),
                {
                    title: {
                        visible: false,
                    },
                    description: {
                        visible: false,
                    },
                    forceFit: true,
                    padding: "auto",
                    data: chartsData,
                    xField: "date",
                    yField: "均价",
                    point: {
                        visible: true,
                        size: 5,
                        style: {
                            fill: "#2593fc",
                            stroke: "#fff",
                            lineWidth: 2,
                        },
                    },
                    label: {
                        visible: true,
                        type: "point",
                    },
                    // lineSize: 3,
                    yAxis: {
                        min: min,
                        max: max,
                    },
                    guideLine: [
                        {
                            type: "mean",
                            lineStyle: {
                                stroke: "#f93",
                            },
                            text: {},
                        },
                    ],
                }
            );
            linePlot.render();
        },
        toBar: function(val) {
            return (val / 800) * 100 + "%";
        },
        install() {
            this.dates = this.buildDates();
            this.getData().then((data) => {
                this.data = data;
                // this.doCharts(data);
            });
        },
    },
    mounted: function() {},
    created: function() {
        this.install();
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/price.less";
</style>
