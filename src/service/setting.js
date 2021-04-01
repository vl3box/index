import { $server, $helper } from "./axios";

function getConfig() {
    return $server.get("/index/config");
}

function getMenuGroup(name) {
    return $helper({ mute: true }).get(`/api/menu_group/${name}`, {});
}

function getMenuGroups(params) {
    return $helper({ mute: true }).get(`/api/menu_groups`, {
        params: params,
    });
}

function getHelperPnt() {
    return $helper({ mute: true }).get("/api/post/pending_total");
}

export { getConfig, getMenuGroup, getMenuGroups, getHelperPnt };
