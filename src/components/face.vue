<template>
    <div class="m-face m-sideblock">
        <div class="m-face-header m-sideblock-header">
            <i class="el-icon-s-shop"></i>
            <a class="u-title" href="/share" target="_blank">最新捏脸</a>
            <a href="/share" class="u-more" target="_blank" rel="noopener noreferrer" title="查看全部">
                <i class="el-icon-more"></i>
            </a>
        </div>
        <div class="m-face-content" v-loading="loading">
            <ul class="m-face-list" v-if="data && data.length">
                <li class="u-item" v-for="(item, i) in data" :key="i">
                    <a class="u-face" :target="target" :href="item.ID | postLink">
                        <i class="u-img">
                            <img class="u-pic" :src="showThumb(item)" loading="lazy" />
                        </i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {
    buildTarget,
    showBanner,
    getLink,
} from "@jx3box/jx3box-common/js/utils";
import { getPosts } from "@/service/cms.js";
export default {
    name: "face",
    props: [],
    components: {},
    data: function () {
        return {
            data: [],
            loading: false,
        };
    },
    computed: {
        target: function () {
            return buildTarget();
        },
    },
    methods: {
        showThumb: function (item) {
            let url = _.get(item.post_meta, "pics[0]['url']");
            if (url) {
                return showBanner(url, "face");
            } else {
                return __imgPath + "image/face/null.png";
            }
        },
    },
    filters: {
        postLink: function (id) {
            return getLink("share", id);
        },
    },
    created: function () {},
    mounted: function () {
        this.loading = true;
        getPosts({
            type : 'share',
            per: 16,
        })
            .then((res) => {
                this.data = res.data.data.list || [];
            })
            .finally(() => {
                this.loading = false;
            });
    },
};
</script>

<style lang="less">
@import "../assets/css/face.less";
</style>