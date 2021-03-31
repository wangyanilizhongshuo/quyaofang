<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="center">施工队</view>
			<view class="right" style="top:16rpx" @tap.stop="jumps">施工队入驻</view>
		</view>
		<view class="statusBox" ></view>
		<view class="h5-contents">
			<view class="list-style" v-for="(item,index) in  list" :key="index" @tap.stop="jumpDetail(item.id)">
				<view class="right">
					<view class="top">{{item.r_buildteam}}</view>
					<view class="center">团队人数：{{item.r_num}}</view>
					<view class="rights">{{item.r_intro}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:''
			}
		},
		onReachBottom(){
			 console.log(123412)
		},
		onLoad(options){
		     this.setData(options);		
			 this.getData();
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
			// 申请经纪人跳转
			jumps(){
				uni.navigateTo({
					url:'/pages/index/constructionTeam/construct-join'
				})
			},
			// 打电话
			call(){
				uni.makePhoneCall({
				    phoneNumber: '114' //仅为示例
				});
			},
			jumpDetail(ids){
				uni.navigateTo({
					url:'/pages/index/constructionTeam/construction-detail?id='+ids
				})
			},
			getData(){
				let that=this;
				that.$h5.get('build/buildlist',{},(res)=>{
					if(res.code ==0){
						that.list=res.data;
						console.log(res.data)
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
			 width:60rpx;
			 height: 48rpx;
			 line-height: 48rpx; 
			 position: absolute;
			 left:30rpx;
			 top:7.5rpx;
			 .img{
			 	display: block;
			 	width:19rpx;
			 	height: 30rpx;
			    margin-top:13rpx;
			 }
		 }
		 .center{
			 @extend  %title-field;
			 width:400rpx!important;
		 }
		 .right{
			 color: #ADADAD;
			 font-size: 30rpx;
			 height: 48rpx;
			 position: absolute;
			 right:30rpx;
			 top:10rpx;
		 }
	}
	
  .h5-contents{
	  width: 750rpx;
	  padding:0rpx 35rpx 35rpx ;
	  box-sizing: border-box;
	  .list-style{
		  display: flex;
		  margin-bottom: 20rpx;
		  .imgs{
			  display: block;
			  width: 200rpx;
			  height: 200rpx;
			  margin-right: 20rpx;
		  }
		  .right{
			  display: flex;
			  flex:1;
			  width: 460rpx;
			  height: 200rpx;
			  flex-direction: column;
			   justify-content:flex-end;
			  
			  .top{
				  color: #141414;
				  font-size: 30rpx;
				  font-weight: bold;
				   @include ellipsis(1);
			  }
			  .center{
				  color: #ADADAD;
				  font-size: 26rpx;
				  margin: 20rpx 0;
			  }
			  .rights{
				   width: 460rpx;
				  color: #ADADAD;
				  font-size: 22rpx;
				  @include ellipsis(3);
			  }
		  }
		  
		
	  }
  }
</style>
