import axios from "axios";
import { __spider } from "@jx3box/jx3box-common/js/jx3box.json";

const news = __spider + "jx3news";
function getGameNews() {
    return axios
        .get(news)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.log("获取游戏公告", err);
        });
}

const servers = __spider + "jx3servers";
function getServers() {
    return axios
        .get(servers)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            console.log("获取开服列表", err);
        });
}

// const price = __spider + "jx3price";
// function getPrice() {
//     return axios
//         .get(price)
//         .then((res) => {
//             return res.data;
//         })
//         .catch((err) => {
//             console.log("获取金价行情", err);
//         });
// }

const md5 = require("js-md5");
function getPrice() {
    let time = ~~(Date.now() / 1000);
    let token = md5(time + "secret");
    return axios
        .get("https://box.arkwish.com/api/gold", {
            params: {
                access_token: token,
                ts: time,
            },
        })
        .catch((err) => {
            console.log(err);
        });
}

// 美人图
function getMeirentu(server = "蝶恋花") {
    return axios.get(__spider + "meirentu", {
        params: {
            server: server,
        },
    });
}

export { getGameNews, getServers, getPrice, getMeirentu };
