<template>
  <div class="m-topic-newlist">
    <div class="u-title">
      <span
        v-for="(item, i) in list"
        :key="i"
        :class="index == i ? 'active' : ''"
        @click="changeTab(i)"
        >{{ item }}</span
      >
    </div>
    <div class="u-list">
      <cellbox class="u-item" v-for="(item, i) in changeList" :key="i"
        ><span>{{ item.title }}</span
        ><span>{{ item.time }}</span></cellbox
      >
    </div>
  </div>
</template>



<script>
import cellbox from "./cellbox.vue";
export default {
  name: "newlist",
  props: [],
  data: function () {
    return {
      index: 0,
      list: ["药宗新闻", "药宗技改", "药宗故事"],
      allList: {
        news: [
          {
            link: "",
            title:
              "【工具】第一个新闻新闻新闻新新闻新闻新新闻新闻新新闻新闻新闻新闻新",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第一个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第一个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第一个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第一个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第一个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        jigai: [
          {
            link: "",
            title: "【工具】第二个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        gushi: [
          {
            link: "",
            title: "【工具】第三个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
      },
      changeList: [],
    };
  },
  watch: {
    index: {
      handler(val) {
        if (val == 0) {
          this.changeList = this.allList.news;
        } else if (val == 1) {
          this.changeList = this.allList.jigai;
        } else {
          this.changeList = this.allList.gushi;
        }
      },
      immediate: true,
      deep: true,
    },
  },

  methods: {
    changeTab: function (i) {
      this.index = i;
    },
  },
  mounted: function () {},
  components: { cellbox },
};
</script>

<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>