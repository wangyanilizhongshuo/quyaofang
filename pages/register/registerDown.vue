<template>
	<view class="h5-register">
		 <view class="h5-title">要房么</view>
		<view class="h5-content">
				<view class="h5-titles">APP下载</view>
				<image class="iosBox style1"  src="../../static/image/registerIOS.png"></image>
				<image class="andBox style1" src="../../static/image/registerAndroid.png"></image>
				
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.h5-register{
		  width: 100vw;
		  height: 100vh;
		  background-image:url(../../static/image/registerBg.png);
		  background-repeat: no-repeat;
		  background-size: 100vw 100vh;
		  padding-top:30rpx;
		  box-sizing: border-box;
	}
	.h5-title{
		  font-size: 30rpx;
		  font-weight: bold;
		  color: #FFFFFF;
		  text-align: center;
	}
	.h5-content{
		  margin: 300rpx 0 0 140rpx;
		  .h5-titles{
			  font-size: 60rpx;
			  font-weight: bold;
			  color:#fff;;
		  }
	}
	.style1{
		display: block;
		width: 452rpx;
		height: 90rpx;
	}
	.iosBox{
		margin: 102rpx 0rpx 40rpx;
		// margin-bottom:;
		
	}
</style>
