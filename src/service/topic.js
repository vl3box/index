import { $cms } from "@jx3box/jx3box-common/js/https";

function getTopic(params) {
    return $cms({ mute: true }).get("/api/cms/topic", {
        params,
    });
}

export { getTopic };
