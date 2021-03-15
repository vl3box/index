import axios from "axios";
import { __server } from "@jx3box/jx3box-common/data/jx3box.json";
import { installNextInterceptors } from "@jx3box/jx3box-common/js/axios";
const $server = axios.create({
    withCredentials: true,
    baseURL: process.env.NODE_ENV === "production" ? __server : "/",
});
installNextInterceptors($server);

function getProfile() {
    return $server
        .get("user/me")
        .then((res) => {
            return res.data.data;
        })
}

function getMeta(key) {
    return $server
        .get("user/meta", {
            params: {
                key: key,
            },
        })
}

function setMeta(key, val) {
    return $server
        .post("user/meta", {
            key: key,
            value: val,
        })
}

export { getProfile, getMeta, setMeta };
