import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../topic/beitianyaozong/Index.vue");
const Yaozong = () => import("../topic/beitianyaozong/Yaozong.vue");
const Fb = () => import("../topic/beitianyaozong/Fb.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: "yaozong", path: "/yaozong", component: Yaozong },
    { name: "fb", path: "/fb", component: Fb },
];

const router = new VueRouter({
    routes,
});

export default router;
