(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-personData-setting-addRegisterCode"],{"67d0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.sale-title[data-v-91eafce8]{width:%?750?%;height:%?75?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.sale-title .field[data-v-91eafce8]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-weight:700;color:#313133;font-size:%?36?%}.repairname-box[data-v-91eafce8]{height:100vh;box-sizing:border-box;background-color:#f2f2f2;position:relative;left:%?0?%;top:%?0?%;overflow:hidden}.hbyOccurFlag[data-v-91eafce8]{position:absolute;top:%?500?%;left:%?100?%;background-color:green;width:%?450?%;height:%?130?%;line-height:%?130?%;background-color:#000;color:#fff;text-align:center;opacity:.7;border-radius:%?20?%}.btn[data-v-91eafce8]{width:%?750?%;height:%?98?%;text-align:center;line-height:%?98?%;color:#fff;background-color:#4270ed;font-size:%?30?%;position:absolute;bottom:%?0?%;left:%?0?%}.station[data-v-91eafce8]{width:%?750?%;height:%?75?%;background-color:#fff;margin-top:0}.sale-title .left[data-v-91eafce8]{width:%?100?%;height:%?75?%;line-height:%?75?%;position:absolute;padding-left:%?30?%;top:%?7.5?%}.sale-title .img[data-v-91eafce8]{display:block;width:%?19?%;height:%?30?%;margin-top:%?23?%}.contents .list[data-v-91eafce8]{border-top:%?10?% solid #f2f2f2;width:%?750?%;height:%?98?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?0?% %?30?%;box-sizing:border-box;background-color:#fff;color:#222;font-size:%?28?%}.contents .list .left[data-v-91eafce8]{width:%?150?%}.contents .list .center[data-v-91eafce8]{width:%?350?%;margin-right:%?20?%}.contents .list .right[data-v-91eafce8]{width:%?160?%;text-align:center;height:%?60?%;line-height:%?60?%;color:#fff;font-size:%?26?%;background-color:#4270ed;border-radius:%?10?%}.signal[data-v-91eafce8]{width:%?750?%;padding-left:%?30?%;box-sizing:border-box;height:%?98?%;color:#4270ed;font-size:%?24?%;line-height:%?98?%}',""]),t.exports=e},"800f":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"repairname-box"},[i("v-uni-view",{staticClass:"zwPosition"}),i("v-uni-view",{staticClass:"sale-title"},[i("v-uni-view",{staticClass:"left",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/back.png"}})],1),i("v-uni-view",{staticClass:"field"},[t._v("填写验证码")])],1),i("v-uni-view",{staticClass:"station"}),i("v-uni-view",{staticClass:"contents"},[i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"left"},[t._v("手机号")]),i("v-uni-input",{staticClass:"center",attrs:{disabled:!0},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"left"},[t._v("验证码")]),i("v-uni-input",{staticClass:"center",attrs:{placeholder:"请输入验证码","placeholder-style":"color:#888888;font-size:28rpx"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),t.sendFlag?t._e():i("v-uni-view",{staticClass:"right",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("发送验证码")]),t.sendFlag?i("v-uni-view",{staticClass:"right",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("还剩 "+t._s(t.sendCodeTime)+" 秒")]):t._e()],1)],1),t.tipsFlag?i("v-uni-view",{staticClass:"hbyOccurFlag"},[t._v(t._s(t.tipsMsg))]):t._e(),i("v-uni-view",{staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("确定")])],1)},o=[]},"83d4":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{phone:"",code:"",sendCodeTime:60,sendFlag:!1,tipsFlag:!1,tipsMsg:""}},onReachBottom:function(){},onLoad:function(t){this.setData(t),this.getData()},methods:{back:function(){uni.navigateBack()},clearName:function(){this.password=""},getData:function(){var t=this;this.$h5.get("user/finduser",{},(function(e){0==e.code&&(t.phone=e.data.h_name)}))},sendCode:function(){this.sendFlag=!0;var t=this;t.$h5.post("code/sendcode",{phone:t.phone},(function(e){if(0==e.code)var i=setInterval((function(){t.sendCodeTime=t.sendCodeTime-1,t.sendCodeTime<1&&(t.sendCodeTime=60,t.sendFlag=!1,clearInterval(i))}),1e3)}))},submit:function(){this.$h5.post("login/logincode",{user:this.phone,code:this.code},(function(t){0==t.code?uni.navigateTo({url:"/pages/personData/setting/reRepairPwd"}):(that.tipsFlag=!0,that.tipsMsg=t.message,setTimeout((function(){that.tipsFlag=!1}),2500))}))}}};e.default=n},b65b:function(t,e,i){"use strict";i.r(e);var n=i("800f"),a=i("f1d0");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("c829");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"91eafce8",null,!1,n["a"],s);e["default"]=r.exports},c829:function(t,e,i){"use strict";var n=i("db38"),a=i.n(n);a.a},db38:function(t,e,i){var n=i("67d0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("32341bae",n,!0,{sourceMap:!1,shadowMode:!1})},f1d0:function(t,e,i){"use strict";i.r(e);var n=i("83d4"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a}}]);