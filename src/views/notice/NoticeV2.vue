<template>
    <div class="p-notice-v2" :class="theme">
        <Header :overlayEnable="true"></Header>
        <div class="p-notice-container">
            <div class="wp">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
        </div>
        <Footer darkMode></Footer>
        <div class="m-bg-blur"></div>
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
