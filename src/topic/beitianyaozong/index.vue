<template>
    <!-- 专题页 -->
    <div class="p-topic" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-topic-container">
            <div class="m-topic-box">
                <!-- 首屏 -->
                <div class="m-topic-top">
                    <slider-a class="m-top-slider" :data="data.top_slider" height="420px"></slider-a>
                    <div class="m-topic-nav">
                        <img-list-x class="m-topic-tools" :data="data.top_tools" gap="20"></img-list-x>
                        <img-single-link class="m-topic-event" :data="data.top_event"></img-single-link>
                    </div>
                </div>

                <!-- 药宗 -->
                <div class="m-topic-hot">
                    <!-- <img-single-simple class="m-topic-banner-left" :data="data.yaozong_banner"></img-single-simple> -->
                    <div class="m-yaozong-top">
                        <div class="m-yaozong-top-left">
                            <yaozong-skill :data="data.yaozong_skills"></yaozong-skill>
                            <img-list-x
                                class="m-yaozong-buttons"
                                :data="data.yaozong_buttons"
                                gap="20"
                            ></img-list-x>
                        </div>
                        <div class="m-yaozong-top-right">
                            <el-tabs class="m-yaozong-tabs" v-model="yaozong_tab">
                                <el-tab-pane label="最新热点" name="concat">
                                    <span slot="label">
                                        <i class="el-icon-collection-tag"></i> 最新热点
                                    </span>
                                    <text-list-y :data="data.news_1" :length="7" :withDate="true"></text-list-y>
                                </el-tab-pane>
                                <el-tab-pane label="门派改动" name="news">
                                    <span slot="label">
                                        <i class="el-icon-collection-tag"></i> 门派改动
                                    </span>
                                    <text-list-y :data="data.news_2" :length="7"></text-list-y>
                                </el-tab-pane>
                                <el-tab-pane label="新增玩法" name="posts">
                                    <span slot="label">
                                        <i class="el-icon-collection-tag"></i> 新增玩法
                                    </span>
                                    <text-list-y :data="data.news_3" :length="7"></text-list-y>
                                </el-tab-pane>
                                <a class="m-yaozong-more" href="/notice" target="_blank">
                                    <i class="el-icon-arrow-right"></i>阅读更多资讯
                                </a>
                            </el-tabs>
                        </div>
                    </div>
                    <div class="m-yaozong-bottom">
                        <h5 class="m-yaozong-scenery">
                            <i class="el-icon-camera-solid"></i> 地图美景
                        </h5>
                        <img-list-x class="m-yaozong-pics" :data="data.yaozong_pics" gap="20"></img-list-x>
                    </div>
                </div>

                <!-- 副本 -->
                <div class="m-topic-fb">
                    <div class="m-fb-left">
                        <header class="u-header">
                            <div class="u-title">雷域大泽</div>
                            <a href="/fb" class="u-more" target="_blank">
                                更多攻略
                                <i class="el-icon-arrow-right"></i>
                            </a>
                        </header>
                        <text-list-y
                            class="u-list"
                            :data="data.fb_posts"
                            :length="6"
                            :withAuthor="true"
                        ></text-list-y>
                        <img-list-x class="m-fb-tools" :data="data.fb_tools" :gap="15"></img-list-x>
                    </div>
                    <div class="m-fb-right">
                        <div class="m-fb-pic">副本场景+BOSS立绘</div>
                    </div>
                </div>

                <!-- PVP -->
                <div class="m-topic-pvp">
                    <div class="m-pvp-header">PVP</div>
                    <slider-b class="m-pvp-slider" :data="data.pvp_slider" height="300px"></slider-b>
                    <div class="m-pvp-box">
                        <div class="m-pvp-left">
                            <header class="u-header">
                                <div class="u-title">PVP革新</div>
                            </header>
                            <text-list-y class="u-list" :data="data.pvp_posts" :length="5"></text-list-y>
                        </div>
                        <div class="m-pvp-right">
                            <img-matrix :data="data.pvp_pics" :length="6" :gap="20" :span="8"></img-matrix>
                        </div>
                    </div>
                </div>

                <!-- PVX -->
                <div class="m-topic-pvx">
                    <div class="m-pvx-header">PVX</div>
                    <slider-b class="m-pvx-slider" :data="data.pvx_slider" height="300px"></slider-b>
                    <div class="m-pvx-box">
                        <div class="m-pvx-left">
                            <img-matrix :data="data.pvx_pics" :length="4" :gap="20" :span="12"></img-matrix>
                        </div>
                        <div class="m-pvx-right">
                            <header class="u-header">
                                <div class="u-title">PVX革新</div>
                            </header>
                            <text-list-y class="u-list" :data="data.pvx_posts" :length="5"></text-list-y>
                            <img-matrix class="u-pics" :data="data.pvx_buttons" :length="2" :gap="20" :span="12"></img-matrix>
                        </div>
                    </div>
                </div>

                <!-- misc -->
                <div class="m-topic-qrcode">
                    <img src="https://jx3.xoyo.com/assets/2018/11/26/assets/images/qrcode/qrcode_index.png" alt="">
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import { theme } from "../../../setting.json";
import { getTopic } from "@/service/topic";
import slider_a from "@/components/topic/slider_a.vue";
import slider_b from "@/components/topic/slider_b.vue";
import img_matrix from "@/components/topic/img_matrix.vue";
import img_list_x from "@/components/topic/img_list_x.vue";
import img_single_link from "@/components/topic/img_single_link.vue";
// import img_single_simple from "@/components/topic/img_single_simple.vue";
import yaozong_skill from "./yaozong_skill.vue";
import text_list_y from "@/components/topic/text_list_y.vue";
export default {
    name: "Topic",
    props: [],
    components: {
        "slider-a": slider_a,
        "slider-b": slider_b,
        "img-matrix": img_matrix,
        "img-list-x": img_list_x,
        "img-single-link": img_single_link,
        // "img-single-simple": img_single_simple,
        "yaozong-skill": yaozong_skill,
        "text-list-y": text_list_y,
    },
    data: function () {
        return {
            raw: [],
            yaozong_tab: "concat",
        };
    },
    computed: {
        theme_cls: function () {
            return "theme-" + theme;
        },
        data: function () {
            let _data = {};
            this.raw.forEach((item) => {
                if (!_data[item.subtype]) {
                    _data[item.subtype] = [];
                }
                _data[item.subtype].push(item);
            });
            return _data;
        },
        yaozong_concat: function () {
            let news = this.data?.yaozong_news || [];
            let posts = this.data?.yaozong_posts || [];
            let arr = news.concat(posts);
            arr.sort((a, b) => {
                return a.updated_at - b.updated_at;
            });
            return arr;
        },
    },
    watch: {},
    methods: {
        init: function () {
            getTopic(theme).then((res) => {
                this.raw = res.data.data;
            });
        },
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init();
    },
};
</script>

<style lang="less">
@import "../../assets/css/theme/kv.less";
@import "../../assets/css/topic/common.less";
@import "../../assets/css/theme/beitianyaozong.less";
@import "../../assets/css/topic/beitianyaozong.less";
</style>