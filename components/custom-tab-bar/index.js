Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#422349",
    list: [{
      pagePath: "pages/index/index",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "Home",
      isSpecial: false
    }, {
      pagePath: "pages/create/create",
      iconPath: "/images/plus.png",
      selectedIconPath: "/images/plus.png",
      text: "Create",
      isSpecial: true
    },
    {
      pagePath: "pages/profile/profile",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "Profile",
      isSpecial: false
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})