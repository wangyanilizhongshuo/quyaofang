<template>
	<view class="repairname-box">
		<view class="zwPosition"></view>
		<view class="sale-title">
			 <view class="left" @tap.stop="back">
				  <image class="img" src="/static/image/back.png"></image>
			 </view>
			 <view class="field">设置昵称</view>
		</view>
		 <view class="station"></view>
		<view class="contents">
			<view class="list">
				<input v-model="name" class="left" />
				<image class="imgs" src="../../static/image/houseDetail-dialogMask.png" @tap.stop="clearName"></image>
			</view>
		</view>
		<view class="btn" @tap.stop="submit">确定</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			
		},
		methods: {
			// 清楚  列表
			clearName(){
				this.name=''
			},
			back(){
				uni.navigateBack()
			},
			// 提交数据,并且返回
			submit(){
				let  that=this;
				this.$h5.post('user/updname',{
					nick:that.name
				},(res)=>{
					if(res.code==0){
						uni.navigateTo({
							url:'/pages/personData/personData'
						})
						// uni.navigateBack()
					}
				})
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
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
	.btn{
		width: 750rpx;
		height: 98rpx;
		text-align: center;
		line-height: 98rpx;
		color:#fff;
		background-color: #4270ED;
		font-size: 30rpx;
		position: fixed;
		bottom:0rpx;;
		left:0rpx;
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
				width: 500rpx;;
			}
			.imgs{
				display: block;
				width: 38rpx;
				height: 38rpx;
			}
		}
		
		
	}
	
	
  
</style>
