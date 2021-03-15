import axios from 'axios';
import { __helperUrl } from "@jx3box/jx3box-common/data/jx3box.json";

function getCjList(params) {
    return axios.get(__helperUrl + "api/achievements", {
        headers: {Accept: "application/prs.helper.v2+json"},
        params: params,
    });
}

export { getCjList };
