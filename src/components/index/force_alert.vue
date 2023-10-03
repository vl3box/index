<template>
    <el-dialog :visible="showAlert" custom-class="m-force-alert" :show-close="false" :close-on-click-modal="false">
        <a :href="link" target="_blank">
            <img class="u-main-img" :src="imgUrl" alt="">
        </a>
        <div class="u-close" @click="onClose"/>
    </el-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { getEventV2 } from "@/service/cms";
export default {
    name: "force_alert",
    data: function () {
        return {
            data: {},
            imgUrl: "",
            link: ""
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
            const key = `force_alert_${this.data.ID}`
            localStorage.setItem(key, 1)
        },
        loadEvent() {
            getEventV2(this.params).then(res => {
                const data = this.data = res.data.data.list?.[0]
                if (data) {
                    // 先判断是否已经弹过，如果弹过，就不再弹
                    const key = `force_alert_${data.ID}`
                    const isShow = localStorage.getItem(key)
                    if (~~isShow) {
                        return
                    }
                    this.imgUrl = data?.img;
                    this.link = data?.link;
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

