// pages/test/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sortList:["健康","情感","人际","能力","性格","发展"],
    TabCur:0,
    testList:[
      {
        name:"国际标准抑郁测试",
        img:"../../../images/bluesky.jpg"
      },
      {
        name: "国际标准抑郁测试",
        img: "../../../images/bluesky.jpg"
      },
      {
        name: "国际标准抑郁测试",
        img: "../../../images/bluesky.jpg"
      },
      {
        name: "国际标准抑郁测试",
        img: "../../../images/bluesky.jpg"
      }
    ]
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

  },
  tabSelect: function (e) {
    var index = e.currentTarget.dataset.id;
    console.log('被点击栏目:' + index);
    this.setData({
      TabCur: index
    });
  },
  getSearch()
  {
    console.log('跳转到搜索页面')
    wx.navigateTo({
      url: '../search/search',
    })
  }
})