//app.js
App({
  onLaunch: function () {
    wx.showLoading({
      title: '加载中',
    })
    console.log('app onLaunch')
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
    var that = this;
    //登录
    wx.login({
      success: res => {
        console.log('wx.login:' + res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: that.globalData.baseUrl + '/OpenID',
          data: { code: res.code },
          method: "POST",
          header: {
            'content-type': 'application/json'
          },
          success: (res) => {
            console.log('wx.login:get openid')
            console.log(res.data)
            this.globalData.openid = res.data.openid;
          }
        })
      }
    }
    )
    // 获取用户信息
    wx.getSetting({
      success: res => {
        console.log('here:'+res.authSetting['scope.userInfo'])
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('get userInfo:'+res.userInfo);
              //跳转至首页
              console.log('app switch to home')
              wx.switchTab({
                url: '/pages/home/main/main',
              })
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    }),
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
    baseUrl: 'http://172.20.10.10:5000',
    openid: null
  }
})