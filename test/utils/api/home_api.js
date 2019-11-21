// home_api.js
import request from '../request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

//请求问候语，参数为date
export function apiGreet(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/testing`,
    method: 'POST',
    data
  })
}
