// pages/test/test.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:app.globalData.userInfo,
    avatar_url:"../../../images/me_about.png",
    username:"userone",
    date:"2019-22-22",
    active_content:"",
    tag:"#学业压力",
    watch_number:50,
    creative_number:8,
    favor_number:12,
    forward_number:2,
    image_url:[],
    comments:[],
    isReplying:0, //0为正常状态，1为回复别人的评论，2为自己发表评论
    replyDes:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("active id receive is",options.active_id);
    var active_id = options.active_id;//这个参数到时候传给后台获取具体文章
    var that = this;
    this.setData(
      {
        userInfo:app.globalData.userInfo,
      }
    )
    console.log('userInfo'+this.userInfo);
    api.getCommunity({
      active_id
    }).then(data=>{
      console.log("code",data.code)
      console.log("all",data)
      that.setData({
        avatar_url:data.feed.avatar_url,
        username:data.feed.username,
        date:data.feed.date,
        watch_number:data.feed.watch_number,
        active_content:data.feed.active_content,
        creative_number:data.feed.creative_number,
        favor_number:data.feed.favor_number,
        forward_number:data.feed.forward_number,
        image_url:data.feed.image_url,
      })
    })
    this.setData({
      comments:[{
        avatar_url:"../../../images/me_about.png",
        username:"宇宙无敌美少女",
        date:"2019-11-12",
        content:"不急，慢慢来，先把当下的事做好",
        light_number:3,
        mark_number:6,
        reply_number:3,
        reply:[{
          source:"某某某(作者）",
          destination:"宇宙无敌美少女",
          reply_content:"好的，一起加油吧！！！！！！！！"
        },{
          source:"宇宙无敌美少女",
          destination:"某某某(作者）",
          reply_content:"嗯嗯，一起加油，会越来越好的"
        },{
          source:"某某某(作者）",
          destination:"",
          reply_content:"谢谢你，你也是这个专业的吗？一起努力吧"
        }]},{
          avatar_url:"../../../images/me_about.png",
          username:"user1",
          date:"2019-11-12",
          content:"加油，你一定能找到自己擅长的方向",
          light_number:5,
          mark_number:12,
          reply_number:0,
          reply:[]
      }
      ]
    })
  },
  //回复某一个评论，首先要获取评论的值
  doReply: function (event) {
    this.setData({
      isReplying: 1,
      replyDes: event.currentTarget.dataset.replyDes
    })
  },
  finReply: function () {
    this.setData({
      isReplying: 0
    })
  },
  doComment: function () {
    this.setData({
      isReplying: 2,
    })
  },
  finComment: function () {
    this.setData({
      isReplying: 0,
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
/*
active_content:"一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才…一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。现在才…\n 一些关于大学生心理困惑的问题。我是一个艺术生，以前挺喜欢画画的。后来跟风去报视觉传达。然后感觉自己不适合这个专业，又不能转专业。我该怎么办？",
comments:[{
          avatar_url:"../../../images/me_about.png",
          username:"宇宙无敌美少女",
          date:"2019-11-12",
          content:"不急，慢慢来，先把当下的事做好",
          light_number:3,
          mark_number:6,
          reply_number:3,
          reply:[{
            source:"某某某(作者）",
            destination:"宇宙无敌美少女",
            reply_content:"好的，一起加油吧！！！！！！！！"
          },{
            source:"宇宙无敌美少女",
            destination:"某某某(作者）",
            reply_content:"嗯嗯，一起加油，会越来越好的"
          },{
            source:"某某某(作者）",
            destination:"",
            reply_content:"谢谢你，你也是这个专业的吗？一起努力吧"
          }]},{
            avatar_url:"../../../images/me_about.png",
            username:"user1",
            date:"2019-11-12",
            content:"加油，你一定能找到自己擅长的方向",
            light_number:5,
            mark_number:12,
            reply_number:0,
            reply:[]
        }
        ]
*/
 