
// pages/test/search_result/search_result.js
const app=getApp();
var api = require('../../../utils/api/discovery_api.js')
const baseUrl = app.globalData.baseUrl +"/static/img/test/"
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
    classList:[],
    Item_List: [{ url: baseUrl + 'recommand.png', sentence: 'test' }, { url: baseUrl + 'test.png', sentence: 'test1' }, { url: baseUrl + 'recommand.png', sentence: 'test2' }, { url: baseUrl + 'test.png', sentence: 'test3' }, { url: baseUrl + 'recommand.png', sentence: 'test4' }, { url: baseUrl + 'test.png', sentence: 'test5' }, { url: baseUrl + 'recommand.png', sentence: 'test' }, { url: baseUrl +'test.png',sentence:'test1'}],
    testList: [{ url: baseUrl + 'test.png', title: "国际标准抑郁测试", link: '../search/search' }, { url: baseUrl + 'test.png', title: "国际标准抑郁测试" }, { url: baseUrl + 'test.png', title: "国际标准抑郁测试" }, { url: baseUrl + 'test.png', title: "伯恩斯抑郁状况" }, { url: baseUrl + 'test.png',title:"抑郁症程度测试"}],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---search_result onLoad---');
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
  },
  getTest: function(e){
    console.log(e);
    wx.navigateTo({url:e.currentTarget.id,});
  }
})