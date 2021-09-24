<template>
    <div class="u-topic-root">
        <swiperbox class="u-swiperbox" />
    </div>
</template>

<script>
import swiperbox from '@/components/topic/swiperbox'
export default {
    name: 'topic',
    components: {
        swiperbox
    }
}
</script>

<style lang="less" scoped>
.u-topic-root {
    .pr;
    background: url('../../assets/img/topic/bg.png') no-repeat center top #DBECE7;
    height: 100vh;
    width: 100%;

    .u-swiperbox {
        .pa;
        bottom: 0;
        left: 0;
        right: 0;
        width: 1362px;
        margin: 0 auto;
        .pb(30px);
    }
}
</style>