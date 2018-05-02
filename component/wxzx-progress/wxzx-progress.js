Component({
  properties: {
    percent: {
      type: [Number, String],
      value: 50
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
    orientation: {
      type: [Number, String],
      value: 'landscape'
      // slider方向 landscape横向 portrait纵向
    },
    portraitOrientation: {
      type: [Number, String],
      value: 'bottom'
      // 纵向方向 top 从上到下 bottom 从下到上
    }
  },
  attached: function () {
    let activeColor = this.data.activeColor;
    if (!!~activeColor.indexOf(',')) {
      this.setData({
        activeLineColor: activeColor.split(',')
      })
    }
  }
})
