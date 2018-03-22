// pages/slider/slider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 点击slider时调用
  sliderTap: function (e) {
    console.log("sliderTap")
  },

  // 开始滑动时
  sliderStart: function (e) {
    console.log("sliderStart")
  },

  // 正在滑动
  sliderChange: function (e) {
    console.log("sliderChange")
  },

  // 滑动结束
  sliderEnd: function (e) {
    console.log("sliderEnd")
  },

  // 滑动取消 （左滑时滑到上一页面或电话等情况）
  sliderCancel: function (e) {
    console.log("sliderCancel")
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