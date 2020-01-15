// pages/discovery/discovery.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/discovery_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadFlag:false,
    inputValue:'',
    articleList: [],
    classList:[]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    console.log('---discovery onLoad---');
    var that=this;
    var num=4;
    //文章
    api.recommendArticle({
      num
    }).then(data => {
      console.log('成功请求文章 ID:' + data.article[0].Article_ID);
      that.setData({
        articleList:data.article
      })
    }).catch(data => {
      console.log('Error in getArticle: ' + data.code)
    });
    //课程
    api.recommendClass({
      num
    }).then(data => {
      console.log('Success request:', data);
      that.setData({
        classList: data.article,
        loadFlag: true
      });
      wx.hideLoading();
    })
    // .catch(data => {
    //   console.log('Error in getClass: ' + data.code)
    // })
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
  getSearch:function()
  {
    console.log('跳转到搜索页面')
    wx.navigateTo({
      url: '../search/search',
    })
  },
  toMore:function()
  {
    console.log('跳转到更多')
    wx.navigateTo({
      url: '/pages/discovery/more-li/more-li',
    })
  },
  articleClick:function(e)
  {
    api.articleClick(e);
  }
})