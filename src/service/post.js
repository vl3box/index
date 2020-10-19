import axios from "axios";
import { __server } from "@jx3box/jx3box-common/js/jx3box.json";

function getPosts() {
    return axios.get(__server + "post/list", {
        params: {
            per: 10,
            clean: 1,
        },
    }).catch((err) => {
        console.log(err)
    })
}
function getPost(pid, vm) {
    return axios.get(__server + "post/find", {
        params: {
            id: pid,
        },
    }).catch((err) => {
        console.log(err)
    })
}

export { getPosts, getPost };
