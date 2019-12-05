// pages/test/main/main.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/discovery_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue: '',
    swiperList: [{
      id: 0,
      type: 'image',
      url: '/images/test/test.png'
      // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
    }, {
      id: 1,
      type: 'image',
      url: '/images/test/test.png'
      // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
    }, {
      id: 2,
      type: 'image',
      url: '/images/test/test.png'
      // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
    }, {
      id: 3,
      type: 'image',
      url: '/images/test/test.png'
    }, {
      id: 4,
      type: 'image',
      url: '/images/test/test.png'
      // url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
    }],
    Item_List: [{ url: '/images/test/recommand.png', sentence: 'test' }, { url: '/images/test/test.png', sentence: 'test1' }, { url: '/images/test/recommand.png', sentence: 'test2' }, { url: '/images/test/test.png', sentence: 'test3' }, { url: '/images/test/recommand.png', sentence: 'test4' }, { url: '/images/test/test.png', sentence: 'test5' }, { url: '/images/test/recommand.png', sentence: 'test' }, { url: '/images/test/test.png', sentence: 'test1' }],
    iconList: [{ url: '/images/test/icon/1.jpg', sentence: '健康', id: 1 }, { url: '/images/test/icon/2.jpg', sentence: '情感', id: 2 }, { url: '/images/test/icon/3.jpg', sentence: '人际', id: 3 }, { url: '/images/test/icon/4.jpg', sentence: '能力', id: 4 }, { url: '/images/test/icon/5.jpg', sentence: '性格', id: 5 }, { url: '/images/test/icon/6.jpg', sentence: '发展', id: 6 }],
    iconcur: 1,
    testList: [{ url: '/images/test/test.png', id: 1 }, { url: '/images/test/test.png', id: 2 }, { url: '/images/test/test.png', id: 3 }],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('---test onLoad---');

    var that = this;
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
    // for(var i=0;i<6;i++) console.log(this.iconList[i].chosen);
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
  
  getSearch: function () {
    console.log('跳转到搜索页面')
    wx.navigateTo({
      url: '../search/search',
    })
  },
  getRecord: function () {
    console.log('跳转到心理档案')
    wx.switchTab({
      url: '/pages/me/main/main',
      // url: '/pages/discovery/search/search',
    })
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  Dochoice: function (e) {
    // var that =this;
    // that.iconcur=e.currentTarget.id;
    // this.data.iconcur=e.currentTarget.id;
    this.setData({ iconcur: e.currentTarget.id });
    console.log("iconcur is " + this.data.iconcur);
    wx.pageScrollTo({ scrollTop: 380, duration: 300 });
    console.log(e);
  }

})