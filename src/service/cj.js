import { __helperUrl } from "@jx3box/jx3box-common/js/jx3box.json";
import axios from "axios";

function getCjList(params) {
    return axios.get(__helperUrl + "api/achievements", {
        headers: {Accept: "application/prs.helper.v2+json"},
        params: params,
    });
}

export { getCjList };
