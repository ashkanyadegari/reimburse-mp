// pages/expense/expense.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log(options)
    const id = options.id
    let page = this
    wx.request({
      url: app.globalData.localhost + `expenses/${id}`,
      success(res) {
        console.log(res)
        page.setData({expense: res.data})
      }
    })
  },

  viewImage: function(e) {
    let page = this
    console.log(e)
    let src = e.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [page.data.expense.photos]
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