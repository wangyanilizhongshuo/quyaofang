(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/houseDetail/houseDetail"],{"0aae":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n("66fd")),a=u(n("6dad")),i=u(n("9235"));function u(e){return e&&e.__esModule?e:{default:e}}Object.assign(o.default.prototype,i.default),Object.assign(o.default.prototype,a.default);var l={globalData:{img:"https://yaofangme.hzbixin.cn/"},onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=l},1407:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n("5e6d"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){n.e("components/vear-carousel/vear-carousel").then(function(){return resolve(n("3925"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{imgList:[],fieldList:[],collectionFlag:!0,maskFlag:!1,masksignal:!1,scrollTops:"",arrs:{position:"fixed",top:"0",left:"0"},labelList:[{value:"押一付三"},{value:"押一付一"},{value:"中介费"},{value:"服务费"},{value:"近地铁"},{value:"租金"},{value:"季付"}],types:"",ids:"",houseValue:"",shareDiaFlag:!1}},onShareAppMessage:function(e){if("button"===e.from||"menu"===e.from)return{title:"去找房"}},onPageScroll:function(e){this.scrollTops=e.scrollTop},components:{carousel:c},onLoad:function(e){this.setData(e),this.random(),this.getList()},methods:{back:function(){e.navigateBack()},selectedBanner:function(e,t){},getCollet:function(){var e=this;e.collectionFlag=!e.collectionFlag,console.log(),e.$h5.post("collect/clickcollect",{id:e.ids,type:2,class:e.types},(function(e){0==e.code&&console.log(e)}))},sendMsg:function(){var e=this,t=[];e.labelList.map((function(e){1==e.active&&t.push(e.value)})),t=t.join(","),e.$h5.post("Message/clickmsg",{content:t,release:e.houseValue.h_phone,h_resource:1,h_id:e.ids,h_type:e.types},(function(t){0==t.code&&(e.maskFlag=!1)}))},getLocat:function(){e.getLocation({type:"gcj02",success:function(t){var n=t.latitude,o=t.longitude;e.openLocation({latitude:n,longitude:o,success:function(){console.log("success")}})}})},call:function(){e.makePhoneCall({phoneNumber:this.houseValue.h_phone,success:function(e){},fail:function(e){console.log(e)}})},stopMove:function(){this.maskFlag=!0,this.arrs.top="0rpx",this.arrs.left="0rpx"},random:function(){var e=this.labelList;e.map((function(t,n,o){var a=parseInt(10*Math.random()+20);(n-1)%3==0&&(e[n].margin=a+"rpx"),t.active=0}))},activeChoice:function(e){if(0==this.labelList[e].active){var t=u(u({},this.labelList[e]),{},{active:1});this.$set(this.labelList,e,t)}else if(1==this.labelList[e].active){var n=u(u({},this.labelList[e]),{},{active:0});this.$set(this.labelList,e,n)}},getList:function(){var e=this;e.$h5.get("sell/particulars?",{type:e.types,id:e.ids},(function(t){0==t.code&&(e.houseValue=t.data,e.fieldList.push({filed:"所在区域",value:e.houseValue.h_area}),e.fieldList.push({filed:"建成时间",value:e.houseValue.h_activate}),e.fieldList.push({filed:"房屋用途",value:e.houseValue.h_use}),e.fieldList.push({filed:"装修情况",value:e.houseValue.h_fitment}),e.fieldList.push({filed:"房屋年限",value:e.houseValue.h_year}),e.fieldList.push({filed:"交易权属",value:e.houseValue.h_deal}),e.fieldList.push({filed:"产权所属",value:e.houseValue.h_prop}),e.houseValue.h_img.map((function(t){t=o.default.globalData.img+t,e.imgList.push({url:t}),console.log(t)})),0==e.houseValue.is_collect?e.collectionFlag=!1:e.collectionFlag=!0)}))},getLocation:function(){e.chooseLocation({success:function(e){},fail:function(t){e.showModal({title:"温馨提示",content:"您已拒绝定位,请开启",confirmText:"去设置",success:function(t){t.confirm&&e.openSetting()}})}})}}};t.default=s}).call(this,n("543d")["default"])},"149c":function(e,t,n){"use strict";n.r(t);var o=n("932b"),a=n("84b3");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("8df5");var u,l=n("f0c5"),c=Object(l["a"])(a["default"],o["b"],o["c"],!1,null,"3a1bf0ee",null,!1,o["a"],u);t["default"]=c.exports},"5e6d":function(e,t,n){"use strict";n.r(t);var o=n("a1c2");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("a11f");var i,u,l,c,s=n("f0c5"),r=Object(s["a"])(o["default"],i,u,!1,null,null,null,!1,l,c);t["default"]=r.exports},"84b3":function(e,t,n){"use strict";n.r(t);var o=n("1407"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"8df5":function(e,t,n){"use strict";var o=n("ce91"),a=n.n(o);a.a},"932b":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,(e.houseValue.h_money/e.houseValue.h_qrea).toFixed(2));e._isMounted||(e.e0=function(t){e.maskFlag=!1},e.e1=function(t){e.shareDiaFlag=!1}),e.$mp.data=Object.assign({},{$root:{g0:n}})},i=[]},a11f:function(e,t,n){"use strict";var o=n("b5f2"),a=n.n(o);a.a},a1c2:function(e,t,n){"use strict";n.r(t);var o=n("0aae"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},ae45:function(e,t,n){"use strict";(function(e){n("30bb");o(n("66fd"));var t=o(n("149c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},b5f2:function(e,t,n){},ce91:function(e,t,n){}},[["ae45","common/runtime","common/vendor"]]]);