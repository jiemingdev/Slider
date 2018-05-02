// pages/audio/audio.js
const audioManager = wx.getBackgroundAudioManager()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: 0, 
    percent: 0,
    max: 401,
    pass_time: '00:00',
    total_time: '06:41',
    pause: '暂停',
    pause_disable: true
  },

  secondTransferTime: function (time) {
    if (time > 3600) {
      return [
        parseInt(time / 60 / 60),
        parseInt(time / 60 % 60),
        parseInt(time % 60)
      ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
    } else {
      return [
        parseInt(time / 60 % 60),
        parseInt(time % 60)
      ]
        .join(":")
        .replace(/\b(\d)\b/g, "0$1");
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.wxzxSlider = this.selectComponent("#wxzxSlider");
    audioManager.onTimeUpdate (function () {
      if (!that.wxzxSlider.properties.isMonitoring) {
        return
      }
      var currentTime = audioManager.currentTime.toFixed(0);
      if (currentTime > that.data.max) {
        currentTime = that.data.max;
      }
      var pass_time = that.secondTransferTime(currentTime);

      that.setData({
        value: currentTime,
        pass_time: pass_time,
        percent: audioManager.buffered / audioManager.duration * 100,
        disabled: false
      })
    })

    audioManager.onWaiting (function () {
      that.setData ({ disabled: true })
    })

    audioManager.onEnded (function () {
      that.setData({
        pause: '暂停',
        pause_disable: true,
        value: 0,
        pass_time: '00:00',
        percent: 0,
        disabled: true
      })
    })
  },

  // 点击slider时调用
  sliderTap: function (e) {
    console.log("sliderTap")
    this.seek()
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
    this.seek()
  },

  // 滑动取消 （左滑时滑到上一页面或电话等情况）
  sliderCancel: function (e) {
    console.log("sliderCancel")
    this.seek()
  },

  seek: function () {
    var value = this.wxzxSlider.properties.value
    console.log(value)
    var seek_time = value.toFixed(0);
    var pass_time = this.secondTransferTime(seek_time);
    this.setData({
      pass_time: pass_time,
    })
    audioManager.seek(Number(seek_time));
  },

  start: function () {
    audioManager.title = '此时此刻'
    audioManager.epname = '此时此刻'
    audioManager.singer = '许巍'
    audioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    audioManager.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'
    this.setData({ pause: '暂停', pause_disable: false })
  },

  pause: function (e) {
    if (audioManager.paused) {
      audioManager.play()
      this.setData({ pause: '暂停'})
    } else {
      audioManager.pause()
      this.setData({ pause: '播放' })
    }
  },

  stop: function () {
    audioManager.stop()
    this.setData({
      pause: '暂停', 
      pause_disable: true,
      value: 0,
      pass_time: '00:00',
      percent: 0,
      disabled: true 
    })
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

  
})