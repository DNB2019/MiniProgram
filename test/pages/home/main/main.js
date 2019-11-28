// pages/home/main/main.js

const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/home_api.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo: app.globalData.userInfo,
    greeting: "欢迎",
    back_img:app.globalData.baseUrl+"/static/img/background/signin.png",
    motto:"万事皆有裂缝，那是光照进来的地方",
    signFlag: false,
    successFlag: false,
    curIcon: -1,
    iconList: [
      {
        img_selected: "../../../images/幸福（彩）.png",
        img: "../../../images/幸福.png",
        txt: "幸福"
      },
      {
        img_selected: "../../../images/开心（彩）.png",
        img: "../../../images/开心.png",
        txt: "开心"
      },
      {
        img_selected: "../../../images/还不错（彩）.png",
        img: "../../../images/还不错.png",
        txt: "还不错"
      },
      {
        img_selected: "../../../images/一般般（彩）.png",
        img: "../../../images/一般般.png",
        txt: "一般般"
      },
      {
        img_selected: "../../../images/焦虑（彩）.png",
        img: "../../../images/焦虑.png",
        txt: "焦虑"
      },
      {
        img_selected: "../../../images/不开心（彩）.png",
        img: "../../../images/不开心.png",
        txt: "不开心"
      },
      {
        img_selected: "../../../images/很难过（彩）.png",
        img: "../../../images/很难过.png",
        txt: "很难过"
      },
      {
        img_selected: "../../../images/生气（彩）.png",
        img: "../../../images/生气.png",
        txt: "生气"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---home onLoad---')
    var that = this
    this.setData(
      {
        userInfo: app.globalData.userInfo,
      }
    )
    var date = util.formatTime(new Date());
    //请求问候语
    api.apiGreet({
      date
    }).then(data => {
      console.log('Success request:' + data)
      that.setData({
        greeting: data.time_greeting+this.data.userInfo.nickName,
        motto: data.motto_greeting
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
  //跳到机器人聊天界面
  toRobot: function () {
    console.log('聊天')
    wx.navigateTo({
      url: '/pages/home/chatRobot/chatRobot',
    })
  },

  showSignIn: function (e) {
    console.log('点击');
    this.setData(
      {
        signFlag: true
      }
    )
  },
  hideSignIn: function () {
    console.log('收起');
    this.setData(
      {
        signFlag: false
      }
    )
  },
  selectMood: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log('被点击index', index);
    if (index == this.data.curIcon) {
      this.setData(
        {
          curIcon: -1
        }
      )
    } else {
      this.setData(
        {
          curIcon: index
        }
      )
    }
  },
  signInClick: function () {
    console.log("签到");
    var index = this.data.curIcon;
    console.log("index", index);
    var mood = this.data.iconList[index].txt;
    console.log("心情", mood);
    this.hideSignIn();
    this.setData(
      {
        successFlag: true
      }
    );
    var timer = setTimeout(function () {
      this.hideSuccess();
    }, 2000);
    clearTimeout(timer);
  },
  hideSuccess: function () {
    this.setData({
      successFlag: false
    })
  }
})