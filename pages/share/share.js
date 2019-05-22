// pages/add/add.js
var countclick = 0;
var countzanclick = 0;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    addicon: "../../images/add.png",
    zanicon: "../../images/zan.png",
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
  clickzan: function () {
    if (countzanclick == 0) {
      this.setData(
        {
          zanicon: "../../images/zan_HL.png",
        });
      countzanclick = 1;
    } else {
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
})