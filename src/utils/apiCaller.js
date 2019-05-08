import {message} from 'antd'
import axios from 'axios'
export default function callApi(endpoint, method , body){
    return axios({
        method: method,
        url: `http://26.59.200.160/osmbackend${endpoint}`,
        data: body    
    }).catch(res =>{
        console.log(res)
        message.error('Lỗi không thể kết nối tới server')
    })
    
    
}
