(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personData/setting/addRegisterCode"],{"1db7":function(e,t,n){"use strict";var o=n("462f"),a=n.n(o);a.a},"23e1":function(e,t,n){"use strict";n.r(t);var o=n("e9ec"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"36b8":function(e,t,n){"use strict";(function(e){n("30bb");o(n("66fd"));var t=o(n("6fb6"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},3704:function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"462f":function(e,t,n){},"6fb6":function(e,t,n){"use strict";n.r(t);var o=n("3704"),a=n("23e1");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("1db7");var c,s=n("f0c5"),u=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"b28094e0",null,!1,o["a"],c);t["default"]=u.exports},e9ec:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{phone:"15255132094",code:"",sendCodeTime:60,sendFlag:!1,tipsFlag:!1,tipsMsg:""}},onReachBottom:function(){},onLoad:function(){},methods:{back:function(){e.navigateBack()},clearName:function(){this.password=""},sendCode:function(){this.sendFlag=!0;var e=this;e.$h5.post("code/sendcode",{phone:e.phone},(function(t){if(0==t.code)var n=setInterval((function(){e.sendCodeTime=e.sendCodeTime-1,e.sendCodeTime<1&&(e.sendCodeTime=60,e.sendFlag=!1,clearInterval(n))}),1e3)}))},submit:function(){this.$h5.post("login/logincode",{user:this.phone,code:this.code},(function(t){0==t.code?e.navigateTo({url:"/pages/personData/setting/reRepairPwd"}):(that.tipsFlag=!0,that.tipsMsg=t.message,setTimeout((function(){that.tipsFlag=!0}),2500))}))}}};t.default=n}).call(this,n("543d")["default"])}},[["36b8","common/runtime","common/vendor"]]]);