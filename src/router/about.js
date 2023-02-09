import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

import Index from "@/views/about/Index.vue";
import Team from "@/views/about/Team.vue";
import Group from "@/views/about/Group.vue";
import Author from "@/views/about/Author.vue";
import License from "@/views/about/License.vue";
import Privacy from "@/views/about/Privacy.vue";
import Creation from "@/views/about/Creation.vue";

const routes = [
    {
        path: "/",
        component: Index,
        name: "About",
        meta: {
            title: "首页",
            cache: true,
        },
    },
    {
        path: "/team",
        component: Team,
        name: "Team",
        meta: {
            title: "团队成员",
            cache: true,
        },
    },
    {
        path: "/group",
        component: Group,
        name: "Group",
        meta: {
            title: "社区群体",
            cache: true,
        },
    },
    {
        path: "/author",
        component: Author,
        name: "Author",
        meta: {
            title: "签约作者",
            cache: true,
        },
    },
    {
        path: "/privacy",
        component: Privacy,
        name: "Privacy",
        meta: {
            title: "隐私政策",
            cache: true,
        },
    },
    {
        path: "/license",
        component: License,
        name: "License",
        meta: {
            title: "用户协议",
            cache: true,
        },
    },
    {
        path: "/creation",
        component: Creation,
        name: "Creation",
        meta: {
            title: "创作公约",
            cache: true,
        },
    },
];

const router = new VueRouter({
    routes,
    mode: "history",
    base: "/about",
});

router.beforeEach((to, from, next) => {
    if (to.fullPath.includes("/#")) {
        next(to.fullPath.replace("/#", ""));
    }
    next();
});

export default router;
