<template>
		<view class="h5-invited" >
			<view class="zw"></view>
			<view class="news-title title">
				<view class="left"  @tap.stop="quits" >
					<image class="img"src="/static/image/back.png"></image>
				</view>
				<view class="field">邀请中心</view>
			</view>
			<view class="zwPosition"></view>
				<image class="top-img" src="../../../static/image/invite-top-title.png"></image>
				<view class="center">
					<image class="imgs" src="../../../static/image/invite-center-bg.png"></image>
					<view class="content-box">
						 <view class="code-box">
							 <image class="code" src="../../../static/image/code.png"></image>
						 </view>
					</view>
				</view>
				<view  class="footer" >
					<image class="friend logo" src="../../../static/image/weixin.png"></image>
					<image class="weChat logo" src="../../../static/image/wechatMonent.png"></image>
				</view>
		</view>

</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);			
		},
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					text = window.android.quit();
				 }else{
					 // alert('重新退出'')
				 }
			     return text;
			  },
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	// 字体
	@import "../../../static/scss/font.css";
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
	.h5-invited{
		height: 100vh;
		width: 750rpx;
		display: block;
		background-image: url(../../../static/image/invite-top-bg.png);
		background-repeat: no-repeat;
		background-size: 750rpx  100vh;
		background-color: #4270ED;
		font-size: 0;
	    .top-img{
			width: 614rpx;
			height: 117rpx;
			margin:154rpx 0rpx  62rpx 68rpx;
		}
		.center{
			width: 750rpx;;
			height: 560rpx;
			font-size: 0;
			position: relative;
			left:0rpx;
			top:0rpx;
			.imgs{
				width: 750rpx;;
				height: 560rpx;
			}
			.content-box{
				position: absolute;
				left:169rpx;
				top:30rpx;
				.code-box{
					width: 413rpx;
					height: 505rpx;;
					background: #FFFFFF;
					box-shadow: 0px 9px 16px 0px rgba(72, 4, 177, 0.42);
					border-radius: 10px;
					.code{
						width: 341rpx;
						height: 345rpx;
						margin:63rpx 0rpx 0rpx 38rpx;
					}
					
				}
			}
		}
		.footer{
			width: 750rpx;
			height: 300rpx;
			font-size: 0;;
			display: flex;
			align-items: center;
			padding:0rpx 166rpx 0rpx 172rpx;
			box-sizing: border-box;
			justify-content: space-between;
			.logo{
				width: 86rpx;
				height: 86rpx;
			}
			.friend{
				
			}
			.weChat{}
		}

	}
	
	
  
</style>
