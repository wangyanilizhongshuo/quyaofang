(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-register-register"],{"06c9":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{number:"",code:"",tipflag:!1,tipMsg:"",timeNumber:60,timeflag:!1}},methods:{submit:function(){var t=this,e=this;e.$h5.post("code/verificode",{user:e.number,code:e.code},(function(n){0==n.code?uni.navigateTo({url:"/pages/register/registerPsd?phone="+t.number}):(e.tipflag=!0,e.tipMsg=n.message,setTimeout((function(){e.tipflag=!1}),3e3))}))},sendCode:function(){var t=this;t.$h5.post("code/sendcode",{phone:t.number},(function(e){0==e.code?(t.timeflag=!0,setInterval((function(){t.timeNumber=t.timeNumber-1,1==t.timeNumber&&(t.timeFlag=!1)}),1e3)):(t.tipflag=!0,t.tipMsg=e.message,setTimeout((function(){t.tipflag=!1}),3e3))}))},jumps:function(){uni.navigateTo({url:"/pages/register/registerDown"})}}};e.default=i},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"2aba":function(t,e,n){"use strict";var i=n("91dc"),a=n.n(i);a.a},5754:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAABXElEQVRYR+2YTS4EURSFvzMxI8IahCUQesYGmLIGI9GxAEFP7MGYDTDTwhKINRB/I5MrT+p1Sqm06q6frsh9o5fUe7lfnftOXtURqWFmC8ARsA7MpJ81MH8DroCupMdYT3FiZovAHTDbAMywEi/AsqSHsCgNeA5sThgulr+QtJUFfE21tSOp3ySsma0B10nND0nTWUAb9F0aKNsw5C+GdIv/B6CZhTaEdow7+pI6eZvNrLyCFQDeSMp9wUoAx5WtyD4HLKLSsDWuoCvoN8kfZ8BN4iZxk7hJyrrAFXQFK/jkr1NEv+rKqlubgmY2BfSA7SROOQP2JH2OAl0n4Cmwm4E5ltRtC+ATMJeBeZY074BFFDCzvBafSNovsj+uqfMMRpPsJMXaZZJRVCrz4z7pAHMViKFpboDZ+gh4CbhtSYi+Iuk+HIcfUW+S9B8CG8B3RtzgeAcugYOY8IfaX2G8Yji2KnXnAAAAAElFTkSuQmCC"},"67da":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB/0lEQVRYR+2ZPU8VQRSGnxcxIfwJbJBYICAWWGuJlQkV/AGlIISCTuwIDYmBX6ClVCZWWkvDdweN/glDwsch52aXTJYr987uzuYm3Kk22Zk5z76z52PPimCY2TCwCswDI8BAeD/h9TXwF/gKrEv6l9tSfpHB/QJmEoJ0s/Uu8DqHDAE/Amvd7NDAnDVJn9xOCHgKjGbGfwCfgasGYNzEI2ARmM3snUl6WgS8AAazCS8l7TUE1zJjZi+A3OalpMdFQAuAnks6aRhwHDi+dQ6pdbrhEfcB7zsRM6tHwSwcrQPPIl+BM2AljHGFGFwb4BKwGQmXT1+W1HZtnQp6lvlSEnBBkmeLO6NOQHesOWAydLIOwO6AHkJ2JIXOeLusNsCSynVc1gfsKFGnd6CuMFMV5H/r+0dcVdnSCpqZl2BeCg1VhSisPwe2JHmG8WqmXCYxs4Ms5tXM19ruUNJUVcBDYCIFHXAkyQN+JQXHgPeJjnhbklfy5QETKZcuF6cCLu0kqYCK+/YBqyr9cBQ0My9Y3wHTkQXrPvAtecFqZj1f8vf8R5O36DYAzzAxo5nPzhiimLkPx4tjVImZ242CYfttWpKHhcZGN+23sIH5HdhuuIH5AXibKdK2gdnzLWAPHz+BV42da3tDv4E3d5roWVUb/oZ4EpHKqj6T92v+tPsNcQPqkJw4vdwgKAAAAABJRU5ErkJggg=="},7571:function(t,e,n){"use strict";n.r(e);var i=n("06c9"),a=n.n(i);for(var s in i)"default"!==s&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=a.a},7688:function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"h5-register"},[i("v-uni-view",{staticClass:"h5-title"},[t._v("要房么")]),i("v-uni-view",{staticClass:"h5-content"},[i("v-uni-view",{staticClass:"h5-titles"},[t._v("注册")]),i("v-uni-view",{staticClass:"dataBox"},[i("v-uni-view",{staticClass:"phoneBox styles"},[i("v-uni-image",{staticClass:"imgs",attrs:{src:n("5754").replace(/^\./,"")}}),i("v-uni-input",{staticClass:"input",attrs:{type:"number","placeholder-style":"color:#fff;font-size:22rpx;",placeholder:"请输入您的手机号"},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}})],1),i("v-uni-view",{staticClass:"msgBox styles"},[i("v-uni-image",{staticClass:"imgs",attrs:{src:n("67da").replace(/^\./,"")}}),i("v-uni-input",{staticClass:"input",attrs:{type:"number","placeholder-style":"color:#fff;font-size:22rpx;",placeholder:"请填写验证码"},model:{value:t.code,callback:function(e){t.code=e},expression:"code"}}),0==t.timeflag?i("v-uni-view",{staticClass:"sendBox",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v("发送验证码")]):t._e(),1==t.timeflag?i("v-uni-view",{staticClass:"sendBox"},[t._v("还剩"+t._s(t.timeNumber)+"s")]):t._e()],1)],1),i("v-uni-view",{staticClass:"tips",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.jumps.apply(void 0,arguments)}}},[i("v-uni-text",[t._v("我已注册，去下载APP")]),i("v-uni-image",{staticClass:"logo",attrs:{src:n("98fa").replace(/^\./,"")}})],1),i("v-uni-view",{staticClass:"nextGo",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("下一步")]),t.tipflag?i("v-uni-view",{staticClass:"showtips"},[t._v(t._s(t.tipMsg))]):t._e()],1)],1)},s=[]},"91dc":function(t,e,n){var i=n("ba91");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("08a6a16b",i,!0,{sourceMap:!1,shadowMode:!1})},"98fa":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAACcElEQVRIS52VS29OURSGn5egE0QkVFSlA8xcBw2CKZpUGTGSMCDBxK0/QTTKAAkDCSY1cY/bD0BEXGcuCepWA2nCwCWpJe9nny+np985yp6c5OzsZ6+91rveJUpWREwBNgGrgQVAM/ADeAe8BG4CfZIGGyFU/BkRTUA3sAeYmPa/AR+B8cB0YFz6/xXoBQ5K+p5nDQNHxAzgItAOfAFOAueAx5J++WBEjAEWAhuBbcAk4B6wQdKHDF4HR0QLcBtoBa4DWyUNlKUqXeL0nALWAv3AcklOFTVwev4dYBFwAtgpaSjt+emtku43uiQixgLHgO3AI2CZ05KB9wE9KdLODJrAF4BOYIuksxXwKynybkk9iojJwCtgAjAve0oGiIiVwI20XwV3Kp8BP4E2gzcDp4HDkqyEESsiVqXX+PIquBWyG9hhsJ+6Hlgi6WGFrv8KjwjXyIyrBruaU63ZTFL/C09StLY/G+xu6pc0p0pauZznI++QdCt/LiJe1FQUEW6EQUmzRwnOF7MR+I3b32BXsg1oGkUq8lA30JlCtO5Kt/aAwefdjsBiSRZ4w1WQ3Qho0vyw4mVy65W0t0RulZHm8n8omVdNbm6Q18m55kp6X3jeimSR1nDDSFO0M4Hn9QZJP/fb+oBrwLqSlq6C2i8uAx223FpL50zobrLD48AuSZEzoRZJD0rSZMZRd5vtFVhaN6EEmJVs099LditJn6okGBF2PrthF/A22aa/f2wzl3xr2VAbeWb0fcCTgtF7VHlsZUbvSLskWcO19S+jydPBBZyWCu3zbt8jwIHK0VSIPhuma4D5gMeWl2ff02SlpcP0N3ANKRacyyBQAAAAAElFTkSuQmCC"},ba91:function(t,e,n){var i=n("24fb"),a=n("1de5"),s=n("f6b3");e=i(!1);var o=a(s);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.h5-register[data-v-318a5322]{width:100vw;height:100vh;background-image:url('+o+");background-repeat:no-repeat;background-size:100vw 100vh;padding-top:%?30?%;box-sizing:border-box}.h5-title[data-v-318a5322]{font-size:%?30?%;font-weight:700;color:#fff;text-align:center}.showtips[data-v-318a5322]{width:%?400?%;height:%?100?%;background:#fff;border-radius:%?16?%;position:fixed;left:%?175?%;z-index:1000;top:%?500?%;color:#000;font-size:%?28?%;line-height:%?100?%;text-align:center}.h5-content[data-v-318a5322]{margin:%?300?% 0 0 %?140?%}.h5-content .h5-titles[data-v-318a5322]{font-size:%?60?%;font-weight:700;color:#fff}.h5-content .dataBox[data-v-318a5322]{margin-top:%?135?%}.h5-content .dataBox .styles[data-v-318a5322]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.h5-content .dataBox .styles .imgs[data-v-318a5322]{display:block;width:%?40?%;height:%?40?%;margin-right:%?20?%}.h5-content .dataBox .styles .input[data-v-318a5322]{color:#fff;border-bottom:%?2?% solid #fff;box-sizing:border-box;width:%?400?%;line-height:%?60?%;padding-bottom:%?15?%}.h5-content .dataBox .msgBox[data-v-318a5322]{margin-top:%?69?%;margin-bottom:%?40?%}.h5-content .dataBox .msgBox .input[data-v-318a5322]{width:%?246?%}.h5-content .dataBox .msgBox .sendBox[data-v-318a5322]{width:%?134?%;height:%?54?%;text-align:center;box-sizing:border-box;line-height:%?54?%;border:%?2?% solid #fff;border-radius:%?8?%;color:#fff;font-size:%?22?%;margin-left:%?20?%}.h5-content .tips[data-v-318a5322]{color:#fff;font-size:%?22?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.h5-content .tips .logo[data-v-318a5322]{display:inline-block;width:%?22?%;height:%?22?%;margin-left:%?13?%}.h5-content .nextGo[data-v-318a5322]{margin-top:%?175?%;width:%?452?%;height:%?90?%;text-align:center;line-height:%?90?%;font-size:%?30?%;color:#fff;border:%?2?% solid #fff;border-radius:%?45?%}",""]),t.exports=e},d773:function(t,e,n){"use strict";n.r(e);var i=n("7688"),a=n("7571");for(var s in a)"default"!==s&&function(t){n.d(e,t,(function(){return a[t]}))}(s);n("2aba");var o,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"318a5322",null,!1,i["a"],o);e["default"]=c.exports},f6b3:function(t,e,n){t.exports=n.p+"static/img/registerBg.97975141.png"}}]);