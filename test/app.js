//app.js
App({
  onLaunch: function () {
    // wx.showLoading({
    //   title: '加载中',
    // })
    console.log('---app onLaunch---')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var baseUrl=this.globalData.baseUrl;
    var that = this;
    
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let custom = wx.getMenuButtonBoundingClientRect();
        this.globalData.Custom = custom;
        this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
      }
    })
  },
  globalData: {
    userInfo: null,  //用户信息
    baseUrl: 'http://193.112.179.39:5000',
    openid: null,
    StatusBar:null,
    Custom:null,
    CustomBar:null
  }
})