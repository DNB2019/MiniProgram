// pages/home/main/main.js

const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/home_api.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    greeting: "欢迎",
    list: [{
      title: '心理测试',
      img: 'https://image.weilanwl.com/color2.0/plugin/sylb2244.jpg',
      url: 'pages/discovery/main'
    },
    {
      title: '放松疏解',
      img: app.globalData.baseUrl +'/static/img/background/bluesky.jpg',
      url: '/animation/animation'
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---home onLoad---')
    var that = this
    this.setData(
      {
        userInfo: app.globalData.userInfo,
      }
    )
    var date = util.formatTime(new Date())
    //请求问候语
    api.apiGreet({
      date
    }).then(data => {
      console.log('Success request:' + data)
      that.setData({
        greeting: data.time_greeting + data.motto_greeting
      })
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  bindViewTap: function () {
    console.log('here')
    wx.navigateTo({
      url: '/pages/discovery/article-li/article-li',
    })
  },
  toChild(e) {
    console.log('toChild')
    wx.navigateTo({
      url: '/pages' + e.currentTarget.dataset.url
    })
  }

})