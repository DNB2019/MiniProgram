// pages/home/main/main.js

const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/home_api.js')
var user_api = require('../../../utils/api/user_api.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    greeting: "欢迎",
    back_img: app.globalData.baseUrl + "/static/img/background/signin.png",
    motto: "万事皆有裂缝，那是光照进来的地方",
    signFlag: false, //是否展示签到弹窗
    successFlag: false, //是否展示成功弹窗
    signed: false, //是否签到完成
    curIcon: -1,
    iconList: [{
        img_selected: "../../../images/幸福（彩）.png",
        img: "../../../images/幸福.png",
        txt: "幸福",
        fdback: "爱你所爱，珍惜当下，真好！"
      },
      {
        img_selected: "../../../images/开心（彩）.png",
        img: "../../../images/开心.png",
        txt: "开心",
        fdback: "希望以后的每一天都能像今天一样开心"
      },
      {
        img_selected: "../../../images/还不错（彩）.png",
        img: "../../../images/还不错.png",
        txt: "还不错",
        fdback: "状态不错哦~认真生活，不留遗憾。"
      },
      {
        img_selected: "../../../images/一般般（彩）.png",
        img: "../../../images/一般般.png",
        txt: "一般般",
        fdback: "多笑一笑，你会发现更多美好。"
      },
      {
        img_selected: "../../../images/焦虑（彩）.png",
        img: "../../../images/焦虑.png",
        txt: "焦虑",
        fdback: "你已经很棒了！有时间运动一下吧~"
      },
      {
        img_selected: "../../../images/不开心（彩）.png",
        img: "../../../images/不开心.png",
        txt: "不开心",
        fdback: "别担心，都会好起来的。"
      },
      {
        img_selected: "../../../images/很难过（彩）.png",
        img: "../../../images/很难过.png",
        txt: "很难过",
        fdback: "发生什么了？我们一直在你身边。"
      },
      {
        img_selected: "../../../images/生气（彩）.png",
        img: "../../../images/生气.png",
        txt: "生气",
        fdback: "别生气！说，谁欺负你了！"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('---home onLoad---')
    var that = this
    this.setData({
      userInfo: app.globalData.userInfo,
    })
    var date = util.formatTime(new Date());
    //请求问候语
    api.apiGreet({
      date
    }).then(data => {
      console.log('Success request:' + data)
      that.setData({
        greeting: data.time_greeting + this.data.userInfo.nickName,
        motto: data.motto_greeting,
        signed:false
      })
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
  //跳到机器人聊天界面
  toRobot: function() {
    console.log('聊天')
    wx.navigateTo({
      url: '/pages/home/chatRobot/chatRobot',
    })
  },
  //点击签到，弹出签到页面
  showSignIn: function(e) {
    console.log('点击');
    this.setData({
      signFlag: true
    })
  },
  //签到成功后者点击黑色处，收起签到页面
  hideSignIn: function() {
    console.log('收起');
    this.setData({
      signFlag: false
    })
  },
  //点击心情
  selectMood: function(e) {
    var index = e.currentTarget.dataset.index;
    console.log('被点击index', index);
    if (index == this.data.curIcon) {
      this.setData({
        curIcon: -1
      })
    } else {
      this.setData({
        curIcon: index
      })
    }
  },
  //点击签到
  signInClick: function() {
    console.log("签到");
    var index = this.data.curIcon;
    console.log("index", index);
    if (index == -1) {
      console.log("用户未选择任何心情")
    } else {
      var mood = this.data.iconList[index].txt;
      console.log("心情", mood);
      this.hideSignIn();
      //显示成功弹窗
      this.setData({
        successFlag: true,
        signed: true
      });
      var user_id=app.globalData.openid;
      var change=10;
      user_api.updatePoints(
        {
          user_id,
          change
        }
      ).then(data=>{
        if(data.code==0){
        console.log("成功签到+10");
        }
      })
      var that=this;
      setTimeout(function() {
        that.hideSuccess();
      }, 2000);
      // clearTimeout(timer);
    }
  },
  hideSuccess: function() {
    console.log("收起成功弹窗")
    this.setData({
      successFlag: false
    })
  },
  signedClick: function() {
    wx.showModal({
      title: '失败',
      content: '今天已经签过到啦！',
      showCancel: false
    })
  }
})