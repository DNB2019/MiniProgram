//community_api.js
import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl
export function getCommunityList(data) {
    return request({
      url: `${baseUrl}/Get_Community_List`,
      method: 'POST',
      data
    })
}
export function getCommunity(data) {
    return request({
      url: `${baseUrl}/Get_Community`,
      method: 'POST',
      data
    })
}