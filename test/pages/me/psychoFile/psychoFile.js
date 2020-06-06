// pages/me/me.js
const app = getApp();
var api = require('../../../utils/api/me_api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    p1:"../../../images/p1.png",
    p2:"../../../images/p2.png",
    p3:"../../../images/p3.png",
    graph:"../../../images/psycho_view.png",
    p1_progress:"100%",
    p2_progress:"75%",
    p3_progress:"25%",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  getPotential:function(options){
    wx.navigateTo({
      url:"../potential/potential"
    })
  },
  getMood:function(options){
    wx.navigateTo({
      url:"../mood/mood"
    })
  },
  getInterpersonal(options){
    wx.navigateTo({
      url:"../interpersonal/interpersonal"
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