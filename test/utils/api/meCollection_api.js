import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl

export function collectionKnowledge(data){
    return request({
        url:`${baseUrl}/Get_User_Collect`,
        method:'POST',
        data
    })
}