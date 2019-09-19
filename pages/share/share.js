// pages/add/add.js
var countclick = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addicon: "../../images/add.png",
    zanicon: '../../images/passage/agree.png',
    zanicon_haver: '../../images/passage/agree_HL.png',
    commenticon: "../../images/passage/comment.png",
    commenticon_haver: "../../images/passage/comment_HL.png",
    shareicon: "../../images/passage/share.png",
    shareicon_haver: "../../images/passage/share_HL.png",
    passage: [{
      id: 0,
      userheaderimg: '../../images/logo.png',
      username: '校园帮',
      type: '快递代拿',
      content: '  有个快递没时间拿，求帮拿一下，有偿\n【菜鸟驿站】您的申通*8183包裹已由岳阳畔湖湾甲区2排4栋5号店免费保管，请18:30前凭“******”及时领取。\n联系驿站1807***2675，\n地址：畔湖湾社区博才幼儿园后门菜鸟驿站。',
      isgood: false,
      inputfocus: false,
      comment: [{

      }],
    },
    {
      id: 1,
      userheaderimg: '../../images/logo.png',
      username: '校园帮',
      type: '校园动态',
      content: '三月，醉一场青春的流年。慢步在三月的春光里，走走停停，看花开嫣然，看春雨绵绵，感受春风拂面，春天，就是青春的流年。青春，是人生中最美的风景。青春，是一场花开的遇见；青春，是一场痛并快乐着的旅行；青春，是一场轰轰烈烈的比赛；青春，是一场鲜衣奴马的争荣岁月；青春，是一场风花雪月的光阴。',
      isgood: false,
      inputfocus: false,
      comment: [{

      }],
    },
      {
        id: 2,
        userheaderimg: '../../images/logo.png',
        username: '校园帮',
        type: '快递代拿',
        content: '  有个快递没时间拿，求帮拿一下，有偿\n【菜鸟驿站】您的申通*8183包裹已由岳阳畔湖湾甲区2排4栋5号店免费保管，请18:30前凭“******”及时领取。\n联系驿站1807***2675，\n地址：畔湖湾社区博才幼儿园后门菜鸟驿站。',
        isgood: false,
        inputfocus: false,
        comment: [{

        }],
      },
      {
        id: 3,
        userheaderimg: '../../images/logo.png',
        username: '校园帮',
        type: '校园动态',
        content: '三月，醉一场青春的流年。慢步在三月的春光里，走走停停，看花开嫣然，看春雨绵绵，感受春风拂面，春天，就是青春的流年。青春，是人生中最美的风景。青春，是一场花开的遇见；青春，是一场痛并快乐着的旅行；青春，是一场轰轰烈烈的比赛；青春，是一场鲜衣奴马的争荣岁月；青春，是一场风花雪月的光阴。',
        isgood: false,
        inputfocus: false,
        comment: [{

        }],
      },
      {
        id: 4,
        userheaderimg: '../../images/logo.png',
        username: '校园帮',
        type: '快递代拿',
        content: '  有个快递没时间拿，求帮拿一下，有偿\n【菜鸟驿站】您的申通*8183包裹已由岳阳畔湖湾甲区2排4栋5号店免费保管，请18:30前凭“******”及时领取。\n联系驿站1807***2675，\n地址：畔湖湾社区博才幼儿园后门菜鸟驿站。',
        isgood: false,
        inputfocus: false,
        comment: [{

        }],
      },
      {
        id: 5,
        userheaderimg: '../../images/logo.png',
        username: '校园帮',
        type: '校园动态',
        content: '三月，醉一场青春的流年。慢步在三月的春光里，走走停停，看花开嫣然，看春雨绵绵，感受春风拂面，春天，就是青春的流年。青春，是人生中最美的风景。青春，是一场花开的遇见；青春，是一场痛并快乐着的旅行；青春，是一场轰轰烈烈的比赛；青春，是一场鲜衣奴马的争荣岁月；青春，是一场风花雪月的光阴。',
        isgood: false,
        inputfocus: false,
        comment: [{

        }],
      },
    ],
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

    return {

      title: '校园帮小程序活动助力',

      path: '/pages/index/index' // 路径，传递参数到指定页面。

    }

  },
  clickadd: function () {
    if (countclick == 0) {
      this.setData(
        {
          addicon: "../../images/addclicked.png",
          showView:true,
        });
      countclick = 1;
    } else {
      this.setData(
        {
          addicon: "../../images/add.png",
          showView:false,
        });
      countclick = 0;
    }
  },
  clickagree: function (e) {
    var oindex = e.currentTarget.dataset.id;
    var oSelected = "passage[" + oindex + "].isgood"; //这里需要将设置的属性用字符串进行拼接
    if (!this.data.passage[oindex].isgood) {
      this.setData({
        [oSelected]: true
      });
      wx.showToast({
        title: "点赞成功",
        icon: 'none',
        duration: 1000
      });
    } else {
      this.setData({
        [oSelected]: false,
      });
      wx.showToast({
        title: "取消点赞",
        icon: 'none',
        duration: 1000
      });
    };
  },
  //以下为搜索框事件
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  toSearch: function () {
    this.setData({
      curPage: 1
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  clickcomment: function (e) {
    var oindex = e.currentTarget.dataset.id;
    var oSelected = "passage[" + oindex + "].inputfocus";
    this.setData({
      [oSelected]: true,
    })
  },
  lostfocus: function (e) {
    var oindex = e.currentTarget.dataset.id;
    var oSelected = "passage[" + oindex + "].inputfocus";
    this.setData({
      [oSelected]: false,
    })
  }
})