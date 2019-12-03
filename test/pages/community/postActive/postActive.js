// pages/community/postActive.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/home_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    alter_on:0,
    tag_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo:app.globalData.userInfo,
      tag_list:[{
        name:"倾诉港湾"
      },{
        name:"学业压力"
      },{
        name:"人际交往"
      },{
        name:"正能量供应站"
      },{
        name:"抑郁焦虑"
      },{
        name:"恋爱情感"
      },{
        name:"发展规划"
      },{
        name:"家庭关系"
      }]
    })
  },
  switchChange:function(){
    this.setData({
      alter_on: !this.alter_on
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