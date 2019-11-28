// home_api.js
import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl

//请求问候语，参数为date
export function apiGreet(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Greeting`,
    method: 'POST',
    data
  })
}


