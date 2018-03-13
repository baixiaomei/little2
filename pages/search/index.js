// pages/search/search.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: "0",
    searchInput: '', // 输入框输入的内容
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration:1000,
    imgUrls: [
      "https://cdn.it120.cc/apifactory/2017/09/15/145c582252a7a20f21ad9a025ae8c9be.png",
      "https://cdn.it120.cc/apifactory/2017/09/15/73560c511f554eb4afd1dcade9d8ef67.png",
      "https://cdn.it120.cc/apifactory/2017/09/15/5acdd8f65ec85b413ee642dda795d835.png"
    ],
    activeCategoryId: '0',
    categories: [
      { id: '0', name: "全部" },
      { id: '1', name: "上装" },
      { id: '2', name: "裤装" },
      { id: '3', name: "家居内衣" },
      { id: '4', name: "特价区" },
      { id: '5', name: "裙装" },
      { id: '6', name: "套装" },
      { id: '7', name: "外套" },
      { id: '8', name: "秒杀" },
      { id: '9', name: "内裤" },
      { id: '10', name: "袜子" },
      { id: '11', name: "鞋" },
      ],
    noticeList: {
      dataList: [
        {
          id: '161', title: '商场新开张，优惠多多多， 猛戳这里。', dateAdd: '2017-09-16 17:20:43'
        },
        {
          id: '162', title: '商场新开张，优惠多多多， 猛戳这里。', dateAdd: '2017-09-16 17:20:43'
        },
        {
          id: '163', title: '商场新开张，优惠多多多， 猛戳这里。', dateAdd: '2017-09-16 17:20:43'
        },
        {
          id: '164', title: '商场新开张，优惠多多多， 猛戳这里。', dateAdd: '2017-09-16 17:20:43'
        }
      ]
    },
    goods: [
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      },
      {
        name: '1-3岁袜子',
        id: '6765',
        minPrice: 80,
        originalPrice: 0,
        pic: 'https://cdn.it120.cc/apifactory/2017/10/30/b07ee85fa64f0c68aa9a45fba20ec689.jpg'
      }
    ]
  },

  tabClick (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    })
  },
  toDetailsTap (e) {
    wx.navigateTo({
      url: "/pages/detail/detail?id=" + e.currentTarget.dataset.id
    })
    this.setData({
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  bindbuttonTapSheet: function () {
    console.log(1)
  },
  listenerSearchInput: function (e) {
    this.setData({
      searchInput: e.detail.value
    })
    console.log(this.data.searchInput) // 相当于vue的v-module="value" 的value值
  },
  toSearch: function () {
    console.log(0)
  }
})