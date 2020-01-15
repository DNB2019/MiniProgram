//community_api.js
import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl
export function getCommunityList(data) {
    return request({
      url: `${baseUrl}/Get_Community_List_By_Order`,
      method: 'POST',
      data
    })
}
export function getCommunity(data) {
  console.log("get data",data);
    return request({
      url: `${baseUrl}/Get_Community`,
      method: 'POST',
      data
    })
}
export function postActive(data) {
  console.log("get data", data);
  return request({
    url: `${baseUrl}/Send_Community`,
    method: 'POST',
    data
  })
}
