// pages/newslider/newslider.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.wxzxSlider1 = this.selectComponent("#wxzxSlider1");
    this.wxzxSlider2 = this.selectComponent("#wxzxSlider2");
    this.wxzxSlider3 = this.selectComponent("#wxzxSlider3");
    this.wxzxSlider4 = this.selectComponent("#wxzxSlider4");
    this.wxzxSlider5 = this.selectComponent("#wxzxSlider5");
    this.wxzxSlider6 = this.selectComponent("#wxzxSlider6");
  },

  // 点击slider时调用
  sliderTap: function (e) {
    console.log(e)
    this.consoleValue(e)
  },

  // 开始滑动时
  sliderStart: function (e) {
    // console.log(e)
  },

  // 正在滑动
  sliderChange: function (e) {
    // console.log(e)
  },

  // 滑动结束
  sliderEnd: function (e) {
    console.log(e)
    this.consoleValue(e)
  },

  // 滑动取消 （左滑时滑到上一页面或电话等情况）
  sliderCancel: function (e) {
    console.log(e)
    this.consoleValue(e)
  },

  consoleValue: function (e) {
    if (e.currentTarget.id == 'wxzxSlider1') {
      console.log("slider1 value = " + this.wxzxSlider1.properties.value)
    } else if (e.currentTarget.id == 'wxzxSlider2') {
      console.log("slider2 value = " + this.wxzxSlider2.properties.value)
    } else if (e.currentTarget.id == 'wxzxSlider3') {
      console.log("slider3 value = " + this.wxzxSlider3.properties.value)
    } else if (e.currentTarget.id == 'wxzxSlider4') {
      console.log("slider4 value = " + this.wxzxSlider4.properties.value)
    } else if (e.currentTarget.id == 'wxzxSlider5') {
      console.log("slider5 value = " + this.wxzxSlider5.properties.value)
    } else if (e.currentTarget.id == 'wxzxSlider6') {
      console.log("slider6 value = " + this.wxzxSlider6.properties.value)
    }
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