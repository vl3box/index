import { $server } from "@jx3box/jx3box-common/js/axios";

function getPosts(vm) {
    return $server
        .get("post/list", {
            params: {
                per: 10,
                clean: 1,
            },
        })
        .then((res) => {
            return res.data.data.list;
        });
}
function getPost(pid, vm) {
    return $server.get("post/find", {
        params: {
            id: pid,
        },
    });
}

export { getPosts, getPost };
