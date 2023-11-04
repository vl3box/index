import { $next, $cms } from "@jx3box/jx3box-common/js/https";
export function getGameReporter(params) {
    return $next().get("/api/game/reporter/horse", {
        params,
    });
}

export function getChituHorse(server) {
    const params = {
        pageIndex: 1,
        pageSize: 50,
        server,
        type: "chitu-horse",
        subtype: "share_msg",
    };
    return $next().get("/api/game/reporter/horse", {
        params,
    });
}

export function getUserInfo() {
    return $cms().get("/api/cms/user/my/info");
}
