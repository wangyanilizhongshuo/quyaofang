<template>
	<view class="repairname-box">
		<view class="zwPosition"></view>
		<view class="sale-title">
				<view class="left" @tap.stop="back">
						  <image class="img" src="/static/image/back.png"></image>
					 </view>
					 <view class="field">填写验证码</view>
				</view>
		 <view class="station"></view>
		<view class="contents">
			<view class="list">
				<view class="left">手机号</view>
				<input  class="center" v-model="phone" />
				
			</view> 
			<view class="list">
				<view class="left">验证码</view>
				<input  class="center" placeholder="请输入验证码" placeholder-style="color:#888888;font-size:28rpx" v-model="code" />
				<view class="right" @tap.stop="sendCode" v-if="!sendFlag">发送验证码</view>
				<view class="right" @tap.stop="sendCode" v-if="sendFlag">还剩 {{sendCodeTime}} 秒</view>
			</view>
			
		</view>
		<view class="hbyOccurFlag" v-if="tipsFlag">{{tipsMsg}}</view>
		<view class="btn" @tap="submit">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'15255132094',
				code:'',
				sendCodeTime:60,
				sendFlag:false,
				tipsFlag:false ,
				tipsMsg:''
				// isSendCode:false
			}
		},
		onReachBottom(){
			
		},
		onLoad(){
			
		},
		methods: {
			// 返回
			back(){
				uni.navigateBack()
					
				
			},
			clearName(){
				this.password='';
			},
			sendCode(){
				this.sendFlag=true;
				let  that=this;
				that.$h5.post('code/sendcode',{
					phone:that.phone
				},(res)=>{
					if(res.code ==0){
						
						let timer = setInterval(()=>{
						that.sendCodeTime=that.sendCodeTime-1;
						
							if(that.sendCodeTime < 1){
								that.sendCodeTime = 60;
								that.sendFlag = false;
								clearInterval(timer);
							}
				        },1000)
					}
				})
				
			},
			submit(){
				this.$h5.post('login/logincode',{
					user:this.phone,
					code:this.code
				},(res)=>{
					if(res.code ==0){
						uni.navigateTo({
					        url:'/pages/personData/setting/reRepairPwd'
				      })
					}else{
						that.tipsFlag=true;
						that.tipsMsg=res.message ;
						setTimeout(()=>{
								 that.tipsFlag=true;
						},2500)
					}
				})
				
			},
			
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	// 字体
	// @import "../../../static/scss/font.css";
	.repairname-box{
		height: 100vh;
		box-sizing: border-box;
		 background-color:#f2f2f2;
		position: relative;
		left:0rpx;
		top:0rpx;
		overflow: hidden;
	}
	.hbyOccurFlag{
			position: absolute;
			top:500rpx;
			left:100rpx;
			background-color: green;
			width:450rpx;height:130rpx;
			line-height: 130rpx;
			background-color: #000;
			color:#fff;
			text-align: center;
			opacity: 0.7;
			border-radius: 20rpx;
		}
	.btn{
		width: 750rpx;
		height: 98rpx;
		text-align: center;
		line-height: 98rpx;
		color:#fff;
		background-color: #4270ED;
		font-size: 30rpx;
		position: absolute;
		bottom:0rpx;;
		left:0rpx;
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
		.list{
			border-top: 10rpx solid #F2F2F2;
			width: 750rpx;
			height: 98rpx;
			display: flex;
			align-items: center;
			padding :0rpx 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			color: #222222;
			font-size: 28rpx;
			// margin-top: 10rpx;
			.left{
				width: 150rpx;
			}
			.center{
			   width: 350rpx;
			   margin-right:20rpx;
			}
			.right{
				width: 160rpx;
				text-align: center;
				height: 60rpx;
				line-height: 60rpx;
				color:#fff;
				font-size: 26rpx;;
				background-color: #4270ED;
				border-radius: 10rpx;
			}
			
		}
	}
	.signal{
		width: 750rpx;
		padding-left:30rpx;
		box-sizing: border-box;
		height: 98rpx;
		color: #4270ED;
		font-size: 24rpx;
		line-height: 98rpx;
		
	}
	
	
  
</style>
