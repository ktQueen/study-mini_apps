// pages/detail/detail.js
Page({
  data: {
    detail: {
      "title": '',
      "con": ''
    }
  },
  onLoad: function (options) {
    initData(this);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    initData(this);
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
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
  //按钮事件
  consult() {
    wx.makePhoneCall({
      phoneNumber: '15311443258'
    })
  }
})

function initData(page) {
  var detailVal = wx.getStorageSync('detail');
  console.log(detailVal);
  if (detailVal != null) {
    page.setData({
      detail: detailVal
    })
  }
}