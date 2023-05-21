// pages/allHome/allHome.js
import Toast from '../../miniprogram_npm/tdesign-miniprogram/toast/index';

const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper0.gif`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper1.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper2.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper3.jpg`,
    `https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/swiper4.jfif`,
];




Page({

    /**
     * 页面的初始数据
     */

    data: {
        allListData:[],
        copyListData:[],
        sortList:["时间降序","时间升序","热度降序","热度升序"],
        statusList:["primary","success","danger","warning","success"],
        fixClass:"noFixed",



        current: 0,
        autoplay: false,
        duration: 400,
        interval: 4500,
        swiperList,
        //轮播图控件信息


        isLoading: true,
    },

    onTap(e) {
        const { index } = e.detail;
  
        console.log(index);
      },

      bindToDetail(option){
          let id=option.currentTarget.dataset.id;
          wx.navigateTo({
            url: `/pages/detail/detail?id=${id}`,
          })
      },
      bindToFilter(eve){
          let newArr=this.data.copyListData.filter((val)=>{
              return val.addtime==eve.detail.value
          })
          this.setData({
              allListData:newArr
          })
      },

      bindToSearch(eve){
          if(eve.detail.value==""){
              this.setData({
                  allListData:this.data.copyListData,
              })
          }
          else{
              let newArr=this.data.copyListData.filter((val)=>{
                  return val.title.indexOf(eve.detail.value)!=-1;
              })
              this.setData({
                  allListData:newArr
              })
              Toast({
                context: this,
                selector: '#t-toast',
                message: `查询成功!\n共有${newArr.length}条博客`,
                icon: 'check-circle',
                direction: 'column',
              });
          }
      },
      onTabsChange(eve){
          if(eve.detail.value==1){
              let newArr=this.data.allListData.sort((a,b)=>{
                  return b.viewcount-a.viewcount
              })
              this.setData({
                  allListData:newArr
              })
          }
          else if(eve.detail.value==0){
            let newArr=this.data.allListData.sort((a,b)=>{
                return new Date(b.addtime)-new Date(a.addtime)
            })
            this.setData({
                allListData:newArr
            })
          }
          else if(eve.detail.value==2){
            let newArr=this.data.allListData.sort((a,b)=>{
                return new Date(a.addtime)-new Date(b.addtime)
            })
            this.setData({
                allListData:newArr
            })
        }
          else if(eve.detail.value==3){
            let newArr=this.data.allListData.sort((a,b)=>{
                return a.viewcount-b.viewcount
            })
            this.setData({
                allListData:newArr
            })
        }
      },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.request({
          url: 'https://apii.hfliu.com/default/getArticleList',
          success:(val)=>{
              this.setData({
                  allListData:val.data,
                  copyListData:val.data,
                  isLoading: false,
              })
          },
          fail:()=>{
              console.log("请求数据出错！");
          }
        })
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