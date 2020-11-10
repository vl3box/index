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

function getRank(type, limit = 10, sort = "30days") {
    return $next
        .get("api/summary/visit/rank", {
            params: {
                postType: type,
                postAction: "views",
                pageSize: limit,
                sort: sort,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

function getDaily(date){
    return $next.get('xoyo/daily/task',{
        params : {
            date : date //int,时间戳，单位秒
        }
    })
}

export { getFlowerRank, getRank,getDaily };
