// discover_api.js
import request from '../request.js'
// baseUrl也可拼接在request.js中，当有多个鉴权模块，放在这里更灵活
const baseUrl = getApp().globalData.baseUrl

//请求干货知识页面的4篇文章，参数为date
export function get4Article(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/testing`,
    method: 'POST',
    data
  })
}

//请求干货知识更多页面的文章列表，参数为date
export function getArticleList(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/testing`,
    method: 'POST',
    data
  })
}
