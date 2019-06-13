// pages/mine/mine.js
//获取应用实例
const app = getApp()
var countclick = 0;

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    addicon: "../../images/add.png",
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
  gotomypublish: function () {
    wx.navigateTo({
      url: "../../pages/mypublish/mypublish"
    })
  },
  gotomytask: function () {
    wx.navigateTo({
      url: "../../pages/mytask/mytask"
    })
  },
  gotomycollect: function () {
    wx.navigateTo({
      url: "../../pages/mycollect/mycollect"
    })
  },
  gotomypurse: function () {
    wx.navigateTo({
      url: "../../pages/mypurse/mypurse"
    })
  },
  gotouserconfirm: function () {
    wx.navigateTo({
      url: "../../pages/userconfirm/userconfirm"
    })
  },
  gotosetting: function () {
    wx.navigateTo({
      url: "../../pages/setting/setting"
    })
  },
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '此功能暂未开放',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }  
})