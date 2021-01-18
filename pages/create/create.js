// pages/create/create.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    step: 1,

  },
  checkBox: function(event) {
    console.log(event.detail.value)
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // Getting categories
    let page = this
    wx.request({
      url: app.globalData.localhost + 'categories',
      success(res) {
        console.log(res.data)
        page.setData({categories: res.data})

      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  clickCategory: function(event) {
    let id = event.currentTarget.dataset.id
    console.log(id)
    this.setData({categoryId: id})
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