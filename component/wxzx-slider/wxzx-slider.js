function getSystemScreenRatio() {
  var res = wx.getSystemInfoSync();
  return 750 / res.screenWidth
}
Component({
  properties: {
    percent: {
      type: [Number, String],
      value: 0
    },
    width: {
      type: [Number, String],
      value: 700
    },
    strokeWidth: {
      type: [Number, String],
      value: 10
    },
    activeColor: {
      type: [String, Array],
      value: '#FFFAF0, #ff6600'
    },
    bufferColor: {
      type: String,
      value: '#949494'
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
    sliderLeft: {
      type: [Number, String],
      value: 0
    }
  },
  data: {
    screenRatio: 0
  },
  attached: function () {
    let activeColor = this.data.activeColor;
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

    this.setData({ screenRatio: getSystemScreenRatio() })
  },
  methods: {
    sliderTap: function (e) {
      if (!this.data.disabled) {
        var that = this
        var changedTouches = e.changedTouches[0];
        var pageX = changedTouches.pageX;
        var value = this.data.max * ((pageX * this.data.screenRatio - this.data.sliderLeft) / this.data.width)
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
        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderStart', detail, option);
      }
    },
    sliderChange: function (e) {
      if (!this.data.disabled) {
        var changedTouches = e.changedTouches[0];
        var pageX = changedTouches.pageX;
        // 计算当前值
        var value = this.data.max * ((pageX * this.data.screenRatio - this.data.sliderLeft) /  this.data.width) 
        // 超出边界时
        if (value < 0 || value > this.data.max) {
          return
        }
        this.setData ({ value: value })
        let detail = e.changedTouches;
        let option = {};
        this.triggerEvent('sliderChange', detail, option);
      }
    },
    sliderEnd: function (e) {
      if (!this.data.disabled) {
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
