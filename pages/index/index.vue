<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">头部固定</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			
		</view>
		

		
	</view>
</template>

<script>
	export default {
		  data() {
		       
		        return {
		            
		        }
		    },
		
		methods: {
			backs(){
				uni.navigateTo({
					url:'/pages/index/newsInformation/newsInformation'
				})
			}
			}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	// 字体
	// @import "../../../static/scss/font.css";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
	}
	.zwPosition{
		width: 750rpx;
		height: 75rpx;
		margin-top: var(--status-bar-height);
	}
	.news-title{
		
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		 .left{
			 width:60rpx;
			 height: 75rpx;
			 line-height: 75rpx; 
			 position: absolute;
			 left:30rpx;
			 top:7.5rpx;
		 }
		 .img{
		 	display: block;
		 	width:19rpx;
		 	height: 30rpx;
			margin-top:23rpx;
		 }
		 .field{
			 @extend  %title-field;
		 }
	}
	.contents{
		width: 750rpx;
		padding:35px 30rpx;
		box-sizing: border-box;
		.title{
			font-size: 30rpx;
			color:#141414;
			font-weight: bold;
		}
		.img{
			display: block;
			width: 670rpx;
			height: 200rpx;
			margin-top:36rpx;
			margin-bottom: 50rpx;
		}
		.describe{
			font-size: 28rpx;
			color:#222222;
		}
		
		
	}
	
	
  
</style>
