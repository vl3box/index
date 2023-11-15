import { $cms } from "@jx3box/jx3box-common/js/https";
import axios from "axios";
import { __imgPath } from "@jx3box/jx3box-common/data/jx3box.json";

// 新接口2023.11.15
function getConfigBanner(params) {
    return $cms().get(`api/cms/config/banner`, {
        params
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
function getRangeCalendar(params) {
    return $cms().get(`/api/cms/calendar/archive/range`, {
        params,
    });
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

function getCalendarSlogansExact(params) {
    return $cms().get(`/api/cms/calendar/slogan/exact`, {
        params,
    });
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


//获取装扮
function getUserDecoration(params) {
    console.log(1);
    return $cms().get(`/api/cms/user/decoration`, {
        params,
    });
}

function getPublicDecoration() {
    let url = __imgPath + "decoration/index.json";
    return axios.get(url);
}


// 名望
function getCelebrities(params) {
    return $cms().get(`/api/cms/game/celebrity`, {
        params,
    });
}
export {
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
    getRangeCalendar,
    getUserDecoration,
    getPublicDecoration,
    getCelebrities,
    getConfigBanner
};