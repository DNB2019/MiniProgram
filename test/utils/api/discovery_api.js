// discover_api.js
import request from '../request.js'
const baseUrl = getApp().globalData.baseUrl

//请求干货知识页面的4篇文章
export function recommendArticle(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Recommend/Article`,
    method: 'POST',
    data
  })
}
//请求干货知识页面的4篇文章
export function recommendClass(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Recommend/Class`,
    method: 'POST',
    data
  })
}
//请求干货知识更多页面的文章列表
export function getArticleList(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/testing`,
    method: 'POST',
    data
  })
}

export function getSearchList(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Article_Search_By_Similarity`,
    method: 'POST',
    data
  })
}
