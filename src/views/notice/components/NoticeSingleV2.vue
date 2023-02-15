<template>
    <div class="m-notice-content">
        <!-- 返回列表 -->
        <div class="m-backList" @click="goBack">
            <img class="u-arr" src="@/assets/img/notice/arr.svg" />
            <span>返回列表</span>
        </div>
        <!-- 返回顶部 -->
        <div class="m-backTop" @click="goTop" v-show="show" :style="style">
            <img class="u-arr" src="@/assets/img/notice/arr.svg" />
            <span>返回顶部</span>
        </div>
        <!-- 内容 -->
        <NoticeSingle />
    </div>
</template>

<script>
import NoticeSingle from "./NoticeSingle.vue";
export default {
    name: "NoticeSingleV2",
    components: { NoticeSingle },
    data: function () {
        return {
            show: false,
            top: 0,
        };
    },
    computed: {
        style() {
            return {
                top: this.top + "px",
            };
        },
    },

    methods: {
        goBack() {
            this.$router.go(-1) ? this.$router.go(-1) : this.$router.push({ path: "/" });
        },
        goTop() {
            const self = this;
            this.scrollToptimer = setInterval(function () {
                var osTop = document.documentElement.scrollTop || document.body.scrollTop;
                var ispeed = Math.floor(-osTop / 7);
                document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
                if (osTop === 0) {
                    clearInterval(self.scrollToptimer);
                }
                self.isTop = true;
            }, 30);
        },
    },
    mounted() {
        var clientHeight = document.documentElement.clientHeight;
        const self = this;
        window.addEventListener("scroll", function () {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (osTop >= clientHeight) {
                self.show = true;
                self.top = osTop + clientHeight - 200;
            }
            if (!self.isTop) {
                clearInterval(self.scrollToptimer);
            }
            self.isTop = false;
        });
    },
};
</script>

<style lang="less">
// 返回按钮
.m-backList {
    .flex;
    .r(20px);
    .pointer;
    .size(90px,42px);
    background-color: #fff;
    color: #282c31;
    padding: 0 16px;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
    .u-arr {
        transform: rotate(-90deg);
    }
}

// 返回顶部
.m-backTop {
    .pa;
    .flex;
    .z(2);
    .size(40px,134px);
    .pointer;
    right: -50px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
    gap: 10px;
    padding: 0 10px;
    background: #fff;
    border-radius: 30px;
}
// 内容区域
.m-notice-content {
    .pt(160px);
    position: relative;
    min-height: calc(100vh - 54px);
    box-sizing: border-box;
    .m-notice-box {
        padding: 20px 0 60px 0;
    }
    .m-notice-single {
        .r(20px);
        padding: 30px;
        box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.1);
    }
}
</style>
