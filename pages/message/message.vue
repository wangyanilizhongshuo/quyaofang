<template>
	<view class="h5-meg">
		
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			<!-- <view class="title-msg" v-for="(item,index) in msgList" :key="index">
				<view class="left" v-if="item.type=='房东'">
					<image class="imgs  left-small" :src="item.landimg"></image>
				    <view  class="right-small">
					  <view class="up">{{item.nick}}</view>
					  <view class="down">15233434243</view>
					</view>
				</view>
			    <image  class="right" src="../../static/image/call.png"></image>
			</view> -->
			<view class="lists-box">
				<view class="lists"  >
					<image class="imgs" :src="msgList.h_img"></image>
					<view class="wordmsg">{{msgList.content[0].content}}</view>
				</view>
			</view>
		</view>
		

		
	</view>
</template>

<script>
	import app from '../../App.vue'
	export default {
		  data() {
		       
		        return {
		            name:'李先生',
					msgList:[],
					id:''
		        }
		    },
		onLoad(options){
			this.setData(options)
			this.getMsg();
			console.log(123)
		},
		methods: {
			quits(){
				 if(window.android && window.android.quit){
					 window.android.quit();
				 }else{
					 window.webkit.messageHandlers.quit.postMessage(123);      
				 }
			  },
			  getMsg(){
				  let that=this;
				  
				  that.$h5.post('Message/messagedetail',{
					  id:that.id
					  // id:19
				  },(res)=>{
					  if(res.code==0){
						  that.msgList=res.data;
						  that.msgList.h_img =app.globalData.img+that.msgList.h_img;
						 
					  }else{
						  
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
	     padding:0px 30rpx;
		 box-sizing: border-box;
		.title-msg{
			width: 690rpx;
			height: 180rpx;
			display: flex;
			padding:0rpx 40rpx;
			box-sizing: border-box;
			align-items: center;
			background-color: #fff;
			justify-content: space-between;
			.left{
				// width: 200rpx;
				height: 100rpx;
				display: flex;
				.imgs{
					display: block;
                    border-radius: 50%;
					width: 100rpx;
					height: 100rpx;
					margin-right: 20rpx;
				}
				.right-small{
					color: #222222;
					font-size: 27rpx;
					height: 100rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					.down{
					  margin-bottom:10rpx	
					}
					.up{
						
					}
				}
			}
			.right{
				display: block;
				width: 60rpx;
				height: 60rpx;
			}
		}
		
		
	}
	
	.lists-box{
		margin-top: 35rpx;;
		.lists{
			display: flex;
			margin-bottom: 26rpx;;
			.imgs{
				display: block;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50rpx;
				margin-right:30rpx;
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
			}
			
		}
		
	}
  
</style>
