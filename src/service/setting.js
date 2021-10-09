import { $cms, $helper } from "@jx3box/jx3box-common/js/https";

function getConfig() {
    return $cms({ mute: true }).get("/api/cms/config");
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

function getMenu(key){
    return $cms().get(`/api/cms/config/menu/${key}`)
}

export { getConfig, getMenuGroup, getMenuGroups, getHelperPnt,getMenu };
