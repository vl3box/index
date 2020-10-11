import axios from "axios";
import { __next } from "@jx3box/jx3box-common/js/jx3box.json";

function getJx3datRank(limit = 10) {
    return axios
        .get(__next + "api/plugins/jx3dat/rank", {
            params: {
                pageSize: limit,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getJx3datRank };
