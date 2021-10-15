<template>
  <div class="m-yaozong-skill">
    <div class="u-tab">
      <img :src="img_root + `zhaoshi.png`" class="u-logo" />
      <span
        v-for="(item, i) in tab"
        :key="item"
        :class="[item, i == index ? 'active' : '']"
        @click="changeTab(i)"
      ></span>
    </div>
    <div class="u-cont">
      <span class="u-prev" @click="turn()" v-show="contIndex > 1"></span>
      <span class="u-next" @click="turn(true)" v-show="contIndex < len"></span>
      <img :src="contImg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "skill",
  props: ["img_root"],
  components: {},
  data: function () {
    return {
      index: 0,
      contIndex: 0,
      len: 3,
      tab: ["lingsu", "tongyong", "wufang"],
    };
  },
  computed: {
    contImg() {
      //   return this.img_root + '.png'
      return "https://oss.jx3box.com/upload/post/2021/10/13/7_6853650.png";
    },
  },
  watch: {},
  methods: {
    changeTab(i) {
      this.index = i;
    },
    turn: function (direction) {
      if (direction) {
        this.contIndex++;
      } else {
        this.contIndex--;
      }
    },
  },
  filters: {},
  created: function () {},
  mounted: function () {},
};
</script>