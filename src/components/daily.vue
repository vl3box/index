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
            <ul>
                <li v-for="(item, i) in list" :key="i">
                    <em>{{item.taskType}}</em><span>{{ item.activityName }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getNews } from "../service/index";
import { getDaily } from "../service/next";
export default {
    name: "daily",
    props: [],
    data: function() {
        return {
            year: "",
            month: "",
            date: "",
            // data: [],
            list: [],
        };
    },
    computed: {},
    methods: {},
    created: function() {
        let dt = new Date();
        this.year = dt.getFullYear();
        this.month = dt.getMonth() + 1;
        this.date = dt.getDate();
    },
    beforeCreate: function() {
        // getNews("bigbang", 1).then((data) => {
        //     this.data = data;
        // });

        let dt = new Date();
        let hour = dt.getHours();
        let q;
        if (hour > 0 && hour < 9) {
            q = ~~((Date.now() - 86400000) / 1000);
        } else {
            q = ~~(Date.now() / 1000);
        }

        getDaily(q).then((res) => {
            this.list = res.data.data;
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/daily.less";
</style>
