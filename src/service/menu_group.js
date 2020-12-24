import axios from 'axios';
import { __helperUrl } from "@jx3box/jx3box-common/js/jx3box.json";

function getMenuGroup(name) {
    return axios.get(`${__helperUrl}api/menu_group/${name}`, {
        headers: {Accept: "application/prs.helper.v2+json"},
    });
}

function getMenuGroups(params) {
    return axios.get(`${__helperUrl}api/menu_groups`, {
        headers: {Accept: "application/prs.helper.v2+json"},
        params: params,
    });
}

export { getMenuGroup, getMenuGroups };
