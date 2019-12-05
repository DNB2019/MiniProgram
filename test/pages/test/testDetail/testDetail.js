// pages/test/testDetail/testDetail.js
var selected = [];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welcomeFlag: false,
    questionFlag: true,
    next:false,
    // resFlag: true,
    haveDone:false,
    selected: [],
    name: "国际标准抑郁测试",
    img: "../../../images/empty_img.png",
    people: 50,
    description: "国际标准抑郁症测试题在线测试。以下是最常使用的国际标准抑郁症测试题量表，测试者可根据自己的实际感受进行抑郁症测试。",
    qNum: 5,
    qTime: 10,
    qCur: 0,
    questionList: [{
        type: 'dot',
        question: "我觉得一天当中早晨的心情最好",
        choice: ["偶尔或无", "有时", "经常", "持续"],
      },
      {
        type: 'yn',
        question: "我觉得一天当中早晨的心情最好",
      },
      {
        type: 'btn',
        question: "我觉得一天当中早晨的心情最好",
        choice: ["按钮1", "按钮222", "按钮33", "按钮4"]
      },
      {
        type: 'btn',
        question: "我觉得一天当中早晨的心情最好",
        choice: ["按钮1", "按钮222", "按钮33", "按钮4"]
      },
      {
        type: 'btn',
        question: "我觉得一天当中早晨的心情最好",
        choice: ["按钮1", "按钮222", "按钮33", "按钮4"]
      }
    ],
  },
  initiateData:function()
  {
    selected = [];
    var i = 0;
    for (i = 0; i < this.data.qNum; i++) {
      selected.push(-1);
    }
    this.setData({
      selected: selected,
      qCur:0
    })
  },
  startClick: function() {
    this.setData({
      welcomeFlag: true,
      questionFlag: false
    })
  },
  // 上一题按钮按下
  preClick: function() {
    var q = this.data.qCur - 1;
    if (q >= 0) {
      this.setData({
        qCur: q,
        next:true
      })
    } else {
      wx.showModal({
        title: ' ',
        content: '没有上一题啦~',
        showCancel: false
      })
    }
  },
  // 按钮选项按下
  btnClick: function(e) {
    var that = this;
    var id = e.currentTarget.dataset.id; //选项id
    console.log("选择了", id);
    var q = this.data.qCur;
    selected[q] = id; //将对应题目用户选择的选项id放入
    q = q + 1;
    this.setData({
      selected: selected,
      next:false
    })
    if (q < this.data.questionList.length) {
      setTimeout(function() {
        that.setData({
          qCur: q
        })
      }, 1000);
    }

  },
  showRes: function() {
    console.log('showRes');
    console.log("selected",this.data.selected);
    this.setData({
      welcomeFlag: false,
      questionFlag: true,
      haveDone:true
    });
    wx.navigateTo({
      url: '../testResult/testResult'
    });
    this.initiateData();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initiateData();
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

})