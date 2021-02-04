import { axios } from "./axios";
import { __helperUrl } from "@jx3box/jx3box-common/js/jx3box.json";

function getWikiList(params) {
    return axios.get(`${__helperUrl}api/knowledges`, {
        headers: { Accept: "application/prs.helper.v2+json" },
        params: params,
    });
}

export { getWikiList };
