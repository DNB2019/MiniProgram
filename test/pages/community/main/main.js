// pages/community/community.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lock: 0,
    userInfo: app.globalData.userInfo,
    url: app.globalData.baseUrl + '/static/img/community/',
    feed: [{
      //active_id:
      //area
      //avatar_url:
      //username:
      //date:
      //image_url:
      //content:
      //light_number
      //comment_number
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    console.log('userInfo' + this.userInfo);
    var area = 0;
    var order = 0;
    api.getCommunityList({
      area,
      order
    }).then(data => {
      console.log("community list:", data.feed);
      console.log("code", data.code);
      that.setData({
        feed: data.feed
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getHarbour: function() {
    console.log("getting to harbour");
    wx.navigateTo({
      url: "../subpage/subpage"
    })
  },
  getActiveDetail: function(event) {
    console.log("getting active detail");
    var acID = event.currentTarget.dataset.activeId;
    console.log("active id is", acID);
    wx.navigateTo({
      url: "../activeDetail/activeDetail?active_id=" + acID
    })
  },
  getPost: function() {
    console.log("getting post");
    wx.navigateTo({
      url: '../postActive/postActive'
    })
  },
  getSearch: function() {
    console.log("getting search");
    wx.navigateTo({
      url: '../search/search'
    })
  },
  refreshCommunity: function() {
    console.log("refresh")
    var area = 0;
    var order = 0;
    var that = this;
    wx.showLoading({
      title: '刷新中',
    })
    if (this.data.lock == 0) {
      this.setData({
        lock: 1
      })
      api.getCommunityList({
        area,
        order
      }).then(data => {
        wx.hideLoading();
        console.log("community list:", data.feed);
        console.log("code", data.code);
        that.setData({
          feed: data.feed,
          lock: 0
        })
      })
    }

  },
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})