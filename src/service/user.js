import { $_server, $server, $_https } from "./axios";

function getProfile() {
    return $_https("server", {
        proxy: false,
        interceptor: "next",
        mute: true,
    })
        .get("/user/me")
        .then((res) => {
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
    return $_https("server", {
        proxy: false,
        interceptor: "next",
        mute: true,
    }).post("/user/meta", {
        key: key,
        value: val,
    });
}

export { getProfile, getMeta, setMeta };
