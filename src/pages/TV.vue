<template>
    <div class="p-tv">
        <Header :overlayEnable="true"></Header>
        <div class="m-tv-main">
            <div class="m-tv-content">
                <div class="wp">
                    <a :href="item.link" class="m-box" v-for="(item, i) in list" :key="i" target="_blank">
                        <img class="u-img" :src="item.img" />
                    </a>
                </div>
                <img src="../assets/img/tv/box.png" alt="盒子娘" class="m-jx3box" />
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import { getThumbnail } from "@jx3box/jx3box-common/js/utils";
import { getHistoryHeadlines } from "@/service/cms";
export default {
    name: "TV",
    props: [],
    components: {},
    data: function () {
        return {
            list: [],
        };
    },
    computed: {
        client() {
            return this.$store.state.client;
        },
        params() {
            return {
                client: this.client,
                type: "slider",
                status: 1,
                per: 8,
            };
        },
    },
    watch: {},
    methods: {
        load() {
            getHistoryHeadlines(this.params).then((res) => {
                this.list = res.data.data.list;
            });
        },
        showThumbnail(val) {
            return getThumbnail(val, "index_banner"); //[220, 60]
        },
    },
    mounted() {
        this.load();
    },
};
</script>

<style lang="less">
@import "~@/assets/css/tv/index.less";
</style>
