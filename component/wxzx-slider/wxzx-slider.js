function getSystemScreenRatio() {
  var res = wx.getSystemInfoSync();
  return 750 / res.screenWidth
}
Component({
  properties: {
    percent: {
      type: [Number, String],
      value: 100
    },
    width: {
      type: [Number, String],
      value: 700
    },
    strokeWidth: {
      type: [Number, String],
      value: 6
    },
    activeColor: {
      type: [String, Array],
      value: '#FFFAF0, #ff6600'
    },
    bufferColor: {
      type: String,
      value: '#00' 
      // 默认为无色
    },
    backgroundColor: {
      type: String,
      value: '#e5e5e5'
    },
    radius: {
      type: [Number, String],
      value: 5
    },
    blockSrc: {
      type: String,
      value: null
    },
    blockSize: {
      type: [Number, String],
      value: 40
    },
    blockColor: {
      type: String,
      value: '#FFFFFF'
    },
    value: {
      type: [Number, String],
      value: 0
    },
    max: {
      type: [Number, String],
      value: 100
    },
    disabled: {
      type: Boolean,
      value: false
    },
    isCustom: {
      type: Boolean,
      value: false
    },
    blockImageWidth: {
      type: [Number, String],
      value: 0
    },
    blockImageHeight: {
      type: [Number, String],
      value: 0
    },
    orientation: {
      type: [Number, String],
      value: 'landscape' 
      // slider方向 landscape横向 portrait纵向
    },
    isMonitoring: {
      type: Boolean,
      value: true
    }
  },
  data: {
    screenRatio: 0,
    sliderStartX: 0,
    sliderStartY: 0,
    startValue: 0,
    portraitOrientation: 'bottom',
    clickEnlargeSize: 60
  },
  attached: function () {
    let activeColor = this.data.activeColor;
    var that = this
    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      })
    }
    let blockSize = this.data.blockSize;
    if (blockSize > 40) {
      this.setData({
        blockSize: 40
      })
    } else if (blockSize < 20) {
      this.setData({
        blockSize: 20
      })
    }
    this.setData({ screenRatio: getSystemScreenRatio(), strokeWidth: Number(this.data.strokeWidth) })
  },
  methods: {
    sliderTap: function (e) {
      if (!this.data.disabled) {
        var that = this
        var changedTouches = e.changedTouches[0];
        var value = 0
        if (this.data.orientation == 'landscape') {
          value = this.data.max * ((changedTouches.pageX - e.currentTarget.offsetLeft) * this.data.screenRatio / this.data.width)
        } else {
          value = this.data.max * ((this.data.width - (changedTouches.pageY - e.currentTarget.offsetTop) * this.data.screenRatio) / this.data.width)
        }
    
        // 超出边界时
        if (value < 0 || value > this.data.max) {
          return
        }
        if (this.data.percent <= value / this.data.max * 100) {
          this.setData({ value: that.data.percent * that.data.max / 100 })
        } else {
          this.setData({ value: value })
        }

        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderTap', detail, option);
      }
    },
    sliderStart: function (e) {
      if (!this.data.disabled) {
        var that = this
        let detail = e.changedTouches;
        let option = {};
        var changedTouches = e.changedTouches[0];
        this.setData({ isMonitoring: false })
        if (this.data.sliderStartX == 0) {
          this.setData({ sliderStartX: changedTouches.pageX })
        }
        if (this.data.sliderStartY == 0) {
          this.setData({ sliderStartY: changedTouches.pageY })
        }
        if (this.data.startValue == 0) {
          var startValue = this.data.value
          this.setData({ startValue: startValue })
        }
        this.triggerEvent('sliderStart', detail, option);
      }
    },
    sliderChange: function (e) {
      if (!this.data.disabled) {
        var changedTouches = e.changedTouches[0];
        // 当前相对值

        var value = 0
        if (this.data.orientation == 'landscape') {
          value = (changedTouches.pageX - this.data.sliderStartX) * this.data.screenRatio / this.data.width * this.data.max + Number(this.data.startValue)
        } else {
          value = (this.data.sliderStartY - changedTouches.pageY) * this.data.screenRatio / this.data.width * this.data.max + Number(this.data.startValue)
        }        
        // 超出边界时
        if (value < 0) {
          value = 0
        }
        if(value > this.data.max) {
          value = this.data.max
        }
        this.setData ({ value: value })
        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderChange', detail, option);
      }
    },
    sliderEnd: function (e) {
      if (!this.data.disabled) {
        this.setData({ isMonitoring: true })
        var that = this
        // 如果拉动的幅度比缓冲的值大，则调到缓冲值处播放
        if (this.data.percent <= this.data.value / this.data.max * 100) {
          this.setData({ value: that.data.percent * that.data.max / 100})
        }
        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderEnd', detail, option);
      }
    },
    sliderCancel: function (e) {
      if (!this.data.disabled) {
        var that = this
        this.setData({ isMonitoring: true })
        if (this.data.percent <= this.data.value / this.data.max * 100) {
          this.setData({ value: that.data.percent * that.data.max / 100 })
        }
        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderCancel', detail, option);
      }
    },
  }
})
