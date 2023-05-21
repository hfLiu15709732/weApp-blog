// pages/column/column.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        third:1,
        tabsValue:0,
        statusList:["primary","success","danger","warning","success"],
    },

    onThirdChange(e) {
        this.setData({ third: e.detail.current });
        console.log(e);
      },
      
    onTabsChange(e) {
        this.setData({
            tabsValue:e.detail.value,
        })
        console.log(e.detail.value);
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})