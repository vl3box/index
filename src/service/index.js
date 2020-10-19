import { $server } from "@jx3box/jx3box-common/js/axios";

function getNews(type, limit = 5) {
    return $server
        .get("index/list", {
            params: {
                type,
                limit,
            },
        })
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getNews };
