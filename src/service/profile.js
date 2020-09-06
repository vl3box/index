import { $ } from "./axios";

const server = "user/meta";
function getServer(uid) {
    return $.get(server, {
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

const profile = "user/profile";
function getProfile() {
    return $.get(profile)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log(err);
        });
}

function getMeta(key) {
    return $.get(server, {
        params: {
            key: key,
        },
    }).catch((err) => {
        console.log(err);
    });
}

function setMeta(key, val) {
    return $.post(server, {
        key,
        val,
    }).catch((err) => {
        console.log(err);
    });
}

export { getServer, getProfile, getMeta, setMeta };
