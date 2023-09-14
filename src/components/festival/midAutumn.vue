<template>
    <div class="midAutumn">
        <div class="m-count">
            <img :src="`${imgLink}${item}.png`" v-for="(item, index) in number" :key="index" class="u-count" />
        </div>
        <img :src="`${imgLink}202302.jpg`" class="u-img" @click="close" />
        <img :src="`${imgLink}202301.png`" class="u-img u-img-cover" :class="{ active }" @click.stop="hide" />
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
        number() {
            const str = this.fontCount + "";
            return str.split("") || [0];
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
    .auto(x);
    .ct(o,420px,720px);
    .size(420px,720px);
    .u-img {
        .full;
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
    .m-count {
        .pa;
        .lt(152px,430px);
        .flex;
        .w(100px);
        justify-content: center;
        gap: 2px;
        .u-count {
            .h(16px);
        }
    }
    @media screen and (max-width: @phone) {
        zoom: 0.8;
    }
}
</style>
