import { $https, $_https } from "@jx3box/jx3box-common/js/https.js";
const $helper = $https('helper',{
    proxy : false,
    interceptor : 'helper'
})
const $server = $https('server',{
    proxy : false
})
const $next = $https('next',{
    proxy : true,
    interceptor : 'next'
})
export {$helper,$server,$next} 