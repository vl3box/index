<template>
  <div class="p-yaozong" :style="{ 'background-image': 'url(' + bgImg + ')' }">
    <div class="p-yaozong-container wp">
      <!-- 左侧菜单 -->
      <div class="p-yaozong-menu">
        <span
          v-for="(item, i) in menu"
          :key="item"
          :class="[`u-menu` + (i + 1), i == menuNum ? 'acetive' : '']"
          @click="changeMenu(i)"
        ></span>
      </div>
      <!-- 右侧内容 -->
      <div class="p-yaozong-tabcont">
        <!-- 背景故事 -->
        <div class="u-story" v-if="menuNum == 0">
          <div class="u-arr">
            <span
              class="left"
              v-if="arrNum > 1"
              @click="changeArr(5, 'left')"
            ></span>
            <span class="right" v-if="arrNum < 5" @click="changeArr(5)"></span>
          </div>
          <div class="u-item">
            <img :src="story" />
            <img :src="storyText" />
          </div>
        </div>
        <!-- 心法 -->
        <div class="u-xinfa" v-if="menuNum == 1">
          <div class="u-arr">
            <span class="right" @click="changeArr(5)"></span>
          </div>
          <div class="u-item">
            <img :src="logo" class="u-logo" />
            <img :src="icon" v-if="arrNum > 1" class="u-icon" />
            <img :src="xinfa" class="u-text" />
            <a
              href="/bps/#/?subtype=无方"
              target="_blank"
              class="u-btn u-wufang"
              v-if="arrNum == 1"
            ></a>
            <a
              href="/bps/#/?subtype=灵素"
              target="_blank"
              class="u-btn u-lingsu"
              v-if="arrNum == 1"
            ></a>
            <a
              href="/macro/#/?subtype=无方"
              target="_blank"
              class="u-btn u-yaozong"
              v-else
            ></a>
          </div>
        </div>
        <!-- 招式 -->
        <div class="u-zhaoshi" v-if="menuNum == 2">
          <div class="u-tab">
            <span
              v-for="item in 3"
              :key="item"
              :class="[`zhaoshi` + item, item == contNum ? 'active' : '']"
              @click="changeCont(item)"
            ></span>
          </div>
          <div class="u-cont">
            <div class="u-arr">
              <span
                class="left"
                v-if="arrNum > 1"
                @click="changeArr(3, 'left')"
              ></span>
              <span
                class="right"
                v-if="arrNum < 3"
                @click="changeArr(3)"
              ></span>
            </div>
            <img :src="zhaoshiImg" />
          </div>
        </div>
        <!-- 武器 -->
        <div class="u-wuqi" v-if="menuNum == 3">
          <div class="u-arr">
            <span class="right" @click="changeArr(4, 'wuqi')"></span>
          </div>
          <div class="u-open" @click="openWuqi"></div>
          <div class="u-showImg" :class="`wuqi` + arrNum" v-if="showWuqi">
            <img :src="wuqi" />
            <div class="u-close" @click="openWuqi"></div>
          </div>
        </div>
        <!-- 校服 -->
        <div class="u-yuanhua" v-if="menuNum == 4">
          <div class="u-arr">
            <span class="right" @click="changeArr(4)"></span>
          </div>
          <img :src="yuanhua" />
        </div>
        <!-- 风景 -->
        <div class="u-bgpic" v-if="menuNum == 5">
          <div class="u-arr">
            <span class="right" @click="changeArr(2, 'bg')"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Yaozong",
  props: [],
  components: {},
  data: function () {
    return {
      btyz: "https://img.jx3box.com/topic/beitianyaozong/sect/",
      bgImg: "",
      menu: ["story", "xinfa", "zhaoshi", "wuqi1", "yuanhua", "bg1"],
      arrNum: 1,
      contNum: 1,
      menuNum: 0,
      zhaoshiImg: "https://oss.jx3box.com/upload/post/2021/10/13/7_6853650.png",
      showWuqi: false,
    };
  },
  computed: {
    logo() {
      return this.btyz + `xinfabg.png`;
    },
    story() {
      return this.btyz + `story` + this.arrNum + `.png`;
    },
    icon() {
      return this.btyz + `icon` + (this.arrNum - 1) + `.png`;
    },
    xinfa() {
      return this.btyz + `xinfa` + this.arrNum + `.png`;
    },
    storyText() {
      return this.btyz + `story0` + this.arrNum + `.png`;
    },
    wuqi() {
      return this.btyz + `wuqi` + this.arrNum + `.png`;
    },
    yuanhua() {
      return this.btyz + `yh` + this.arrNum + `.png`;
    },
  },
  watch: {
    menuNum: {
      immediate: true,
      handler: function (val) {
        this.bgImg = this.btyz + this.menu[val] + `.jpg`;
      },
    },
  },
  methods: {
    changeMenu(i) {
      this.menuNum = i;
      this.changeCont(1);
    },
    changeCont(i) {
      this.contNum = i;
      this.arrRest();
    },
    arrRest() {
      this.arrNum = 1;
    },
    openWuqi() {
      console.log(this.arrNum);
      this.showWuqi = !this.showWuqi;
    },

    changeArr(num, arr) {
      if (arr == "left") {
        this.arrNum -= 1;
        if (this.arrNum < 1) {
          this.arrNum = num;
        }
      } else {
        this.arrNum += 1;
        if (this.arrNum > num) {
          this.arrNum = 1;
        }
        if (arr == "bg") {
          this.bgImg = this.btyz + `bg` + this.arrNum + `.jpg`;
        }
        if (arr == "wuqi") {
          this.bgImg = this.btyz + `wuqi` + this.arrNum + `.jpg`;
        }
      }
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
};
</script>
 
 <style lang="less">
@import "../../assets/css/topic/beitianyaozongSect.less";
</style>
 