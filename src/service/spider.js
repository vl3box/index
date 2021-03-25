import { $spider, $next,$team } from "./axios";

function getDaily(date) {
    return $team({mute:true}).get("/xoyo/daily/task", {
        params: {
            date: date, //int,时间戳，单位秒
        },
    });
}

function getGameNews() {
    return $spider.get("/jx3news").then((res) => {
        return res.data;
    });
}

function getServers() {
    return $spider.get("/jx3servers").then((res) => {
        return res.data.data;
    });
}

function getPrice() {
    return $spider.get("/jx3price");
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

// 美人图
function getMeirentu(server = "蝶恋花") {
    return $spider.get("/meirentu", {
        params: {
            server: server,
        },
    });
}

export { getGameNews, getServers, getPrice, getMeirentu, getDaily };
