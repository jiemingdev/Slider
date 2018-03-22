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
