import axios from "axios";
import { __server } from "@jx3box/jx3box-common/js/jx3box.json";
const API_LIST = __server + "post/list";
const API_SINGLE = __server + "post/find";
import failCallback from "../utils/fail";

function getPosts(vm) {
    return axios
        .get(API_LIST, {
            params: {
                per: 10,
                clean:1
            },
        })
        .then((res) => {
            return res.data.data.list;
        })
        .catch((err) => {
            failCallback(err, vm);
        });
}
function getPost(pid, vm) {
    return axios
        .get(API_SINGLE, {
            params: {
                id: pid,
            },
        })
        .catch((err) => {
            failCallback(err, vm);
        });
}

export { getPosts, getPost };
