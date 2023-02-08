<template>
  <div class="about-wrapper">
      <Header :overlayEnable="true"></Header>
      <div class="m-about-main">
          <div class="m-about-content">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "About",
  props: [],
  components: {},
  data: function () {
      return {};
  },
  computed: {
      client: function () {
          return this.$store.state.client;
      },
  },
  watch: {},
  methods: {},
  created: function () {},
  mounted() {},
};
</script>

<style lang="less">
@import "~@/assets/css/about/index.less";
</style>
