// pages/discovery/article/article.js
var api = require('../../../utils/api/discovery_api.js');
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    refreshFlag:0,
    loadFlag: false,
    focusFlag: false,
    maskFlag: true,
    creativeFlag: 1, //点亮是0
    favorFlag: 1,
    forwardFlag: false,
    commentInput: "",
    Watches: 0,
    Likes: 0,
    Transmit:0,
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
    ],
    userInfo: app.globalData.userInfo
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.showLoading({
      title: '加载中',
    });
    this.setData({
      userInfo: app.globalData.userInfo
    })
    console.log('---article onLoad---');
    var that = this;
    var articleId = options.id;
    console.log('展示的文章articleId' + articleId);
    this.setData({
      articleId: articleId
    })
    //获取文章
    api.getArticle({
      articleId
    }).then(data => {
      console.log('Success getArticle:' + data.article.Title);
      console.log('Success getArticle:' + data.article.Tag);
      that.setData({
        article: data.article,
        loadFlag: true,
        Watches: data.article.Watches,
        Likes: data.article.Likes,
        Transmit:data.article.Transmit
        // commentList:data.commentList
      });
      wx.hideLoading();
    }).catch(data => {
      console.log('Error in get greeting: ' + data.code)
    });
    //获取评论
    var cur_num = this.data.commentList.length;
    api.getComment({
      articleId,
      cur_num
    }).then(data => {
      if ((data.Com_List).length != 0) {
        console.log('Success getComment:' + data.Com_List[0].Content);
        console.log('Success getComment:' + data.Com_List[0].nickName);
        that.setData({
          commentList: data.Com_List
        })
      }
    });
    // .catch(data => {
    //   console.log('Error in getComment: ' + data.code)
    // });

    //获取是否点亮、收藏
    api.getFavorCollect(
      {
        "id": this.data.articleId,
        'user_id': app.globalData.openid,
        'tag': "A"
      }
    ).then(data=>{
      if (data.code == 0) {
        console.log('获取点亮、收藏');
        console.log('是否点亮:'+data.if_favor);
        console.log('是否收藏:' + data.if_collect);
        that.setData(
          {
            creativeFlag: data.if_favor, //点亮是0
            favorFlag: data.if_collect
          }
        )
      }
      else
      {
        console.log('获取点亮、收藏失败')
      }
    })
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
    //评论为空
    if (content.length == 0) {
      wx.showModal({
        title: '发送失败',
        content: '评论不能为空',
        showCancel: false,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    } else if (content.length < 120) {
      console.log("用户提交评论:" + content);
      this.setData({
        commentInput: "",
      });
      var that = this;
      var articleId = this.data.articleId;
      var openid = app.globalData.openid;
      api.submitComment({
        'articleId': articleId,
        'openid': openid,
        'content': content
      }).then(data => {
        console.log('Success submitComment:' + data.code);
        var newComment = {
          'nickName': this.data.userInfo.nickName,
          'Time': '刚刚',
          'Content': content,
          'avatarUrl': this.data.userInfo.avatarUrl
        }
        var newList = [newComment];
        var oldList = this.data.commentList;
        that.setData({
          commentList: newList.concat(oldList)
        });
        wx.showToast({
          title: '发送成功',
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        });
      })
      // .catch(data => {
      //   console.log('Error in submitComment: ' + data.code)
      // });
    } else {
      wx.showModal({
        title: '发送失败',
        content: '评论最多120字',
        showCancel: false,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }
  },
  //上拉获取更多评论
  commentRefresh: function() {
    var that = this;
    var articleId = this.data.articleId;
    var cur_num = this.data.commentList.length;
    if(this.data.refreshFlag==0){
      this.setData(
        {
          refreshFlag:1
        }
      )
    api.getComment({
      articleId,
      cur_num //当前评论数
    }).then(data => {
      if (data.Com_List.length != 0) {
        console.log('Success getComment:' + data.Com_List[0].Content);
        console.log('Success getComment:' + data.Com_List[0].nickName);
        var origin = (that.data.commentList).concat(data.Com_List);
        console.log("新评论列表长度:" + origin.length);
        that.setData({
          commentList: origin,
          refreshFlag:0
        });
      } else {
        console.log("没有更多评论了")
      }
    });
  }
  else{
    console.log("上次刷新还没结束");
  }
    // .catch (data => {
    //   console.log('Error in getComment: ' + data.code)
    // });
  },
  // 点击评论的遮罩
  showMask: function() {
    console.log('showMask');
    this.setData({
      maskFlag: false,
      focusFlag: true
    });
    console.log('maskFlag' + this.data.maskFlag);
  },
  // 从评论框返回界面
  back: function() {
    console.log('back');
    this.setData({
      maskFlag: true,
      focusFlag: false
    })
  },
  //点亮文章
  catchCreative: function() {
    console.log('用户点亮');
    this.setData({
      creativeFlag: !this.data.creativeFlag
    });
    api.favorArticle({
      "id": this.data.articleId,
      'user_id': app.globalData.openid,
      'operate_code': this.data.creativeFlag,//0是插入，1是删除，creativeFlag：0是点亮，1是取消
      'tag': "A"
    }).then(data => {
      if (data.code == 0) {
        console.log('成功点亮')
      }
    })
  },
  //收藏文章
  catchFavor: function() {
    console.log('用户收藏');
    this.setData({
      favorFlag: !this.data.favorFlag
    });
    api.collectArticle({
      "id": this.data.articleId,
      'user_id': app.globalData.openid,
      'operate_code': this.data.favorFlag,
      'tag':"A"
    }).then(data => {
      if (data.code == 0) {
        console.log('成功收藏')
      }
    })
  },
  catchForward: function() {
    console.log('用户转发');
  }
})