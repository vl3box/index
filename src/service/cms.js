import { $cms } from "@jx3box/jx3box-common/js/https";

// 今日财富
function getCode(client) {
    return $cms({ mute: true }).get(`/api/cms/news`, {
        params: {
            client: client,
            type: "code",
            status: 1,
        },
    });
}

// 海报
function getSliders(type, client, limit) {
    let _params = {
        client: client,
        type: type,
        status: 1,
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms({ mute: true }).get(`/api/cms/news`, {
        params: _params,
    });
}

// 通知
function getNews(type, client = "std", limit) {
    let _params = {
        client: client,
        type: type,
        status: 1,
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms({ mute: true }).get(`/api/cms/news`, {
        params: _params,
    });
}

function getGossip(limit) {
    let _params = {
        client: "std",
        type: "gossip",
        status: 1,
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms({ mute: true }).get(`/api/cms/news`, {
        params: _params,
    });
}

// 作品
function getPosts(params) {
    return $cms().get("/api/cms/posts", {
        params: params,
    });
}

function getPost(id) {
    return $cms().get(`/api/cms/post/${id}`);
}

// 发布
function push(data) {
    return $cms().post(`/api/cms/post`, data);
}

export { getCode, getNews, getSliders, getPosts, getGossip, push, getPost };
