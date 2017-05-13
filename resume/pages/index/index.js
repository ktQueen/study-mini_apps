//index.js
var result=require("../../utils/util");
Page({
  data:{
    tag: [
      {
        con: '工作经历',
      },
      {
        con: '教育经历',
      },
      {
        con: '项目经验',
      },
    ],
    indexActive:{
      conVal:"pageTop",
      classVal:"active",
      srcVal:"../../img/knowledgeActive.png",
    },
    aboutActive:{
      conVal:"pageTop hide",
      classVal:"",
      srcVal:"../../img/aboutUs.png",
    },
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  //右上角分享事件
  onShareAppMessage: function () {
    return {
      title: '康婷的个人简历',
      desc: '我是一个有追求的前端，旺盛的求知欲+抗压能力强+沟通能力+团队合作精神好',
      path: '/path'
    }
  },
  //输入框搜索事件
  searchInput(event){
    search(this,event.detail.value);
  },
  //输入框改变事件
  change(event){
      var val=event.detail.value;
      this.setData({
          content:val
      })
  },
  //热门搜索标签事件
  searchTag(event){
     search(this,event.currentTarget.dataset.val);
  },
  //切换事件
  aboutUs(){
     this.setData({
        indexActive:{
          conVal:"pageTop hide",
          classVal:"",
          srcVal:"../../img/knowledge.png",
        },
        aboutActive:{
          conVal:"pageTop",
          classVal:"active",
          srcVal:"../../img/aboutUsActive.png",
        },
    })
  },
  index(){
     this.setData({
        indexActive:{
          conVal:"pageTop",
          classVal:"active",
          srcVal:"../../img/knowledgeActive.png",
        },
        aboutActive:{
          conVal:"pageTop hide",
          classVal:"",
          srcVal:"../../img/aboutUs.png",
        },
     })
  },
})
//搜索财税知识
function search(page,val){
  var re=/^\s*$/g;
  if(!val || re.test(val)){
      return ;
  }
  setValue(page,val,result.data(val));
    wx.navigateTo({
        url:"../list/list"
    })
}
function setValue(page,inputVal,listData){  
    wx.setStorageSync('input', inputVal);
    wx.setStorageSync('list', listData);
}
