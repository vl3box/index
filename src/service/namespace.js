import axios from "axios";
import { __helperUrl } from "@jx3box/jx3box-common/data/jx3box.json";

function getNamespace(params) {
    return axios.get(`${__helperUrl}api/namespaces`,{
        headers: { Accept: "application/prs.helper.v2+json" },
        params: params,
    });
}

export { getNamespace };
