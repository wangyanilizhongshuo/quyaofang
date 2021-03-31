<template>
	<view>
		 <view class="topss"></view>
		  <view class="h5-houseDetail" >
			<image class="back" @tap.stop="back"  src="../../../static/image/houseDetai-whiteBack.png"></image>
			<view class="h5-scrollImg">
				<image class="smoon-bg" src="../../../static/image/rose.jpg"></image>
				
			</view>
			<view class="h5-content">
				<view class="content-first">
			         <view class="h5-up">
						 <view class="left">
							 <text class="filed">{{detailData.r_buildteam}}</text>
							
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
								 <text class="field">施工队负责人</text>
								 <text class="value">{{detailData.r_name}}</text>
							 </view>
							 <view class="center  styless">
								 <text class="field">电话</text>
								 <text class="values">{{detailData.r_phone}}</text>
							 </view>
							 <view class="second-left left styless">
								 <text class="field">施工人数</text>
								 <text class="value">{{detailData.r_num}}</text>
							 </view>
							 <view class="second-left left styless">
								 <text class="field">施工队名称</text>
								 <text class="value">{{detailData.r_buildteam}}</text>
							 </view>
							 <view class="second-left styless">
								 <text class="field">施工队名称</text>
								 <text class="value">{{detailData.r_buildteam}}</text>
							 </view>
							 
						 </view>
					 </view>
				</view>
			    <view class="content-second">
					<view class="title">简介</view>
					<!-- <image class="img-content" src="../../../static/image/rose.jpg"></image> -->
					<view class="content">{{detailData.r_intro}}</view>
		          
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
				id:'',
				detailData:''
				
				
					
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
			 this.getData();
		},
		methods: {
			 // 最上方的返回
			 back(){
				 uni.navigateTo({
				 	url:'/pages/index/constructionTeam/constructionTeam'
				 })
			 },
			// 轮播图的插件
			 selectedBanner(item, index) {
			      // console.log('🥒', item, index);
			 },
			 getData(){
				 let  that=this;
				 that.$h5.get('Build/builddetail',{
					 id:that.id
				 },(res)=>{
					if(res.code ==0){
						that.detailData=res.data
						console.log(res.data)
					} 
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
// .topss{
// 	   @extend  %top-style;
// }
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
	height: 500rpx;
	position: relative;
	left:0;
	top:-50rpx;
	// display: flex;
	.smoon-bg{
	display: block;
	width: 750rpx;
	height: 460rpx;;
}
}

.h5-content{
	position: relative;
	top:-100rpx;
	left:0;
	.content-first{
		border-bottom:20rpx solid #f1f1f1;
		.h5-up{
			width: 750rpx;
			height: 120rpx;
			padding:70rpx 30rpx ;
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
				width: 80rpx;
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
				.field{
					color: #262626;
					font-size: 24rpx;;
				}
			}
		}
        .h5-down{
			width: 750rpx;
			height: 250rpx;
			padding: 0rpx 30rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				color: #262626;
				font-size: 38rpx;
				font-weight: bold;
				margin-bottom:40rpx;
			}
			.contents{
				display: flex;
				width: 700rpx;
				
				flex-wrap: wrap;
				.left{
					margin:0rpx 0 20rpx;
				}
				.styless{
					font-size: 24rpx;
					width:350rpx;
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
	padding: 40rpx  30rpx;
	box-sizing: border-box;
	.title{
		font-size: 38rpx;
		font-weight: bold;
		color: #262626;
		margin-bottom: 38rpx;
	}
	
	.content{
		width: 690rpx;
		@include ellipsis(4);
		margin:25rpx 0;
		font-size: 24rpx;
		color: #262626;
		
	}
	
}


</style>
