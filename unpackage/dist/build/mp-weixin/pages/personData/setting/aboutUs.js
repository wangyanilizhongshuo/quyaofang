(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personData/setting/aboutUs"],{2580:function(t,n,e){},"29a5":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{detailDescribe:""}},onLoad:function(){this.getList()},methods:{back:function(){t.navigateTo({url:"/pages/personData/setting/setting"})},getList:function(){var t=this;this.$h5.post("index/aboutus",{},(function(n){0==n.code&&(t.detailDescribe=n.data.text)}))}}};n.default=e}).call(this,e("543d")["default"])},"4a03":function(t,n,e){"use strict";e.r(n);var a=e("29a5"),u=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=u.a},5908:function(t,n,e){"use strict";var a=e("2580"),u=e.n(a);u.a},"64b8":function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var u=function(){var t=this,n=t.$createElement;t._self._c},i=[]},"707a":function(t,n,e){"use strict";(function(t){e("30bb");a(e("66fd"));var n=a(e("9eee"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"9eee":function(t,n,e){"use strict";e.r(n);var a=e("64b8"),u=e("4a03");for(var i in u)"default"!==i&&function(t){e.d(n,t,(function(){return u[t]}))}(i);e("5908");var o,r=e("f0c5"),c=Object(r["a"])(u["default"],a["b"],a["c"],!1,null,"2795b8df",null,!1,a["a"],o);n["default"]=c.exports}},[["707a","common/runtime","common/vendor"]]]);