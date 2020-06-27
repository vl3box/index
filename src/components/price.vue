<template>
    <div class="m-price m-sideblock">
        <div class="m-price-header m-sideblock-header">
            <i class="el-icon-s-marketing"></i
            ><span class="u-title">金价走势</span>
            <a href="/app/price" class="u-more">查看全部 &raquo;</a>
        </div>
        <div class="m-price-content">
            <el-row class="u-group">
                <el-col :span="4"
                    ><div class="u-label">
                        <em>当前最高</em>
                        <b>{{ highest_server }}</b>
                    </div></el-col
                >
                <el-col :span="16"
                    ><div class="u-progress">
                        <b
                            class="u-bar"
                            :style="{ width: highest_bar }"
                        ></b></div
                ></el-col>
                <el-col :span="4"
                    ><div class="u-price">
                        <b>{{ highest }}</b
                        ><em>金/元</em>
                    </div></el-col
                >
            </el-row>
            <el-row class="u-group">
                <el-col :span="4"
                    ><div class="u-label">
                        <em>当前最低</em>
                        <b>{{ lowest_server }}</b>
                    </div></el-col
                >
                <el-col :span="16"
                    ><div class="u-progress">
                        <b
                            class="u-bar"
                            :style="{ width: lowest_bar }"
                        ></b></div
                ></el-col>
                <el-col :span="4"
                    ><div class="u-price">
                        <b>{{ lowest }}</b
                        ><em>金/元</em>
                    </div></el-col
                >
            </el-row>
        </div>
        <div class="m-price-charts-title">{{ chart_title }}</div>
        <div class="m-price-charts" id="index-price-charts"></div>
    </div>
</template>

<script>
import { server_dict } from "@jx3box/jx3box-data/data/server/server.json";
import { getPrice } from "../service/spider";
import { getServer } from "../service/profile";
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
            custom_server: "",
            dates: [],
        };
    },
    computed: {
        highest_bar: function() {
            return (this.highest / 800) * 100 + "%";
        },
        lowest_bar: function() {
            return (this.lowest / 800) * 100 + "%";
        },
        chart_title: function() {
            return this.custom_server
                ? server_dict[this.custom_server]
                : "全服均价趋势";
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
        getData() {
            return getPrice().then((data) => {
                let current = _.get(data, "gate0000");
                if (current) {
                    this.highest = current.highest;
                    this.highest_server = server_dict[current.highest_server];
                    this.lowest = current.lowest;
                    this.lowest_server = server_dict[current.lowest_server];
                }

                let trends = [];
                let chartsData = [];
                if (this.custom_server) {
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
                        日期: this.dates[i],
                        均价: item,
                    });
                });
                this.chartsData = chartsData;
            });
        },
        doCharts() {
            const linePlot = new Line(
                document.getElementById("index-price-charts"),
                {
                    title: {
                        visible: false,
                        // text : this.chart_title
                    },
                    description: {
                        visible: false,
                    },
                    forceFit: true,
                    padding: "auto",
                    data: this.chartsData,
                    xField: "日期",
                    yField: "均价",
                    point: {
                        visible: true,
                    },
                    label: {
                        visible: true,
                        type: "point",
                    },
                }
            );
            linePlot.render();
        },
        checkServer: function() {
            if (User.isLogin()) {
                return getServer(User.getInfo().uid).then((data) => {
                    this.custom_server = data.data.value;
                });
            }
            return new Promise((resolve, reject) => {
                resolve(true);
            });
        },
        install() {
            this.dates = this.buildDates();
            this.checkServer().then(() => {
                this.getData().then(() => {
                    this.doCharts();
                });
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
