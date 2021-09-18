<template>
  <div class="m-topic-baiqiang">
    <div class="u-title">
      <div class="u-show" @click="openBox">
        <span class="u-name">{{ name }}</span>
        <span class="u-arr" :class="showbox ? 'invert' : ''"></span>
      </div>
      <div v-if="showbox" dir="column" class="u-box">
        <span v-for="(item, i) in boss" :key="item" @click="changeBoss(i)">{{
          item
        }}</span>
      </div>
    </div>
    <div class="u-cont">
      <a :href="item.link" class="u-item" v-for="(item, i) in ranks" :key="i">
        <img :src="item.img" alt="" />
        <cellbox dir="column" class="u-text">
          <div class="u-name">{{ item.name }}</div>
          <cellbox class="u-info"
            ><span>{{ item.desc }}</span
            ><span>{{ item.time }}</span></cellbox
          >
        </cellbox>
      </a>
    </div>
  </div>
</template>

<script>
import cellbox from "./cellbox.vue";
export default {
  name: "Swiperbox",
  props: [],
  components: {},
  data: function () {
    return {
      name: "1号BOSS",
      showbox: false,
      boss: [
        "1号BOSS",
        "二号BOSS",
        "三号米芾",
        "四号达摩洞",
        "5号齐齐哈尔",
        "六号BOSS伊丽莎白",
        "7号BOSS",
      ],
      ranks: [
        {
          link: "",
          img: "https://oss.jx3box.com/upload/avatar/2021/5/28/9036335.jpg",
          name: "何处似樽前",
          desc: "1号BOSS首甲",
          time: "2021/10/23  20:32",
        },
        {
          link: "",
          img: "https://oss.jx3box.com/upload/avatar/2020/10/10/3218166.jpeg",
          name: "邪教",
          desc: "1号BOSS首甲",
          time: "2021/10/23  20:32",
        },
        {
          link: "",
          img: "https://oss.jx3box.com/upload/avatar/2021/9/15/71225_9435322.png",
          name: "花开未名",
          desc: "1号BOSS首甲",
          time: "2021/10/23  20:32",
        },
      ],
    };
  },
  computed: {},
  watch: {},

  methods: {
    openBox: function () {
      this.showbox = true;
    },
    changeBoss: function (i) {
      this.showbox = false;
      this.name = this.boss[i];
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
  components: {
    cellbox,
  },
};
</script>


<style lang="less">
@import "../../assets/css/topic/pve.less";
</style>