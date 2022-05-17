import { $cms, $team, $next, $pay } from "@jx3box/jx3box-common/js/https";

function getPosts(client = "std", type, per = 5, subtype) {
    let params = {
        client: client,
        per,
    };
    if (!!type) {
        params.type = type;
    }
    if (subtype) params.subtype = subtype;
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

function searchRaids(params) {
    return $cms().get(`/api/cms/team/raids`, {
        params: params,
    });
}

function getBoxCoin(id) {
    return $pay({ mute: true }).get(`api/event/${id}/boxcoin/trigger`);
}

export { getPosts, getTeams, getJokes, searchRaids, getBoxCoin };
