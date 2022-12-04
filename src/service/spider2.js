import { $team, $cms } from "@jx3box/jx3box-common/js/https";
import axios from "axios";
import { __spider } from "@jx3box/jx3box-common/data/jx3box.json";
import { __dataPath } from "@jx3box/jx3box-common/data/jx3box.json";
import { $node } from "@jx3box/jx3box-common/js/https";
const $spider = axios.create({
    baseURL: `https://spider2.jx3box.com/`,
});


// 开服监控
function getServers() {
    return $spider.get("api/spider/server/server_state");
}





export { getServers };
