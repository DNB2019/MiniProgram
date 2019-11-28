// request.js

//request函数，options为参数{url,method,data}，其中data是object
//resolve和reject 都是wx.request返回的res.data
const request = options => {
  return new Promise((resolve, reject) => {
    const { data, method } = options
    if (data && method !== 'get') {
      options.data = JSON.stringify(data) //转成JSON字符串
    }
  console.log('method:'+options.method)
  console.log('url:'+options.url)
  console.log('data:'+options.data)
    wx.request({
      header: { 'Content-Type': 'application/json' },
      ...options,//相当于将options拆开
      success: function (res) {
        console.log('请求code:'+res.data.code)
        resolve(res.data) //将res.data return
      },
      fail: function (res) {
        reject(res.data)
      }
    })
  })
}
export default request
