// pages/me/me.js
const app = getApp();
var api = require('../../../utils/api/me_api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    test_time:"2019-11-09",
    use_days:6,
    upper_img:"../../../images/me_upper.png",
    points:10,
    loaded:0//记载是否已经请求过，请求过就不用再请求了（是否有用？）
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        userInfo:app.globalData.userInfo
      }
    )
    console.log('userInfo'+this.userInfo);
    var that = this;
    var user_id = app.globalData.openid;
    api.meMainPage({
      user_id
    }).then(data=>{
      console.log("data",data);
      console.log("use days:",data.use_days," points:",data.points)
      that.setData({
        use_days: data.use_days,
        points :data.points
      })
    })
  },
  getCollection:function(){
    wx.navigateTo({
      url:"../collection/collection"
    })
  },
  getHistory:function(){
    wx.navigateTo({
      url:"../history/history"
    })
  },
  getTest:function(){
    wx.navigateTo({
      url:"../testRecord/testRecord"
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