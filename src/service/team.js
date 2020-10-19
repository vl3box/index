import { $next } from "./axios";

function getMyTeams(params) {
    return $next.get("team/my-team", {
        params: params,
    });
}

function createTeam(data) {
    return $next.post("team/my-team", data);
}
function updateTeam(id, data) {
    return $next.put("team/my-team/" + id, data);
}

function getTeam(id) {
    return $next.get("team/info/" + id);
}

function checkTeam(id, status) {
    return $next.put("team/info/" + id + "/verity?status=" + status);
}

function delTeam(id) {
    return $next.delete("team/info/" + id);
}

function getTeams(params) {
    return $next.get("team/public", {
        params: params,
    });
}

export {
    getMyTeams,
    createTeam,
    updateTeam,
    getTeam,
    checkTeam,
    delTeam,
    getTeams,
};
