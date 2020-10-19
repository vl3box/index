import { $next } from "./axios";

function getJx3datRank(limit = 10) {
    return $next
        .get("api/plugins/jx3dat/rank", {
            params: {
                pageSize: limit,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getJx3datRank };
