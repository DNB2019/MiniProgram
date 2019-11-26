// pages/discovery/more-li/more-li.js
var api = require('../../../utils/api/discovery_api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadFlag:false,
    searchValue:"",
    tagCur:null,
    articleList:[],
    tagList: ['加油夜深了新的一天要开始了', '标签1', '标签1', '标签1', '标签1', '标签1', '标签1']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    var that=this;
    console.log('---more-li onLoad---');
    var searchData="抑郁症";
    api.getSearchList({ searchData }).then(data => {
      console.log('Success getSearchList:' + data.article_list[0].Tag)
      that.setData({
        loadFlag: true,
        articleList: data.article_list,
        // tagList: data.article_list
      });
      wx.hideLoading();
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
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

  },
  tagSelect: function (e) {
    var index = e.currentTarget.dataset.id;
    var tagName=this.data.tagList[index];
    console.log('被点击标签:' + tagName);
    this.setData({
      tagCur: index
    });
  },
  searchArticle:function(e)
  {
    var input=e.detail.value;
    console.log("用户搜索文章："+input);
    this.setData({
      searchValue:""
    })
  }
})