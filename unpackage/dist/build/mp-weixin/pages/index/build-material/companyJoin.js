(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/build-material/companyJoin"],{3178:function(e,t,a){"use strict";var i;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return s})),a.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement;e._self._c},s=[]},"676a":function(e,t,a){"use strict";(function(e){a("30bb");i(a("66fd"));var t=i(a("caca"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("543d")["createPage"])},7335:function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{name:"",phone:"",companyName:"",companyCategory:"",comCateNum:"",companyCategoryList:[],companyIntruduce:"",licenseImageUrl:"",licenseImageUrls:"",companyList:[],msgList:"",headlists:[],positiveImage:"",negativeImage:""}},onReachBottom:function(){},onLoad:function(e){this.setData(e),this.getTypes()},methods:{backs:function(){e.navigateTo({url:"/pages/index/build-material/build-material"})},getTypes:function(){var e=this;this.$h5.get("fitment/findtype",{},(function(t){var a=t.data;a.map((function(t){e.companyCategoryList.push(t.house_type)}))}))},formSubmit:function(t){var a=this;a.msgList=t.detail.value;a.headlists;if(console.log(a.headlists.length),a.headlists.length<3)return e.showToast({title:"继续选择图片"}),!1;e.showModal({title:"数据存在不可二次更改,确定提交数据？",success:function(t){t.confirm?a.$h5.post("fitment/addhousehold",{house_name:a.msgList.name,house_phone:a.msgList.phone,house_nick:a.msgList.company,house_type:a.comCateNum,house_intro:a.msgList.companyIntruduce,house_business:a.positiveImage,house_legal:a.negativeImage,house_img:a.headlists},(function(t){0==t.code&&e.navigateTo({url:"/pages/index/submitSuccess/submitSuccess"})})):t.cancel}})},PickerChange:function(e,t){1==t&&(this.comCateNum=e.target.value,this.companyCategory=this.companyCategoryList[e.target.value])},getImage:function(t){var a=this,i=1;3==t&&(i=5),e.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var n=i.tempFilePaths;1==t?a.licenseImageUrl=n:2==t?a.licenseImageUrls=n:3==t&&(a.companyList=a.companyList.concat(i.tempFilePaths)),n.map((function(i){e.uploadFile({url:"https://yaofangme.hzbixin.cn/Updimg/upload",filePath:i,name:"file",formData:{type:"household",user_token:a.user_token},success:function(e){var i="object"===typeof e.data?e.data:JSON.parse(e.data),n=i.data[0];1==t?a.positiveImage=n:2==t?a.negativeImage=n:3==t&&a.headlists.push(n)},fail:function(e){}})}))}})},preview:function(t,a){var i="",n="";1==t?(i=this.licenseImageUrl[0],n=this.licenseImageUrl):2==t?(i=this.licenseImageUrls[0],n=this.licenseImageUrls):3==t&&(i=this.companyList[a],n=this.companyList),e.previewImage({current:i,urls:n,indicator:"number"})},delPhoto:function(e,t){if(1==e)this.positiveImage="",this.licenseImageUrl="";else if(2==e)this.negativeImage="",this.licenseImageUrls="";else if(3==e){var a=this.headlists,i=this.companyList;i.splice(t,1),a.splice(t,1),this.headlists=a,this.companyList=i}}}};t.default=a}).call(this,a("543d")["default"])},"87c0":function(e,t,a){"use strict";a.r(t);var i=a("7335"),n=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"8ef7":function(e,t,a){"use strict";var i=a("c312"),n=a.n(i);n.a},c312:function(e,t,a){},caca:function(e,t,a){"use strict";a.r(t);var i=a("3178"),n=a("87c0");for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("8ef7");var o,c=a("f0c5"),u=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"24a7b9dc",null,!1,i["a"],o);t["default"]=u.exports}},[["676a","common/runtime","common/vendor"]]]);