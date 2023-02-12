<template>
    <div class="p-notice-v2">
        <Header :overlayEnable="true"></Header>
        <div class="p-notice-container" :class="theme">
            <div class="wp">
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
        </div>
        <div class="p-notice-footer">
            <div class="wp">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Notice",
    data: function () {
        return {
            theme: "white",
        };
    },
    methods: {},
};
</script>

<style lang="less">
@import "~@/assets/css/notice/index.less";
</style>
