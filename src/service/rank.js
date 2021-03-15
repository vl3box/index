import { $helper, $next } from "./axios";
import { getStatRank } from "@jx3box/jx3box-common/js/stat.js";

// TODO:需要改30天排序，等后端修复
function getRank(type,days='30days') {
    return getStatRank(type, "views",10,'7days').then((res) => {
        let result = res.data || [];
        let views = [];
        let ids = [];
        result.forEach((item) => {
            let id = item.name;
            if (id.includes(type)) {
                id = id.slice(`${type}-`.length, id.length);
                ids.push(id);
                views.push(item.value[days]);
            }
        });
        return [ids,views];
    });
}

function getAchievements(params) {
    return $helper.get("/api/achievements", {
        params: params,
    });
}

function getCollections(params) {
    return $helper.get(`/api/post/collections`, {
        params: params,
    });
}
function getNamespaces(params) {
    return $helper.get(`/api/namespaces`, {
        params: params,
    });
}

function getKnowledges(params) {
    return $helper.get(`/api/knowledges`, {
        params: params,
    });
}

function getPapers(list) {
    return $next.get("/api/question/user-exam-paper", {
        params: {
            list: list,
        },
    });
}

function getJx3datRank(limit = 10) {
    return $next.get("/api/plugins/jx3dat/rank", {
        params: {
            pageSize: limit,
        },
    });
}

function getMacroRank(limit = 10) {
    return $next
        .get("/api/macro/overview", {
            params: {
                size: limit,
                // _no_cache:1,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

export {
    getAchievements,
    getCollections,
    getNamespaces,
    getKnowledges,
    getJx3datRank,
    getMacroRank,
    getPapers,
    getRank,
};
