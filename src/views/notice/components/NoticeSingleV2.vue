<template>
    <div class="m-notice-content">
        <div class="m-detail-toolbar">
            <span class="m-back" @click="goBack">
                <img class="u-arr" src="@/assets/img/notice/arr.svg" />
                <span>返回列表</span>
            </span>
        </div>
        <NoticeSingle />
    </div>
</template>

<script>
import NoticeSingle from "./NoticeSingle.vue";
export default {
    name: "NoticeSingleV2",
    components: { NoticeSingle },
    data: function () {
        return {};
    },

    methods: {
        goBack() {
            this.$router.go(-1) ? this.$router.go(-1) : this.$router.push({ name: "list" });
        },
    },
};
</script>
