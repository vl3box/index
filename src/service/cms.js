import { $cms } from "@jx3box/jx3box-common/js/https";
const CLIENT = 'std'

function getCode() {
    return $cms({mute:true}).get(`/api/cms/news`, {
        params: {
            client: CLIENT,
            type: "code",
            status : 1
        },
    });
}

function getNews(type,limit) {
    let _params = {
        client: CLIENT,
        type: type,
        status : 1
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms({mute:true}).get(`/api/cms/news`, {
        params: _params,
    });
}

function getSliders(type, limit) {
    let _params = {
        client: CLIENT,
        type: type,
        status : 1
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms({mute:true}).get(`/api/cms/news`, {
        params: _params,
    });
}


function getPosts(params) {
    return $cms().get("/api/cms/posts", {
        params: params,
    });
}

export { getCode, getNews, getSliders,getPosts };
