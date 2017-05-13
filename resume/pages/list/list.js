// pages/list/list.js
var result=require("../../utils/util");
Page({
  data:{
    contentInput:"",
    contentTxt:"",
    focus: false,
    list: [
      {
        questions: '',
        answer:''
      }
    ],
    tag: [
      {search: '工作经历'},
      {search: '教育经历'},
      {search: '项目经验'},
    ],
    result:{
      list:"hide",
      noresult:"hide"
    }
  },
  onLoad:function(options){
    initData(this);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    initData(this);
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
  //搜索输入框事件
  searchInput(event){
    search(this,event.detail.value);
  },
  //搜索输入框改变事件
  change(e){
        var val=e.detail.value;
        this.setData({
            contentInput:val
        })
    },
  //清除事件
  clear(){
     this.setData({
      contentInput:'',
      focus: true
    }) 
  },
  // 查看详情事件
  detail(event){
    setDetailValue(this,event.currentTarget.dataset.title,event.currentTarget.dataset.con);
    wx.navigateTo({
        url:"../detail/detail"
    })
  },
  //没有结果列表事件
  searchList(event){
    search(this,event.currentTarget.dataset.val);
  },
  //按钮事件
  consult(){
     wx.makePhoneCall({
      phoneNumber: '15311443258'
    })
  }
})
function initData(page){
    showResult(page,wx.getStorageSync('list'),wx.getStorageSync('input'));
}
function setDetailValue(page,titleVal,conVal){   
    wx.setStorageSync('detail', {
      "title":titleVal,
      "con":conVal
    })
}
//搜索财税知识
function search(page,val){
  var re=/^\s*$/g;
  if(!val || re.test(val)){
      return ;
  }
  setValue(page,val,result.data(val));
  showResult(page,result.data(val),wx.getStorageSync('input'));   
}
function setValue(page,inputVal,listData){  
    wx.setStorageSync('input', inputVal);
    wx.setStorageSync('list', listData);
}
function showResult(page,dataVal,inputVal){
  if(dataVal!=null && dataVal!="null"){    
      page.setData({
        contentInput:inputVal,
        contentTxt:inputVal,
        list:dataVal,
        result:{
          list:"",
          noresult:"hide"
        }
      }) 
    }else{
        page.setData({
          contentInput:inputVal,
          contentTxt:inputVal,
          list:'',
          result:{
            list:"hide",
            noresult:""
          }
        }) 
    }
}