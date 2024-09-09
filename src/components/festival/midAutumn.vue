<template>
    <div class="midAutumn">
        <div class="m-count">
            <img :src="`${imgLink}${item}.png`" v-for="(item, index) in number" :key="index" class="u-count" />
        </div>
        <img :src="`${imgLink}202403.png`" class="u-img" @click="close" />
        <div class="u-img u-img-cover" @click.stop="hide" :class="{ active }">
            <img :src="`${imgLink}202402.png`" class="u-pic u-pic-2" />
            <img :src="`${imgLink}202401.png`" class="u-pic u-pic-1" />
        </div>
    </div>
</template>
<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
export default {
    name: "midAutumn",
    props: ["fontCount"],
    computed: {
        imgLink() {
            return __imgPath + `topic/festival/midAutumn2024/`;
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
    .u-pic {
        .pa;
        .lb(0);
        transition: all 0.5s ease;
    }

    .u-pic-2 {
        z-index: 2;
        width: 880px;
        max-width: 880px;
        .lb(50%,0);
        .ml(-520px);
    }
    .u-img-cover {
        .pa;
        .lt(0);
        // transition-duration: 0.8s;
        &:hover {
            .u-pic-1 {
                transform: scale(1.05);
                transform-origin: bottom center;
            }
        }
        &.active {
            .none;
        }
    }
    .m-count {
        .pa; 
        .lb(0,30px);
        .flex;
        justify-content: center;
        gap: 2px;
        .u-count {
            .w(80%);
        }
    }
    @media screen and (max-width: @phone) {
        zoom: 0.8;
    }
}
</style>
