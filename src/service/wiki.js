import axios from "axios";
import { __next, __bb } from "@jx3box/jx3box-common/js/jx3box.json";

function getWikiRank() {
    return axios.get(__next + "api/summary/visit/rank", {
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

export { getWikiRank, getWikiList };
