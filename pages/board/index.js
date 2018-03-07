// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://60.205.126.110/staticfile/2018-01-25/3474b810-2014-4765-84ae-f9f2408cbc1f.png',
      'http://60.205.126.110/staticfile/2018-01-10/3e1fba03-bcc4-4774-9870-87ad9ff36303.png',
      'http://60.205.126.110/staticfile/2017-11-09/13b3ee3b-5e54-4ec0-a18e-960bd54b3cc2.png'
    ],
    isScroll: true,
    indicatorDots: true, // 
    autoplay: true,
    interval: 3000,
    duration: 1000, // 滑动动画时长
    circular: true, // 是否衔接滑动
    nav: [
      {
        'img': "../../images/pic1.png",
        'text': '新手指南'
      }, {
        'img': "../../images/pic2.png",
        'text': '热销活动'
      }, {
        'img': "../../images/pic3.png",
        'text': '邀请有礼'
      }, {
        "img": "../../images/pic4.png",
        "text": "优惠券"
      },
      {
        'img': "../../images/pic1.png",
        'text': '新手指南'
      }, {
        'img': "../../images/pic2.png",
        'text': '热销活动'
      }, {
        'img': "../../images/pic3.png",
        'text': '邀请有礼'
      }, {
        "img": "../../images/pic4.png",
        "text": "优惠券"
      }
    ],
    "bannerList": {
      "title": "热门产品",
      "imgList": [
        {
          "img": "../../images/img1.png"
        }, {
          "img": "../../images/img2.jpg"
        }, {
          "img": "../../images/img3.jpg"
        }, {
          "img": "../../images/img5.png"
        }, {
          "img": "../../images/img4.jpg"
        }
      ]
    }
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
    console.log(this)
    console.log(this.data.bannerList.imgList)
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