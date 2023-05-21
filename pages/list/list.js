const image = 'https://tdesign.gtimg.com/miniprogram/images/example2.png';
const items = new Array(12).fill({ label: '标题文字', image }, 0, 12);

Page({
  offsetTopList: [],

  data: {
    sideBarIndex: 1,
    sideBarText:"100%",
    scrollTop: 0,
    categories: [
      {
        label: '技术分享',
        title: '技术分享',
        badgeProps: {},

      },
      {
        label: '前端基础',
        title: '前端基础',
      },
      {
        label: '前端进阶',
        title: '前端进阶',
        badgeProps: {
            dot: true,
          },
      },
      {
        label: '前端工程化',
        title: '前端工程化',
        badgeProps: {
            dot: true,
          },
      },
      {
        label: '大前端深入',
        title: '大前端深入',

      },
      {
        label: '生活分享',
        title: '生活分享',
      },
    ],

    pngList:[
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList0.jfif",
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList1.jpg",
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList2.Default",
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList3.png",
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList4.png",
        "https://min-progress-1316646528.cos.ap-nanjing.myqcloud.com/%E5%B3%B0%E5%93%A5%E5%8D%9A%E5%AE%A2/pngList5.jpg",
    ],

    dataList:[
        items.slice(0, 10),
        items.slice(0, 3),
        items.slice(0, 2),
        items.slice(0, 9),
        items.slice(0, 5),
        items.slice(0, 1),
    ],
    isLoading: true,

    
  },

  bindToDetail(option){
    let id=option.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    })
},



  onLoad(options) {

    let techArr=[];
    let frontBase=[];
    let frontPlus=[];
    let frontPrj=[];
    let widthFront=[];
    let liveArr=[];

    wx.request({
      url: 'https://apii.hfliu.com/default/getArticleList',
      success:(value)=>{
          console.log(value);
          value.data.forEach((val,index)=>{
              if(val.type_id=="技术分享"){
                  techArr.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="HTML"||val.columnSpe=="CSS"||val.columnSpe=="JavaScript"))
              {
                frontBase.push(val);
                if(val.columnSpe=="JavaScript"){
                    frontPlus.push(val);
                }
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="后台开发"||val.columnSpe=="Http网络"||val.columnSpe=="数据库"))
              {
                widthFront.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe=="框架学习"))
              {
                frontPrj.push(val);
              }
              else if(val.type_id=="前端学习"&&(val.columnSpe==""))
              {
                frontPlus.push(val);
              }
              else if(val.type_id=="生活分享")
              {
                liveArr.push(val);
              }
          })
          this.setData({
            dataList:[
                techArr,
                frontBase,
                frontPlus,
                frontPrj,
                widthFront,
                liveArr
            ],
            isLoading: false,
        })
        console.log(1111);
      },
      fail:(val)=>{
          console.log("出错啦啦啦！！！");
          console.log("error_Data",val);
      }
    })
},
  onSideBarChange(e) {
    const { value } = e.detail;

    this.setData({ 
        sideBarIndex: value,
        sideBarText: value*100+"%"});
  },
});
