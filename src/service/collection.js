import axios from "axios";
import { __helperUrl } from "@jx3box/jx3box-common/data/jx3box.json";

function getCollections(params) {
    return axios.get(`${__helperUrl}api/post/collections`,{
        headers: { Accept: "application/prs.helper.v2+json" },
        params: params,
    });
}

export { getCollections };
