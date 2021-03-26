import { $cms } from "@jx3box/jx3box-common/js/https";

function getCode() {
    return $cms().get(`/api/cms/news`, {
        params: {
            client: "std",
            type: "code",
            status : 1
        },
    });
}

function getNews() {
    return $cms().get(`/api/cms/news`, {
        params: {
            client: "std",
            type: "news",
            status : 1
        },
    });
}

function getSliders(type, limit) {
    let _params = {
        client: "std",
        type: type,
        status : 1
    };
    if (limit) {
        _params.limit = limit;
    }
    return $cms().get(`/api/cms/news`, {
        params: _params,
    });
}

export { getCode, getNews, getSliders };
