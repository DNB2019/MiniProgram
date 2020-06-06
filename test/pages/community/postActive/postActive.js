// pages/community/postActive.js
const app = getApp();
var util = require('../../../utils/util.js')
var api = require('../../../utils/api/community_api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeValue:"",
    userInfo: app.globalData.userInfo,
    tag_dic:{1:"倾诉港湾",2:"学业压力",3:"人际交往",4:"正能量供应站",5:"抑郁焦虑",6:"恋爱情感",7:"发展规划",8:"家庭关系"},
    alter_on: 0,
    chosen_tag:-1,
    tag_list: [],
    tempFilePaths:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo,
      tag_list: [{
        id:0,
        name: "倾诉港湾",
        color:"#b2b2b2",
      }, {
        id:1,
        name: "学业压力",
        color:"#b2b2b2",
      }, {
        id:2,
        name: "人际交往",
        color:"#b2b2b2",
      }, {
        id:3,
        name: "正能量供应站",
        color:"#b2b2b2",
      }, {
        id:4,
        name: "抑郁焦虑",
        color:"#b2b2b2",
      }, {
        id:5,
        name: "恋爱情感",
        color:"#b2b2b2",
      }, {
        id:6,
        name: "发展规划",
        color:"#b2b2b2",
      }, {
        id:7,
        name: "家庭关系",
        color:"#b2b2b2",
      }]
    })
  },
  switchChange: function () {
    var on = this.data.alter_on;
    // console.log("on",on);
    this.setData({
      alter_on: !on
    })
  },
  chosenTag:function(event){
    let id = event.currentTarget.dataset.id;
    var that = this;
    id = parseInt(id);
    console.log("idis",id);
    let temp = 'tag_list['+id+'].color';
    let temp2 = 'tag_list['+that.data.chosen_tag+'].color';
    if(that.data.chosen_tag == -1){
      that.setData({
        chosen_tag :id,
        [temp]:"#66cccc",
      })
    }
    else{
      that.setData({
        chosen_tag :id,
        [temp]:"#66cccc",
        [temp2]:"b2b2b2",
      })
    }
  },
  post:function(e)
  {
    var that=this;
    var Content=e.detail.value.active;
    console.log("content",Content);
    var user_id=app.globalData.openid;
    var Area=0;
    var Tag="倾诉港湾";
    var Noname=!this.data.alter_on;//0是匿名
    var Images="";
    console.log("images",Images);
    api.postActive({
      user_id,
      Noname,
      Area,
      Images,
      Content,
      Tag
    }).then(data => {
      if(data.code==0){
        wx.showToast({
          title: '发送成功',
        })
        that.setData(
          {
            activeValue:""
          }
        )
      } 
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
    })
  },
  chooseImage: function () {
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log("tempFilePaths", tempFilePaths);
        _this.setData({
          tempFilePaths: res.tempFilePaths
        });
        var tempFilePaths = res.tempFilePaths
        console.log("tempFilePaths", tempFilePaths );
        // wx.uploadFile({
        //   url: 'http://222.200.181.65:5000/static/img/user/'+app.globalData.openid+'file', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     console.log("res",res.data)
        //     var data = res.data
        //     //do something
        //   }
        // });
      }
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