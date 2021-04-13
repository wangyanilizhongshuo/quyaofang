<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">消息中心</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			<view class="list-box"  v-for="(item,index) in lists" :key="index">
				<view  class="time-title">{{item.time}}</view>
				<view  class="boxs">
					<view  class="first">{{item.data[0].title}}</view>
					<view  class="second">{{item.data[0].message}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lists:[
					{
					  time:'2020-9-14',
					  title:'天涯共此时千里共婵娟！',
					  desc:'石晨名府在售均价29700元/平'
				    },
					{
					  time:'2020-9-13',
					  title:'天涯共此时千里共婵娟！',
					  desc:'石晨名府在售均价29700元/平'
					},
				]
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);	
			 this.getData();
		},
		methods: {
			quits(){
				if(window.android && window.android.quit){
									 window.android.quit();
				}else{
									 window.webkit.messageHandlers.quit.postMessage(123);      
				}
			  },
			  getData(){
				  let that=this;
				  that.$h5.post('user/messagecentre',{},(res)=>{
					  if(res.code==0){
						  that.lists=res.data;
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
	.contents{
		height: 100vh;
		background-color: #f2f2f2;
		
		.list-box{
			width: 750rpx;
			padding:0rpx  30rpx ;
			box-sizing: border-box;
			.time-title{
				width: 690rpx;
				text-align: center;
				color: #303133;
				font-size: 24rpx;
				height: 60rpx;
				line-height: 60rpx;
			}
			.boxs{
				background-color: #fff;;
				width: 690rpx;;
				height: 164rpx;
				padding:30rpx 24rpx;
				box-sizing: border-box;
                border-radius: 4rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.first{
					font-size: 32rpx;
					font-weight: bold;
					color: #303133;
				}
				.second{
					color: #303133;
					font-size: 28rpx;;
				}
			}
			
		}
		
		
	}
	
  
</style>
