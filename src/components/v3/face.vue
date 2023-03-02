<template>
    <div class="m-index-face">
        <banner />
        <div class="m-face">
            <div class="m-face-list">
                <a v-for="(item, i) in data" :key="i" :href="item.link" class="u-face" target="_blank"
                    ><img :src="showFacePic(item.img)"
                /></a>
            </div>
        </div>
    </div>
</template>

<script>
import banner from "@/components/v3/banner.vue";
import { $cms } from "@jx3box/jx3box-common/js/https.js";
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
export default {
    name: "v3-face",
    props: [],
    components: {
        banner,
    },
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
            return getThumbnail(url, [280*2, 85*2]);
        },
    },
    mounted: function () {
        $cms({ mute: true })
            .get(`/api/cms/news/v2`, {
                params: {
                    type: "slider",
                    source_type: "face",
                    client: this.client,
                    per: 10,
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
