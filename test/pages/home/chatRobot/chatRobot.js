// pages/chatRobot/chatRobot.js
const app = getApp();
var inputVal = '';//消息值
var msgList = [];//消息列表
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';
  msgList = [{
      speaker: 'server',
      contentType: 'text',
      content: 'Hi！我是小L，有什么问题欢迎来问我哦~点击下方的对话框，把你想搜索的问题告诉我，我帮你寻找答案！'
    },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '小L你好！'
    },
    {
      speaker: 'server',
      contentType: 'discovery',
      content: [{
          Title: "当感到疲惫时，我们可以做些什么？",
          Image: "../../../images/bluesky.jpg"
        },
        {
          Title: "当感到疲惫时，我们可以做些什么什么什么？我们可以做些什么",
          Image: "../../../images/bluesky.jpg"
        }
      ],

    },
    {
      speaker: 'server',
      contentType: 'community',
      content: [{
        main: "当感到疲惫时，我们可以做些什么？当感到疲惫时，我们可以做些什么什么什么？我们可以做些什么当感到疲惫时，我们可以做些什么什么什么？我们可以做些什么",
        Tag:"#学业"
      },
      {
        main: "当感到疲惫时，我们可以做些什么什么什么",
        Tag: "#学业"
      }
      ],
    },
    {
      speaker: 'server',
      contentType: 'action',
      content: '小L抱了抱你'
    },
    {
      speaker: 'server',
      contentType: 'action',
      content: '小L戳了你一下'
    },
    {
      speaker: 'server',
      contentType: 'action',
      content: '小L摸摸头'
    }
  ]
  that.setData({
    msgList,
    inputVal
  })
}

/**
 * 计算msg总高度
 */
function calScrollHeight(that, keyHeight) {
  var query = wx.createSelectorQuery();
  query.select('.scrollMsg').boundingClientRect(function(rect) {
  }).exec();
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleCur: 0,
    discussCur:0,
    scrollHeight: '100vh',
    inputBottom: 0,
    toView:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    initData(this);
    this.setData({
      cusHeadIcon: app.globalData.userInfo.avatarUrl,//用户头像
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
   * 获取聚焦
   */
  focus: function(e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    console.log('toView',this.data.toView);
    //计算msg高度
    calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function(e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })
  },

  /**
   * 发送点击监听
   */
  sendClick: function(e) {
    var msg = e.detail.value.inputMsg;
    if (msg.length != 0) {
      console.log('用户发送消息：' + msg)
      msgList.push({
        speaker: 'customer',
        contentType: 'text',
        content: e.detail.value.inputMsg
      })
      inputVal = '';
      this.setData({
        msgList,
        inputVal
      });
    } else {
      wx.showModal({
        title: '发送失败',
        content: '消息不能为空',
        showCancel: false
      })
    }

  },
  //设置当前的文章index
  articleSwiper(e) {
    this.setData({
      articleCur: e.detail.current
    })
  },
  discussSwiper(e) {
    this.setData({
      discussCur: e.detail.current
    })
  },
})