import axios from "axios";
import { __bb, __helperUrl } from "@jx3box/jx3box-common/js/jx3box.json";

function getWikiPnt() {
    return axios.get(__bb + "admin/wiki/user_item/pending_cnt", {
        withCredentials: true,
    });
}

function getCjPnt() {
    return axios.get(__helperUrl + "api/wiki/post/total", {
        Accept: "application/prs.helper.v2+json",
        params: {
            checked: "pending",
            type:"achievement"
        },
    });
}

export { getWikiPnt, getCjPnt };
