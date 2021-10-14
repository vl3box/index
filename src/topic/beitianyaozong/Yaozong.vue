<template>
    <div class="p-topic-yaozong-wrapper">
        <div class="p-yaozong" :style="{'backgroundImage':getBgUrl(index)}">
            <div class="m-yaozong-bg">
                <img :src="img_root + 'bg' + i + '.jpg'" v-for="(item,i) in 6" :key="i" />
            </div>
            <div class="wp p-yaozong-container">
                <!-- 右侧内容 -->
                <div class="m-yaozong-content">
                    <component :is="focus" />
                </div>
                <!-- 左侧菜单 -->
                <div class="m-yaozong-menu">
                    <span
                        v-for="(item, i) in menu"
                        :key="item"
                        :class="[`u-menu` + (i + 1), i == index ? 'active' : '']"
                        @click="changeMenu(i)"
                    ></span>
                </div>
                <!-- 山水云 -->
                <div class="m-yaozong-landscape"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";
import mount from './mount.vue'
import scenery from './scenery.vue'
import skill from './skill.vue'
import weapon from './weapon.vue'
import equip from './equip.vue'
import story from './story.vue'

export default {
    name: "Yaozong",
    props: [],
    components: {},
    data: function () {
        return {
            // 背景ROOT
            img_root: __imgPath + "topic/beitianyaozong/sect/",
            // 当前索引
            index: 0,
            menu: ["story", "mount", "skill", "weapon", "equip", "scenery"],

            // arrNum: 1,
            // contNum: 1,
            // menuNum: 0,
            // zhaoshiImg:
            //     "https://oss.jx3box.com/upload/post/2021/10/13/7_6853650.png",
            // showWuqi: false,
            // infinite: true,
        };
    },
    computed: {
        focus : function (){
            return this.menu[this.index]
        }
        // xflogo() {
        //     return this.btyz + `xinfa.png`;
        // },
        // zslogo() {
        //     return this.btyz + `zhaoshi.png`;
        // },
        // story() {
        //     return this.btyz + `story` + this.arrNum + `.png?`;
        // },
        // icon() {
        //     return this.btyz + `icon` + (this.arrNum - 1) + `.png`;
        // },
        // xinfa() {
        //     return this.btyz + `xinfa` + this.arrNum + `.png`;
        // },
        // storyText() {
        //     return this.btyz + `story0` + this.arrNum + `.png`;
        // },
        // wuqi() {
        //     return this.btyz + `wuqi` + this.arrNum + `.png`;
        // },
        // yuanhua() {
        //     return this.btyz + `yh` + this.arrNum + `.png`;
        // },
    },
    watch: {
        // menuNum: {
        //     immediate: true,
        //     handler: function (val) {
        //         this.bgImg = this.btyz + this.menu[val] + `.jpg`;
        //     },
        // },
    },
    methods: {
        changeMenu(i) {
            this.index = i;
        },
        getBgUrl: function (i) {
            return `url('${this.img_root}bg${i}.jpg')`;
        },
        // arrRest() {
        //     this.arrNum = 1;
        // },
        // openWuqi() {
        //     this.showWuqi = !this.showWuqi;
        // },

        // changeArr(num, arr) {
        //     this.infinite = false;
        //     setTimeout(() => {
        //         this.infinite = true;
        //     }, 50);
        //     if (arr == "left") {
        //         this.arrNum -= 1;
        //         if (this.arrNum < 1) {
        //             this.arrNum = num;
        //         }
        //     } else {
        //         this.arrNum += 1;
        //         if (this.arrNum > num) {
        //             this.arrNum = 1;
        //         }
        //         if (arr == "bg") {
        //             this.bgImg = this.btyz + `bg` + this.arrNum + `.jpg`;
        //         }
        //         if (arr == "wuqi") {
        //             this.bgImg = this.btyz + `wuqi` + this.arrNum + `.jpg`;
        //         }
        //     }
        // },
    },
    filters: {},
    created: function () {},
    mounted: function () {},
    components : {
        mount,
        scenery,
        skill,
        weapon,
        equip,
        story,
    }
};
</script>
 
 <style lang="less">
@import "../../assets/css/topic/beitianyaozongSect.less";
</style>
 