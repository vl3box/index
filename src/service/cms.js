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
function getSliders(type, client, per = 10) {
    let _params = {
        client: client,
        type: type,
        status: 1,
    };
    if (per) {
        _params.per = per;
    }
    return $cms({ mute: true }).get(`/api/cms/news/v2`, {
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
        _params.per = limit;
    }
    return $cms({ mute: true }).get(`/api/cms/news/v2`, {
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

// 配装
function getPz(params) {
    return $cms().get(`/api/cms/app/pz`, {
        params
    })
}

// 日历
function getRecentCalendar(params) {
    return $cms().get(`/api/cms/calendar/list`, {
        params
    })
}

function genUrl(params) {
    const { year, month, date } = params;

    let url = "";

    year && (url += `/${year}`);
    month && (url += `/${month}`);
    date && (url += `/${date}`);

    return url;
}

function getCalendar(params, client = "std") {
    let url = genUrl(params);

    return $cms().get("/api/cms/calendar/archive" + url, {
        params: {
            client
        }
    });
}

function getCalendarSlogans(params){
    let url = genUrl(params);
    return $cms().get(`/api/cms/calendar/slogan${url}`);
}

function getHistory(params, query) {
    let url = genUrl(params);
    return $cms().get(`/api/cms/calendar/history${url}`, {
        params: query,
    });
}

// 菜单
function getMenus(key) {
    return $cms().get(`/api/cms/config/menu/${key}`)
}


export { getCode, getNews, getSliders, getPosts, getGossip, push, getPost, getPz, getMenus, getRecentCalendar, getCalendar, getCalendarSlogans, getHistory };
