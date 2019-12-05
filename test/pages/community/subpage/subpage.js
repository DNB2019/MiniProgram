// pages/community/subpage/subpage.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
Page({
  data: {
    userInfo: app.globalData.userInfo,
    location: 0,
    hottest: [],
    newest: [],
    head_image_url: "../../../images/article_bottom.png"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var area = 0;
    this.setData({
        userInfo:app.globalData.userInfo,
    })
    console.log('userInfo'+this.userInfo);
    var order = 0;
    api.getCommunityList({
      area,
      order
    }).then(data=>{
      console.log("time list",data.feed);
      console.log("code",data.code);
      that.setData({
        newest:data.feed
      })
    })
    order = 1;
    api.getCommunityList({
      area,
      order
    }).then(data=>{
      console.log("hot list",data.feed);
      console.log("code",data.code);
      that.setData({
        hottest:data.feed
      })
    })
  },
  getActiveDetail:function(event){
    console.log("getting active detail");
    var acID = event.currentTarget.dataset.activeId;
    console.log("active id is",acID);
    wx.navigateTo({
      url:"../activeDetail/activeDetail?active_id="+acID
    })
  },
  getNewest: function() {
    console.log("getting newest, location");
    console.log("feed");
    this.setData({
      location: 0
    });
  },
  getHottest: function() {
    console.log("getting hottest, location");
    console.log("feed");
    this.setData({
      location: 1
    })

  },
  getPost: function() {
    wx.navigateTo({
      url: '../postActive/postActive'
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

  }
})
/*
hottest:[{
          active_id:1,
          avatar_url:"../../../images/me_setting.png",
          username:"user1hot",
          date:"2019-11-22",
          image_url:"../../../images/me_setting.png",
          content:"hothothot一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才"
        },{
          active_id:2,
          avatar_url:"../../../images/me_setting.png",
          username:"user2hot",
          date:"2019-11-22",
          image_url:"../../../images/me_setting.png",
          content:"hothothot一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才"
        }],
        newest:[{
          active_id:1,
          avatar_url:"../../../images/me_setting.png",
          username:"user1new",
          date:"2019-11-22",
          image_url:"../../../images/me_setting.png",
          content:"newnewnewnew一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个"
        },{
          active_id:2,
          avatar_url:"../../../images/me_setting.png",
          username:"user1new",
          date:"2019-11-22",
          image_url:"../../../images/me_setting.png",
          content:"newnewnewnew一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能"
        }],
*/