<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">资讯详情</view>
		</view>
		<view style="height: 75rpx;"></view>
		<view class="contents">
			 <view class="title">
				 {{dataList.house_title}}
			 </view>
       <video v-if="dataList!=''"  class="img" :src="dataList.video_link" autoplay:='true' controls="" :poster="'https://yaofangme.hzbixin.cn/'+dataList.cover_img"></video>
			 <!-- <image :src="'https://yaofangme.hzbixin.cn/'+dataList.cover_img"></image> -->
			<!-- <view class="describe">
					{{dataList.house_content}}
				                             
			 </view> -->
       <rich-text :nodes="dataList.house_content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:'',
				dataList:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			console.log(this.id)
			this.getData()
		},
		methods: {
			backs(){
				uni.navigateTo({
					url:'/pages/index/newsInformation/newsInformation'
				})
			},
			getData(){
				let that =this;
				console.log(that.id)
				that.$h5.post('news/newsdetails',{
					id:that.id,
					},(res)=>{
					if(res.code ==0){
						that.dataList=res.data;
						console.log(that.dataList)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
	}
	.news-title{
		
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		 .left{
			 width:100rpx;
			 height: 75rpx;
			 line-height: 75rpx; 
			 position: absolute;
			 padding-left:30rpx;
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
		width: 750rpx;
		padding:35px 30rpx;
		box-sizing: border-box;
		.title{
			font-size: 30rpx;
			color:#141414;
			font-weight: bold;
		}
		.img{
			display: block;
			width: 670rpx;
			height: 350rpx;
			margin-top:36rpx;
			margin-bottom: 50rpx;
		}
		.describe{
			font-size: 28rpx;
			color:#222222;
		}
		
		
	}
	
	
  
</style>
