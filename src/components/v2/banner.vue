<template>
    <div class="m-v2-banner">
        <el-carousel trigger="click" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3 class="small">{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: "demo",
    props: [],
    components: {
        //demo
    },
    data: function () {
        return {
            loading: false,
        };
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>
<style lang='less'>
    @import "../../assets/css/v2/banner.less";
</style>