<template>
    <!-- 专题页 -->
    <div class="p-topic">
        <Header :overlayEnable="true"></Header>
        <router-view></router-view>
        <div class="p-topic-footer">
            <div class="wp">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "App",
    props: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted: function () {},
};
</script>


<style lang="less">
@import "../../assets/css/theme/kv.less";
@import "../../assets/css/topic/common.less";
@import "../../assets/css/topic/beitianyaozongNew.less";
@import "../../assets/css/topic/animation.less";
</style>