<template>
  <div class="m-topic-slider">
    <el-carousel
      height="336px"
      indicator-position="none"
      @change="changeImg"
      ref="elcarousel"
    >
      <el-carousel-item v-for="(item, i) in list" :key="i">
        <a class="u-img" :href="item.link" target="_blank"
          ><img :src="item.img" :alt="item.title"
        /></a>
      </el-carousel-item>
    </el-carousel>
    <div class="u-slider-title">
      <div
        class="u-title"
        v-for="(item, i) in list"
        :key="i"
        :class="i == index ? 'active' : ''"
        :style="'width:' + titleW + '%'"
        @click="checkImg(i)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: [],
  components: {},
  data: function () {
    return {
      index: 0,
      list: [
        {
          link: "",
          img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
          title: "我是第一张的标题你看可以吗",
        },
        {
          link: "",
          img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
          title: "我是第二张的标题",
        },
        {
          link: "",
          img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
          title: "我是第三张的标题",
        },
        {
          link: "",
          img: "https://console.cnyixun.com/upload/post/2021/9/8/4011_8916025.png",
          title: "我是第二四张的标题",
        },
        {
          link: "",
          img: "https://console.cnyixun.com/upload/post/2021/9/4/4011_3119068.png",
          title: "我是第五张的标题",
        },
      ],
    };
  },
  computed: {
    titleW: function () {
      const i = this.list.length;
      return 100 / i;
    },
  },
  methods: {
    changeImg: function (e) {
      this.index = e;
    },
    checkImg: function (index) {
      this.$refs.elcarousel.setActiveItem(index);
    },
  },
};
</script>

<style lang="less">
@import "../../assets/css/topic/swiperbox.less";
</style>