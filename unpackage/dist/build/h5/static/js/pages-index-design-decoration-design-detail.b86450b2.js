(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-design-decoration-design-detail"],{"31c8":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{imgList:{type:Array,default:function(){return[]}},urlKey:{type:String,default:function(){return""}}},data:function(){return{currentIndex:0,dontFirstAnimation:!0}},onLoad:function(){console.log(this.imglist),console.log(3425)},methods:{swiperChange:function(t){this.dontFirstAnimation=!1,this.currentIndex=t.detail.current},clickImg:function(t){this.$emit("selected",t,this.currentIndex)}}};e.default=n},"4b8c":function(t,e,i){"use strict";var n=i("7a96"),a=i.n(n);a.a},"5de5":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-swiper",{staticClass:"image-container",attrs:{"previous-margin":"45rpx","next-margin":"45rpx",circular:!0,autoplay:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swiperChange.apply(void 0,arguments)}}},t._l(t.imgList,(function(e,n){return i("v-uni-swiper-item",{key:e[t.urlKey],class:t.currentIndex==n?"swiper-item":"swiper-item-side"},[i("v-uni-image",{class:t.currentIndex==n?"item-img":"item-img-side",style:t.dontFirstAnimation?"animation: none;":"",attrs:{mode:t.widthFix,src:e[t.urlKey],"lazy-load":!0},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clickImg(e)}}})],1)})),1)},s=[]},7756:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.topss[data-v-7aa6f45a]{width:%?750?%;height:0;position:fixed;top:%?0?%;left:%?0?%;background-color:#fff;z-index:10}uni-button[data-v-7aa6f45a]::after{border:none}.h5-houseDetail[data-v-7aa6f45a]{padding-top:0;box-sizing:border-box}.back[data-v-7aa6f45a]{width:%?60?%;height:%?60?%;display:block;position:fixed;left:%?30?%;top:0;z-index:10}.h5-scrollImg[data-v-7aa6f45a]{width:%?750?%;height:%?560?%;position:relative;left:0;top:%?-50?%;display:-webkit-box;display:-webkit-flex;display:flex}.h5-content[data-v-7aa6f45a]{position:relative;top:%?-80?%;left:0}.h5-content .content-first[data-v-7aa6f45a]{border-bottom:%?20?% solid #f1f1f1}.h5-content .content-first .h5-up[data-v-7aa6f45a]{width:%?750?%;height:%?120?%;padding:%?0?% %?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.h5-content .content-first .h5-up .left .filed[data-v-7aa6f45a]{color:#262626;font-weight:700;font-size:%?40?%;margin-right:%?20?%}.h5-content .content-first .h5-up .left .small-flag[data-v-7aa6f45a]{display:inline-block;width:%?80?%;height:%?40?%;text-align:center;line-height:%?40?%;color:#fff;background-color:#4270ed;font-size:%?24?%;border-radius:%?8?%}.h5-content .content-first .h5-up .right[data-v-7aa6f45a]{width:%?90?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.h5-content .content-first .h5-up .right .imgs[data-v-7aa6f45a]{display:block;width:%?34?%;height:%?34?%}.h5-content .content-first .h5-up .right .field[data-v-7aa6f45a]{color:#262626;font-size:%?24?%}.h5-content .content-first .h5-down[data-v-7aa6f45a]{width:%?750?%;height:%?165?%;padding:%?30?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.h5-content .content-first .h5-down .title[data-v-7aa6f45a]{color:#262626;font-size:%?38?%;font-weight:700}.h5-content .content-first .h5-down .contents[data-v-7aa6f45a]{display:-webkit-box;display:-webkit-flex;display:flex;width:%?550?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.h5-content .content-first .h5-down .contents .styless[data-v-7aa6f45a]{font-size:%?24?%}.h5-content .content-first .h5-down .contents .styless .field[data-v-7aa6f45a]{color:#989898;display:inline-block;margin-right:%?24?%}.h5-content .content-first .h5-down .contents .styless .value[data-v-7aa6f45a]{color:#262626}.h5-content .content-first .h5-down .contents .styless .values[data-v-7aa6f45a]{color:#4270ed}.content-second[data-v-7aa6f45a]{width:%?750?%;padding:%?40?% %?30?%;box-sizing:border-box}.content-second .title[data-v-7aa6f45a]{font-size:%?38?%;font-weight:700;color:#262626;margin-bottom:%?38?%}.content-second .img-content[data-v-7aa6f45a]{display:block;width:%?690?%;height:%?380?%}.content-second .content[data-v-7aa6f45a]{width:%?690?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;margin:%?25?% 0;color:#262626;font-size:%?24?%}.content-second .bottom-img[data-v-7aa6f45a]{width:%?690?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.content-second .bottom-img .imgs[data-v-7aa6f45a]{display:block;width:%?336?%;height:%?180?%;border-radius:%?10?%}',""]),t.exports=e},"7a96":function(t,e,i){var n=i("7756");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2d8f4e14",n,!0,{sourceMap:!1,shadowMode:!1})},"7b36":function(t,e,i){"use strict";i.r(e);var n=i("7c98"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},"7b7e":function(t,e){t.exports="data:image/png;base64,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"},"7c98":function(t,e,i){"use strict";var n=i("4ea4");i("ac1f"),i("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("dc53")),s={data:function(){return{imgList:[],id:"",type:"",dataList:"",typeField:""}},components:{carousel:a.default},onLoad:function(t){this.setData(t),this.getData(),console.log(t),0==this.type?(console.log(111),this.typeField="设计"):this.typeField="装潢"},methods:{back:function(){uni.navigateBack()},selectedBanner:function(t,e){},getData:function(){var t=this;t.$h5.post("fitment/fitmentdetails",{id:t.id,type:t.type},(function(e){if(0==e.code){t.dataList=e.data;var i=t.dataList.house_img.split(",");for(var n in i){var a={url:"https://yaofangme.hzbixin.cn/"+i[n],id:n};t.$set(t.imgList,n,a)}console.log(t.dataList)}}))}}};e.default=s},"96b0":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".image-container[data-v-7915940f]{width:%?750?%;height:%?550?%}.item-img[data-v-7915940f]{width:%?630?%;height:%?500?%;border-radius:%?14?%;-webkit-animation:to-big-data-v-7915940f .3s;animation:to-big-data-v-7915940f .3s}.swiper-item[data-v-7915940f]{width:%?630?%;height:%?550?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.item-img-side[data-v-7915940f]{width:%?630?%;height:%?460?%;border-radius:%?14?%;-webkit-animation:to-mini-data-v-7915940f .3s;animation:to-mini-data-v-7915940f .3s}.swiper-item-side[data-v-7915940f]{width:%?630?%;height:%?460?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes to-mini-data-v-7915940f{from{height:%?500?%}to{height:%?460?%}}@keyframes to-mini-data-v-7915940f{from{height:%?500?%}to{height:%?460?%}}@-webkit-keyframes to-big-data-v-7915940f{from{height:%?460?%}to{height:%?500?%}}@keyframes to-big-data-v-7915940f{from{height:%?460?%}to{height:%?500?%}}",""]),t.exports=e},b29a:function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return n}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"topss"}),n("v-uni-view",{staticClass:"h5-houseDetail"},[n("v-uni-image",{staticClass:"back",attrs:{src:i("7b7e").replace(/^\./,"")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),n("v-uni-view",{staticClass:"h5-scrollImg"},[n("carousel",{attrs:{"img-list":t.imgList,"url-key":"url"}})],1),n("v-uni-view",{staticClass:"h5-content"},[n("v-uni-view",{staticClass:"content-first"},[n("v-uni-view",{staticClass:"h5-up"},[n("v-uni-view",{staticClass:"left"},[n("v-uni-text",{staticClass:"filed"},[t._v(t._s(t.dataList.house_nick))]),n("v-uni-text",{staticClass:"small-flag"},[t._v(t._s(t.typeField))])],1)],1),n("v-uni-view",{staticClass:"h5-down"},[n("v-uni-view",{staticClass:"title"},[t._v("联系人")]),n("v-uni-view",{staticClass:"contents"},[n("v-uni-view",{staticClass:"left styless"},[n("v-uni-text",{staticClass:"field"},[t._v("姓名")]),n("v-uni-text",{staticClass:"value"},[t._v(t._s(t.dataList.house_name))])],1),n("v-uni-view",{staticClass:"right styless"},[n("v-uni-text",{staticClass:"field"},[t._v("电话")]),n("v-uni-text",{staticClass:"values"},[t._v("15255132094")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"content-second"},[n("v-uni-view",{staticClass:"title"},[t._v("简介")]),n("v-uni-image",{staticClass:"img-content",attrs:{src:t.imgList[0].url}}),n("v-uni-view",{staticClass:"content"},[t._v(t._s(t.dataList.house_intro))]),n("v-uni-view",{staticClass:"bottom-img"},[n("v-uni-image",{staticClass:"imgs",attrs:{src:t.imgList[1].url}}),n("v-uni-image",{staticClass:"imgs",attrs:{src:t.imgList[2].url}})],1)],1)],1)],1)],1)},s=[]},ba1d:function(t,e,i){"use strict";var n=i("f686"),a=i.n(n);a.a},dc53:function(t,e,i){"use strict";i.r(e);var n=i("5de5"),a=i("ea73");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("ba1d");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7915940f",null,!1,n["a"],o);e["default"]=r.exports},dc9e:function(t,e,i){"use strict";i.r(e);var n=i("b29a"),a=i("7b36");for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);i("4b8c");var o,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"7aa6f45a",null,!1,n["a"],o);e["default"]=r.exports},ea73:function(t,e,i){"use strict";i.r(e);var n=i("31c8"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a},f686:function(t,e,i){var n=i("96b0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("25e828a6",n,!0,{sourceMap:!1,shadowMode:!1})}}]);