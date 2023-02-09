import { $cms } from "@jx3box/jx3box-common/js/https";

function getConfig(key) {
    return $cms()
        .get("/api/cms/config")
        .then((res) => {
            let _config = {};
            res.data.data.forEach((item) => {
                _config[item.key] = item.val;
            });
            if (key) {
                return _config[key];
            } else {
                return _config;
            }
        });
}

function getArticle(id) {
    return $cms()
        .get(`/api/cms/post/${id}`)
        .then((res) => {
            return res.data.data.post_content;
        });
}

function getUsers(list) {
    return $cms()
        .get(`/api/cms/user/list/info`, {
            params: {
                list
            },
        })
        .then((res) => {
            return res.data.data;
        });
}

function getTeammates(){
    return $cms().get(`/api/cms/config/teammates`,{
        params : {
            status : 1
        }
    })
}

export { getConfig, getArticle, getUsers, getTeammates };
