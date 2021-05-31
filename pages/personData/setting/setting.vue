<template>
	<view class="h5-setting">
		<view class="sale-title">
					 <view class="left" @tap.stop="quits">
						  <image class="img" src="/static/image/back.png"></image>
					 </view>
					 <view class="field">设置</view>
				</view>
		 <view class="station"></view>
		  <view class="list-box">
			  <view class="list top-list" @tap.stop="jumps(1)">
				  <view class="left">修改密码</view>
				  <image class="right" src="../../../static/image/right-gray.png"></image>
			  </view>
			  <!-- <view class="list ">
				  <view class="left">使用教程</view>
				  <image class="right" src="../../../static/image/right-gray.png"></image>
			  </view> -->
			  <view class="list " @tap.stop="jumps(3)">
				  <view class="left">关于我们</view>
				  <image class="right" src="../../../static/image/right-gray.png"></image>
			  </view>
			  <view class="list " @tap.stop="jumps(4)">
				  <view class="left">意见反馈</view>
				  <image class="right" src="../../../static/image/right-gray.png"></image>
			  </view>
			  <view class="list"  @tap.stop="jumps(5)">
				  <view class="left">联系客服</view>
				  <image class="right" src="../../../static/image/right-gray.png"></image>
			  </view>
		  </view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				
			}
		},
		onLoad(options){
			this.setData(options);
		},
		methods:{
			
			quits(){
				if(window.android && window.android.quit){
						 window.android.quit();
				}else{
					window.webkit.messageHandlers.quit.postMessage('return');
				}
			  },
			jumps(type){
				if(type ==1){
					uni.navigateTo({
						url:'/pages/personData/setting/repairPwd'
					})
				}
				else if(type ==3){
					uni.navigateTo({
						url:'/pages/personData/setting/aboutUs'
					})
				}
				else if(type ==4){
					uni.navigateTo({
						url:'/pages/personData/setting/opinion'
					})
				}
				else if(type ==5){
					uni.navigateTo({
						url:'/pages/personData/setting/connectService'
					})
				}
				
				
			}
			
			
		}
		
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.h5-setting{
		height: 100vh;
		background-color: #f2f2f2;
		overflow: hidden;
		.top-list{
			border-top:10rpx solid #f2f2f2;
		}
		.list{
			width: 750rpx;
			height:98rpx ;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding:0 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-bottom: 2rpx solid #f2f2f2;
			.left{
				color: #303133;
				font-size: 28rpx;
				font-weight: bold
				}
			.right{
					display: block;;
					width: 23rpx;
					height: 36rpx;;
				}
		}
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
				 width:100rpx;
				 height: 75rpx;
				 line-height: 75rpx; 
				 position: absolute;
				 padding-left:30rpx;
				 top:7.5rpx;
         background-color: red;
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
</style>
