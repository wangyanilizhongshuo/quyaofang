(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personData/repairName"],{"29df":function(n,t,e){"use strict";var a=e("3eb8"),c=e.n(a);c.a},3712:function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},"3eb8":function(n,t,e){},"5e86":function(n,t,e){"use strict";e.r(t);var a=e("e1fc"),c=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=c.a},8977:function(n,t,e){"use strict";(function(n){e("30bb");a(e("66fd"));var t=a(e("9bcb"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"9bcb":function(n,t,e){"use strict";e.r(t);var a=e("3712"),c=e("5e86");for(var u in c)"default"!==u&&function(n){e.d(t,n,(function(){return c[n]}))}(u);e("29df");var o,i=e("f0c5"),r=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,"d5cce824",null,!1,a["a"],o);t["default"]=r.exports},e1fc:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{name:""}},onReachBottom:function(){},onLoad:function(n){this.setData(n)},methods:{clearName:function(){this.name=""},back:function(){n.navigateBack()},submit:function(){var t=this;this.$h5.post("user/updname",{nick:t.name},(function(t){0==t.code&&n.navigateBack()}))}}};t.default=e}).call(this,e("543d")["default"])}},[["8977","common/runtime","common/vendor"]]]);