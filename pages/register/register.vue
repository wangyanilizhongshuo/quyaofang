<template>
	<view class="h5-register">
		  <view class="h5-title">要房么</view>
		  <view class="h5-content">
			  <view class="h5-titles">注册</view>
			  <view class="dataBox">
				  <view class="phoneBox styles">
					  <image class="imgs" src="../../static/image/register-phone.png"></image>
					  <input class="input" v-model="number"  type="number" placeholder-style="color:#fff;font-size:22rpx;" placeholder="请输入您的手机号" />
				  </view>
				  <view class="msgBox styles">
					  <image class="imgs" src="../../static/image/register-code.png"></image>
					  <input class="input" v-model="code"  type="number" placeholder-style="color:#fff;font-size:22rpx;" placeholder="请填写验证码" />
				      <view class="sendBox" v-if="timeflag==false" @tap.stop='sendCode'>发送验证码</view>
				      <view class="sendBox" v-if="timeflag==true" >还剩{{ timeNumber}}s</view>
				  </view>
			  </view>
			  <view class="tips" @tap.stop="jumps">
				  <text>我已注册，去下载APP</text>
				  <image  class="logo" src="../../static/image/regiter-go.png"></image>
			  </view>
			  <view class="nextGo" @tap.stop="submit">下一步</view>
			  <view class="showtips" v-if="tipflag">{{tipMsg}}</view>
		  </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				number:'',
				code:'',
				tipflag:false,
				tipMsg:'',
				timeNumber:60,
				timeflag:false
			}
		},
		methods: {
			submit(){
				let that=this;
				that.$h5.post('code/verificode',{
					user:that.number,
					code:that.code
				},(res)=>{
					if(res.code==0){
						uni.navigateTo({
					          url:'/pages/register/registerPsd?phone='+this.number
				         })
					}else{
						that.tipflag=true ;
						that.tipMsg=res.message;
						setTimeout(()=>{
								that.tipflag=false
						},3000)
					}
				})
				
			},
			sendCode(){
				let that=this;
				that.$h5.post('code/sendcode',{
					phone:that.number
				},(res)=>{
					if(res.code==0){
						that.timeflag=true;
						setInterval(()=>{
							that.timeNumber=that.timeNumber-1;
							if(that.timeNumber==1){
								that.timeFlag=false;
							}
						},1000)
					}else{
						that.tipflag=true ;
						that.tipMsg=res.message;
						setTimeout(()=>{
								that.tipflag=false
						},3000)
					}
					   
					
				})
			},
			jumps(){
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
  
	  .showtips{
	  	  width: 400rpx;
	  	  height: 100rpx;
	  	  background: #fff;
	  	  // opacity: 0.6;
	  	  border-radius: 16rpx;
	  	  position: fixed;
	  	  left:175rpx;
	  	  z-index:1000;
	  	  top:500rpx;
	  	  color: #000;
	  	  font-size: 28rpx;
	  	  line-height: 100rpx;
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
				  color: #fff;
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
			  .input{
				  width: 246rpx;
			  }
			  .sendBox{
				  width: 134rpx;
				  height: 54rpx;
				  text-align: center;
				  box-sizing: border-box;;
				  line-height: 54rpx;
				  border: 2rpx solid #FFFFFF;
				  border-radius: 8rpx;
				  color: #fff;
				  font-size: 22rpx;
				  margin-left: 20rpx;
			  }
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
