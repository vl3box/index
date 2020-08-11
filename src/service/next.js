import axios from "axios";
import { __next, __bb } from "@jx3box/jx3box-common/js/jx3box.json";

const flower = __next + "api/flower/price/rank"; //TODO:
// const flower = '/api/flower/price/rank';

const macro = __next + "api/macro/overview";
// const macro = '/api/macro/overview'

const jx3dat = __next + "api/plugins/jx3dat/rank";
// const jx3dat = "/api/plugins/jx3dat/rank";

function getFlowerRank(query) {
    return axios
        .get(flower, {
            params: query,
            withCredentials: true,
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getMacroRank(limit) {
    return axios
        .get(macro, {
            params: {
                size: limit,
                // _no_cache:1,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getJx3datRank(limit) {
    return axios
        .get(jx3dat, {
            params: {
                pageSize: limit,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

const wiki = __next + 'api/summary/visit/rank'
// const wiki = "/api/summary/visit/rank";
function getWikiRank() {
    return axios.get(wiki, {
        params: {
            postType: "wiki",
            postAction: "views",
            pageSize: 10,
        },
    });
}

function getWikiList(list) {
    return axios.get(__bb + "api/wiki/search/", {
        params: {
            list: list,
        },
    });
}

export { getFlowerRank, getMacroRank, getJx3datRank, getWikiRank, getWikiList };
