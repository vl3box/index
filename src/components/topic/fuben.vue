<template>
  <div class="m-topic-fuben">
    <div class="u-fuben-title">
      <img class="u-leiyu" src="../../assets/img/topic/leiyu.png" />
      <span
        v-for="(item, i) in title"
        :key="i"
        :class="['u-icon' + (i + 1), index == i ? 'active' : '']"
        @click="changeIcon(i)"
        >{{ item }}</span
      >
    </div>
    <div class="u-tab"></div>
    <newlist
      :tabs="tabs"
      :list="list"
      :width="width"
      :height="height"
      :line="true"
    />
  </div>
</template>

<script>
import newlist from "@/components/topic/newlist.vue";
export default {
  name: "fuben",
  props: [],
  data: function () {
    return {
      index: 0,
      title: ["五人秘境", "团队秘境"],
      tabs: [
        "综合",
        "1号BOSS",
        "2号BOSS",
        "3号BOSS",
        "4号BOSS",
        "5号BOSS",
        "6号BOSS",
        "7号BOSS",
      ],
      width: 810,
      height: 371,
      list: [
        [
          {
            link: "",
            title:
              "【工具】第一个新闻新闻新闻新新闻新闻新新闻新闻新新闻新闻新闻新闻新",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第2个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第2个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
          {
            link: "",
            title: "【工具】第1个新闻新闻新闻新闻新闻新……",
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
        [],
        [
          {
            link: "",
            title: "【工具】第2新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        [
          {
            link: "",
            title: "【工具】第3个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        [],
        [
          {
            link: "",
            title: "【工具】第5个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        [
          {
            link: "",
            title: "【工具】第6个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        [
          {
            link: "",
            title: "【工具】第7个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
      ],
    };
  },
  computed: {},
  methods: {
    changeIcon: function (i) {
      this.index = i;
    },
  },
  components: { newlist },
  watch: {
    index: {
      handler(val) {},
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="less">
@import "../../assets/css/topic/pve.less";
</style>