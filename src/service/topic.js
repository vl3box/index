import { $cms, $team } from "@jx3box/jx3box-common/js/https";

function getTopic(topic) {
    return $cms({ mute: true }).get("/api/cms/topic", {
        params: {
            type: topic,
            all: 1,
            status : 1,
        },
    });
}

function getFbRank(id, server = '') {
    return $team({ mute: true }).get(`/api/team/race/achieve/${id}/top100?server=${server}&event_id=1`)
}

export { getTopic, getFbRank };
