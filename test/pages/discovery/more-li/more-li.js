// pages/discovery/more-li/more-li.js
var api = require('../../../utils/api/discovery_api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadFlag: false,
    orderFlag: true,
    searchValue: "",
    orderCur: 0, //排序方式，默认为0，即按时间
    tagCur: 0, //选定标签
    articleList: [],
    tagList: ['加油夜深了新的一天要开始了', '标签1', '标签1', '标签1', '标签1', '标签1', '标签1']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    })
    console.log('---more-li onLoad---');
    this.getMoreList();
  },
  getMoreList: function() {
    var num = 30;
    var order=this.data.orderCur;
    var that = this;
    api.getMoreList({
      num,
      order
    }).then(data => {
      that.setData({
        loadFlag: true,
        articleList: data.article_list,
        tagCur: 0
      });
      wx.hideLoading();
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  articleClick: function (e) {
    api.articleClick(e);
  },
  tagSelect: function(e) {
    var index = e.currentTarget.dataset.id;
    var tagName = this.data.tagList[index];
    console.log('被点击标签:' + tagName);
    this.setData({
      tagCur: index
    });
  },
  searchArticle: function(e) {
    var input = e.detail.value;
    console.log("用户搜索文章：" + input);
    this.setData({
      searchValue: ""
    })
  },
  getSearch: function() {
    console.log('跳转到搜索页面')
    wx.navigateTo({
      url: '../search/search',
    })
  },
  getOrder: function() {
    console.log("getOrder")
    var flag = this.data.orderFlag;
    this.setData({
      orderFlag: !flag
    })
  },
  //按热度或按时间按钮
  orderClick: function(e) {
    var order = e.currentTarget.dataset.id;
    console.log('order',order);
    var that=this;
    this.setData({
      orderCur: order
    })
    setTimeout(function(){
      that.setData(
        {
          orderFlag:true
        }
      )
    },500);
    this.getMoreList();
  },
  //收起遮罩
  hide:function()
  {
    var flag = this.data.orderFlag;
    this.setData({
      orderFlag: !flag
    })
  }
})