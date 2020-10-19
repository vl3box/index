import { $server } from "@jx3box/jx3box-common/js/axios";

function getServer(uid) {
    return $server
        .get("user/meta", {
            params: {
                key: "jx3price",
                uid: uid,
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getProfile() {
    return $server
        .get("user/me")
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getMeta(key) {
    return $server
        .get("user/meta", {
            params: {
                key: key,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

function setMeta(key, val) {
    return $server
        .post("user/meta", {
            key: key,
            value: val,
        })
        .catch((err) => {
            console.log(err);
        });
}

export { getServer, getProfile, getMeta, setMeta };
