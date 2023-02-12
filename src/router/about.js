import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};

const routes = [
    {
        path: "/",
        component: () => import("@/views/about/Index.vue"),
        name: "About",
        meta: {
            title: "首页",
            cache: true,
            key: 'index'
        },
    },
    {
        path: "/group",
        component: () => import("@/views/about/Contact.vue"),
        name: "Group",
        meta: {
            title: "联系我们",
            cache: true,
            key: 'group'
        },
    },
    {
        path: "/team",
        component: () => import("@/views/about/Team.vue"),
        name: "Team",
        meta: {
            title: "加入团队",
            cache: true,
            key: 'team'
        },
    },
    {
        path: "/author",
        component: () => import("@/views/about/Author.vue"),
        name: "Author",
        meta: {
            title: "签约作者",
            cache: true,
            key: 'superauthor'
        },
    },
    {
        path: "/terms",
        component: () => import("@/views/about/Index.vue"),
        name: "Terms",
        meta: {
            title: "服务条款",
            cache: true,
            key: 'terms'
        },
        children: [
            {
                path: "/license",
                component: () => import("@/views/about/Article.vue"),
                name: "License",
                meta: {
                    title: '用户协议',
                    cache: true,
                    key: 'license'
                }
            },
            {
                path: "/privacy",
                component: () => import("@/views/about/Article.vue"),
                name: "Privacy",
                meta: {
                    title: '隐私政策',
                    cache: true,
                    key: 'privacy'
                }
            }
        ]
    },
    {
        path: "/creation",
        component: () => import("@/views/about/Index.vue"),
        name: "Creation",
        meta: {
            title: "创作扶持",
            cache: true,
            key: 'creation'
        },
        children: [
            {
                path: "/treaty",
                component: () => import("@/views/about/Article.vue"),
                name: "Treaty",
                meta: {
                    title: '创作公约',
                    cache: true,
                    key: 'treaty'
                }
            },
            {
                path: "/incentives",
                component: () => import("@/views/about/Article.vue"),
                name: "Incentives",
                meta: {
                    title: '创作激励',
                    cache: true,
                    key: 'incentives'
                }
            }
        ]
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
