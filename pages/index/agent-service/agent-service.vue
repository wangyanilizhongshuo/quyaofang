<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="center">经纪人服务</view>
			<view class="right" @tap.stop="jumps">申请经纪人</view>
		</view>
		<view class="statusBox" ></view>
		<!-- <view style="width: 300rpx;height:300rpx;background-color: red;" @tap.stop='test'>请点击我</view> -->
		<view class="h5-contents">
			<view class="list" v-for="(item,index) in agentList" :key="index">
				<image class="imgs left" :src="item.house_img"></image>
				<view class="center">
					<view class="top"><text class="name">{{item.house_name}}</text><text class="oppupation">经纪人</text></view>
					<view class="down">{{item.house_intro}}</view>
				</view>
				<view class="right">
					<!-- <view class="first styless">
						<image class="logo-image" src="/static/image/message.png"></image>
						<view class="filed">给ta留言</view>
					</view> -->
					<view class="second styless"  @tap.stop="calls(item.house_phone)">
						<image class="logo-image" src="/static/image/call.png"></image>
						<view class="filed">在线联系</view>
					</view>
				</view>
			</view>
		</view>
		<view class="unLoginBoxMask" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'></view>
		<view class="unLoginBox" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'>
				 <image class="imgs" src="../../../static/image/onLoginBg.png"></image>
		</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				agentList:'',
				user_token:'',
				shareDiaFlag:false,
				
			}
		},
		onReachBottom(){
			// console.log(123412)
		},
		onLoad(options){
		     this.setData(options);	
			 if(this.user_token){
			 		uni.setStorageSync('goUserToken',this.user_token)
			 }
			 if(uni.getStorageSync('goUserToken')){
			 		 this.user_token=uni.getStorageSync("goUserToken")
			 }
			 this.getList();
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
			// 申请经纪人跳转
			jumps(){
				if(!this.user_token){
					 this.shareDiaFlag=true;
				}else{
					uni.navigateTo({
				 	     url:'/pages/index/agent-service/apply-agent'
				   })
				}
				
			},
			test(){
				if(window.android && window.android.getVersion){
				       window.android.getVersion();
				 }else{
					  window.webkit.messageHandlers.getVersion.postMessage(12345); 
				 }
			},
			 
			// 打电话
			calls(numbers){
				let  number=numbers;
				uni.makePhoneCall({
				    phoneNumber:number ,//仅为示例,
					success(res){
						// if(window.android && window.android.quits){
						//        window.android.quits();
						//  }else{
						// 	  window.webkit.messageHandlers.getVersion.postMessage(12345); 
						//  }
						if(window.android && window.android.quit){
						}else{
							window.webkit.messageHandlers.quit.postMessage(number);			 
						}
					},
					fail(res){
							
					}
				});
			},
			getList(){
				this.$h5.get('Broker/brokerlist',{},(res)=>{
					if(res.code ==0){
						this.agentList=res.data;
						this.agentList.map(res1=>{
							res1.house_img=app.globalData.img+res1.house_img;
							console.log(res)
						})
					}
					
					
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.unLoginBoxMask{
		 @extend  %unLoginboxMask;
	}
	.unLoginBox{
		@extend  %unLoginbox;
	}
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
	}
	.statusBox{
		width:750rpx;
		height: var(--status-bar-height);
		margin-top: 75rpx;
		
	}
	.news-title{
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		 padding-left:0rpx;
		 .left{
			 width:100rpx;
			 height: 60rpx;
			 position: absolute;
       padding-left:30rpx;
			 .img{
			 	display: block;
			 	width:30rpx;
			 	height: 30rpx;
			  margin-top:15rpx;
			 }
		 }
		 .center{
			 @extend  %title-field;
			 width:400rpx!important;
		 }
		 .right{
			 color: #303133;
			 font-size: 30rpx;
			 height: 48rpx;
			 position: absolute;
			 right:30rpx;
			 top:8rpx;
		 }
	}
	
  .h5-contents{
	  width: 750rpx;
	  padding:35rpx 50rpx;
	  box-sizing: border-box;
	  .list{
		  width: 650rpx;
		  display: flex;
		  justify-content: space-between;
		  align-items: flex-end;
		  margin-bottom: 50rpx;
		  .left{
			  width: 120rpx;
			  height: 120rpx;
			  display: block;
			  border-radius: 60rpx;;
		  }
		  .center{
			  width: 310rpx;
			  height: 120rpx;
			  display: flex;
			  flex-direction: column;
			  justify-content: space-between;
			  .top{
				   .name{
					   color:#141414 ;
					   font-size: 36rpx;
					   font-weight: bold;
				   }
				   .oppupation{
					   font-size: 26rpx;
					   width: 60rpx;
					   height: 26rpx;
					   background-color: #F7F2EC;
					   color:#B68753;
					   text-align: center;
					   line-height: 26rpx;;
					   margin-left: 20rpx;
				   }
			  }
			  .down{
				  color: #ADADAD;
				  font-size: 22rpx;
				  @include ellipsis(2);
			  }
		  }
		  .right{
			  display: flex;
			  .styless{
				  width: 96rpx;
				  display: flex;
				  flex-direction: column;
				  align-items: center;
				  .logo-image{
					  display: block;
					  width: 60rpx;
					  height: 60rpx;
					  margin-bottom:13rpx;
				  }
				  .filed{
					  color: #303133;
					  font-size: 18rpx;
				  }
			  }
			  .first{
				   margin-right:8rpx;
			  }
		  }
	  }
  }
</style>
