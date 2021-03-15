import { $server, $next, $helper } from "./axios";

function getConfig() {
    return $server.get("/index/config");
}

function getMenuGroup(name) {
    return $helper.get(`/api/menu_group/${name}`, {});
}

function getMenuGroups(params) {
    return $helper.get(`/api/menu_groups`, {
        params: params,
    });
}

function getWikiPnt(type) {
    return $helper.get("api/wiki/post/total", {
        params: {
            checked: "pending",
            type: type,
        },
    });
}

export {
    getConfig,
    getMenuGroup,
    getMenuGroups,
    getWikiPnt,
};
