// pages/discovery/search/search.js
Page({
  data: {
    searchHisList:[
      {
        tagName:'標簽名稱'
      },
      {
        tagName: '標簽名稱'
      },
      {
        tagName: '標簽名稱'
      },
      {
        tagName: '標簽名稱'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  setSearchStorage: function (searchInput) {
    console.log('setSearchStorage');
    let data;
    let localStorageValue = [];
    console.log('searchInput'+searchInput)
    if (searchInput != '') {
    //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(searchInput)
      wx.setStorageSync('searchData', searchData)
      wx.navigateTo({
        url: '../article-li/article-li'
      })
    } else {
      console.log('空白的！')
    }
    // this.onLoad();
  },
  searchClick: function (e) {
    console.log(e.detail.value);
    var input=e.detail.value.searchInput;
    console.log('input:'+input);
    this.setSearchStorage(input);
  }
})