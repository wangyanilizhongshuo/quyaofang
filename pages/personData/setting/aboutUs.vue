<template>
	<view class="h5-about">
		<view class="sale-title">
			 <view class="left" @tap.stop="back">
				  <image class="img" src="/static/image/back.png"></image>
			 </view>
			 <view class="field">关于我们</view>
		</view>
		 <view class="station"></view>
		<view class="contents">{{detailDescribe}}</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				detailDescribe:""
				              
			}
		},
		onLoad(){
			this.getList();
		},
		methods:{
			back(){
				uni.navigateTo({
					url:'/pages/personData/setting/setting'
				})
			},
			getList(){
				this.$h5.post('index/aboutus',{
					
				},(res)=>{
					if(res.code ==0){
						this.detailDescribe=res.data.text;
					}
				})
			}
			
		}
	}
	
</script>

<style lang="scss" scoped>
	@import "../../../static/scss/common.scss";
	.h5-about{
		height: 100vh;
		background-color: #f2f2f2;
		overflow: hidden;
	}
	.station{
		width: 750rpx;
		height:75rpx ;
		background-color: #fff;
		margin-top: var(--status-bar-height);
	}
	.sale-title{
		 @extend  %title;
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
		padding:30rpx 30rpx 130rpx;
		box-sizing: border-box;
		border-top: 10rpx solid #F2F2F2;
		background-color: #fff;
		color: #888888;
		font-size: 28rpx;
	}
</style>
