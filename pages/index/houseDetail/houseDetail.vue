<template>
	<view :style="{top:(maskFlag || shareDiaFlag) ==true?arrs.top:'',left:(maskFlag || shareDiaFlag)==true?arrs.left:'',
	  position:(maskFlag || shareDiaFlag)==true?arrs.position:''}">
	 <view class="topss"></view>
	 <!-- <view class="h5-houseDetail" :style="{left:0;}"> -->
	  <view class="h5-houseDetail"></view>
		<image class="back" @tap.stop="back"  src="../../../static/image/houseDetai-whiteBack.png"></image>
		<view class="h5-scrollImg">
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"></carousel>
		    <!-- <image class="img"  src="/static/image/houseDetai-whiteBack.png"></image> -->
		</view>
		<view class="h5-content"   >
			<view class="content-first">
				<view class="first">
					 <view class="left">
						 <view class="left-top">
							 <text class="money">{{houseValue.h_money}}</text>
							 <text class="company">万/套</text>
							 <text  class="area">{{(houseValue.h_money/houseValue.h_qrea).toFixed(2)*10000}}元/㎡</text>
						 </view>
						 <view class="left-bottom">出售·{{houseValue.h_city}}{{houseValue.h_area}}{{houseValue.h_charge}}</view>
					 </view>
					 <!-- <button class="right" open-type="share">
					  -->
					   <!-- <button class="right"  @tap="shareDiaFlag=true">
						 <image  class="image" src="../../../static/image/houseDetail-share.png"></image>
					     <view class="share">分享</view>
					 </button> -->
				</view>
				<view class="second">
					<view class="left-1 list">
						<view class="top">建筑面积</view>
						<view class="down">{{houseValue.h_qrea}}㎡</view>
					</view>
					<view class="left-2 list">
						<view class="top">朝向</view>
						<view class="down">{{houseValue.h_orientation}}</view>
					</view>
					<view class="right-1  list">
						<view class="top">户型</view>
						<view class="down">{{houseValue.h_housetype}}</view>
					</view>
					<view class="right-2 list">
						<view class="top">楼层</view>
						<view class="down">{{houseValue.h_louceng}}</view>
					</view>
				</view>
				<view class="third">
					 <view class="list-detail" v-for="(item,index) in fieldList" :key="index">
						 <text class="field">{{item.filed}}</text>
						 <text class="detail-msg">{{item.value}}</text>
					 </view>
				</view>
			</view>
			<view class="content-second">
				<view class="contents">
					<view class="field">配套设施</view>
					<view class="details">{{houseValue.h_facility}}</view>
				</view>
			</view>
			<view class="content-third" @tap.stop='getLocation'>
				<view class="left">
					<image class="left-img" src="/static/image/houseDetail-map.png"></image>
					<text  class="values">{{houseValue.h_charge}}</text>
				</view>
				<view class="right" @tap.stop="getLocat">
					<text class="areas">周边</text>
					<image class="right-img" src="/static/image/houseDetail-rightArrow.png"></image>
				</view>
			</view>
			<view class="content-fourth">
				<view class="fourth-contents">
					<view class="title">房源简介</view>
					<view class="contents">
						{{houseValue.h_intro}}
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="left">
					<image  class="img" v-if="collectionFlag" @tap.stop="getCollet" src="../../../static/image/houseDetail-collectLight.png"></image>
					<image class="img" v-if="!collectionFlag" @tap.stop="getCollet" src="../../../static/image/houseDetail-collect.png"></image>
					<view class="fields">收藏</view>
				</view>
				<view class="center footer-style" @tap.stop="stopMove">
					留言咨询
				</view>
				<view class="right footer-style" @tap.stop="call">
					电话咨询
				</view>
			</view>
		</view>
		<!-- 弹框 -->
		<view class="message-dialog-mask" v-if='maskFlag'   ></view>
		<view class="message-dialog"  v-if='maskFlag'  >
			 <image class="image" src="../../../static/image/houseDetail-dialogMask.png" @tap="maskFlag=false"></image>
			 <view class="title">常见问题</view>
			 <view class="contents">
				 <!-- listActive listInactive-->
				 <view class="list " @tap.stop="activeChoice(index)" :style="{'margin-left':item.margin,'margin-right':item.margin}"   v-for="(item,index) in labelList" :key="index" :class="item.active ==0?'listInactive':'listActive'">{{item.value}}</view>
			 </view>
			 <view class="btn" @tap.stop="sendMsg">提交</view>
		</view>
	  <view class="shareMask" v-if="shareDiaFlag"></view>
	 <view class="shareDialog" v-if="shareDiaFlag">
			<view class="top">
	               <view class="left styless">
					   <image  class="logo-img" src="../../../static/image/weixin-logo.png"></image>
					   <view class="wx-word word">分享给好友</view>
				   </view>
				   <view class="right styless">
					   <image  class="logo-img" src="../../../static/image/pengyouquan.png"></image>
					   <view class="pyq-word word">分享到朋友圈</view>
				   </view>
			</view>
			<view class="down" @tap="shareDiaFlag=false">取消</view>
		</view>
		
