<template>
  <div class="m-topic-sectmap">
    <div class="u-title">
      <span
        v-for="(item, i) in map"
        :key="i"
        :class="index == i ? 'active' : ''"
        @click="changMap(i)"
        >{{ item }}</span
      >
      <a href="" class="u-more">+ 查看更多</a>
    </div>
    <div class="u-cont">
      <span
        class="u-arr u-left el-icon-caret-left"
        v-if="arrleft"
        @click="moveImg"
      ></span>
      <span
        class="u-arr u-right el-icon-caret-right"
        v-if="arrright"
        @click="moveImg('right')"
      ></span>
      <div
        class="u-imgbox"
        :style="{ width: imgW + 'px', marginLeft: -left + 'px' }"
      >
        <a :href="item.link" v-for="(item, i) in list" :key="i"
          ><img :src="item.img" alt="" srcset=""
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectmap",
  props: [],
  components: {},
  data: function () {
    return {
      map: ["长白山", "北天药宗"],
      index: 0,
      left: 0,
      arrleft: false,
      arrright: true,
      allImg: {
        changbai: [
          {
            img: "https://jx3.xoyo.com/uploadfile/2020/0320/20200320051105710.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0830/20210830102235510.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0910/20210910021529726.png",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0916/20210916074359127.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0805/20210805122311765.png",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0810/20210810031631969.png",
            link: "",
          },
        ],
        yaozong: [
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0805/20210805122311765.png",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2020/0320/20200320051105710.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0830/20210830102235510.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0910/20210910021529726.png",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0916/20210916074359127.jpg",
            link: "",
          },
          {
            img: "https://jx3.xoyo.com/uploadfile/2021/0810/20210810031631969.png",
            link: "",
          },
        ],
      },
      list: [],
    };
  },
  computed: {
    imgW: function () {
      return this.list.length * 420;
    },
  },
  watch: {
    index: {
      handler(val) {
        if (val == 0) {
          this.list = this.allImg.changbai;
        } else {
          this.list = this.allImg.yaozong;
        }
        this.left = 0;
        this.arrleft = false;
        this.arrright = true;
      },
      immediate: true,
      deep: true,
    },
    left: {
      handler(val) {
        if (val == 0) {
          this.arrleft = false;
        } else {
          this.arrleft = true;
          const num = this.imgW - this.left - 420 * 3;
          if (num == 0) {
            this.arrright = false;
          } else {
            this.arrright = true;
          }
        }
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    changMap: function (i) {
      this.index = i;
    },
    moveImg: function (e) {
      if (e == "right") {
        this.left += 420;
      } else {
        this.left -= 420;
      }
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
  components: {},
};
</script>

<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>