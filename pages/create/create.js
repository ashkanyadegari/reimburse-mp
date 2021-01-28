// pages/create/create.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    step: 1,
    reimbursement: false,

  },

  formSubmit: function(e) {
    console.log('form triggers a submit event, carrying the following data: ', e.detail.value)
    const formData = e.detail.value
    let page = this
    const params = {
      description: formData.description,
      category_id: this.data.categoryId,
      user_id: app.globalData.user.id,
      reimbursement: this.data.reimbursement,
      amount: formData.amount,
      expense_date: formData.date
    }
    wx.request({
      url: app.globalData.localhost + 'expenses',
      method: 'POST',
      data: params,
      success(res) {
        console.log(res)
        const id = res.data.expense.id
        if (page.data.fapiao) {
          console.log('test',page.data.fapiao)
          wx.uploadFile({
            filePath: page.data.fapiao,
            formData: {id: id},
            name: 'fapiao',
            url: app.globalData.localhost + 'fapiao',
            success(res) {
              console.log(res)
            }
          })
        }
        wx.reLaunch({
          url: '/pages/index/index',
        })
      }
    })
  },

  checkBox: function() {
    if (this.data.reimbursement) {
      this.setData({reimbursement: false})
    } else {
      this.setData({reimbursement: true})
    }
  },

  hasFapiao: function() {
    if (this.data.hasFapiao) {
      this.setData({hasFapiao: false})
    } else {
      this.setData({hasFapiao: true})
    }
  },

  goToHome: function() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  goToStep2: function(e) {
    console.log(e)
    this.setData({step: 2})
  },

  goToStep1: function() {
    this.setData({step: 1})
  },

  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  uploadPhoto: function(){
    let page = this
    wx.chooseImage({
      count: 1,
      success(res){
        console.log(res)
        const photo = res.tempFilePaths[0]
        console.log(photo)
        page.setData({fapiao: photo})

      }
    })

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