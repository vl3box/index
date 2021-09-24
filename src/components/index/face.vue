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
import {__imgPath} from '@jx3box/jx3box-common/data/jx3box.json'
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
        per : function (){
            let w = window.innerWidth
            let space = w
            let count = 10
            if(w<1280){
                space = w - 30*2
            }else if(w<=1680){
                space = w - 30*2 - 350
            }else{
                space = w - 30*2 - 350 - 320
            }
            count = Math.floor(space / 150) * 2

            if(w<768){
                count = 9
            }
            return count
        }
    },
    methods: {
        showThumb: function (item) {
            let url = _.get(item.post_meta, "pics[0]['url']");
            if (url) {
                return showBanner(url, "face");
            } else {
                return __imgPath + "image/face/null2.png";
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
            per: this.per,
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
@import "../../assets/css/index/face.less";
</style>