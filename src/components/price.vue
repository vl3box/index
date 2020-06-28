<template>
    <div class="m-price m-sideblock">
        <div class="m-price-header m-sideblock-header">
            <i class="el-icon-s-marketing"></i
            ><span class="u-title">金价走势</span>
            <a href="/app/price" class="u-more">查看全部 &raquo;</a>
        </div>
        <div class="m-price-content">
            <el-row class="u-group" type="flex" >
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
            <el-row class="u-group" type="flex" >
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
        </div>
        <div class="m-price-charts-title">{{ chart_title }}</div>
        <div class="m-price-charts" id="index-price-charts"></div>
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
        custom_server:function (){
            if(this.$store.state.isLogin){
                return this.getServerGate(this.$store.state.profile.server)
            }else{
                return ''
            }
        }
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
        getServerGate : function (val){
            let gates = Object.keys(server_dict)
            let servers = Object.values(server_dict)
            let i = servers.indexOf(val)
            if(i >= 0){
                return gates[i]
            }else{
                return false
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
        install() {
            this.dates = this.buildDates();
            this.getData().then((data) => {
                this.doCharts(data);
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
