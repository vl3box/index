<template>
    <el-dialog :visible="showAlert" custom-class="m-force-alert" :show-close="false">
        <img class="u-main-img" src="https://cdn.jx3box.com/design/wallpaper/jdt7th/2560x1440/%E8%93%AC%E8%8E%B1.jpg" alt="">
        <img src="@/assets/img/close.svg" class="u-close" @click="onClose"/>
    </el-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    name: "force_alert",
    data: function () {
        return {
        };
    },
    computed: {
        ...mapGetters(["showAlert"]),
    },
    methods: {
        ...mapMutations(["setShowAlert"]),
        onClose() {
            this.setShowAlert(false);
        }
    },
};
</script>

<style lang="less">
@import "~@/assets/css/index/force_alert.less";
</style>

