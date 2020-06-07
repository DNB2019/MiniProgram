// pages/discovery/search/search.js
const app = getApp();

Page({
  data: {
    // CustomBar:app.globalData.CustomBar,
    searchHisList: [],
    hotList: [
      "抑郁症", "拖延", "期末焦虑",
      "宿舍关系", "强迫症", "失眠", "情绪健康", "社交恐惧",
    ],
    inputValue: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('app CustomBar' + app.globalData.CustomBar);
    var list = wx.getStorageSync('communitySearchData');
    this.setData({
      searchHisList: list 
    });
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
  // 将用户搜索内容存入缓存
  setSearchStorage: function(searchInput) {
    let data;
    let localStorageValue = [];
    console.log('searchInput: ' + searchInput);
    if (searchInput != '') {
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('communitySearchData') || [];
      console.log('searchData pre:' + searchData);
      //-1意思是搜索在缓存中没有，放入缓存
      if (searchData.indexOf(searchInput) == -1) {
        console.log('放缓存');
        //放入此次的searchInput
        searchData.push(searchInput);
        wx.setStorageSync('communitySearchData', searchData);
        console.log('searchData after:' + searchData);
        this.setData({
          searchHisList: searchData,
        })
      };
      this.setData({
        inputValue: ""
      })
      //跳转
      wx.navigateTo({
        url: '../searchRes/searchRes?searchData=' + searchInput
      })
    } else {
      console.log('空白的！')
    }
    // this.onLoad();
  },
  searchClick: function(e) {
    var input = e.detail.value;
    console.log('用户搜索输入了:' + input);
    // 存入缓存并跳转
    this.setSearchStorage(input);
  },
  deleteClick: function() {
    var searchNull = [];
    var now = wx.getStorageSync('communitySearchData');
    console.log('当前搜索记录:' + now);
    wx.setStorageSync('communitySearchData', searchNull);
    console.log('清空后搜索记录:' + wx.getStorageSync('communitySearchData'));
    this.setData({
      searchHisList: []
    });
  },
  historyClick: function(e) {
    //跳转
    console.log('history click:' + e.currentTarget.dataset.history)
    wx.navigateTo({
      url: '../searchRes/searchRes?searchData=' + e.currentTarget.dataset.history
    })
  }
})