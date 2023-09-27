import dayjs from "@/utils/day";

export function isPhone() {
    let mobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    );
    return mobile !== null;
}
// 强制时区为东八区
export function formatTime(time, format = "YYYY-MM-DD HH:mm:ss") {
    const _time = time ? new Date(time) : new Date();
    return dayjs.tz(_time).format(format);
}
