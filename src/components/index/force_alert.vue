<template>
    <el-dialog :visible="showAlert" custom-class="m-force-alert" :show-close="false" :close-on-click-modal="false">
        <el-carousel :interval="4000" height="600px" arrow="always">
            <el-carousel-item v-for="item in data" :key="item.ID">
                <a :href="item.link" target="_blank">
                    <img class="u-main-img" :src="item.img" alt="">
                </a>
            </el-carousel-item>
        </el-carousel>
        <div class="u-close" @click="onClose"></div>
    </el-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getEventV2 } from "@/service/cms";
export default {
    name: "force_alert",
    data: function () {
        return {
            data: [],
        };
    },
    computed: {
        ...mapGetters(["showAlert"]),
        params() {
            return {
                client: this.$store.state.client,
                type: "common",
                subtype: "alert",
                per: 1,
                status: 1,
            };
        },
    },
    mounted() {
        this.loadEvent();
    },
    methods: {
        ...mapMutations(["setShowAlert"]),
        onClose() {
            this.setShowAlert(false);
            const key = `force_alert_${this.data.map(item => item.ID).join("_")}`
            localStorage.setItem(key, 1)
        },
        loadEvent() {
            getEventV2(this.params).then(res => {
                this.data = res.data.data.list;
                if (this.data?.length) {
                    // 先判断是否已经弹过，如果弹过，就不再弹
                    const key = `force_alert_${this.data.map(item => item.ID).join("_")}`
                    const isShow = localStorage.getItem(key);
                    if (~~isShow) {
                        return
                    }
                    this.setShowAlert(true);
                }
            })
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/index/force_alert.less";
</style>

