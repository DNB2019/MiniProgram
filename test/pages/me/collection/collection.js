// pages/me/me.js
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
        knowledge:[
        ],
        discuss:[
        ],
        psychoTest:[
        ]
      }
    )
    console.log('userInfo'+this.userInfo)
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