import {
    $team
} from "@jx3box/jx3box-common/js/https";
import axios from "axios";
import {
    __spider
} from "@jx3box/jx3box-common/data/jx3box.json";
import {
    __iconPath
} from "@jx3box/jx3box-common/data/jx3box.json";
import {
    $node
} from "@jx3box/jx3box-common/js/https";
const $spider = axios.create({
    baseURL: __spider
});

// 日常
function getDaily(date) {
    return $team({
        mute: true
    }).get("/xoyo/daily/task", {
        params: {
            date: date, //int,时间戳，单位秒
        },
    });
}

// 美人图
function getMeirentu(server = "蝶恋花") {
    return $spider.get("/meirentu", {
        params: {
            server: server,
        },
    });
}

// 游戏公告
function getGameNews(client) {
    return $spider.get("/jx3news", {
        params: {
            client: client,
        },
    });
}

// 开服监控
function getServers() {
    return $spider.get("/jx3servers");
}

// 金价走势
function getPrice() {
    return $spider.get("/jx3price");
}

// 宠物福缘
function getPetLucky() {
    return axios.get(__iconPath + "pvx/pet/output/pet_lucky.json")
}

function getPet(petid, client = 'std') {
    return $node().get(`/pet/${petid}?client=${client}`);
}


// const md5 = require("js-md5");
// function getPrice() {
//     let time = ~~(Date.now() / 1000);
//     let token = md5(time + "secret");
//     return axios
//         .get("https://box.arkwish.com/api/gold", {
//             params: {
//                 access_token: token,
//                 ts: time,
//             },
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// }

export {
    getGameNews,
    getServers,
    getPrice,
    getMeirentu,
    getDaily,
    getPetLucky,
    getPet
};