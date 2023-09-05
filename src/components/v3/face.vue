<template>
    <div class="m-index-face m-sideblock">
        <div class="m-face-header m-sideblock-header">
            <div class="u-left">
                <i class="u-icon el-icon-camera-solid"></i>
                <span class="u-title">妆造推荐</span>
            </div>
            <div class="u-right">
                <a :href="more_link" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                    <i class="el-icon-more"></i>
                </a>
            </div>
        </div>
        <div class="m-face-list">
            <a v-for="(item, i) in data" :key="i" :href="item.link" class="u-face" target="_blank"
                ><img :src="showFacePic(item.img)"
            /></a>
        </div>
    </div>
</template>

<script>
import { $cms } from "@jx3box/jx3box-common/js/https.js";
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "v3-face",
    props: [],
    components: {},
    data: function () {
        return {
            data: [],
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
    },
    watch: {},
    methods: {
        showFacePic(url) {
            return getThumbnail(url, [320 * 2, 160 * 2]);
        },
    },
    mounted: function () {
        $cms({ mute: true })
            .get(`/api/cms/news/v2`, {
                params: {
                    type: "slider",
                    source_type: "face",
                    client: this.client,
                    per: 4,
                },
            })
            .then((res) => {
                this.data = res.data.data.list;
            });
    },
};
</script>

<style lang="less">
@import "~@/assets/css/v3/face.less";
</style>
