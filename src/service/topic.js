import { $cms } from "@jx3box/jx3box-common/js/https";
const CLIENT = "std";

/**
 * 获取专题
 * @param {*} type beitianyaozong
 * @param {*} { subtype: 指定模块标识符, per: 每页数量, page: 请求页码 }
 * @returns 
 */
function getTopic(type, { subtype, per, page }) {
    let _params = {
        type,
        client: CLIENT,
        subtype,
        status : 1
    };

    if (per) {
        _params.per = per;
    }
    if (page) {
        _params.page = page
    }

    return $cms({ mute: true }).get("/api/cms/topic", {
        params: _params,
    });
}

export {
    getTopic
}
