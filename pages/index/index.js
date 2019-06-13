//index.js
//获取应用实例
const app = getApp()
var countaddclick = 0;
var countzanclick = 0;
//引入SDK核心类
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;
var lat;
var lon;

Page({
  data: {
    addicon:"../../images/add.png",
    zanicon:"../../images/zan.png",
    address:"正在获取当前位置",
    imgUrls: [
      'https://i.loli.net/2019/06/06/5cf8f2a0eb10c64658.jpg',
      'https://i.loli.net/2019/06/06/5cf8f374229f244773.jpg',
      'https://i.loli.net/2019/06/06/5cf8f37d60a8752721.jpg',
      'https://i.loli.net/2019/06/06/5cf8f460a3a9589792.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
    var that = this,
    // 实例化腾讯地图API核心类
    qqmapsdk = new QQMapWX({
      key: '3AZBZ-PLX6V-7VNPT-UIJI7-TJ6I6-Q6FQU' // 必填
    });
    
    //1、获取当前位置坐标
    wx.getLocation({
      type:"gcj02",
      success: function (res) {
        //2、根据坐标获取当前位置名称，显示在顶部:腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            console.log(address);
            that.setData({
              address:address
            })
          }
        })
      }
    })
  },
  nearby_search: function () {
    var _this = this;
    // 调用接口
    qqmapsdk.search({
      keyword: '学校',  //搜索关键词
      location: '39.980014, 116.313972',  //设置周边搜索中心点
      success: function (res) { //搜索成功后的回调
        var mks = []
        for (var i = 0; i < res.data.length; i++) {
          mks.push({ // 获取返回结果，放到mks数组中
            title: res.data[i].title,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: "/resources/my_marker.png", //图标路径
            width: 20,
            height: 20
          })
          console.log(mks);
        }
      },
      fail: function (res) {
        console.log(res);
      },
      complete: function (res) {
        console.log(res);
      }
    })
  },
  clickadd:function () {
    if (countaddclick == 0) {
      this.setData(
        {
          addicon: "../../images/addclicked.png",
          showView: true,
        });
      countaddclick = 1;
    } else {
      this.setData(
        {
          addicon: "../../images/add.png",
          showView: false,
        });
      countaddclick = 0;
    }
  },
  clickzan: function () {
    if(countzanclick==0)
    {
      this.setData(
        {
          zanicon: "../../images/zan_HL.png",
        });
      countzanclick = 1;
    }else{
      this.setData(
        {
          zanicon: "../../images/zan.png", 
        });
      countzanclick = 0;
    }
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
  //轮播图
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },//轮播图结束
  gotodaina: function () {
    wx.navigateTo({
      url: "../../pages/daina/daina"
    })
  },
  gotojianzhi: function () {
    wx.navigateTo({
      url: "../../pages/jianzhi/jianzhi"
    })
  },
  gotoershou: function () {
    wx.navigateTo({
      url: "../../pages/ershou/ershou"
    })
  },
  gotodongtai: function () {
    wx.navigateTo({
      url: "../../pages/dongtai/dongtai"
    })
  },
  gotohuodong: function () {
    wx.navigateTo({
      url: "../../pages/huodong/huodong"
    })
  },
  gotofindlost: function () {
    wx.navigateTo({
      url: "../../pages/findlost/findlost"
    })
  },
  gototixing: function () {
    wx.navigateTo({
      url: "../../pages/tixing/tixing"
    })
  },
  gotoshetuan: function () {
    wx.navigateTo({
      url: "../../pages/shetuan/shetuan"
    })
  },
  todetailstap: function () {
    wx.navigateTo({
      url: "../../pages/detailstap/detailstap"
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
