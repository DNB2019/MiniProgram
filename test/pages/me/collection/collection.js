// pages/me/me.js
var api = require('../../../utils/api/me_api.js');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    location:0,
    knowledge:[],
    discuss:[],
    psychoTest:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData(
      {
        userInfo:app.globalData.userInfo,
      }
    )
    console.log('userInfo'+this.userInfo);
    var tag = 'A';
    var user_id = app.globalData.openid;
    api.collectionKnowledge({
      tag,
      user_id
    }).then(data=>{
      console.log('Success getKnowledge');
      console.log('code is',data.code);
      console.log('data.collect_list length', data.collect_list.length);
      that.setData({
        knowledge:data.collect_list
      })
    })
  },
  getKnowledge:function(){
    console.log("get knowledge");
    this.setData({
      location:1
    })
  },
  getDiscussion:function(){
    console.log("get discuss");
    this.setData({
      location:2
    })
  },
  getTest:function(){
    console.log("getTest");
    this.setData({
      location:0
    })
  },
  getToTest:function()
  {
    console.log("switch to test main");
    wx.switchTab({
      url: '/pages/test/main/main',
    })
  },
  getToDiscovery:function()
  {
    wx.switchTab({
      url: '/pages/discovery/main/main',
    })
  },
  getToCommunity: function () {
    wx.switchTab({
      url: '/pages/community/main/main',
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

  }
})