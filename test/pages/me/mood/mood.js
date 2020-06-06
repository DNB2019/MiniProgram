// pages/me/me.js
const app = getApp();
var api = require('../../../utils/api/me_api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      avartar_link:"http://193.112.179.39:5000/static/img/psyfile/person.png",
      type:"???",
      health:"http://193.112.179.39:5000/static/img/psyfile/leaf.png",
      risk:"http://193.112.179.39:5000/static/img/psyfile/risk.png",
      adjust:"http://193.112.179.39:5000/static/img/psyfile/adjust.png",
      mood:"http://193.112.179.39:5000/static/img/psyfile/heart.png",
      finish:"http://193.112.179.39:5000/static/img/psyfile/okay.png",
      progress_num:"75%"

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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