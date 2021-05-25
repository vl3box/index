import { $cms, $team, $next } from "@jx3box/jx3box-common/js/https";
const CLIENT = "std";

function getPosts(type) {
    let params = {
        // client: CLIENT,
    };
    if (!!type) {
        params.type = type;
    }
    return $cms({ mute: true }).get("/api/cms/posts/latest", {
        params: params,
    });
}

function getTeams(params) {
    return $team({ mute: true }).get("/api/team/public", {
        params: params,
    });
}

function getJokes() {
    return $next({ mute: true }).get(`/api/joke/recommended`);
}

export { getPosts, getTeams, getJokes };
