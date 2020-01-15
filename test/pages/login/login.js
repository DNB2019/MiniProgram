var app = getApp();
const baseUrl = app.globalData.baseUrl;
var openid;
Page({
  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //登录
    var p = new Promise(function (resolve, reject) {
      var flag = false;
      wx.login({
        success: res => {
          console.log('wx.login code:' + res.code)
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
          wx.request({
            url: baseUrl + '/OpenID',
            data: {
              code: res.code
            },
            method: "POST",
            header: {
              'content-type': 'application/json'
            },
            success: (res) => {
              console.log('wx.login get openid：',res.data)
              app.globalData.openid = res.data.openid;
              openid=res.data.openid;
            }
          })
          flag = true;
          console.log('获取openid flag', flag);
          if (flag) {
            resolve();
          } else {
            reject();
          }
        }
      })
    });
    p.then(function (data) {
      // 获取用户设置
      wx.getSetting({
        success: res => {
          console.log('用户是否授权？:' ,res.authSetting['scope.userInfo'])
          if (res.authSetting['scope.userInfo']) {
              // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                app.globalData.userInfo = res.userInfo
                console.log('已授权，成功获取用户信息:' , res.userInfo);
                //插入登录的用户的相关信息到数据库
                wx.request({
                  url: baseUrl + '/UsrInfo', //开发者服务器接口
                  data: { //请求的参数(要插入到数据库的数据)
                    openid: openid,
                    nickName: res.userInfo.nickName,
                    avatarUrl: res.userInfo.avatarUrl,
                    province: res.userInfo.province,
                    city: res.userInfo.city,
                    gender: res.userInfo.gender
                  },
                  method: "POST",
                  header: {
                    'content-type': 'application/json'
                  },
                  //接口调用成功的回调函数
                  success: function (res) {
                    //从数据库获取用户信息
                    console.log('插入用户信息' , res.data.code)
                    if (res.data.code == 1) {
                      console.log("插入小程序登录用户信息失败！");
                    } else {
                      console.log("插入小程序登录用户信息成功！");
                    }
                  }
                });
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                // if (this.userInfoReadyCallback) {
                // console.log('userInfoCallback')
                // this.userInfoReadyCallback(res) //res是getUserInfo的返回值
                // }
                //跳转至首页
                console.log('---login switch to home---')
                wx.switchTab({
                  url: '/pages/home/main/main',
                })
              }
            })
          } else {
            console.log('用户未曾授权')
            //跳转至授权界面
            console.log('---login switch to index---')
            wx.navigateTo({
              url: '/pages/index/index',
            })
          }
        }
      })
    });

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