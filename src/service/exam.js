import {$next} from './axios';

function getExamRank() {
    return $next.get("api/summary/visit/rank", {
        params: {
            postType: "paper",
            postAction: "views",
            pageSize: 10,
        },
    });
}

function getPaperList(list) {
    return $next.get("api/question/user-exam-paper", {
        params: {
            list: list,
        },
    });
}

export { getExamRank, getPaperList };
