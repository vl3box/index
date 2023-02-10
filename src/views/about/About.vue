<template>
    <div class="about-wrapper">
        <Header :overlayEnable="true"></Header>
        <div class="m-about-main">
            <template v-if="isPhone">
                <Breadcrumb :name="name" slug="about" root="/about" :publishEnable="false"></Breadcrumb>
                <LeftSidebar>
                    <SubNav></SubNav>
                </LeftSidebar>
            </template>
            <SubNav v-else></SubNav>
            <div class="m-about-content" :class="{ 'm-about-content-phone': isPhone }">
                <transition duration="550" name="nested" mode="out-in">
                    <keep-alive>
                        <router-view v-if="$route.meta.cache" class="inner"></router-view>
                    </keep-alive>
                    <router-view v-if="!$route.meta.cache" class="inner"></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import SubNav from "./components/SubNav.vue";
export default {
    name: "About",
    props: [],
    components: { SubNav },
    data: function () {
        return {
            isPhone: false,
        };
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
        name() {
            return this.$route.meta.title === "首页" ? "关于我们" : this.$route.meta.title;
        },
    },
    watch: {},
    methods: {},
    created: function () {},
    mounted() {
        const self = this;
        self.isPhone = self.$utils.isPhone();
        let timer = null;
        window.addEventListener("resize", () => {
            if (timer === null) {
                timer = setTimeout(() => {
                    self.isPhone = self.$utils.isPhone();
                    clearTimeout(timer);
                    timer = null;
                }, 0);
            }
        });
    },
};
</script>

<style lang="less">
@import "~@/assets/css/about/about.less";
</style>
