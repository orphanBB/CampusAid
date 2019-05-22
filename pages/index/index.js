//index.js
//获取应用实例
const app = getApp()
var countaddclick = 0;
var countzanclick = 0;
//引入SDK核心类
var QQMapWX = require('../../lib/qqmap-wx-jssdk.js');
var qqmapsdk;

Page({
  data: {
    addicon:"../../images/add.png",
    zanicon:"../../images/zan.png",
    address:"正在获取当前位置",
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
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
      type:"wgs84",
      
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
  })
