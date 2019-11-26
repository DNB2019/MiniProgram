// pages/discovery/article/article.js
var api = require('../../../utils/api/discovery_api.js');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    focusFlag:false,
    maskFlag:true,
    commentInput:"",
    articleId: null,
    article: {
      // Title: "文章标题吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼",
      // Author: "作者某某",
      // Tag: "#抑郁症症 #抑郁症症 #抑郁症症",
      // Time: "2019-11-22",
      // Content: "# h1"
    },
    commentList: [
      // {
      //   name:"柏玥",
      //   date:"2018年12月4日",
      //   avatar:"https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png",
      //   comment:"越努力越幸运,DNB!!"
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log('---article onLoad---');
    var that = this;
    var articleId = options.id;
    console.log('articleId' + articleId);
    this.setData({
      articleId: articleId
    })
    api.getArticle({
      articleId
    }).then(data => {
      console.log('Success getArticle:' + data.article.Title);
      console.log('Success getArticle:' + data.article.Tag);
      that.setData({
        article: data.article
        // commentList:data.commentList
      })
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
    });
    var cur_num = this.data.commentList.length;
    api.getComment({
      articleId,
      cur_num
    }).then(data => {
      console.log('Success getComment:' + data.Com_List[0].Content);
      console.log('Success getComment:' + data.Com_List[0].nickName);
      that.setData({
        commentList: data.Com_List
      })
    }).catch(data => {
      console.log('Error in getComment: ' + data.code)
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
  submitComment: function(e) {
    var content = e.detail.value.commentInput;
    console.log("用户提交评论:" + content);
    this.setData({
      commentInput: "",
    });
    var that=this;
    var articleId = this.data.articleId;
    console.log(articleId);
    var openid = app.globalData.openid;
    console.log(openid);
    api.submitComment({
      'articleId': articleId,
      'openid': openid,
      'content': content
    }).then(data => {
      console.log('Success submitComment:' + data.code);
      api.getComment({
        articleId
      }).then(data => {
        console.log('Success getComment:' + data.Com_List[0].Content);
        console.log('Success getComment:' + data.Com_List[0].nickName);
        that.setData({
          commentList: data.Com_List,
          commentValue: "",
        })
      }).catch(data => {
        console.log('Error in getComment: ' + data.code)
      });
    }).catch(data => {
      console.log('Error in submitComment: ' + data.code)
    });
  },
  commentRefresh:function()
  {
    var that=this;
    var articleId=this.data.articleId;
    var cur_num=this.data.commentList.length;
    api.getComment({
      articleId,
      cur_num
    }).then(data => {
      console.log('Success getComment:' + data.Com_List[0].Content);
      console.log('Success getComment:' + data.Com_List[0].nickName);
      var origin=(that.data.commentList).concat(data.Com_List);
      console.log("origin:"+origin);
      console.log("origin:" + origin.length);
      that.setData({
        commentList: origin
      });
      
    });
    // .catch (data => {
    //   console.log('Error in getComment: ' + data.code)
    // });
  },
  // 点击评论的遮罩
  showMask: function () {
    console.log('showMask');
    this.setData(
      {
        maskFlag: false,
        focusFlag:true
      }
    );
    console.log('maskFlag' + this.data.maskFlag);
  },
  back: function () {
    console.log('back');
    this.setData({
      maskFlag: true,
      focusFlag:false
    })
  }
  // 按下按钮，提交评论
  // submitComment: function (e) {
  //   var input = e.detail.value.commentInput;
  //   console.log("用户提交评论" + input);
  //   // console.log('提交用户评论:' + this.data.commentInput);
  //   this.setData({
  //     commentInput: "",
  //   })
  // },
})