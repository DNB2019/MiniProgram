var app = getApp();
const baseUrl = app.globalData.baseUrl;
//登录
var p = new Promise(function(resolve, reject) {
      var flag = false;
      wx.login({
        success: res => {
          console.log('wx.login:' + res.code)
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
              console.log('wx.login:get openid')
              console.log(res.data)
              app.globalData.openid = res.data.openid;
            }
          })
          flag = true;
          console.log('flag' + flag);
          if (flag) {
            resolve();
          } else {
            reject();
          }
        }
      })   
    });
    p.then(function(data) {
      // 获取用户设置
      wx.getSetting({
        success: res => {
          console.log('获取用户设置:' + res.authSetting['scope.userInfo'])
          if (res.authSetting['scope.userInfo']) {
            console.log('用户已授权')
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                app.globalData.userInfo = res.userInfo
                console.log('login的函数成功获取用户信息:' + res.userInfo);
                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                // if (this.userInfoReadyCallback) {
                //   console.log('userInfoCallback')
                //   this.userInfoReadyCallback(res) //res是getUserInfo的返回值
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
            //跳转至首页
            console.log('---login switch to index---')
            wx.navigateTo({
              url: '/pages/index/index',
            })
          }
        }
      })
    });