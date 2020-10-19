import { $next } from "./axios";

function getFlowerRank(query) {
    return $next
        .get("api/flower/price/rank", {
            params: query,
            withCredentials: true,
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getRank(type, limit = 10) {
    return $next
        .get("api/summary/visit/rank", {
            postType: type,
            postAction: "views",
            pageSize: limit,
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getFlowerRank, getRank };
