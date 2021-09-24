import { $cms } from "@jx3box/jx3box-common/js/https";
const CLIENT = "std";

function getTopic(type, limit) {
    let _params = {
        client: CLIENT,
        type: type,
        status : 1
    };

    if (limit) {
        _params.limit = limit;
    }

    return $cms({ mute: true }).get("/api/cms/topic", {
        params: _params,
    });
}

export {
    getTopic
}
