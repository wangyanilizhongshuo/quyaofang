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
			<view class="list">
				<input v-model="password" password="true" placeholder="请输入原始密码" placeholder-style="color:#888888;font-size:28rpx;" class="left" />
				<image class="imgs" src="../../../static/image/houseDetail-dialogMask.png" @tap.stop="clearName"></image>
			</view>
			<view class="signal" @tap="jumps">忘记密码？</view>
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
				username:'',
				name:'',
				tipsFlag:false,
				tipsMsg:''
				
			}
		},
		onReachBottom(){
			
		},
		onLoad(){
			this.getData();
		},
		methods: {
			clearName(){
				this.password=''
			},
			back(){
				uni.navigateTo({
					url:'/pages/personData/setting/setting'
				})
			},
			// 忘记密码跳转
			jumps(){
				uni.navigateTo({
					url:'/pages/personData/setting/addRegisterCode'
				})
			},
			getData(){
				let that=this;
				this.$h5.get('user/finduser',{
				},function(res){
					if(res.code ==0){
						// 昵称
					 that.username=res.data.h_name ;
					 // 账号
					 that.name=res.data.h_nickname;
					
					}
				})
			},
			// 确定后跳转
			makeSure(){
				let  that =this;
				if(that.password){
					this.$h5.post('user/verpwd',{
						username:that.username,
						name:that.name,
						pwd:that.password
					},(res)=>{
						if(res.code ==0){
							uni.navigateTo({
								url:'/pages/personData/setting/reRepairPwd'
							})
						}else{
							this.tipsFlag=true;
							this.tipsMsg='输入有误'
							setTimeout(()=>{
								this.tipsFlag=false;
							},2500)
							console.log('false')
						}
					})
				}	
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
			justify-content: space-between;
			padding :0rpx 30rpx;
			box-sizing: border-box;
			background-color: #fff;
			// margin-top: 10rpx;
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
	.signal{
		width: 750rpx;
		padding-left:30rpx;
		box-sizing: border-box;
		height: 98rpx;
		color: #4270ED;
		font-size: 24rpx;
		line-height: 98rpx;
		
	}
	.hbyOccurFlag{
		position: absolute;
		top:500rpx;
		left:250rpx;
		background-color: green;
		width:300rpx;height:100rpx;
		line-height: 100rpx;
		background-color: #000;
		color:#fff;
		text-align: center;
		opacity: 0.7;
		border-radius: 20rpx;
	}
	
  
</style>
