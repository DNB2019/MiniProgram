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
    tag_dic:{1:"倾诉港湾",2:"学业压力",3:"人际交往",4:"正能量供应站",5:"抑郁焦虑",6:"恋爱情感",7:"发展规划",8:"家庭关系"},
    alter_on: 0,
    chosen_tag:-1,
    tag_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      tag_list: [{
        id:0,
        name: "倾诉港湾",
        color:"#b2b2b2",
      }, {
        id:1,
        name: "学业压力",
        color:"#b2b2b2",
      }, {
        id:2,
        name: "人际交往",
        color:"#b2b2b2",
      }, {
        id:3,
        name: "正能量供应站",
        color:"#b2b2b2",
      }, {
        id:4,
        name: "抑郁焦虑",
        color:"#b2b2b2",
      }, {
        id:5,
        name: "恋爱情感",
        color:"#b2b2b2",
      }, {
        id:6,
        name: "发展规划",
        color:"#b2b2b2",
      }, {
        id:7,
        name: "家庭关系",
        color:"#b2b2b2",
      }]
    })
  },
  switchChange: function () {
    this.setData({
      alter_on: !this.alter_on
    })
  },
  chosenTag:function(event){
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