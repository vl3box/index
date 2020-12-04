<template>
    <div class="m-event" id="m-event">
        <a
            v-for="(item, i) in data"
            :key="i"
            :href="item.link"
            rel="noopener noreferrer"
            target="_blank"
            ><img :src="item.img"
        /></a>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getNews } from "../service/index";
export default {
    name: "event",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {
        player_status : function (){
            return this.$store.state.config.index_live_status || this.$store.state.config.index_video_status
        },
    },
    methods: {},
    beforeCreate: function() {
        getNews("event",10).then((data) => {
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data;
        });
    },
    updated: function() {
        $("#m-event").slick({
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 5,
        });
    },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/event.less";
</style>
