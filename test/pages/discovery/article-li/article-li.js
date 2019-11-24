
// pages/discovery/article-li/article-li.js
var api = require('../../../utils/api/discovery_api.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    TabCur:0,
    sortList: ["文章干货","心理课堂"],
    searchData:"搜索",
    articleList:[
    //   {
    //   Title:"你好吗",
    //   content:"好的好的好的好的好的好的好的好的好的好的",
    //   Back_Image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
    //   Tag:"抑郁症"
    // }
    ],
    classList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---article-li onLoad---');
    var searchData=options.searchData;
    var that=this;
    console.log('用户搜索:'+searchData);
    this.setData(
      {
        searchData:searchData
      }
    ),
    api.getSearchList({searchData}).then(data => {
      console.log('Success getSearchList:' + data.article_list[0].Tag)
      that.setData({
        articleList: data.article_list,
        classList:data.article_list
      })
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
  articleClick:function(e)
  {
    api.articleClick(e);
  },
  tabSelect:function(e)
  {
    var index=e.currentTarget.dataset.id;
    console.log('被点击栏目:'+index);
    this.setData({
      TabCur:index
    });
  }
})