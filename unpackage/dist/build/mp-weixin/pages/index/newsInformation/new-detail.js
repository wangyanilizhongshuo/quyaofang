(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/newsInformation/new-detail"],{"2c70":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{id:"",dataList:""}},onReachBottom:function(){},onLoad:function(t){this.setData(t),console.log(this.id),this.getData()},methods:{backs:function(){t.navigateTo({url:"/pages/index/newsInformation/newsInformation"})},getData:function(){var t=this;console.log(t.id),t.$h5.post("news/newsdetails",{id:t.id},(function(n){0==n.code&&(t.dataList=n.data,console.log(t.dataList))}))}}};n.default=e}).call(this,e("543d")["default"])},"37f5":function(t,n,e){"use strict";(function(t){e("30bb");a(e("66fd"));var n=a(e("5618"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},5618:function(t,n,e){"use strict";e.r(n);var a=e("b40e"),o=e("f02e");for(var i in o)"default"!==i&&function(t){e.d(n,t,(function(){return o[t]}))}(i);e("ce55");var c,u=e("f0c5"),f=Object(u["a"])(o["default"],a["b"],a["c"],!1,null,"7839d77c",null,!1,a["a"],c);n["default"]=f.exports},a5dc:function(t,n,e){},b40e:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return a}));var o=function(){var t=this,n=t.$createElement;t._self._c},i=[]},ce55:function(t,n,e){"use strict";var a=e("a5dc"),o=e.n(a);o.a},f02e:function(t,n,e){"use strict";e.r(n);var a=e("2c70"),o=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,(function(){return a[t]}))}(i);n["default"]=o.a}},[["37f5","common/runtime","common/vendor"]]]);