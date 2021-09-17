<template>
  <div :class="isDir ? 'row' : 'column'">
    <slot />
  </div>
</template>

<script>
export default {
  name: "cellbox",
  props: {
    dir: {
      type: String,
      default: "row",
    },
  },
  computed: {
    isDir: function () {
      if (this.dir == "row") return true;
      return false;
    },
  },
};
</script>


<style lang="less" scoped>
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style> 