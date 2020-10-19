import { $next, $server } from "./axios";

function getMacroRank(limit = 10) {
    return $next
        .get("api/macro/overview", {
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
    return $server
        .get("post/list", {
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
