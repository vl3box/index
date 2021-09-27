<template>
    <!-- 专题页 -->
    <div class="p-topic" :class="theme_cls">
        <Header :overlayEnable="true"></Header>
        <div class="p-topic-container">
            <div class="m-topic-box">
                <!-- 首屏 -->
                <div class="m-topic-top">
                    <top-slider class="m-top-slider" :data="data.top_slider" height="420px"></top-slider>
                    <div class="m-topic-nav">
                        <img-list-x class="m-topic-tools" :data="data.top_tools" gap="20"></img-list-x>
                        <img-single-link class="m-topic-event" :data="data.top_event"></img-single-link>
                    </div>
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
import img_list_x from "@/components/topic/img_list_x.vue";
import img_single_link from "@/components/topic/img_single_link.vue";
export default {
    name: "Topic",
    props: [],
    components: {
        'top-slider': slider_a,
        'img-list-x':img_list_x,
        'img-single-link':img_single_link,
    },
    data: function () {
        return {
            raw : []
        };
    },
    computed: {
        theme_cls: function () {
            return "theme-" + theme;
        },
        data : function (){
            let _data = {}
            this.raw.forEach((item) => {
                if(!_data[item.subtype]){
                    _data[item.subtype] = []
                }
                _data[item.subtype].push(item)
            })
            return _data
        }
    },
    watch: {},
    methods: {
        init : function (){
            getTopic(theme).then((res) => {
                this.raw = res.data.data
            })
        }
    },
    filters: {},
    created: function () {},
    mounted: function () {
        this.init()
    },
};
</script>

<style lang="less">
@import "../../assets/css/theme/kv.less";
@import "../../assets/css/topic/common.less";
@import "../../assets/css/theme/beitianyaozong.less";
@import "../../assets/css/topic/beitianyaozong.less";
</style>