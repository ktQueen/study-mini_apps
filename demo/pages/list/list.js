var time=require("../../utils/util");
Page({
    data:{
        lists:[
            {
                content:"hello",
                time:Date.now(),
                id:1
            }
        ]
    },
    onLoad(){
        // var arr=wx.getStorageSync('logs');
        // console.log(arr);
        initData(this);//this代表当前页面下配置的的Page实例
    },
    onShow(){
        initData(this);
    },
    edit(e){
        // console.log(11111111);
        // console.log(e);
        var id=e.currentTarget.dataset.id;
        // console.log(id);
        wx.navigateTo({
            url:"../add/add?id="+id
        })
    },
    add(){
        console.log(222222222);
         wx.navigateTo({
            url:"../add/add"
        })
    },
    onShareAppMessage: function () {//用户分享
        return {
            title: '自定义分享标题',//分享标题-当前小程序名称
            desc: '自定义分享描述',//分享描述-当前小程序名称
            path: '/page/user?id=123'//分享路径-当前页面 path ，必须是以 / 开头的完整路径
        }
    },
    onPullDownRefresh(){//下拉刷新
        //当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。
    }
})
function initData(page){
    var arr=wx.getStorageSync('txt');
    if(arr.length){
        arr.forEach((item,i) =>{
            var t=new Date(Number(item.time));
            item.time=time.formatTime(t);
        })
        page.setData({
            lists:arr
        })
    }
}