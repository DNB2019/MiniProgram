//user_api.js
import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl

//请求干货知识页面的4篇文章
export function updatePoints(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Update_User_Point`,
    method: 'POST',
    data
  })
}