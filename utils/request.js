var request = {
  get: function(opt){
    opt.data = opt.data || {
      count: 10
    }
    opt.header = opt.header || {
      'content-type': 'application/x-www-form-urlencoded'
    }
    wx.request({
      url: opt.url, // 仅为示例，并非真实的接口地址
      data: opt.data,
      header: opt.header,
      success: function(res) {
        opt.callback(res)
      }
    })
  }
}

module.exports = request