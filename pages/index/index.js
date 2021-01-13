// index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    history: [['Dec', 2000.00], ['Jan', 1520.00], ['Feb', 205]]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: app.globalData.localhost + 'expenses',
      data: {user_id: 1},
      success(res) {
        console.log(res)
        let data = res.data
        page.setData({expenses: data})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})