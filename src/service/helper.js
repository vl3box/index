import { $helper } from "@jx3box/jx3box-common/js/https";

function getSchoolRank(v) {
    return $helper().get(`/api/dps_group/${v}`);
}

function getItemPrice(params) {
    return $helper().get("/api/item_groups/with_price", {
        params: params,
    });
}

function getWikiPosts(params) {
    return $helper().get(`/api/wiki/posts/newest`, {
        params: params,
    });
}

export { getSchoolRank, getItemPrice, getWikiPosts };
