<template>
	<view>
		 <view class="topss"></view>
		  <view class="h5-houseDetail" >
			<image class="back" @tap.stop="back"  src="../../../static/image/houseDetai-whiteBack.png"></image>
			<view class="h5-scrollImg">
				<carousel :img-list="imgList" url-key="url" ></carousel>
			</view>
			<view class="h5-content">
				<view class="content-first">
			         <view class="h5-up">
						 <view class="left">
							 <text class="filed">{{dataList.house_nick}}</text>
							 <text class="small-flag">{{typeField}}</text>
						 </view>
						<!-- <view class="right">
							 <image class="imgs" src="../../../static/image/houseDetail-share.png"></image>
							 <view class="field">分享</view>
						 </view> -->
					 </view>
					<view class="h5-down">
						 <view class="title">联系人</view>
						 <view class="contents">
							 <view class="left styless">
								 <text class="field">姓名</text>
								 <text class="value">{{dataList.house_name}}</text>
							 </view>
							 <view class="right styless">
								 <text class="field">电话</text>
								 <text class="values">15255132094</text>
							 </view>
						 </view>
					 </view>
				</view>
			    <view class="content-second">
					<view class="title">简介</view>
					<image class="img-content" :src="imgList[0].url"></image>
					<view class="content">{{dataList.house_intro}}</view>
		            <view class="bottom-img">
						<image class="imgs" :src="imgList[1].url"></image>
						<image class="imgs" :src="imgList[2].url"></image>
					</view>		
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
				 imgList: [],
				 id:'',
				 type:'',
				 dataList:'',
				 typeField:''
				
				
					
			}
		},
		
		components:{
			carousel
		},
		
		onLoad(options){
			this.setData(options);
			this.getData();
			console.log(options)
			if(this.type ==0){
				console.log(111)
				this.typeField='设计'
			}else {
				this.typeField='装潢'
			}
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
			 getData(){
				 let that =this;
				 that.$h5.post('fitment/fitmentdetails',{
					 id:that.id,
					 type:that.type
				 },(res)=>{
					 if(res.code ==0){
						 that.dataList=res.data;
						 let aa=that.dataList.house_img.split(',');
						for(let i in aa){
							const item={
								url:"https://yaofangme.hzbixin.cn/"+aa[i],
								id:i
							}
							that.$set(that.imgList,i,item);
						}
						console.log(that.dataList)
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
	position: relative;
	top:-80rpx;
	left:0;
	.content-first{
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
				width: 90rpx;
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
					font-size: 24rpx;
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
	padding: 40rpx  30rpx;
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
		height: 380rpx;
	}
	.content{
		width: 690rpx;
		@include ellipsis(4);
		margin:25rpx 0;
		color: #262626;
		font-size: 24rpx;;
		
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
}



</style>
