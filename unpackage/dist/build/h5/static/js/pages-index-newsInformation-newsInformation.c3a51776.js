(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-newsInformation-newsInformation"],{"06a8":function(t,i,n){"use strict";n("d81d"),n("fb6a"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{dataList:""}},onReachBottom:function(){},onLoad:function(t){this.setData(t),this.getData(),console.log(436)},methods:{quits:function(){window.android&&window.android.quit?window.android.quit():window.webkit.messageHandlers.quit.postMessage("return")},jumps:function(t){uni.navigateTo({url:"/pages/index/newsInformation/new-detail?id="+t})},getData:function(){var t=this;t.$h5.post("News/newlist",{},(function(i){0==i.code&&(t.dataList=i.data,t.dataList.map((function(t){t.create_at=t.create_at.slice(0,10)})))}))}}};i.default=e},"275a":function(t,i,n){"use strict";n.r(i);var e=n("9694"),a=n("7fcd");for(var s in a)"default"!==s&&function(t){n.d(i,t,(function(){return a[t]}))}(s);n("88ef");var o,c=n("f0c5"),r=Object(c["a"])(a["default"],e["b"],e["c"],!1,null,"3c578dc7",null,!1,e["a"],o);i["default"]=r.exports},"6eb6":function(t,i,n){var e=n("24fb");i=e(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news-title[data-v-3c578dc7]{width:%?750?%;height:%?75?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.news-title .field[data-v-3c578dc7]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-weight:700;color:#313133;font-size:%?36?%}.zw[data-v-3c578dc7]{height:0;width:%?750?%;position:fixed;top:%?0?%;left:%?0?%;background-color:#fff}.news-title .left[data-v-3c578dc7]{width:%?100?%;height:%?75?%;line-height:%?75?%;position:absolute;padding-left:%?30?%;top:%?7.5?%}.news-title .img[data-v-3c578dc7]{display:block;width:%?19?%;height:%?30?%;margin-top:%?23?%}.contents[data-v-3c578dc7]{width:%?750?%;padding:25px %?30?%;box-sizing:border-box}.contents .list[data-v-3c578dc7]{width:%?700?%;display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?30?%}.contents .list .imgs[data-v-3c578dc7]{display:block;width:%?200?%;height:%?200?%;margin-right:%?18?%}.contents .list .right[data-v-3c578dc7]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.contents .list .right .first[data-v-3c578dc7]{color:#141414;font-size:%?30?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.contents .list .right .second[data-v-3c578dc7]{color:#adadad;font-size:%?22?%;min-height:%?80?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.contents .list .right .third[data-v-3c578dc7]{color:#4c4c4c;font-size:%?20?%;text-align:right}',""]),t.exports=i},"7fcd":function(t,i,n){"use strict";n.r(i);var e=n("06a8"),a=n.n(e);for(var s in e)"default"!==s&&function(t){n.d(i,t,(function(){return e[t]}))}(s);i["default"]=a.a},"88ef":function(t,i,n){"use strict";var e=n("973e"),a=n.n(e);a.a},9694:function(t,i,n){"use strict";var e;n.d(i,"b",(function(){return a})),n.d(i,"c",(function(){return s})),n.d(i,"a",(function(){return e}));var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"h5-newInformation"},[n("v-uni-view",{staticClass:"zw"}),n("v-uni-view",{staticClass:"news-title title"},[n("v-uni-view",{staticClass:"left",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.quits.apply(void 0,arguments)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/back.png"}})],1),n("v-uni-view",{staticClass:"field"},[t._v("新闻资讯")])],1),n("v-uni-view",{staticStyle:{height:"75rpx"}}),n("v-uni-view",{staticClass:"contents"},t._l(t.dataList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"list",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.jumps(i.id)}}},[n("v-uni-image",{staticClass:"imgs left",attrs:{src:"https://yaofangme.hzbixin.cn/"+i.house_img}}),n("v-uni-view",{staticClass:"right"},[n("v-uni-view",{staticClass:"first"},[t._v(t._s(i.house_title))]),n("v-uni-view",{staticClass:"second"},[t._v(t._s(i.house_headings))]),n("v-uni-view",{staticClass:"third"},[t._v(t._s(i.create_at))])],1)],1)})),1)],1)},s=[]},"973e":function(t,i,n){var e=n("6eb6");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=n("4f06").default;a("00f7f089",e,!0,{sourceMap:!1,shadowMode:!1})}}]);