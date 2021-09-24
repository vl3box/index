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

function getGossip(limit) {
    let _params = {
        client: 'std',
        type: 'gossip',
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

function getPost(id){
    return $cms().get(`/api/cms/post/${id}`);
}

// 发布
function push(data) {
    return $cms().post(`/api/cms/post`, data);
}

export { getCode, getNews, getSliders, getPosts, getGossip, push, getPost };
