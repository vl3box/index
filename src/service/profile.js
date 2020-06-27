import {$} from './axios'

const server = 'user/meta'
function getServer(uid){
    return $.get(server,{
        params : {
            key : 'jx3price',
            uid : uid
        }
    }).then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err)
    })
}

export {getServer}