</view>	</view>
</template>
<script>
	import app from '../../../App.vue'
	// 轮播图 https://ext.dcloud.net.cn/plugin?id=2358
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		data() {
			return {
				 imgList: [],
				fieldList:[],
				
			    // 是否收藏 
				collectionFlag:true,
				// 遮罩层
				maskFlag:false,
				masksignal:false,
				scrollTops:'',
				arrs:{
					position:'fixed',
					top:'0',
					left:'0'
				},
				// 弹框出来的选项
				labelList:[{value:'押一付三'},{value:'押一付一'},{value:'中介费'},{value:'服务费'},{value:'近地铁'},
				           {value:'租金'},{value:'季付'}],
			   types:'',
			   ids:'',
			   
			   houseValue:'',
			  shareDiaFlag:false
					
			}
		},
		onShareAppMessage: function (res) {
		  let _this = this;
		   if (res.from === 'button' || res.from ==='menu' ) {// 来自页面内分享按钮
		       return {
		         title: "去找房",
		          // path: "/pages/index/index?" + _this.getShareUrlParams()
		       };
		      }
		},
		onPageScroll(Object){
				this.scrollTops=Object.scrollTop;
		},
		components:{
			carousel
		},
		
		onLoad(options){
			this.setData(options);
			this.random();
			this.getList()
		},
		methods: {
			 // 最上方的返回
			 back(){
				 uni.navigateBack()
			 },
			// 轮播图的插件
			 selectedBanner(item, index) {
			      // console.log('🥒', item, index);
			 },
			 //是否收藏
			 getCollet(){
				 let that=this;
				that.collectionFlag=(!that.collectionFlag);
				console.log()
				 that.$h5.post('collect/clickcollect',{
					 id:that.ids,
					 type:2,
					 class:that.types
				 },(res)=>{
					 if(res.code ==0){
						 console.log(res)
						 
					 }
				 })
			 },
			 sendMsg(){
				 let that=this;
				 let aa=[];
				 that.labelList.map((res)=>{
					 if(res.active==1){
						  aa.push(res.value)
					 }
				 })
				 aa=aa.join(',');
				 that.$h5.post('Message/clickmsg',{
					 content:aa,
					 release:that.houseValue.h_phone,
					 h_resource:1,
					 h_id:that.ids,
					 h_type:that.types
				 },(res)=>{
					 if(res.code ==0){
						 that.maskFlag=false
					 }
				 })
				
			 },
			 getLocat(){
				 uni.getLocation({
				     type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				     success: function (res) {
				         const latitude = res.latitude;
				         const longitude = res.longitude;
				         uni.openLocation({
				             latitude: latitude,
				             longitude: longitude,
				             success: function () {
				                 console.log('success');
				             }
				         });
				     }
				 });
			 },
			 // 打电话
			 call(){
				 uni.makePhoneCall({
				     phoneNumber: this.houseValue.h_phone, //仅为示例
					 success(res){
						 // console.log(res);
						 // console.log('sucecess')
					 },
					 fail(res){
						console.log(res) 
					 }
				 });
			 },
			 // 留言
			 stopMove(){
				    this.maskFlag=true;
					this.arrs.top=0+'rpx';
					this.arrs.left=0+'rpx';
			 },
			 random(){
				 let labelLists=this.labelList;
				 labelLists.map((currentValue,index,arr)=>{
					  let a=  parseInt((Math.random()*10) +20);
					  if((index-1)%3==0){
						   labelLists[index].margin=a+'rpx';
					  }
					   currentValue.active=0;
				 })
			 },
			 activeChoice(index){
				  // this.$set(this.labelList, index, 1);
				 // this.$set(this.labelList[index],'active',1);
				 if (this.labelList[index].active == 0) {
					   const item = {
						 ...this.labelList[index],
						 active:1
					   };
				       this.$set(this.labelList, index, item);
				 } else if(this.labelList[index].active == 1)  {
					   const item = {
						 ...this.labelList[index],
						 active: 0
					   };
					   this.$set(this.labelList, index, item);
				 }
			 },
			 // 获取数据列表
              getList(){
				  let that=this;
				  that.$h5.get('sell/particulars?',{
					  type:that.types,
					  id:that.ids
				  },(res)=>{
					  if(res.code ==0){
						  that.houseValue=res.data;
						  // console.log(that.houseValue)
						  that.fieldList.push({filed:'所在区域',value:that.houseValue.h_area});
						  that.fieldList.push({filed:'建成时间',value:that.houseValue.h_activate});
						  that.fieldList.push({filed:'房屋用途',value:that.houseValue.h_use});
						  that.fieldList.push({filed:'装修情况',value:that.houseValue.h_fitment});
						  that.fieldList.push({filed:'房屋年限',value:that.houseValue.h_year});
						  that.fieldList.push({filed:'交易权属',value:that.houseValue.h_deal});
						  that.fieldList.push({filed:'产权所属',value:that.houseValue.h_prop});
						  // console.log( that.fieldList)
						  that.houseValue.h_img.map(res1=>{
							  res1=app.globalData.img+res1;
							  that.imgList.push({url:res1})
							  console.log(res1)
						  })
						  if(that.houseValue.is_collect==0){
							  that.collectionFlag=false;
						  }else {
							  that.collectionFlag=true;
						  }
						  
					  }
					  
				  })
			  },
			  // 进入地图
			  getLocation(){
				  uni.chooseLocation({
				      success: function (res) {
				         
				      } ,
					  fail(e) {
                        // 定位权限未开启，引导设置
                        uni.showModal({
                            title: '温馨提示',
                            content: '您已拒绝定位,请开启',
                            confirmText: '去设置',
                            success(res){
                                if (res.confirm) {
                                    //打开授权设置
                                    uni.openSetting();
                                }
                            }
                        })
                    }
				  });
			  }
		}
	}
