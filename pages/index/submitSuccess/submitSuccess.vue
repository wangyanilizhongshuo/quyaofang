<template>
	<view class="h5-submitSuccess">
		<view class="zw"></view>
		<image class="centerImg" src="/static/image/success_pic.png"></image>
		<view class="field1">提交成功</view>
		<view class="field2">请等待后台审核</view>
		<view class="btn" @tap.stop="quits">返回主页面</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(){
			
		},
		methods: {
			quits(){
				 uni.navigateBack()
			  }
		}
	}
</script>

<style scoped lang="scss">
	.zw{
		height: var(--status-bar-height);
	}
	.h5-submitSuccess{
		width: 750rpx;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		left:0rpx;
		top:0rpx;
	}
	.centerImg{
		display: block;
		width:207rpx;
		height: 209rpx;
		margin-top: 238rpx;
	}
	.field1{
		color: #333333;
		font-size: 36rpx;
		margin:27rpx 0;
	}
	.field2{
		color: #999999;
		font-size: 32rpx;
		
	}
	.btn{
		width: 750rpx;
		height: 98rpx;
		background-color: #4270ED;
		text-align: center;
		line-height: 98rpx;
		color:#FFFFFF;
		font-size: 30rpx;
		position: absolute;
		bottom:0rpx;
		left:0rpx;
	}

</style>
