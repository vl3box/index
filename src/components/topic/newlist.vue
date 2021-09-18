<template>
  <div class="m-topic-list">
    <div class="u-title">
      <span
        v-for="(item, i) in tabs"
        :key="i"
        :class="[index == i ? 'active' : '',line?'u-line':'']"
        :style="{ width: width / tabs.length + 'px' }"
        @click="changeTab(i)"
        >{{ item }}</span
      >
    </div>
    <div class="u-list" :style="{ width: width + 'px', height: height + 'px' }">
      <cellbox class="u-item" v-for="(item, i) in changeList" :key="i">
        <a :href="item.link" target="_blank">{{ item.title }}</a>
        <span>{{ item.time }}</span></cellbox
      >
    </div>
  </div>
</template>



<script>
import cellbox from "./cellbox.vue";
export default {
  name: "newlist",
  props: ["tabs", "list", "width",'height','line'],
  data: function () {
    return {
      index: 0,
      changeList: [],
    };
  },
  watch: {
    index: {
      handler(val) {
        this.changeList = this.list[val];
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
  components: { cellbox },
};
</script>

<style lang="less">
@import "../../assets/css/topic/sect.less";
</style>