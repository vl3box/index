<template>
    <div class="midAutumn">
        <div class="m-count">
            <img :src="`${imgLink}${item}.png`" v-for="(item, index) in number" :key="index" class="u-count" />
        </div>
        <img :src="`${imgLink}202302.jpg`" class="u-img" @click="close" />
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
    .size(600px,auto);
    .auto(x);
    .mt(80px);

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
        .flex;
        .size(100px);
        .ct(o,100px,100px);
        justify-content: center;
        align-items: center;
        margin: 64px 0 0 -60px;
        .u-count {
            .h(24px);
        }
    }
    @media screen and(max-width:@ipad) {
        .size(300px,514px);
        min-height: 565px;
        .m-count {
            .h(50px);
            margin:5px 0 0 -54px;
            .u-count {
                .h(13px);
            }
        }
    }
}
</style>
