function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

module.exports = {
  data: data
}
function data(val){
  if(val.indexOf("工作")!=-1){
    return [
      {
        questions: '北京易后台财税科技有限公司',
        answer:{
          time:'起止时间：2015.12-至今',
          other1:'公司规模：50-100人',
          other2:'公司行业：互联网财税服务',
          work: [{
                message: '工作职责：',
              }, {
                message: '1．网站金融产品，易投后平台，后台管理系统开发，后期维护和功能改进，相关业务逻辑开发。'
              }, {
                message: '2．易后台webapp开发，以及提出产品建议。',
              }, {
                message: '3．分页，tab切换，拖拽等通用组件的开发和应用。',
              }, {
                message: '4. 与设计、产品人员沟通提出建议，持续优化相关产品的质量、性能和用户体验'
              }
          ]
        }        
      },
      {
        questions: '北京中联创投电子商务有限公司',
        answer:{
          time:'起止时间：2013.09--2015.12',
          other1:'公司规模：100-150人',
          other2:'公司行业：互联网金融',
          work: [{
                message: '工作职责：',
              }, {
                message: '1抱财网主站维护，产品线和功能的前端开发，并用sea.js对网站功能进行模块化开发',
              }, {
                message: '2抱财网的通用组件的开发以及前端开发规范的研究。',
              }, {
                message:  '3抱财网公众号webapp的前端开发（m.baocai.com）。'
              }
          ]
        }        
      },
    ]
  }
  if(val.indexOf("教育")!=-1){
    return [
      {
        questions: '东华理工大学',
        answer:{
          time:'起止时间：2010.09-2014.07',
          other1:'学历：本科',
          other2:'专业：网络工程',
          work: [{
                message: '所获奖项',
              }, {
                message: '1.每年获得学校奖学金',
              }, {
                message: '2.获得全国数学建模大赛三等奖',
              }, {
                message: '3.优秀干部奖等',
              }
          ]
        }        
      }
    ]
  }
  if(val.indexOf("项目")!=-1){
    return [
      {
        questions: '易后台理财产品F10',
        answer:{
          time:'开发周期：2014.12.21-2015.02',
          other1:'项目地址：www.ehoutai.com',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: '响应式布局，分页插件、筛选、全选与反选、批量下载功能开发、图片上传美化处理以及删除与查看功能，用ajax与后端进行通信，实现数据交互',
              }
          ]
        }        
      },
      {
        questions: '易投后',
        answer:{
          time:'开发周期：2016.02-2016.03',
          other1:'项目地址：www.etouhou.com',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: 'css3实现关键帧动画,分页组件的开发，tab切换组件开发，弹窗效果开发，模糊查询功能，实现与F10的实时通信，ajax数据交互效果。',
              }
          ]
        }        
      },
      {
        questions: '易后台后台管理系统',
        answer:{
          time:'开发周期：2016.03—至今（持续开发）',
          other1:'项目地址：www.ehoutai.com:8080/ehoutai_h',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: '自适应布局，实现模糊搜索功能，数字千分位分隔符功能，提供用户可以动态创建和删除添加数据实现产品和项目流程便捷操作，财税锦囊、财税问诊等业务逻辑的开发处理，通讯录的开发，管理员和财税人员角色授权功能，知识库和问题库的开发实现资源的有效利用等。',
              }
          ]
        }        
      },
      {
        questions: '易后台微信端',
        answer:{
          time:'开发周期：2015.05-至今(持续开发)',
          other1:'项目地址：通过公众号易后台访问',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: '应用html5+css3的结合，自适应布局，手机的适配处理，将线下的财税服务实现互联网化。',
              }
          ]
        }        
      },
      {
        questions: '抱财网',
        answer:{
          time:'',
          other1:'项目地址：www.baocai.com',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: 'JavaScript、JQ完成动态轮播、类型标详细说明滑出的动态效果、消息列表滚动、下拉列表的显示与隐藏等效果，使用sea.js对每个功能分模块开发， AJAX实现网站的通信.',
              }
          ]
        }        
      },
      {
        questions: '抱财网Webapp',
        answer:{
          time:'',
          other1:'项目地址：m.baocai.com',
          other2:'',
          work: [{
                message: '项目描述',
              }, {
                message: '利用html5和css3，svg图形处理，自适应布局结合与后台开发人员的配合完成微信端整站开发',
              }
          ]
        }        
      },
    ]
  }
}
