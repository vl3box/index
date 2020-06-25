import axios from 'axios'
import {__server} from '@jx3box/jx3box-common/js/jx3box.json'

const API = __server + 'index/list'
function getNews(type,limit=5){
    return axios.get(API,{
        params : {
            type,
            limit
        }
    }).then((res) => {
        return res.data.data
    }).catch((err) => {
        console.log(err)
    })
}

export {getNews}