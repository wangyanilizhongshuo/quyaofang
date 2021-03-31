<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="center">设计装潢</view>
			<view class="right"  style="top:16rpx"  @tap.stop="jumps">公司入驻</view>
		</view>
		<view class="statusBox" ></view>
		<view class="h5-contents">
			<view class="designlist list-style">
				<view class="title">
					<image class="images" src="../../../static/image/blue-line.png"/>
					<view class="filed">设计</view>
				</view>
				<view class="list-content" v-for="(item,index) in designList" :key="index" @tap.stop="jumpDetail(item.id,0)">
					<image class="imgs  left" :src="item.house_cover"></image>
					<view class="right">
						<view class="top">{{item.house_nick}}</view>
						<view class="down">{{item.house_intro}}</view>
					</view>
				</view>
			</view>
			<view class="decoratelist list-style">
				<view class="title">
					<image class="images" src="../../../static/image/blue-line.png"/>
					<view class="filed">装潢</view>
				</view>
				<view class="list-content" v-for="(item,index) in decorateList" :key="index" @tap.stop="jumpDetail(item.id,1)">
					<image class="imgs  left" :src="item.house_cover"></image>
					<view class="right">
						<view class="top">{{item.house_nick}}</view>
						<view class="down">{{item.house_intro}}</view>
					</view>
				</view>	
			</view>
		</view>
	</view>
</template>
<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				designList:'',
				decorateList:''
			}
		},
		onReachBottom(){
			 console.log(123412)
		},
		onLoad(options){
            this.setData(options);
			this.getLists();
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
			getLists(){
				  this.$h5.post('fitment/fintmentlist',{
					  type:0
				  },(res)=>{
					  if(res.code ==0){
						  
						  
						  this.designList=res.data;
						  this.designList.map(res1=>{
							  res1.house_cover=app.globalData.img+res1.house_cover
						  })
						  
					  }
				  }) 
				  this.$h5.post('fitment/fintmentlist',{
				  	  type:1
				  },(res)=>{
					  if(res.code ==0){
						  this.decorateList=res.data;
						  this.decorateList.map(res1=>{
						  			 res1.house_cover=app.globalData.img+res1.house_cover
						  })
						 
					  }
				  })
			 },
			// 申请经纪人跳转
			jumps(){
				uni.navigateTo({
					url:'/pages/index/design-decoration/design-companyJoin'
				})
			},
			
			jumpDetail(id,type){
			     let that=this;
				 let types=type;
				
				uni.navigateTo({
					url:'/pages/index/design-decoration/design-detail?id='+id+'&type='+types
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
			 color: #303133;
			 font-size: 30rpx;
			 height: 48rpx;
			 position: absolute;
			 right:30rpx;
			 top:16rpx;
		 }
	}
  .h5-contents{
	  width: 750rpx;
	  padding:35rpx ;
	  box-sizing: border-box;
	  .list-style{
		  .title{
			  width: 680rpx;
			  height: 34rpx;
			  display: flex;
			  align-items: flex-end;
			  margin-bottom: 32rpx;
			  .images{
				  display: block;
				  width: 13rpx;
				  height: 34rpx;
				  margin-right: 10rpx;
			  }
			  .field{
				  color: #303133;
				  font-family: 'PingFang-SC-Bold';
				  font-weight: bold;
				  font-size: 40rpx;
			  }
		  }
		  .decoratelist{
			  margin-top:30rpx;
		  }
		  .list-content{
			  width: 680rpx;
			  display: flex;
			  margin-bottom: 28rpx;
			  .imgs{
				  display:block;
				  width:200rpx;
				  height: 144rpx;
				  margin-right:21rpx;
			  }
			  .right{
				  flex:1;
				  // display: flex;
				  // flex-direction: column;
				  // justify-content: space-between;
				  .top{
					  color: #141414;
					  font-weight: bold;
					  font-size: 30rpx;
					  margin-bottom: 10rpx;
				  }
				  .down{
					  font-size: 22rpx;
					  color: #ADADAD;
					  @include ellipsis(3);
				  }
				  
				  
			  }
		  }
	  }
  }
</style>
