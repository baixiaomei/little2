// pages/notice/show.js

var app = getApp();
// 下载wxParse 文件夹并引入需要的文件

var WxParse = require('../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    notice: {
      title: "新商城开张，优惠多多，戳 戳 戳 我看详情",
      content: "<p>尊敬的客户：<br/></p><p>&nbsp; &nbsp; &nbsp; &nbsp;商城新开张，快来砸单哦！</p><p>&nbsp; &nbsp; &nbsp; &nbsp;1、单件包邮（秒杀除外）</p><p>&nbsp; &nbsp; &nbsp; &nbsp;2、每天发布6件秒杀商品</p><p>&nbsp; &nbsp; &nbsp; &nbsp;3、满返活动：</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; A：满100元返10元券；</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B：满200元返25元券；</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; C：满300元返40元券；</p><p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;消费累计满500元，返80元券哦！</p><p>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>",

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    WxParse.wxParse('article', 'html', this.data.notice.content, this, 5)
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