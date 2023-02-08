<template>
    <div class="p-tv">
        <Header :overlayEnable="true"></Header>
        <div class="m-tv-main">
            <div class="m-tv-content">
                <img src="@/assets/img/tv/box.png" alt="盒子娘" class="m-jx3box">
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
export default {
    name: "TV",
    props: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted() {},
};
</script>

<style lang="less">
@import "~@/assets/css/tv/index.less";
</style>
