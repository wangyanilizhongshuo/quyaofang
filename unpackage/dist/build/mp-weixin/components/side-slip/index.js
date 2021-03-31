(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/side-slip/index"],{4795:function(t,e,n){"use strict";var i=n("73d2"),o=n.n(i);o.a},"4b54":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return i}));var o=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"73d2":function(t,e,n){},"8c62":function(t,e,n){"use strict";n.r(e);var i=n("4b54"),o=n("e4ee");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("4795");var c,s=n("f0c5"),a=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"6ec245bc",null,!1,i["a"],c);e["default"]=a.exports},a6ac:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{},data:function(){return{x:0,move:0,open:!1}},watch:{},mounted:function(){var e=t.getSystemInfoSync(),n=e.windowWidth;this.deleteBtnWidth=(n||375)/375*160},methods:{remove:function(){this.move=0,this.open=!1,this.$emit("remove")},change:function(t){this.x=t.detail.x},touchend:function(){var t=this.x;this.open?t>20-this.deleteBtnWidth?(this.move=0,this.open=!1):(this.move=-this.deleteBtnWidth,this.open=!0):t<-20?(this.move=-this.deleteBtnWidth,this.open=!0):(this.move=0,this.open=!1)}}};e.default=n}).call(this,n("543d")["default"])},e4ee:function(t,e,n){"use strict";n.r(e);var i=n("a6ac"),o=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/side-slip/index-create-component',
    {
        'components/side-slip/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8c62"))
        })
    },
    [['components/side-slip/index-create-component']]
]);
