(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personData-myMessage-myMessage"],{"220d":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{lists:[{time:"2020-9-14",title:"天涯共此时千里共婵娟！",desc:"石晨名府在售均价29700元/平"},{time:"2020-9-13",title:"天涯共此时千里共婵娟！",desc:"石晨名府在售均价29700元/平"}]}},onReachBottom:function(){},onLoad:function(t){this.setData(t),this.getData()},methods:{quits:function(){window.android&&window.android.quit?window.android.quit():window.webkit.messageHandlers.quit.postMessage(123)},getData:function(){var t=this;t.$h5.post("user/messagecentre",{},(function(e){0==e.code&&(t.lists=e.data)}))}}};e.default=n},2993:function(t,e,i){"use strict";i.r(e);var n=i("8469"),s=i("883e");for(var o in s)"default"!==o&&function(t){i.d(e,t,(function(){return s[t]}))}(o);i("b4c1");var a,r=i("f0c5"),d=Object(r["a"])(s["default"],n["b"],n["c"],!1,null,"be2e25d0",null,!1,n["a"],a);e["default"]=d.exports},8469:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"h5-newInformation"},[i("v-uni-view",{staticClass:"zw"}),i("v-uni-view",{staticClass:"news-title title"},[i("v-uni-view",{staticClass:"left",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.quits.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/back.png"}})],1),i("v-uni-view",{staticClass:"field"},[t._v("消息中心")])],1),i("v-uni-view",{staticClass:"zwPosition"}),i("v-uni-view",{staticClass:"contents"},t._l(t.lists,(function(e,n){return i("v-uni-view",{key:n,staticClass:"list-box"},[i("v-uni-view",{staticClass:"time-title"},[t._v(t._s(e.time))]),i("v-uni-view",{staticClass:"boxs"},[i("v-uni-view",{staticClass:"first"},[t._v(t._s(e.data[0].title))]),i("v-uni-view",{staticClass:"second"},[t._v(t._s(e.data[0].message))])],1)],1)})),1)],1)},o=[]},"883e":function(t,e,i){"use strict";i.r(e);var n=i("220d"),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=s.a},b4c1:function(t,e,i){"use strict";var n=i("ed5f"),s=i.n(n);s.a},e76b:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news-title[data-v-be2e25d0]{width:%?750?%;height:%?75?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.news-title .field[data-v-be2e25d0]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-weight:700;color:#313133;font-size:%?36?%}.zw[data-v-be2e25d0]{height:0;width:%?750?%;position:fixed;top:%?0?%;left:%?0?%;background-color:#fff}.zwPosition[data-v-be2e25d0]{width:%?750?%;height:%?75?%;margin-top:0}.news-title[data-v-be2e25d0]{border-bottom:%?2?% solid #eee}.news-title .left[data-v-be2e25d0]{width:%?60?%;height:%?75?%;line-height:%?75?%;position:absolute;left:%?30?%;top:%?7.5?%}.news-title .img[data-v-be2e25d0]{display:block;width:%?19?%;height:%?30?%;margin-top:%?23?%}.contents[data-v-be2e25d0]{height:100vh;background-color:#f2f2f2}.contents .list-box[data-v-be2e25d0]{width:%?750?%;padding:%?0?% %?30?%;box-sizing:border-box}.contents .list-box .time-title[data-v-be2e25d0]{width:%?690?%;text-align:center;color:#303133;font-size:%?24?%;height:%?60?%;line-height:%?60?%}.contents .list-box .boxs[data-v-be2e25d0]{background-color:#fff;width:%?690?%;height:%?164?%;padding:%?30?% %?24?%;box-sizing:border-box;border-radius:%?4?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.contents .list-box .boxs .first[data-v-be2e25d0]{font-size:%?32?%;font-weight:700;color:#303133}.contents .list-box .boxs .second[data-v-be2e25d0]{color:#303133;font-size:%?28?%}',""]),t.exports=e},ed5f:function(t,e,i){var n=i("e76b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("d606c796",n,!0,{sourceMap:!1,shadowMode:!1})}}]);