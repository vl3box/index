import { $_server, $server } from "./axios";

function getProfile() {
    return $_server.get("/user/me").then((res) => {
        return res.data.data;
    });
}

function getMeta(key) {
    return $server.get("/user/meta", {
        params: {
            key: key,
        },
    });
}

function setMeta(key, val) {
    return $_server.post("/user/meta", {
        key: key,
        value: val,
    });
}

export { getProfile, getMeta, setMeta };
