// 设置dayjs并重新导出
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import isToday from "dayjs/plugin/isToday";
import isoWeek from "dayjs/plugin/isoWeek";
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);
dayjs.extend(isToday);

import store from "@/store";
const _timezone = store.state.timezone;
dayjs.tz.setDefault(_timezone);

export default dayjs;
