<template>
    <div class="m-event-wrapper" v-loading="loading">
        <div class="m-event" id="m-event">
            <a v-for="(item, index) in data" :key="index" :href="item.link" target="_blank" rel="noopener noreferrer">
                <img :src="item.img" :alt="item.title" />
            </a>
        </div>
        <a class="u-more" href="/notice?subtype=2" target="_blank"><span>往期活动</span></a>
    </div>
</template>

<script>
import { getEventV2 } from "@/service/cms";
export default {
    name: "event",
    props: [],
    data: function () {
        return {
            data: [],
            loading: false,
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        params: function () {
            return {
                client: this.client,
                type:"common",
                subtype: "event",
                per: 4,
                status: 1,
            };
        },
    },
    methods: {
        loadData: function () {
            this.loading = true;
            return getEventV2(this.params)
                .then((res) => {
                    this.data = res.data.data.list || [];
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
    mounted: function () {
        this.loadData();
    },
};
</script>

<style lang="less">
@import "../../assets/css/v2/event.less";
</style>
