<template>
    <div class="m-daily m-sideblock">
        <div
            class="m-daily-header m-sideblock-header"
            :class="'daily-' + theme"
        >
            <div class="u-time">{{ year }}年{{ month }}月{{ date }}日</div>
            <img class="u-wechat" src="../../assets/img/right/qrcode.png" alt />
            <div class="u-list">
                <span class="u-weibo u-item">
                    <img svg-inline src="../../assets/img/weibo.svg" />
                    <em>官方微博：</em>
                    <a href="https://weibo.com/jx3box" target="_blank">
                        <b>JX3BOX魔盒</b>
                    </a>
                </span>
                <span class="u-weixin u-item">
                    <img svg-inline src="../../assets/img/wechat.svg" />
                    <em>微信公众号：</em>
                    <b>JX3BOX</b>
                </span>
            </div>
        </div>
        <div class="m-daily-content" v-if="client == 'std'">
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
                                ></el-option>
                            </el-select>
                        </td>
                        <td>
                            <el-tooltip
                                class="item"
                                effect="dark"
                                :content="(meirentu && meirentu.desc) || '无'"
                                placement="bottom"
                            >
                                <div>
                                    {{
                                        (meirentu && meirentu.name) ||
                                        "今日暂无画像"
                                    }}
                                </div>
                            </el-tooltip>
                        </td>
                    </tr>
                    <tr>
                        <td>福缘宠物</td>
                        <td>全服</td>
                        <td>
                            <a
                                v-for="item in luckyList"
                                :key="item.Index"
                                class="u-pet"
                                :href="getPetLink(item.Index)"
                                >{{ item.Name }}</a
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { getDaily } from "@/service/spider";
import { getMeirentu } from "@/service/spider";
import { getPets, getPetLucky } from "@/service/spider";
import servers from "@jx3box/jx3box-data/data/server/server_cn.json";
import User from "@jx3box/jx3box-common/js/user";
import { theme } from "../../../setting.json";
export default {
    name: "daily",
    props: [],
    data: function () {
        return {
            year: "",
            month: "",
            date: "",

            daily: [],

            meirentu: "",
            servers,
            server: "蝶恋花",

            luckyList: [],
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        my_server: function () {
            return this.$store.state.server;
        },
        theme: function () {
            return theme[this.client];
        },
    },
    watch: {
        my_server: function (val) {
            if (val) this.server = val;
        },
        server: {
            immediate: true,
            handler: function (val) {
                if (this.client == "std") {
                    val && this.loadMeirentu();
                }
            },
        },
    },
    methods: {
        initDate: function () {
            let dt = new Date();
            this.year = dt.getFullYear();
            this.month = dt.getMonth() + 1;
            this.date = dt.getDate();
        },
        loadDaily: function () {
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
                list?.forEach((item) => {
                    this.daily.push({
                        type: item.taskType,
                        zone: "全服",
                        name: item.activityName,
                    });
                });
            });

            
        },
        loadPetLucky:function(){
            getPetLucky().then((res) => {
                let data = res.data.std;
                let rawDate = new Date();
                let dateIndex = rawDate.getMonth() + 1 + "" + rawDate.getDate();
                let ids = data[dateIndex]
                getPets(ids).then((res) => {
                    this.luckyList = res.data.list
                })
            });
        },
        loadMeirentu: function () {
            getMeirentu(this.server).then((res) => {
                this.meirentu = res.data.data;
            });
        },
        //前往宠物单页
        getPetLink: function(petIndex) {
            return `/pvx/pet/${petIndex}`
        },
    },
    mounted: function () {
        this.initDate();
        if (this.client == "std") {
            this.loadDaily();
            this.loadPetLucky();
        }
    },
};
</script>

<style lang="less">
@import "../../assets/css/index/daily.less";
</style>