</script>

<style scoped lang="scss">
   @import "../../../static/scss/common.scss";
   @import "../../../static/scss/font.css";
  button::after{
	  border:
	  none;
   }
.topss{
	   @extend  %top-style;
}
%padding-style{
	width: 750rpx;
	padding: 0 40rpx 0 30rpx;
	box-sizing: border-box;
}
.h5-houseDetail{
	padding-top: var(--status-bar-height);
	box-sizing: border-box;
}
.back{
	width: 50rpx;
	height: 50rpx;
	display: block;
	position:fixed;
	left:30rpx;
	top:var(--status-bar-height);
	z-index: 10;;
	
}
.h5-scrollImg{
	width:750rpx;
	height: 560rpx;
	position: relative;
	left:0;
	top:-50rpx;
	display: flex;	
}
.h5-content{
	position: relative;
	top:0;
	left:0;
	.content-first{
		.first{
			@extend %padding-style;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.left{
				.left-top{
					color: #FF2600;
					.money{
						font-size: 60rpx;
						font-family: wangyibo;
					}
					.company{
						font-size: 36rpx;
					}
					.area{
						margin-left:20rpx;
						font-size: 36rpx;
						font-family: wangyibo;
					}
					
				}
				.left-bottom{
					color: #262626;
					font-size: 38rpx;
				}
			}
			.right{
				width: 90rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #fff;
				padding:0!important;
				margin:0!important;
				.image{
					display: block;
					width: 34rpx;
					height: 34rpx;
					
				}
				.share{
					color: #262626;
					font-size: 24rpx;
				}
			}
		}
		.second{
		    display: flex;
			margin:75rpx 0 64rpx;
			.list{
				width: 187.5rpx;
				height: 80rpx;
				text-align: center;
				display: flex;
				box-sizing: border-box;
				flex-direction: column;
				justify-content: space-between;
				.top{
					color: #6D6D6D;
					font-size: 24rpx;
				}
				.down{
					color: #272727;
					font-size: 30rpx;
				}
			}
			.left-2{
				border-left:2rpx solid #f1f1f1;
				border-right:2rpx solid #f1f1f1;
			}
			.right-1{
				border-right:2rpx solid #f1f1f1;
			}
		}
		.third{
			@extend %padding-style;
			padding-left:47rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list-detail{
                width: 330rpx;
				font-size: 24rpx;
				margin-bottom: 29rpx;
				.field{
					color:#989898;
					margin-right:30rpx ;
			   }
			   .detail-msg{
				   color: #272727;
			   }
			}
			
		}
	}
	
}
.h5-content{
   .content-second{
	   width: 750rpx;
	   height: 180rpx;
	   border-top:20rpx  solid  #f2f2f2;
	   border-bottom:20rpx  solid  #f2f2f2;
	   .contents{
		  width:750rpx;
		  height: 180rpx;
		  padding:30rpx 40rpx;
		  box-sizing: border-box;
		  display: flex;
		  flex-direction: column;
		  justify-content: space-around;
		  .field{
			  font-weight: bold;
			  color: #262626;
			  font-size: 38rpx;
		  }
		  .details{
			  color: #272727;
			  font-size: 27rpx;
		  }
		   
	   }
  }
  .content-third{
	 width: 750rpx;
	 height: 90rpx;
	 padding: 24rpx 30rpx;
	 box-sizing: border-box;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 color: #272727;
	 font-size: 24rpx;
	 .left{
		  display: flex;
		  height: 90rpx;
		  align-items: center;
		 
		 .left-img{
			 display: block;
			 width: 44rpx;
			 height: 44rpx;
			 margin-right:26rpx;
		 }
	 }
	 .right{
		 display: flex;
		 height: 90rpx;
		 align-items: center;
		 .right-img{
			 display: block;
			 width: 16rpx;
			 height: 16rpx;
			 margin-left: 10rpx;
		 }
	 }
  }
  .content-fourth{
	  border-top: 20rpx solid #f2f2f2;
	  .fourth-contents{
		  width: 750rpx;
		  padding:37rpx 30rpx ;
		  box-sizing: border-box;
		  color: #262626;
		  .title{
			  font-weight: bold;
			  font-size: 38rpx;
			  margin-bottom: 21rpx;
		  }
		  .contents{
			  width: 680rpx;
			  font-size: 28rpx;
			  padding-bottom:120rpx;
			  box-sizing: border-box;
			  overflow : hidden;
			  text-overflow: ellipsis;
			  display: -webkit-box;
			  -webkit-line-clamp: 5;
			  -webkit-box-orient: vertical;
		  }
	  }
 }
 .footer{
	    width: 750rpx;
		padding:30rpx ;
		background-color: #fff;;
		box-sizing: border-box;
		display: flex;
		position: fixed;
		bottom:0;
		left:0;
 		.footer-style{
 			  width: 260rpx;
 			  height: 90rpx;
 			  text-align: center;
 			  line-height: 90rpx;
 			  border-radius: 8rpx;
 			  color: #fff;
 			  font-size: 30rpx;
 		  }
 		  .right{
 			 background: #F5BD65;
 		  }
 		  .center{
 			  background: #4270ED;
			  margin:0 30rpx 0 60rpx;
 		  }
		    .left{
		  		  width:80rpx;
		  		  height: 90rpx;
		  		  display: flex;
		  		  flex-direction: column;
		  		  justify-content: space-between;
		  		  align-items: center;
		  		  
		  		  .img{
		  			  display: block;
		  			  width: 40rpx;
		  			  height: 40rpx;
		  		  }
		  		  .fields{
		  			  color: #272727;
		  			  font-size: 28rpx;
		  		  }
		  		  
		  		  
		  	  }
 	} 

 
 
}

