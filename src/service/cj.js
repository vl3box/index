import axios from 'axios';
import { __helperUrl } from "@jx3box/jx3box-common/js/jx3box.json";

function getCjList(idlist) {
    let arr = idlist || []
    arr = idlist.map((id) => {
        return 'ids[]=' + id
    })
    let params = '?' + arr.join('&')
    return axios.get(__helperUrl + "api/achievements" + params);
}

export { getCjList };
