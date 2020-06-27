<template>
    <div
        id="app"
    >
        <Header></Header>
        <LeftSidebar>
            <Nav />
            <gamenews />
            <activity />
            <notice />
        </LeftSidebar>
        <Main :withoutRight="true">
            <div class="m-main">
                <div class="m-primary">
                    <slider />
                    <box />
                </div>
                <div class="m-extend">
                    <!-- <daily /> -->
                    <servers  />
                    <price />
                </div>
            </div>
            <Footer></Footer>
        </Main>
    </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import gamenews from "@/components/gamenews.vue";
import slider from "@/components/slider.vue";
import activity from "@/components/activity.vue";
import notice from "@/components/notice.vue";
import box from "@/components/box.vue";
import daily from "@/components/daily.vue";
import servers from "@/components/servers.vue";
import price from "@/components/price.vue";

export default {
    name: "App",
    props: [],
    data: function() {
        return {};
    },
    computed: {
    },
    methods: {},
    components: {
        Nav,
        activity,
        gamenews,
        notice,
        slider,
        box,
        // daily,
        servers,
        price
    },
};
</script>

<style lang="less">
@import "./assets/css/app.less";
</style>
