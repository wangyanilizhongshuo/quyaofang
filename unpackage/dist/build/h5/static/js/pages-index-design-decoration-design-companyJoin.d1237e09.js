(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-design-decoration-design-companyJoin"],{"0d3e":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"h5-newInformation"},[a("v-uni-view",{staticClass:"zw"}),a("v-uni-view",{staticClass:"news-title title"},[a("v-uni-view",{staticClass:"left",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.backs.apply(void 0,arguments)}}},[a("v-uni-image",{staticClass:"img",attrs:{src:"/static/image/back.png"}})],1),a("v-uni-view",{staticClass:"field"},[t._v("公司入驻")])],1),a("v-uni-view",{staticStyle:{height:"75rpx"}}),a("v-uni-view",{staticClass:"contents"},[a("v-uni-form",{staticClass:"sale-form",on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"filed"},[t._v("姓名")]),a("v-uni-input",{staticClass:"inputs",style:""!=t.name?"color:#303133":"",attrs:{name:"name",placeholder:"请输入您的姓名"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"filed"},[t._v("联系电话")]),a("v-uni-input",{staticClass:"inputs",style:""!=t.phone?"color:#303133":"",attrs:{name:"phone",placeholder:"请输入您的联系电话"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"filed"},[t._v("公司名称")]),a("v-uni-input",{staticClass:"inputs",style:""!=t.company?"color:#303133":"",attrs:{name:"company",placeholder:"请输入您的公司名称"},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}})],1),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticClass:"filed"},[t._v("公司类别")]),a("v-uni-picker",{staticClass:"pickerBox",attrs:{value:t.index,range:t.companyCategoryList},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.PickerChange(e,1)}}},[a("v-uni-input",{staticClass:"uni-input",style:""!=t.companyCategory?"color:#303133":"",attrs:{disabled:!0,name:"companyCategory",placeholder:"请选择您公司的类别"},model:{value:t.companyCategory,callback:function(e){t.companyCategory=e},expression:"companyCategory"}})],1),a("v-uni-image",{staticClass:"arrow",attrs:{src:i("33ce").replace(/^\./,"")}})],1),a("v-uni-view",{staticClass:"com-intruduce"},[a("v-uni-view",{staticClass:"text-filed"},[t._v("简介")]),a("v-uni-textarea",{staticClass:"texts value",attrs:{name:"companyIntruduce","placeholder-style":"color:#888",placeholder:"请输入公司简介"},model:{value:t.companyIntruduce,callback:function(e){t.companyIntruduce=e},expression:"companyIntruduce"}})],1),a("v-uni-view",{staticClass:"getPhotos"},[a("v-uni-view",{staticClass:"left styleLR"},[t.licenseImageUrl?t._e():a("v-uni-image",{staticClass:"photo-bg",attrs:{src:"/static/image/photo-bg.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImage(1)}}}),t.licenseImageUrl?a("v-uni-image",{staticClass:"photo-bg",attrs:{src:t.licenseImageUrl[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(1,0)}}}):t._e(),t.licenseImageUrl?a("v-uni-image",{staticClass:"delImg",attrs:{src:i("d3fd").replace(/^\./,"")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.delPhoto(1,0)}}}):t._e(),a("v-uni-view",{staticClass:"fileds"},[t._v("营业执照照片")])],1),a("v-uni-view",{staticClass:"right styleLR"},[t.licenseImageUrls?t._e():a("v-uni-image",{staticClass:"photo-bg",attrs:{src:"/static/image/photo-bg.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImage(2)}}}),t.licenseImageUrls?a("v-uni-image",{staticClass:"photo-bg",attrs:{src:t.licenseImageUrls[0]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(2,0)}}}):t._e(),t.licenseImageUrls?a("v-uni-image",{staticClass:"delImg",attrs:{src:i("d3fd").replace(/^\./,"")},on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.delPhoto(2,0)}}}):t._e(),a("v-uni-view",{staticClass:"fileds"},[t._v("法人身份证正面照片")])],1)],1),a("v-uni-view",{staticClass:"com-photo"},[a("v-uni-view",{staticClass:"title"},[t._v("上传公司图片"),a("v-uni-text",{staticClass:"small"},[t._v("(至少上传3张，至多5张)")])],1),a("v-uni-view",{staticClass:"lists"},[t._l(t.companyList,(function(e,n){return a("v-uni-view",{key:n,staticClass:"image-box"},[a("v-uni-image",{staticClass:"imgs-bg",attrs:{src:e},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preview(3,n)}}}),a("v-uni-image",{staticClass:"del",attrs:{src:i("d3fd").replace(/^\./,"")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.delPhoto(3,n)}}})],1)})),t.companyList.length>=0&&t.companyList.length<5?a("v-uni-view",{staticClass:"image-box"},[a("v-uni-image",{staticClass:"imgs-bg",attrs:{src:i("1bfc").replace(/^\./,"")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getImage(3)}}})],1):t._e()],2),a("v-uni-view",{staticClass:"advice"},[t._v("(建议尺寸为800*800像素)")])],1),a("v-uni-button",{staticClass:"btn",attrs:{"form-type":"submit"}},[t._v("提交申请")])],1)],1)],1)},s=[]},"1bfc":function(t,e){t.exports="data:image/png;base64,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"},"33ce":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAC3klEQVRIS7XWTWgTQRQH8P+bJG0i9mIpiAdBRYrgxV4UwbOkVqlotQhFTxUKKpRm3UkRV2L3o2IqKn70oheFGkSxFT15k+IhuQmVVsRbiVUE0baR7JOFFNLBfOwm3WMm8//lbebNDKHC4zjOSWa+A4CY2ZBSPqj03SCfU6VJtm1/B7ClbDy9srKSMAzDDQKpc6rBcwA6yycw8/N8Pj8wMTGx3CheER4bG9sbCoVeA9iu4LORSOTYyMjIUiN4RdgLdRxnGzPPANinIAtCiG5N0+aD4lVhL9QwjM2xWGyKmbsVZMl13d5kMvk+CF4TLuHhaDR6F8B5BVlm5rNSyoxfvC54LdSyrMtEZAIQZZDLzLqU8oYf3BfsBdu23Q/gEYCoAt3PZrMXMplMsZ4f4Bv2Qk3TPCSEeAGgXVnxM+FwuD+RSPyuhQeCSyu+k5m9dtulIFkhRI+maYvV8MBwqfIOIpomov1K5V+J6Iiu6x8r4Q3BXmg6nY4VCoUnAI4ryE9mPiGlfPc/vGG41G4iGo2mAVxSKi8Q0YCu689UvCnwWqjjOBeZ+ZZ3opVBP3RdX7cIvbGmwX19faGurq7bRDSkVDen6/qeDam49D8/BdCrAPlisRgfHR3NNR02TbNdCPEKwEElfF4IEdc07XPTF1cqldoRiUTeqOc2gA+u6x5NJpPfmt5O4+PjXa7rehvIVnX3Wl1dPW0Yxp+mbyC2bR8G4J1IbQo6mcvlhurZr32vasuyzhHRJIBIGcrMfFVKmaq1R6+N+4Ity7pCRNeUNvzLzINSysf1onX3calH7xHRoBL+i5lPSSnf+kHrgg3D2NTa2jpFRD1K+CIz90gps37RmrBpmh1CiGkA604fAJ9CoVA8kUh8CYJWhS3L2klE3ivcrazcWWb2etS78Ad+ql3oZwEcUJJftrS0nBkeHt64C71t2wvK7cLXnarWq6hWcZyZHxJRGzNfl1LerBXmZ/wfSZscLknM870AAAAASUVORK5CYII="},"48cd":function(t,e,i){"use strict";i.r(e);var a=i("e0fa"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"66e5":function(t,e,i){"use strict";var a=i("8995"),n=i.n(a);n.a},8995:function(t,e,i){var a=i("b934");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("8684d0c8",a,!0,{sourceMap:!1,shadowMode:!1})},a37a:function(t,e,i){"use strict";i.r(e);var a=i("0d3e"),n=i("48cd");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("66e5");var o,c=i("f0c5"),l=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"3978d9e6",null,!1,a["a"],o);e["default"]=l.exports},b934:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.news-title[data-v-3978d9e6]{width:%?750?%;height:%?75?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;position:fixed;top:0;left:0;background-color:#fff;z-index:10}.news-title .field[data-v-3978d9e6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:center;font-weight:700;color:#313133;font-size:%?36?%}.getPhotos .styleLR .delImg[data-v-3978d9e6], .com-photo .lists .image-box .del[data-v-3978d9e6]{position:absolute;right:%?-20?%;top:%?-20?%;width:%?40?%;height:%?40?%;display:block}.zw[data-v-3978d9e6]{height:0;width:%?750?%;position:fixed;top:%?0?%;left:%?0?%;background-color:#fff;z-index:20}.news-title[data-v-3978d9e6]{border-bottom:%?2?% solid #eee}.news-title .left[data-v-3978d9e6]{width:%?60?%;height:%?75?%;line-height:%?75?%;position:absolute;left:%?30?%;top:%?7.5?%}.news-title .img[data-v-3978d9e6]{display:block;width:%?19?%;height:%?30?%;margin-top:%?23?%}.contents[data-v-3978d9e6]{width:%?750?%;padding:35px %?30?%;box-sizing:border-box}.contents .list[data-v-3978d9e6]{width:%?690?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;position:relative;top:%?0?%;left:%?0?%}.contents .list .filed[data-v-3978d9e6]{width:%?150?%;color:#303133}.contents .list .inputs[data-v-3978d9e6]{width:%?500?%;color:#adadad;text-align:right}.contents .list .pickerBox[data-v-3978d9e6]{width:%?540?%;color:#adadad;text-align:right}.contents .list .uni-input[data-v-3978d9e6]{width:%?500?%}.contents .list .arrow[data-v-3978d9e6]{display:block;width:%?23?%;height:%?36?%;position:absolute;top:%?32?%;right:%?0?%}.com-intruduce[data-v-3978d9e6]{width:%?750?%;padding:%?30?% %?0?% %?35?%;box-sizing:border-box;color:#303234;font-size:%?28?%}.com-intruduce .text-filed[data-v-3978d9e6]{font-weight:700;margin-bottom:%?36?%}.com-intruduce .texts[data-v-3978d9e6]{width:%?690?%;border:%?2?% solid #888;border-radius:%?4?%;padding:%?20?%;box-sizing:border-box;height:%?200?%}.getPhotos[data-v-3978d9e6]{width:%?690?%;padding:%?38?% %?15?% %?60?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.getPhotos .styleLR[data-v-3978d9e6]{width:%?310?%;text-align:center;position:relative;left:%?0?%;top:%?0?%}.getPhotos .styleLR .photo-bg[data-v-3978d9e6]{display:block;width:%?310?%;height:%?210?%;margin-bottom:%?40?%;border-radius:%?10?%}.getPhotos .styleLR .fileds[data-v-3978d9e6]{color:#303133;font-size:%?28?%}.com-photo[data-v-3978d9e6]{width:%?750?%;padding:%?37?% %?30?%;box-sizing:border-box;font-size:%?28?%}.com-photo .title[data-v-3978d9e6]{color:#303133;margin-bottom:%?36?%}.com-photo .title .small[data-v-3978d9e6]{color:#888}.com-photo .lists[data-v-3978d9e6]{width:%?690?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.com-photo .lists .image-box[data-v-3978d9e6]{position:relative;top:%?0?%;left:%?0?%;width:%?157?%;height:%?157?%;margin-right:%?30?%;margin-bottom:%?20?%}.com-photo .lists .image-box .imgs-bg[data-v-3978d9e6]{display:block;width:%?157?%;height:%?157?%}.com-photo .advice[data-v-3978d9e6]{margin-top:%?20?%;color:#888}.btn[data-v-3978d9e6]{width:%?750?%;height:%?100?%;position:fixed;left:%?0?%;bottom:%?0?%;text-align:center;line-height:%?100?%;color:#fff;background-color:#4270ed;border-radius:%?0?%;font-size:%?30?%}',""]),t.exports=e},d3fd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADn0lEQVRYR8WYS2gkRRjH//+eZCYBN4IgijdF8aIbxJOSZboqk8tcVHJS2IMKG9Grq2g2MuzL51GRKCqIj4uL4mE2kKSrg9GTohuPK+zNB7KHNYKJ09OfVNs99ow9PT2TidZhDt1V//r196qvhjjgWF1dnbQSS0tLrYNIcZjFzWbzxkql8iBJBWDWcZxbRWTaapD8IwzDKwAuiYjZ39//rF6v/1pUvxCI53mzAJ4n+RCAyAIFRktEPgVwXmt9adD8XJBmszkzPT39soicIOkMEst6LyIhgLf39vaeqdfrv/XT6AuysbFxtFQqXQBw+ygAGWt+aLfbi7VabSdLLxNkc3PzfpIXSc6MCSKSERFrkbrW+ste3X+BrK+v3z0xMfEFgOvHCZFoWZhSqTRXrVa/T+t3gWxvbx9ptVrfALjjMCBSmpcnJyfvnZub202edYH4vv+GiDx5yBCJm97UWnf26oDELvkWQOm/AAHQdhznnsRFHRDP8z4i+XDf9CJPiMhNAM4UBF0h+YuIvJWj+bHruo9EBdH+rK2t3VAul38iWc7ZZEUpddYY8zSAVwfAnFRKvWaMOZUHLiJ/hmF4S61WuxqB+L7/qIi8W+BLkw3yYIrM6WxF8jHXdd+LQDzPe5/k8QIgdkq0ked5tuSfS68RkWWt9fmCVkuWfqCUOh6BGGO+s4dYQZAOjDFmGcDZeN0ppdS5ISFskdvRWs8mILbiHRkCpBcGo0DE++0qpWbYaDScarUaJIE7Ckxs1SJBnCUvW1tbEwcFidwxFpBYZBTXpGPCusam69BWIbnruu7MqMGaFZhRNvm+f1JEXinqYpI7ruv+HaxDpm9ediQ1JJ1Ng5j+Sd8hClqRFB0Kpqug2RJfqVR+BFDphy8iZ7TWLxSMg6TonSa5kqPZXeLjMv+hiEQHUGaOiTzuOM7NItJVTfvNJ7kchuHPJN/JmdN96MWZcxcAW2H/3zYghnkdwFODomsc70UkuzGKQa4D8DWAO8exWY5GfquYctH2YTXPAK4FQXBsYWGhf/OcfIHv+/eJyMVDgLkWhmF9fn7+q15r9b1gGWNs8H4yRjddDoJgsdcSCVDuldMYY2PmJQBPHCCb2rZvLZfLz6avD4Utkp5orUPyORFZzCt66TW2H3Uc5wLJF3svU1lBXOjfgGShrcBTU1MPhGGoSB4FcBsAazU7fheRK/YQI+kFQfC5bYqLZt9QIFmitrGyzxuNhr31jzz+AntftDaV7q7AAAAAAElFTkSuQmCC"},e0fa:function(t,e,i){"use strict";i("99af"),i("d81d"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{name:"",phone:"",companyName:"",companyCategory:"",companyCategoryList:["设计","装潢"],companyIntruduce:"",licenseImageUrl:"",licenseImageUrls:"",companyList:[],msgList:"",headlists:[],positiveImage:"",negativeImage:"",categoryNum:""}},onReachBottom:function(){},onLoad:function(t){this.setData(t)},methods:{backs:function(){uni.navigateTo({url:"/pages/index/build-material/build-material"})},formSubmit:function(t){var e=this;e.msgList=t.detail.value;var i=e.headlists;if(i.length<3)return uni.showToast({title:"图片数量不满足要求"}),!1;uni.showModal({title:"数据存在不可二次更改,确定提交数据？",success:function(t){t.confirm?e.$h5.post("fitment/addfitment",{house_name:e.msgList.name,house_phone:e.msgList.phone,house_nick:e.msgList.company,house_type:e.categoryNum,house_intro:e.msgList.companyIntruduce,house_business:e.positiveImage,house_legal:e.negativeImage,house_img:i},(function(t){0==t.code&&uni.navigateTo({url:"/pages/index/submitSuccess/submitSuccess"})})):t.cancel},fali:function(t){}})},PickerChange:function(t,e){1==e&&(console.log(t.target.value),this.categoryNum=t.target.value,this.companyCategory=this.companyCategoryList[t.target.value])},getImage:function(t){var e=this,i=1;3==t&&(i=5),uni.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(i){var a=i.tempFilePaths;1==t?e.licenseImageUrl=a:2==t?e.licenseImageUrls=a:3==t&&(e.companyList=e.companyList.concat(i.tempFilePaths)),a.map((function(i){uni.uploadFile({url:"https://yaofangme.hzbixin.cn/Updimg/upload",filePath:i,name:"file",formData:{type:"design",user_token:e.user_token},success:function(i){var a="object"===typeof i.data?i.data:JSON.parse(i.data),n=a.data[0];1==t?e.positiveImage=n:2==t?e.negativeImage=n:3==t&&e.headlists.push(n)},fail:function(t){}})}))}})},preview:function(t,e){var i="",a="";1==t?(i=this.licenseImageUrl[0],a=this.licenseImageUrl):2==t?(i=this.licenseImageUrls[0],a=this.licenseImageUrls):3==t&&(i=this.companyList[e],a=this.companyList),uni.previewImage({current:i,urls:a,indicator:"number"})},delPhoto:function(t,e){if(1==t)this.positiveImage="",this.licenseImageUrl="";else if(2==t)this.negativeImage="",this.licenseImageUrls="";else if(3==t){var i=this.headlists,a=this.companyList;a.splice(e,1),i.splice(e,1),this.headlists=i,this.companyList=a,console.log(this.headlists)}}}};e.default=a}}]);