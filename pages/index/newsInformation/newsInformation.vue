<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left" @tap.stop="quits">
				<image class="img" src="/static/image/back.png"></image>
			</view>
			<view class="field">新闻资讯</view>
		</view>
		<view style="height: 75rpx;;"></view>
		<view class="contents">
			 <view class="list"  v-for="(item,index) in dataList" :key="index" @tap.stop="jumps(item.id)">
				 <image class="imgs left" :src="'https://yaofangme.hzbixin.cn/'+item.cover_img"></image>
				 <view class="right">
					 <view class="first">{{item.house_title}}</view>
                     <view class="second">{{item.house_headings}}</view>         
                     <view class="third">{{item.create_at}}  </view>    
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			this.getData();
      console.log(436)
		},
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					 window.android.quit();
				 }else{
					window.webkit.messageHandlers.quit.postMessage('return');   
				 }
			  },
			// 跳转到详情页
			jumps(id){
				
				uni.navigateTo({
					url:'/pages/index/newsInformation/new-detail?id='+id
				})
			},
			getData(){
				let that=this;
       
				that.$h5.post('News/newlist',{},(res)=>{
					
					if(res.code ==0){
						that.dataList=res.data;
						that.dataList.map(res=>{
							res.create_at=res.create_at.slice(0,10)
						})
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
		padding:25px 30rpx;
		box-sizing: border-box;
		
		.list{
			width: 700rpx;
			display: flex;
			margin-bottom: 30rpx;
			.imgs{
				display: block;
				width: 200rpx;
				height: 200rpx;
				margin-right: 18rpx;
			}
			.right{
				flex: 1;
				.first{
					color: #141414;
					font-size: 30rpx;
					@include ellipsis(2);
				}
				.second{
					color: #ADADAD;
					font-size: 22rpx;
					min-height: 80rpx;
					@include ellipsis(3);
				}
				.third{
					color: #4C4C4C;
					font-size: 20rpx;
					text-align: right;
					
				}
				
			}
		}
	}
	
	
  
</style>
