(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-newsInformation-new-detail"],{1198:function(t,i,n){"use strict";n.r(i);var e=n("d52f"),a=n("268e");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("c31c");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"0506f6d6",null,!1,e["a"],o);i["default"]=c.exports},"1a08":function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{id:"",dataList:""}},onReachBottom:function(){},onLoad:function(t){this.setData(t),console.log(this.id),this.getData()},methods:{backs:function(){uni.navigateTo({url:"/pages/index/newsInformation/newsInformation"})},getData:function(){var t=this;console.log(t.id),t.$h5.post("news/newsdetails",{id:t.id},(function(i){0==i.code&&(t.dataList=i.data,console.log(t.dataList))}))}}};i.default=e},"268e":function(t,i,n){"use strict";n.r(i);var e=n("1a08"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},"40e9":function(t,i,n){var e=n("5fce");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("5319e132",e,!0,{sourceMap:!1,shadowMode:!1})},"5fce":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news-title[data-v-0506f6d6]{width:%?750?%;height:%?75?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.news-title .field[data-v-0506f6d6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-weight:700;color:#313133;font-size:%?36?%}.zw[data-v-0506f6d6]{height:0;width:%?750?%;position:fixed;top:%?0?%;left:%?0?%;background-color:#fff}.news-title[data-v-0506f6d6]{border-bottom:%?2?% solid #eee}.news-title .left[data-v-0506f6d6]{width:%?60?%;height:%?75?%;line-height:%?75?%;position:absolute;left:%?30?%;top:%?7.5?%}.news-title .img[data-v-0506f6d6]{display:block;width:%?19?%;height:%?30?%;margin-top:%?23?%}.contents[data-v-0506f6d6]{width:%?750?%;padding:35px %?30?%;box-sizing:border-box}.contents .title[data-v-0506f6d6]{font-size:%?30?%;color:#141414;font-weight:700}.contents .img[data-v-0506f6d6]{display:block;width:%?670?%;height:%?200?%;margin-top:%?36?%;margin-bottom:%?50?%}.contents .describe[data-v-0506f6d6]{font-size:%?28?%;color:#222}',""]),t.exports=i},c31c:function(t,i,n){"use strict";var e=n("40e9"),a=n.n(e);a.a},d52f:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"h5-newInformation"},[n("v-uni-view",{staticClass:"zw"}),n("v-uni-view",{staticClass:"news-title title"},[n("v-uni-view",{staticClass:"left",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.backs.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/back.png"}})],1),n("v-uni-view",{staticClass:"field"},[t._v("咨询详情")])],1),n("v-uni-view",{staticStyle:{height:"75rpx"}}),n("v-uni-view",{staticClass:"contents"},[n("v-uni-view",{staticClass:"title"},[t._v(t._s(t.dataList.house_title))]),""!=t.dataList?n("v-uni-image",{staticClass:"img",attrs:{src:"https://yaofangme.hzbixin.cn/"+t.dataList.house_img}}):t._e(),n("v-uni-view",{staticClass:"describe"},[t._v(t._s(t.dataList.house_content))])],1)],1)},s=[]}}]);