<template>
    <div class="m-event" id="m-event" v-if="event_status">
        <el-row :gutter="20">
            <el-col :span="4" v-for="(item, i) in data" :key="i"
                ><div>
                    <a
                        :href="item.link"
                        rel="noopener noreferrer"
                        target="_blank"
                        ><img :src="item.img"
                    /></a></div
            ></el-col>
        </el-row>
    </div>
</template>

<script>
import { buildTarget, resolveImagePath } from "@jx3box/jx3box-common/js/utils";
import { getSliders } from "@/service/cms";
export default {
    name: "event",
    props: [],
    data: function() {
        return {
            data: [],
        };
    },
    computed: {
        player_status: function() {
            return (
                this.$store.state.config.index_live_status ||
                this.$store.state.config.index_video_status
            );
        },
        event_status: function() {
            return ~~this.$store.state.config.event_status;
        },
    },
    methods: {},
    beforeCreate: function() {
        getSliders("event", 10).then((res) => {
            let data = res.data.data;
            data.forEach((item) => {
                item.img = resolveImagePath(item.img);
            });
            this.data = data.slice(0, 6);
        });
    },
    // updated: function() {
    //     $("#m-event").slick({
    //         infinite: true,
    //         slidesToShow: 6,
    //         slidesToScroll: 5,
    //     });
    // },
    components: {},
};
</script>

<style lang="less">
@import "../assets/css/event.less";
</style>
