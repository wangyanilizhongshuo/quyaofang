(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search-search-list"],{"0b75":function(t,n,i){var e=i("c304");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var a=i("4f06").default;a("4aac764a",e,!0,{sourceMap:!1,shadowMode:!1})},"16b7":function(t,n,i){"use strict";var e=i("0b75"),a=i.n(e);a.a},"2b73":function(t,n,i){"use strict";var e;i.d(n,"b",(function(){return a})),i.d(n,"c",(function(){return s})),i.d(n,"a",(function(){return e}));var a=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("v-uni-view",{staticClass:"h5-search "},[i("v-uni-view",{staticStyle:{width:"750rpx","background-color":"#fff",position:"fixed",left:"0rpx",top:"0rpx","z-index":"10"},style:{height:t.marginTop}}),i("v-uni-view",{staticClass:"search-content",style:{height:t.heights,top:t.marginTop}},[i("v-uni-image",{staticClass:"img-back",attrs:{src:"/static/image/search-back.png"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.back.apply(void 0,arguments)}}}),i("v-uni-view",{staticClass:"uni-input"},[i("v-uni-input",{staticClass:"input",attrs:{type:"text","confirm-type":"search",placeholder:"输入更多的关键词","placeholder-style":"color:#999999;font-size:28rpx"},on:{confirm:function(n){arguments[0]=n=t.$handleEvent(n),t.search.apply(void 0,arguments)}},model:{value:t.inputs,callback:function(n){t.inputs=n},expression:"inputs"}}),i("v-uni-image",{staticClass:"search",attrs:{src:"/static/image/search-search.png"},on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.search.apply(void 0,arguments)}}})],1)],1),i("v-uni-view",{staticClass:"h5-content",style:{"margin-top":t.heights,"padding-top":t.marginTop}},t._l(8,(function(n,e){return i("v-uni-view",{key:e,staticClass:"h5-list",on:{click:function(n){n.stopPropagation(),arguments[0]=n=t.$handleEvent(n),t.jumps.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/wangyibo.jpg"}}),i("v-uni-view",{staticClass:"contents"},[i("v-uni-view",{staticClass:"first-line"},[i("v-uni-view",{staticClass:"btns btn1"},[t._v("出售")]),i("v-uni-view",{staticClass:"address"},[t._v("晨光国际1栋2903")])],1),i("v-uni-view",{staticClass:"second-line"},[t._v("50㎡/南/精装")]),i("v-uni-view",{staticClass:"third-line"},[t._v("嘉善·市区")]),i("v-uni-view",{staticClass:"fourth-line"},t._l(t.list,(function(n,e){return i("v-uni-view",{key:e,staticClass:"goods"},[t._v(t._s(n))])})),1),i("v-uni-view",{staticClass:"fifth-line"},[i("v-uni-text",{staticClass:"money"},[t._v("2300")]),i("v-uni-text",{staticClass:"frequency"},[t._v("元/月")])],1)],1)],1)})),1)],1)},s=[]},"52d2":function(t,n,i){"use strict";i.r(n);var e=i("2b73"),a=i("a15d");for(var s in a)"default"!==s&&function(t){i.d(n,t,(function(){return a[t]}))}(s);i("16b7");var o,r=i("f0c5"),c=Object(r["a"])(a["default"],e["b"],e["c"],!1,null,"2f4ab48e",null,!1,e["a"],o);n["default"]=c.exports},"739a":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{inputValue:"",inputs:"",list:["空调","冰柜","洗衣机"],srcollFlag:!1}},onLoad:function(t){this.setData(t)},onReachBottom:function(){console.log("search-list-onReachBottom")},computed:{heights:function(){var t=uni.getSystemInfoSync(),n=t.platform,i=t.statusBarHeight,e=i+4;return"android"==n.toLowerCase()&&(e+=4),console.log(e+38),e+38+"px"},marginTop:function(){var t=uni.getSystemInfoSync(),n=t.platform,i=t.statusBarHeight,e=i+4;return"android"==n.toLowerCase()&&(e+=4),console.log("marginTop"),console.log(e),e+"rpx"}},onPageScroll:function(t){t.scrollTop>0?this.srcollFlag=!0:0==t.scrollTop&&(this.srcollFlag=!1)},methods:{back:function(){uni.navigateTo({url:"/pages/index/search/search"})},search:function(){console.log("搜索！")},jumps:function(){uni.navigateTo({url:"/pages/index/houseDetail/houseDetail"})}}};n.default=e},a15d:function(t,n,i){"use strict";i.r(n);var e=i("739a"),a=i.n(e);for(var s in e)"default"!==s&&function(t){i.d(n,t,(function(){return e[t]}))}(s);n["default"]=a.a},c304:function(t,n,i){var e=i("24fb");n=e(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.h5-search .search-content[data-v-2f4ab48e]{width:%?750?%;height:%?90?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;left:0;background-color:#fff;z-index:10}.h5-search .img-back[data-v-2f4ab48e]{display:block;width:%?30?%;height:%?30?%;margin:%?0?% %?49?% 0 %?32?%}.h5-search .uni-input[data-v-2f4ab48e]{width:%?540?%;height:%?70?%;position:relative;left:0;top:0;background:#fff}.h5-search .uni-input .input[data-v-2f4ab48e]{width:%?540?%;height:%?70?%;box-sizing:border-box;border:2px solid #eceef5;border-radius:6px;padding-left:%?71?%;box-sizing:border-box;font-family:PingFang-SC-Medium;font-weight:Medium;color:#141414;font-size:%?28?%}.h5-search .uni-input .search[data-v-2f4ab48e]{width:%?30?%;height:%?30?%;display:block;position:absolute;top:%?20?%;left:%?20?%}.view-fixed[data-v-2f4ab48e]{width:%?750?%;height:0;background-color:#fff;position:fixed;left:0;top:0}.h5-content[data-v-2f4ab48e]{width:%?750?%;padding:%?0?% %?32?%;box-sizing:border-box}.h5-content .h5-list[data-v-2f4ab48e]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:%?30?%}.h5-content .h5-list .img[data-v-2f4ab48e]{display:block;width:%?200?%;height:%?200?%;margin-right:%?22?%;border-radius:%?4?%}.h5-content .h5-list .contents[data-v-2f4ab48e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.h5-content .h5-list .contents .first-line[data-v-2f4ab48e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.h5-content .h5-list .contents .first-line .btns[data-v-2f4ab48e]{width:%?60?%;height:%?30?%;line-height:%?30?%;text-align:center;font-size:%?20?%;color:#fff;margin-right:%?10?%;border-radius:%?4?%}.h5-content .h5-list .contents .first-line .btn1[data-v-2f4ab48e]{background-color:#f4bd65}.h5-content .h5-list .contents .first-line .btn2[data-v-2f4ab48e]{background-color:#4270ed}.h5-content .h5-list .contents .first-line .address[data-v-2f4ab48e]{color:#141414;font-size:%?30?%;font-family:PingFang-SC-Bold;font-weight:700}.h5-content .h5-list .contents .second-line[data-v-2f4ab48e]{color:#4c4c4c;font-size:%?20?%;margin:%?9?% 0 %?9?%}.h5-content .h5-list .contents .third-line[data-v-2f4ab48e]{color:#4c4c4c;font-size:%?20?%}.h5-content .h5-list .contents .fourth-line[data-v-2f4ab48e]{width:100%;margin:%?12?% 0 %?6?%;display:-webkit-box;display:-webkit-flex;display:flex}.h5-content .h5-list .contents .fourth-line .goods[data-v-2f4ab48e]{width:%?76?%;height:%?28?%;text-align:center;line-height:%?28?%;background:#f0f8ff;border-radius:%?4?%;color:#3466ff;font-size:%?18?%;margin-right:%?9?%}.h5-content .h5-list .contents .fifth-line[data-v-2f4ab48e]{color:#f9523a}.h5-content .h5-list .contents .fifth-line .money[data-v-2f4ab48e]{font-size:%?40?%;margin-right:%?7?%}.h5-content .h5-list .contents .fifth-line .frequency[data-v-2f4ab48e]{font-size:%?20?%}',""]),t.exports=n}}]);