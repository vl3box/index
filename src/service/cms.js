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

// 骚话
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

// 新闻单页
function getPost(id) {
    return $cms().get(`/api/cms/post/${id}`);
}

// 管理
// function push(data) {
//     return $cms().post(`/api/cms/post`, data);
// }

// 配装
function getPz(params) {
    return $cms().get(`/api/cms/app/pz`, {
        params,
    });
}

// 日历
function getRecentCalendar(params) {
    return $cms().get(`/api/cms/calendar/list`, {
        params,
    });
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
            client,
        },
    });
}

// 获取指定日期范围的日历
function getRangeCalendar(params){
    return $cms().get(`/api/cms/calendar/archive/range`, {
        params
    })
}

// 获取日历计数
function getCalendarCount(params) {
    let url = genUrl(params);
    return $cms().get(`/api/cms/calendar/count${url}`);
}

function getCalendarSlogans(params) {
    let url = genUrl(params);
    return $cms().get(`/api/cms/calendar/slogan${url}`);
}

function getCalendarSlogansExact(params){
    return $cms().get(`/api/cms/calendar/slogan/exact`, {
        params
    })
}

function getHistory(params, query) {
    let url = genUrl(params);
    return $cms().get(`/api/cms/calendar/history${url}`, {
        params: query,
    });
}

// 菜单
function getMenus(key) {
    return $cms().get(`/api/cms/config/menu/${key}`);
}

// 近期活动v2
function getEventV2(params) {
    return $cms().get(`api/cms/news/v2`, {
        params,
    });
}

export {
    getCode,
    getNews,
    getSliders,
    getPosts,
    getGossip,
    getPost,
    getPz,
    getMenus,
    getRecentCalendar,
    getCalendar,
    getCalendarSlogans,
    getCalendarSlogansExact,
    getHistory,
    getCalendarCount,
    getEventV2,
    getRangeCalendar
};
