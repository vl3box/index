import { axios } from "axios";
import {
    $https,
    $_https,
    $team,
    $helper,
    $next,
    $cms,
} from "@jx3box/jx3box-common/js/https.js";
const $old_server = $https("server", {
    proxy: false,
    mute: true,
});
const $server = $https("server", {
    proxy: false,
    interceptor: "next",
    mute: true,
});
const $spider = $https("spider", {
    proxy: false,
    mute: true,
});

export {
    $helper,
    $server,
    $next,
    axios,
    $spider,
    $old_server,
    $_https,
    $team,
    $cms,
};
