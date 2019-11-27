// pages/me/me.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    psychoTest:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData(
      {
        userInfo:app.globalData.userInfo,
        psychoTest:[{
          image_url:"../../../images/chat_focus.png",
          title:"测试1",
          date:"2019-11-11",
        },{
          image_url:"../../../images/chat_focus.png",
          title:"测试2",
          date:"2019-11-12",
        },{
          image_url:"../../../images/chat_focus.png",
          title:"测试3",
          date:"2019-11-13",
        }
      ]
      }
    )
    console.log('userInfo'+this.userInfo)
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