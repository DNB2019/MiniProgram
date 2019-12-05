// pages/community/community.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/home_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    feed: [{
      //avatar_url:
      //username:
      //date:
      //image_url:
      //content:
      //light_number
      //comment_number
    }, {
      avatar_url: "../../../images/me_setting.png",
      username: "user1",
      date: "2019-11-22",
      image_url: "../../../images/me_setting.png",
      content: "一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才",
    }, {
      avatar_url: "../../../images/me_setting.png",
      username: "user1",
      date: "2019-11-22",
      image_url: "",
      content: "一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才",
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    this.setData(
      {
        userInfo: app.globalData.userInfo,
      }
    )
    console.log('userInfo' + this.userInfo);
    this.setData({
      feed: [{
        avatar_url: "../../../images/me_setting.png",
        username: "user1",
        date: "2019-11-22",
        image_url: "../../../images/me_setting.png",
        content: "一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才"
      }, {
        avatar_url: "../../../images/me_setting.png",
        username: "user2",
        date: "2019-11-22",
        image_url: "../../../images/me_setting.png",
        content: "一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才"
      }]
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  getHarbour: function () {
    console.log("getting to harbour");
    wx.navigateTo({
      url: "../subpage/subpage"
    })
  },
  getActiveDetail: function () {
    console.log("getting active detail");
    wx.navigateTo({
      url: "../activeDetail/activeDetail"
    })
  },
  getPost: function () {
    console.log("getting post");
    wx.navigateTo({
      url: '../postActive/postActive'
    })
  },
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