<template>
    <div class="m-event" id="m-event" v-if="event_status">
        <div class="u-event" v-for="(item, i) in data" :key="i">
            <a :href="item.link" rel="noopener noreferrer" target="_blank">
                <i :style="{ backgroundColor: item.bgcolor }">
                    <img :src="item.img | resolveImagePath" />
                </i>
            </a>
        </div>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getSliders } from "@/service/cms";
export default {
    name: "event",
    props: [],
    data: function () {
        return {
            data: [],
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        event_status: function () {
            return this.client == "origin"
                ? ~~this.$store.state.config.origin_event_status
                : ~~this.$store.state.config.event_status;
        },
        boxWidth : function (){
            if(window.innerWidth > 1280){
                return window.innerWidth - 370
            }else{
                return window.innerWidth - 40
            }
        },
        countPerView : function (){
            return Math.floor(this.boxWidth / (240 + 20))
        }
    },
    methods: {},
    mounted: function () {
        getSliders("event", this.client, 10)
            .then((res) => {
                this.data = res.data.data;
            })
            .then(() => {
                $("#m-event").slick({
                    infinite: true,
                    slidesToShow: this.countPerView,
                    slidesToScroll: this.countPerView - 1,
                });
            });
    },
    filters: { resolveImagePath },
};
</script>

<style lang="less">
@import "../../assets/css/index/event.less";
</style>
