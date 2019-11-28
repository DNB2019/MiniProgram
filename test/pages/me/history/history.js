// pages/me/me.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    location:0,
    psychoTest:[],
    knowledge:[],
    dicussion:[]
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
          title:"标题1",
        },{
          image_url:"../../../images/chat_focus.png",
          title:"标题2",
        },{
          image_url:"../../../images/chat_focus.png",
          title:"标题3",
        }
        ],
        knowledge:[{
          image_url:"../../../images/chat_focus.png",
          title:"收藏的干货知识",
          tag:"#抑郁症",
          author:"bynb"
        },{
          image_url:"../../../images/chat_focus.png",
          title:"收藏的干货知识2",
          tag:"#抑郁症",
          author:"bynb"
        },{
          image_url:"../../../images/chat_focus.png",
          title:"收藏的干货知识3",
          tag:"#抑郁症",
          author:"bynb"
        }],
        discuss:[{
          avatar_url:"../../../images/invite.png",
          username:"用户1",
          date:"2019-11-25",
          tag:"#学业",
          content:"一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才大一但已经觉得前途一片茫然了。虽然平时爱去图书馆看一些哲学书，爱打球，可是一想起自己专业的事就..."
        },{
          avatar_url:"../../../images/invite.png",
          username:"用户1",
          date:"2019-11-25",
          tag:"#学业",
          content:"一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才大一但已经觉得前途一片茫然了。虽然平时爱去图书馆看一些哲学书，爱打球，可是一想起自己专业的事就..."
        }]
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