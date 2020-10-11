import axios from "axios";
import { __next } from "@jx3box/jx3box-common/js/jx3box.json";

function getExamRank() {
    return axios.get(__next + "api/summary/visit/rank", {
        params: {
            postType: "paper",
            postAction: "views",
            pageSize: 10,
        },
    });
}

function getPaperList(list) {
    return axios.get(__next + "api/question/user-exam-paper", {
        params: {
            list: list,
        },
    });
}

export { getExamRank, getPaperList };
