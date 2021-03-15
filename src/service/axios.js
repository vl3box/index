import { axios } from "axios";
import { $https, $_https } from "@jx3box/jx3box-common/js/https.js";
const $helper = $https("helper", {
    proxy: false,
    interceptor: "helper",
    mute: true,
});
const $old_server = $https("server", {
    proxy: false,
    mute: true,
});
const $server = $https("server", {
    proxy: false,
    interceptor: "next",
    mute: true,
});
const $_server = $_https("server", {
    proxy: true,
    interceptor: "next",
    mute: true,
});
const $next = $https("next", {
    proxy: true,
    interceptor: "next",
    mute: true,
});
const $spider = $https("spider", {
    proxy: false,
    mute: true,
});
export { $helper, $server, $next, axios, $spider, $_server, $old_server };
