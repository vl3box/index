import { $server, $next, $old_server } from "./axios";

function getNews(type, limit = 5) {
    return $server
        .get("/index/list", {
            params: {
                type,
                limit,
            },
        })
        .then((res) => {
            return res.data.data;
        });
}

function getPosts() {
    return $old_server.get("/post/list", {
        params: {
            per: 10,
            clean: 1,
        },
    });
}

function getTeams(params) {
    return $next.get("/team/public", {
        params: params,
    });
}

export { getPosts, getTeams, getNews };
