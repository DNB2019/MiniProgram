// pages/discovery/discovery.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: '../../../images/bluesky.jpg',
    blocks: [{ '文章干货': {} }, { '心理课堂': {} }],
    list: [{
      title: '文章1文章1文章1文章1文章1文章1文章1文章1',
      img:  '../../../images/bluesky.jpg',
      abstract: '摘要1',
      url: '/indexes/indexes'
    },
    {
      title: '文章2',
      img: '../../../ images / bluesky.jpg',
      abstract: '摘要2',
      url: '/animation/animation'
    },
    {
      title: '文章3',
      img: '../../../ images / bluesky.jpg',
      abstract: '摘要1',
      url: '/indexes/indexes'
    },
    {
      title: '文章4',
      img: '../../../ images / bluesky.jpg',
      abstract: '摘要1',
      url: '/indexes/indexes'
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
  toMore:function()
  {
    console.log('跳转到更多')
    wx.navigateTo({
      url: '/pages/article-li/article-li',
    })
  }
})