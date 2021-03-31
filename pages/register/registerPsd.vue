<template>
	<view class="h5-register">
		  <view class="h5-title">要房么</view>
		  <view class="h5-content">
			  <view class="h5-titles">注册</view>
			  <view class="dataBox">
				  <view class="phoneBox styles">
					  <image class="imgs" src="../../static/image/registerPsd.png"></image>
					  <input class="input" v-model="password1"  placeholder-style="color:#fff;font-size:22rpx;" placeholder="请输入您的密码" />
				  </view>
				  <view class="msgBox styles">
					  <image class="imgs" src="../../static/image/registerPsd.png"></image>
					  <input class="input" v-model="password2"   placeholder-style="color:#fff;font-size:22rpx;" placeholder="请确认您的密码" />
				  </view>
			  </view>
			  <view class="tips" @tap.stop="jumps">
				  <text>我已注册，去下载APP</text>
				  <image  class="logo" src="../../static/image/regiter-go.png"></image>
			  </view>
			  <view class="nextGo" @tap.stop="nextSteps">下一步</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password1:'',
				password2:''
			}
		},
		methods: {
			jumps(){
				uni.navigateTo({
					url:'/pages/register/registerDown'
				})
			},
			nextSteps(){
				uni.navigateTo({
					url:'/pages/register/registerDown'
				})
			}
		}
	}
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
	  .dataBox{
		  margin-top: 135rpx;;
		  .styles{
			  display: flex;
			  align-items: flex-end;
			  .imgs{
				  display: block;
				  width: 40rpx;
				  height: 40rpx;
				  margin-right:20rpx;
			  }
			  .input{
				  border-bottom: 2rpx solid #fff;
				  box-sizing: border-box;
				  width: 400rpx;
				  line-height: 60rpx;
				  padding-bottom:15rpx;
			  }
		  }
		  .msgBox{
			  margin-top:69rpx;
			  margin-bottom:40rpx;
			 
			  
		  }
		  
	  }
	  .tips{
		  color: #fff;
		  font-size: 22rpx;
		  display: flex;
		  align-items: center;
		  .logo{
			  display: inline-block;
			  width: 22rpx;
			  height: 22rpx;
			  margin-left:13rpx;
		  }
	  }
	  .nextGo{
		  margin-top: 175rpx;
		  width: 452rpx;
		  height: 90rpx;
		  text-align: center;
		  line-height: 90rpx;
		  font-size: 30rpx;
		  color: #fff;
		  border: 2rpx solid #FFFFFF;
		  border-radius: 45rpx;
	  }
  }
</style>
