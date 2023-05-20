import Vue from "vue";
import VueRouter from "vue-router";

const Index = () => import("../views/Index.vue");
const Post = () => import("../views/Post.vue");

Vue.use(VueRouter);

const routes = [
    { name: "index", path: "/", component: Index },
    { name: 'post', path: "/post/:id", component: Post }
];

const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;
