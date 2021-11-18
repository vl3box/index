import { $helper } from "@jx3box/jx3box-common/js/https";

// 物品价格
function getItemPrice(params,client) {
    let client_id = client == 'origin' ? 2 : 1
    return $helper({client_id}).get("/api/item_groups/with_price", {
        params: params,
    });
}

function getSchoolRank(v) {
    return $helper().get(`/api/dps_group/${v}`);
}

function getWikiPosts(params) {
    return $helper().get(`/api/wiki/posts/newest`, {
        params: params,
    });
}

function getCollections(params) {
    return $helper().get(`/api/post/collections`, {
        params: params,
    });
}

export { getSchoolRank, getItemPrice, getWikiPosts, getCollections };
