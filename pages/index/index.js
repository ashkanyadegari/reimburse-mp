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
      data: {user_id: app.globalData.user.id},
      success(res) {
        console.log(res)
        let data = res.data
        page.setData({expenses: data})
      }
    }),
    wx.request({
      url: app.globalData.localhost + 'projects',
      data: {user_id: 1},
      success(res) {
        console.log(res)
        let data = res.data
        page.setData({projects: data})
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let page = this
    wx.request({
      url: app.globalData.localhost + 'expenses',
      data: {user_id: 18},
      success(res) {
        console.log(res)
        let data = res.data
        page.setData({expenses: data})
      }
    }),
    wx.request({
      url: app.globalData.localhost + 'projects',
      data: {user_id: 1},
      success(res) {
        console.log(res)
        let data = res.data
        page.setData({projects: data})
      }
    })
  },

  scanFapiao: function () {
    wx.scanCode({
      onlyFromCamera: true,
      success(res) {
        console.log(res)
      }
    })
  },

  goToExpense: function(event){
    console.log(event)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/expense/expense?id=${id}`,
    })
  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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