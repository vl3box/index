<template>
    <div class="p-tv"></div>
</template>

<script>
export default {
    name: "TV",
    props: [],
    components: {},
    data: function () {
        return {};
    },
    computed: {
        client: function () {
            return this.$store.state.client;
        },
    },
    watch: {},
    methods: {},
    filters: {},
    created: function () {},
    mounted() {},
};
</script>

<style lang="less">
// @import "../assets/css/kv.less";
</style>
