<template>
  <div class="m-topic-common">
    <div class="m-topic-main">
      <swiperbox class="u-swiperbox" />
      <cellbox dir="column" class="m-topic-sect">
        <cellbox class="u-tabbox"
          ><infotab />
          <newlist
            ref="newlist"
            class="m-topic-newlist"
            :tabs="tabs"
            :list="newlist"
            :width="mewlistW"
            :height="mewlistH"
        /></cellbox>
        <sectmap />
      </cellbox>
    </div>
    <div class="m-topic-pve">
      <div class="m-topic-main">
        <cellbox class="m-topic-pvebox">
          <fuben />
          <baiqiang />
        </cellbox>
      </div>
    </div>
  </div>
</template>

<script>
import swiperbox from "@/components/topic/swiperbox.vue";
import newlist from "@/components/topic/newlist.vue";
import infotab from "@/components/topic/infotab.vue";
import Newlist from "@/components/topic/newlist.vue";
import cellbox from "@/components/topic/cellbox.vue";
import sectmap from "@/components/topic/sectmap.vue";
import fuben from "@/components/topic/fuben.vue";
import baiqiang from "@/components/topic/baiqiang.vue";
export default {
  name: "TopicCommon",
  props: [],
  components: {},
  data: function () {
    return {
      tabs: ["药宗新闻", "药宗技改", "药宗故事"],
      newlist: [
        [
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
        [
          {
            link: "",
            title: "【工具】第二个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
        [
          {
            link: "",
            title: "【工具】第三个新闻新闻新闻新闻新闻新……",
            time: "2020-20-20",
          },
        ],
      ],
      mewlistW: 520,
      mewlistH: 279,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  filters: {},
  created: function () {},
  mounted: function () {},
  components: {
    swiperbox,
    newlist,
    infotab,
    cellbox,
    sectmap,
    fuben,
    baiqiang,
  },
};
Newlist;
</script>

<style lang="less">
@import "../assets/css/topic/common.less";
</style>