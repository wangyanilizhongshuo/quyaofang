<template>
	<view class="h5-meg">
		fasdfsadfasdf
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">{{name}}</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			
			<view class="lists-box">
				<view class="lists" v-for="(item,index) in dataList" :key="index">
					<view class="wordmsg">{{item.word}}</view>
					<image class="imgs" :src="item.url"></image>
				
				</view>
			</view>
		</view>
		<view class="getKeyboard">
			<input class="inputs" />
			<view class="setMsg">留言</view>
			
		</view>

		
	</view>
</template>

<script>
	export default {
		  data() {
		       
		        return {
		            name:'李先生',
					dataList:[{
						url:'../../static/image/wangyibo.jpg',
						word:'你好，我是一个好孩子。'
					},
					{
						url:'../../static/image/wangyibo1.jpg',
						word:'你好，我是一个好孩子。你好，我是一个好孩子'
					},
					{
						url:'../../static/image/wangyibo2.jpg',
						word:'你好，我是一个好孩子。我是一个好孩子你好，我是一个好孩子。我是一个好孩子'
					},
					]
		        }
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
			}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
	// 字体
	// @import "../../../static/scss/font.css";
	.h5-meg{
		background-color: #f2f2f2;
		height: 100vh;;
	}
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
		 width: 750rpx;
	     padding:0rpx 30rpx;
		 box-sizing: border-box;
	}
	
	.lists-box{
	
		.lists{
			
			display: flex;
			margin-bottom: 35rpx;;
			min-height: 100rpx;
			position: relative;
			left:0rpx;
			top:0rpx;
			.imgs{
				display: block;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50rpx;
				
				position: absolute;
				top:0rpx;
				right:0rpx;
				
			}
			.wordmsg{
				// display: block;
				 margin-top:20rpx;
				 width: 425rpx;
				 min-height: 60rpx;
			     padding:10rpx 5rpx;
				 background: #FFFFFF;
				 border-radius: 4rpx;
				 text-indent: 25rpx;
				 font-size: 28rpx;
				 color: #222222;
				 position: absolute;
				 top:0rpx;
				 right:130rpx;
				 
			}
			
		}
		
	}
	.getKeyboard{
		width: 750rpx;
		height: 104rpx;
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		z-index: 10;
         background: #F5F5F5;
		 display: flex;
		 justify-content: space-between;
		 padding: 15rpx 30rpx;
		 box-sizing:border-box;
		.inputs{
			width: 530rpx;
			height: 70rpx;
			background: #F9F9F9;
			border: 2rpx solid #EAEAEA;
			border-radius: 8rpx;
			text-indent: 20rpx;
		}
		.setMsg{
			width: 140rpx;
			height: 70rpx;
			background: #4270ED;
			border-radius: 8rpx;
			text-align: center;
			line-height: 70rpx;
			font-size: 28rpx;
			font-family: PingFang SC;
			font-weight: 500;
			color: #F5F5F5;
			
		}
	}
  
</style>
