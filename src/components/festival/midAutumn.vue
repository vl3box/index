<template>
    <div class="midAutumn">
        <img :src="`${imgLink}202302.png`" class="u-img" @click="close" />
        <img :src="`${imgLink}202301.png`" class="u-img-cover" :class="{ active }" @click.stop="hide" />
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "midAutumn",
    props: ["fontCount"],
    computed: {
        imgLink() {
            return __imgPath + `topic/festival/midAutumn/`;
        },
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        close() {
            this.active = false;
            this.$emit("checked");
            this.$emit("close");
        },
        hide() {
            this.active = true;
            this.$emit("checked");
        },
    },
};
</script>
<style lang="less">
.midAutumn {
    .pr;
    .pointer;
    .size(600px,auto);
    .auto(x);
    .mt(80px);

    @media screen and(max-width:@ipad) {
        .w(500px);
    }
    @media screen and(max-width:@phone) {
        .w(80%);
    }
    @media screen and (max-height: 820px) and (max-width: 1280px) {
        .w(360px);
    }
    @media screen and (max-height: 820px) and (max-width: @phone) {
        .w(80%);
        max-width: 320px;
    }
    .u-img-cover {
        .pa;
        .lt(0);
        transition-duration: 0.8s;
        &:hover {
            top: -20px;
        }
        &.active {
            .none;
        }
    }
}
</style>
