import { $cms, $team, $next, $pay } from "@jx3box/jx3box-common/js/https";

function getPosts(client = "std", type, per = 10) {
    let params = {
        client: client,
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

function searchRaids(params) {
    return $cms().get(`/api/cms/team/raids`, {
        params: params,
    });
}

function getBoxCoin(id) {
    return $pay({mute:true}).get(`api/event/${id}/boxcoin/trigger`)
}

export { getPosts, getTeams, getJokes, searchRaids, getBoxCoin };
