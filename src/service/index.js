import { $cms, $team } from "@jx3box/jx3box-common/js/https";
const CLIENT = "std";

function getPosts(type) {
    let params = {
        // client: CLIENT,
    };
    if (!!type) {
        params.type = type;
    }
    return $cms({mute:true}).get("/api/cms/posts/latest", {
        params: params,
    });
}

function getTeams(params) {
    return $team({mute:true}).get("/api/team/public", {
        params: params,
    });
}

export { getPosts, getTeams };
