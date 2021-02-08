<template>
    <div class="m-daily m-sideblock">
        <div class="m-daily-header m-sideblock-header">
            <div class="u-time">{{ year }}年{{ month }}月{{ date }}日</div>
            <img class="u-wechat" src="../assets/img/right/qrcode.png" alt="" />
            <div class="u-list">
                <span class="u-weibo u-item">
                    <img svg-inline src="../assets/img/weibo.svg" />
                    <em>官博：</em>
                    <a href="https://weibo.com/jx3box" target="_blank"
                        ><b>JX3BOX魔盒</b></a
                    >
                </span>
                <span class="u-weixin u-item">
                    <img svg-inline src="../assets/img/wechat.svg" />
                    <em>微信公众号：</em>
                    <b>JX3BOX</b>
                </span>
                <!-- <span class="u-item" v-if="data && data.length">
                    <em>今日头条：</em>
                    <span v-for="(item, i) in data" :key="i">
                        <a
                            :href="item.link"
                            target="_blank"
                            rel="noopener noreferrer"
                            :style="{ color: item.color }"
                            :class="{ isHighlight: !!item.color }"
                            >{{ item.title }}
                        </a>
                    </span>
                </span> -->
            </div>
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
                    <tr>
                        <td>美人图</td>
                        <td>
                            <el-select
                                v-model="server"
                                placeholder="区服"
                                size="mini"
                                class="u-select-meirentu"
                            >
                                <el-option
                                    v-for="item in servers"
                                    :key="item"
                                    :label="item"
                                    :value="item"
                                >
                                </el-option>
                            </el-select>
                        </td>
                        <td>{{ meirentu || "今日暂无画像" }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { getNews } from "@/service/index";
import { getDaily } from "@/service/next";
import { getMeirentu } from "@/service/spider";
import servers from "@jx3box/jx3box-data/data/server/server_cn.json";
import User from "@jx3box/jx3box-common/js/user";
export default {
    name: "daily",
    props: [],
    data: function() {
        return {
            year: "",
            month: "",
            date: "",

            daily: [],

            meirentu: "",
            servers,
            server: "",
        };
    },
    computed: {
        default_server : function (){
            return this.$store.state.server
        }
    },
    methods: {
        initDate: function() {
            let dt = new Date();
            this.year = dt.getFullYear();
            this.month = dt.getMonth() + 1;
            this.date = dt.getDate();
        },
        loadDaily: function() {
            let dt = new Date();
            let hour = dt.getHours();
            let q;
            if (hour > 0 && hour < 9) {
                q = ~~((Date.now() - 86400000) / 1000);
            } else {
                q = ~~(Date.now() / 1000);
            }

            getDaily(q).then((res) => {
                let list = res.data.data;
                list.forEach((item) => {
                    if (item.taskType == "大战") {
                        this.daily.push({
                            type: "大战",
                            zone: "全服",
                            name: item.activityName.slice(3, -1),
                        });
                    } else {
                        this.daily.push({
                            type: "战场",
                            zone: "全服",
                            name: item.activityName.slice(3),
                        });
                    }
                });
            });
        },
        loadMeirentu: function() {
            getMeirentu(this.server).then((res) => {
                this.meirentu = res.data.data;
            });
        },
    },
    mounted: function() {
        this.server = this.default_server
        this.initDate();
        this.loadDaily();
        this.loadMeirentu()
    },
    watch : {
        server : function (){
            this.loadMeirentu()
        },
    }
};
</script>

<style lang="less">
@import "../assets/css/daily.less";
</style>
