// pages/me/me.js
const app = getApp();
var api = require('../../../utils/api/me_api.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
      chosen:0,
      avartar_link:"../../../images/person.png",
      type:"内部驱动型",
      preface:"",
      subPre:"",
      subContext:"",
      subPreArray:[],
      subContextArray:[],
      suggestion_small_title:[],
      suggestion_detail:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      preface:"你知道吗？“我是谁”这个看似古老的问题，其实是一个人心理健康和自我发展的核心所在。你做的每一件事，每一个选择都和你对自己的认识密不可分。\n个人潜能评估从自我认知、个性、动机/价值观、思维能力四大方面出发，回答了“我是谁”“我的做事风格”“我追求的价值”三个问题。帮助你探索自己，发挥自我的最大优势。",
      subPreArray:["“自我认知及个体对于自己的看法和评价、包括自信和自尊两方面。表明个体如何看待自己的能力，以及如何看待他人反馈。”",
      "“个性是行为模式的重要影响因素，它决定了一个人行为处事的风格，不同个性的人在行为上有所区别。个性没有好坏，对于工作和生活来说，如何扬长避短，发挥所长，更为重要。”",
      "“动机/价值观是激发行为的深层次心理特质，个性影响的是行为方式，动机/价值观影响的是个体对于人生目标的选择。它代表了你最关注的事和最想实现的目标。”",
      "“人们在工作、学习、生活中每逢遇到问题，总要‘想一想’，这种‘想’，就是思维。思维能力评估了个体收集、加工信息的方式，反映了一个人的决策风格。思维能力是学习能力的核心。”"],
      subContextArray:["结果显示，工作生活中，你不会第一时间肯定自己的能力，你偏爱先行动，取得成果来证明自己。在遇到挑战时，你有时也会怀疑自己的能力，希望他人能够肯定你，有时会显得保守和缺乏活力。",
      "结果显示，你是个灵活的人，你擅长灵活云用规则，尝试新方法。相比严格遵守规则，你更愿意成为规则打破者，将变化和不确定变为机遇。但正因为不重视规则，有可能成为他人眼中的“过分理想者”，请在仰望星空的同时，不要忘记脚踏实地。",
      "“动机/价值观是激发行为的深层次心理特质，个性影响的是行为方式，动机/价值观影响的是个体对于人生目标的选择。它代表了你最关注的事和最想实现的目标。”",
      "“人们在工作、学习、生活中每逢遇到问题，总要‘想一想’，这种‘想’，就是思维。思维能力评估了个体收集、加工信息的方式，反映了一个人的决策风格。思维能力是学习能力的核心。”"],
      suggestion_small_title:["1.增强自信，相信自己",
      "2.走出舒适圈，挑战自我"],
      suggestion_detail:["在遇到困难与挑战时，不要将希望寄托到他人身上，尝试去相信自己的能力，多夸奖自己，从内心获得自我的肯定，结果往往会比你想象的好很多。",
      "你不会拒绝挑战，但是也不会主动去寻找挑战，而倾向于呆在自己的舒适圈内。请更主动地寻求挑战，提升自我的成就感会令你更加自信、强大。"],
    }),
    this.setData({
      subPre:this.data.subPreArray[0],
      subContext:this.data.subContextArray[0]
    })
  },
  choosePart: function(event){
    var col = event.currentTarget.dataset.part;
    var that = this;
    this.setData({
      chosen: col,
      subContext:that.data.subContextArray[col],
      subPre:that.data.subPreArray[col],
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