.message-dialog-mask{
	width:100%;
	height:100%;
	position: fixed;
	top:0;
	left:0;
	z-index:10;
	background: #000;
	opacity: .5;
}
.message-dialog{
	width: 590rpx;
	// height: 566rpx;
	position: fixed;
	top:230rpx;
	left:80rpx;
	z-index: 20;
	background-color: #fff;
	border-radius: 4rpx;
	padding: 30rpx;
	box-sizing: border-box;
    .image{
		display: block;
		width: 30rpx;
		height: 30rpx;
		position: relative;
		left:500rpx;
		top:0;
	}
	.title{
		width: 510rpx;
		font-weight: bold;
		color: #272727;
		font-size: 30rpx;
		text-align: center;
	}
	.contents{
		margin:65rpx 0 95rpx;
		width:510rpx;
		display: flex;
		flex-wrap: wrap;
		.list{
			width: 150rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
			margin-bottom: 40rpx;
			border-radius: 8rpx;
			font-size: 28rpx;
		}
		.listInactive{
			color: #A6A6A6;
			background-color: #E8E8E8;
		}
		.listActive{
			color: #fff;
			background: #4270ED;
		}
	}
	.btn{
		width: 350rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #4270ED;
		border-radius: 8rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-left: 80rpx;
	}
}


.shareDialog{
	
	background-color: #fff;
	position:fixed;
	bottom:0rpx;
	left:0rpx;
	z-index:200;
	.top{
		border-bottom: 2rpx solid #f2f2f2;
		display: flex;
		color: #101010;
		font-size: 28rpx;
		.styless{
			width: 375rpx;
			height: 248rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.logo-img{
				display: block;
				width: 60rpx;
				height: 60rpx;
				margin-bottom:12rpx;
			}
			.word{
				
			}
		}
		
	}
	.down{
		width: 750rpx;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
	}
	
}
.shareMask{
	position: absolute;
	left:0rpx;
	top:0rpx;
	bottom:0rpx;
	right:0rpx;
	z-index: 100;
	background-color: #000;
	opacity: 0.5;
}
</style>
