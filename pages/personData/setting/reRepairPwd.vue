<template>
	<view class="repairname-box">
		<view class="zwPosition"></view>
		<view class="sale-title">
			 <view class="left" @tap.stop="back">
				  <image class="img" src="/static/image/back.png"></image>
			 </view>
			 <view class="field">修改密码</view>
		</view>
		 <view class="station"></view>
		<view class="contents">
			<view class="list topList">
				<input v-model="password" password="true" placeholder="请输入新密码" placeholder-style="color:#888888;font-size:28rpx;" class="left" />
				
				
			</view>
			<view class="list">
			 <input v-model="rePassword" password="true"  placeholder="请再次输入密码" placeholder-style="color:#888888;font-size:28rpx;" class="left" />
		  </view>
		</view>
		<view class="btn" @tap='makeSure'>确定</view>
		<view class="hbyOccurFlag" v-if="tipsFlag">{{tipsMsg}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				password:'',
				rePassword:'',
				tipsFlag:false,
				tipsMsg:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(){
			
		},
		methods: {
			clearName(){
				this.password=''
			},
			back(){
				uni.navigateBack()
			},
			// 忘记密码跳转
			jumps(){
				uni.navigateTo({
					url:'/pages/personData/setting/addRegisterCode'
				})
			},
			// 确定后跳转
			makeSure(){
				let that=this;
				if(that.password !==that.rePassword){
					 that.tipsFlag=true;
					 that.tipsMsg='两次密码不一样' ;
					 that.password='';
					 that.rePassword='';
					 setTimeout(()=>{
						  that.tipsFlag=false;
					 },2500)
					return false; 	
				}
				that.$h5.post('user/updpwd',{
					new_pwd:that.password,
					new_pwds:that.rePassword
				},(res)=>{
					if(res.code ==0){
						that.tipsFlag=true;
						that.tipsMsg='密码设置成功' ;
						setTimeout(()=>{
								 that.tipsFlag=false;
						},2500)
						uni.navigateTo({
					        url:'/pages/personData/setting/setting'
				           })
					}else{
						console.log(123456)
						that.tipsFlag=true;
						that.tipsMsg=res.message ;
						setTimeout(()=>{
								 that.tipsFlag=false;
						},2500)
					}
				})
				
			}
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
			left:150rpx;
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
		.topList{
			border-top: 10rpx solid #F2F2F2;
		}
		.list{
			width: 750rpx;
			height: 98rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding :0rpx 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			border-bottom: 2rpx solid #f2f2f2;
			.left{
				width: 400rpx;;
			}
			.imgs{
				display: block;
				width: 38rpx;
				height: 38rpx;
			}
		}
	}
	
  
</style>
