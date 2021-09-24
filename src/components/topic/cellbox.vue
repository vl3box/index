<template>
    <div class="cell" :class="isDir ? 'row' : 'column'">
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
            return this.dir == "row";
        },
    },
};
</script>


<style lang="less" scoped>
.cell {
    .pr;
    display: flex;
    justify-content: space-between;
}
.row {
    flex-direction: row;
}
.column {
    flex-direction: column;
}
</style> 