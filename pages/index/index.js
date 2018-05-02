Page({
  data: {
   
  },

  gotoProgress: function (e) {
    wx.navigateTo({
      url: '../progress/progress',
    })
  },
  

  gotoSlider: function (e) {
    wx.navigateTo({
      url: '../slider/slider',
    })
  },

  gotoAudio: function (e) {
    wx.navigateTo({
      url: '../audio/audio',
    })
  },

  gotoNewAudio: function () {
    wx.navigateTo({
      url: '../newslider/newslider'
    })
  }
})
