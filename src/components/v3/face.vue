<template>
    <div class="m-index-face">
        <banner />
        <face />
    </div>
</template>

<script>
import banner from "@/components/v2/banner.vue";
import face from "@/components/index/face.vue";
export default {
    name: "v3-face",
    props: [],
    components: {
        banner,
        face,
    },
    data: function () {
        return {};
    },
    computed: {},
    watch: {},
    methods: {},
    created: function () {},
    mounted: function () {},
};
</script>
