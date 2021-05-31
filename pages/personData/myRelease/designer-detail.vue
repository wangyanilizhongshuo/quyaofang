<template>
	<view>
		 <view class="topss"></view>
		  <view class="h5-houseDetail" >
			<image class="back" @tap.stop="back"  src="../../../static/image/houseDetai-whiteBack.png"></image>
			<view class="h5-scrollImg">
				<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"></carousel>
				<image class="img"  src="/static/image/houseDetai-whiteBack.png"></image>
			</view>
			<view class="h5-content">
				<view class="content-first">
			         <view class="h5-up">
						 <view class="left">
							 <text class="filed">梦瑞地板销售中心</text>
							 <text class="small-flag">地板</text>
						 </view>
						 <view class="right">
							 <image class="imgs" src="../../../static/image/houseDetail-share.png"></image>
							 <view class="field">分享</view>
						 </view>
					 </view>
					 <view class="h5-down">
						 <view class="title">联系人</view>
						 <view class="contents">
							 <view class="left styless">
								 <text class="field">姓名</text>
								 <text class="value">王一博</text>
							 </view>
							 <view class="right styless">
								 <text class="field">电话</text>
								 <text class="values">15255132094</text>
							 </view>
						 </view>
					 </view>
				</view>
			   <view class="content-second"  >
					<view class="title">简介</view>
					<image class="img-content" src="../../../static/image/rose.jpg"></image>
					<view class="content">11月23日，由创业家&i黑马主办的第11届创业家年会在京举行，土巴兔创始人王国彬、平安好医生CEO王涛、猎聘CEO戴科彬等知名企业家，同获“2018年 度十大创业家”荣誉。作为中国产业重  创始人王国彬在大会上发表了主题演讲，分享了土巴兔重构中国家装产业的方法论。</view>
		           <view class="bottom-img">
						<image class="imgs" src="../../../static/image/wangyibo2.jpg"></image>
						<image class="imgs" src="../../../static/image/wangyibo3.jpg"></image>
					</view>	
					<view class="btn" @tap.stop="jumps">编辑</view>
				</view>
			</view>
		</view>
</view>	
</template>
<script>
	// 轮播图 https://ext.dcloud.net.cn/plugin?id=2358
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		data() {
			return {
				 imgList: [{
                    url: 'https://img9.51tietu.net/pic/2019-091200/vgkpidei2tjvgkpidei2tj.jpg',
                    id: 1
                },{
                    url: 'https://img9.51tietu.net/pic/2019-091200/euzekmi5m23euzekmi5m23.jpg',
                    id: 2
                },{
                    url: 'https://img9.51tietu.net/pic/2019-091200/143tt0ta4sr143tt0ta4sr.jpg',
                    id: 3
                },{
                    url: 'https://img9.51tietu.net/pic/2019-091200/ff1vqwm3q33ff1vqwm3q33.jpg',
                    id: 4
                },],
				
				
					
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
		components:{
			carousel
		},
		
		onLoad(options){
             this.setData(options);			
		},
		methods: {
			 // 最上方的返回
			 back(){
				 uni.navigateTo({
				 	url:'/pages/personData/myRelease/myRelease'
				 })
			 },
			// 轮播图的插件
			 selectedBanner(item, index) {
			      // console.log('🥒', item, index);
			 },
			 jumps(){
				 uni.navigateTo({
				 	url:'/pages/personData/myRelease/designer-edit'
				 })
			 }
			
			 
			 
			
		}
	}
</script>

<style scoped lang="scss">
   @import "../../../static/scss/common.scss";
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
	width: 60rpx;
	height: 60rpx;
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
	.content-first{
		margin-top:-80rpx;
		border-bottom:20rpx solid #f1f1f1;
		.h5-up{
			width: 750rpx;
			height: 120rpx;
			padding:0rpx 30rpx ;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.left{
				.filed{
					color: #262626;
					font-weight: bold;
					font-size: 40rpx;
					margin-right: 20rpx;
				}
				.small-flag{
					display: inline-block;
					width: 80rpx;
					height: 40rpx;
					text-align: center;
					line-height: 40rpx;
					color: #fff;
					background-color: #4270ED;
					font-size: 24rpx;
					border-radius: 8rpx;
				}
			}
			.right{
				width: 70rpx;
				height: 80rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
				.imgs{
					display: block;
					width: 34rpx;
					height: 34rpx;
					
				}
			}
		}
        .h5-down{
			width: 750rpx;
			height: 165rpx;
			padding: 30rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				color: #262626;
				font-size: 38rpx;
				font-weight: bold;
			}
			.contents{
				display: flex;
				width: 550rpx;
				justify-content: space-between;
				.styless{
					font-size: 24rpx;
					.field{
						color: #989898;
						display: inline-block;
						margin-right:24rpx;
					}
					.value{
						color: #262626;
					}
					.values{
						color: #4270ED;
					}
				}
			}
			
		}
	}
	
}
.content-second{
	width: 750rpx;
	padding: 40rpx  30rpx 0rpx;
	box-sizing: border-box;
	.title{
		font-size: 38rpx;
		font-weight: bold;
		color: #262626;
		margin-bottom: 38rpx;
	}
	.img-content{
		display: block;
		width: 690rpx;
		height: 280rpx;
	}
	.content{
		width: 690rpx;
		@include ellipsis(4);
		margin:25rpx 0;
		color: #262626;
		font-size: 24rpx;
	}
	.bottom-img{
		width: 690rpx;
		display: flex;
		justify-content: space-between;
		.imgs{
			display: block;
			width: 336rpx;
			height: 180rpx;
			border-radius: 10rpx;
		}
	}
	.btn{
		width: 689rpx;
		height: 90rpx;
		background: #3466FF;
		color: #FFFFFF;
		font-size: 30rpx;
		text-align: center;
		border-radius: 8rpx;
		line-height: 90rpx;
		margin:46rpx 0rpx 28rpx;
	}
}



</style>
