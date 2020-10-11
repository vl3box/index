import axios from "axios";
import { __server, __next } from "@jx3box/jx3box-common/js/jx3box.json";

function getMacroRank(limit = 10) {
    return axios
        .get(__next + "api/macro/overview", {
            params: {
                size: limit,
                // _no_cache:1,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

function getMacroList(idlist) {
    return axios
        .get(__server + "post/list", {
            params: {
                list: idlist,
                mode: "simple",
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getMacroRank, getMacroList };
