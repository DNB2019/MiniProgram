// pages/test/testDetail/testDetail.js
var selected = [];
var choiceBtn=['符合','不符合'];
// var choiceYn=['是','否'];
var choiceDot = ["偶尔或无", "有时", "经常", "持续"];
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
    people: 52,
    description: "国际标准抑郁症测试题在线测试。以下是最常使用的国际标准抑郁症测试题量表，测试者可根据自己的实际感受进行抑郁症测试。",
    qNum: 21,
    qTime: 15,
    qCur: 0,
    questionList: [{
        type: 'dot',
      question: "我觉得很难让自己安静下来",
        choice: choiceDot
      },
      {
        type: 'yn',
        question: "我感到口干舌燥",
      },
      {
        type: 'btn',
        question: "我好像一点都没有感觉到任何愉快、舒畅",
        choice:choiceBtn
      },
      {
        type: 'btn',
        question: "我感到呼吸困难（例如：气喘或透不过气来）",
        choice: choiceBtn
      },
      {
        type: 'btn',
        question: "我感到很难主动去开始工作",
        choice: choiceBtn
      },
      {
        type: 'yn',
        question: "我对事情往往做出过敏反应",
      },
      {
        type: 'dot',
        question: "我感到颤抖",
        choice: choiceDot
      },
      {
        type: 'dot',
        question: "我觉得自己消耗了很多精力",
        choice: choiceDot
      },
      {
        type: 'yn',
        question: "我担心一些可能让自己恐慌或出丑的场合",
      },
      {
        type: 'btn',
        question: "我觉得自己对不久的将来没有什么可期盼的",
        choice: choiceBtn
      },
      {
        type: 'btn',
        question: "我感到忐忑不安",
        choice: choiceBtn
      },
      {
        type: 'yn',
        question: "我感到很难放松自己",
      },
      {
        type: 'dot',
        question: "我感到抑郁沮丧",
        choice: choiceDot
      },
      {
        type: 'btn',
        question: "我无法容忍任何阻碍我继续工作的事情",
        choice: choiceBtn
      },
      {
        type: 'btn',
        question: "我感到快要崩溃了",
        choice: choiceBtn
      },
      {
        type: 'dot',
        question: "我对任何事情都不能产生热情",
        choice: choiceDot
      },
      {
        type: 'dot',
        question: "我觉得自己不怎么配做人",
        choice: choiceDot
      },
      {
        type: 'yn',
        question: "我发现自己很容易被触怒",
      },
      {
        type: 'btn',
        question: "即使在没有明显的体力活动时，我也感到心律不正常",
        choice: choiceBtn
      },
      {
        type: 'btn',
        question: "我无缘无故地感到害怕",
        choice: choiceBtn
      },
      {
        type: 'yn',
        question: "我感到生命毫无意义",
      },
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