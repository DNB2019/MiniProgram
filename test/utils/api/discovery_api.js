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
//请求干货知识页面的4个心理课堂
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
//根据用户搜索 请求干货知识的文章列表
export function getSearchList(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Article_Search_By_Similarity`,
    method: 'POST',
    data
  })
}
//请求干货知识更多页面的文章列表
export function getArticle(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Article_Page`,
    method: 'POST',
    data
  })
}
export function getComment(data) {
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Article_Com`,
    method: 'POST',
    data
  })
}
export function articleClick(e) {
  var articleId = e.currentTarget.dataset.id;
  console.log("文章被点击"+articleId);
  console.log("类型"+typeof(articleId));
  wx.navigateTo({
    url: '../article/article?id='+articleId,
  })
}
export function submitComment(data) {
  console.log('submit'+data);
  console.log('submit' + data.articleId);
  //data是一个object：{}
  return request({
    url: `${baseUrl}/Submit_Article_Com`,
    method: 'POST',
    data
  })
}