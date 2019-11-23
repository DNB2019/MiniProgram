//pages/index/index.js
const app = getApp();
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),  //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    userInfo: app.globalData.userInfo, //用户信息
    showbtn:false
  },
  //加载后，看用户是否已经授权过
  onLoad: function () {
    console.log('---index onLoad---')
    if (app.globalData.userInfo) {
      console.log('Had userInfo')
      this.setData(
        {
          userInfo: app.globalData.userInfo
        }
      )
      console.log('index userInfo'+this.data.userInfo)
      console.log('index switch home')
      wx.switchTab({
        url: '/pages/home/main/main',
      })
    }else if(this.data.canIUse){
      console.log('callback')
      app.userInfoReadyCallback = res => {
        console.log('callback res:'+res.userInfo)
        this.setData({
          userInfo: res.userInfo,
        })
      }
      //callback成功获得userInfo
      if(this.userInfo)
      {
        console.log('callback成功获得userInfo,跳转')
        wx.switchTab({
          url: '/pages/home/main/main',
        })
      }
      else {
        console.log('需要用户点击按钮')
        wx.hideLoading()
        this.setData({showbtn:true})
      }
    }
  },
  //初次，授权登录
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      console.log('用户允许授权')
      app.globalData.userInfo = e.detail.userInfo
      this.setData({ userInfo: e.detail.userInfo });
      var baseUrl=app.globalData.baseUrl
      var that = this;
      //插入登录的用户的相关信息到数据库
      wx.request({
        url: baseUrl + '/UsrInfo', //开发者服务器接口
        data: {//请求的参数(要插入到数据库的数据)
          openid: getApp().globalData.openid,
          nickName: e.detail.userInfo.nickName,
          avatarUrl: e.detail.userInfo.avatarUrl,
          province: e.detail.userInfo.province,
          city: e.detail.userInfo.city
        },
        method: "POST",
        header: {
          'content-type': 'application/json'
        },
        //接口调用成功的回调函数
        success: function (res) {
          //从数据库获取用户信息
          console.log('success ' + res.data.code)
          if(res.data.code==1){
            console.log("插入小程序登录用户信息失败！");
          }
          else{
            console.log("插入小程序登录用户信息成功！");
          }
        },
        fail: function (res) {
          console.log(res.data);
          console.log('fail');
        }
      });
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/home/main/main'
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
})

