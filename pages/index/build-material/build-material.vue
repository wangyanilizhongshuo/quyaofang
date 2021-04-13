<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">建材家居</view>
			<view class="companyJoin" @tap="companyJoin">公司入驻</view>
		</view>
		<view class="lines"></view>
		<view class="contents">
			  <view class="title-scroll">
				    <scroll-view class="scroll-view_H"  :scroll-with-animation="true"  scroll-x="true"  scroll-left="0">
					   <view :class="activeIndex ==index?'actives':''"  class="scroll-view-item_H" v-for="(item,index) in typeList" :key="index"  @tap.stop="getList(item.id,index)">{{item.house_type}}</view>
				     </scroll-view>
			  </view>
			  <view class="list-box">
				   <view class="list"  v-for="(item,index) in dataList" :key="index"  @tap="jumps(item.id)">
					  <image class="imgss" :src="'https://yaofangme.hzbixin.cn/'+item.house_cover"></image>
					  <view class="right">
						   <view class="title">{{item.house_nick}}</view>
						   <view class="contents">{{item.house_intro}}</view>
					   </view>
				   </view>
				  
				  
			  </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex:0,
				typeList:[],
				dataList:''
				
				
				
			}
		},
		onReachBottom(){
			console.log(325)
		},
		onLoad(options){
		     this.setData(options);	
			 this.getTypes();
			 this.getList(1,0)
			 
		},
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					 window.android.quit();
				 }else{
					 window.webkit.messageHandlers.quit.postMessage(123);      
				 }
			  },
			// title 滚动条的滚动
			scrollOne(index){
				this.activeIndex=index;
			},
			// 公司加入的跳转
			companyJoin(){
			   uni.navigateTo({
			   	url:'/pages/index/build-material/companyJoin'
			   })
			},
			// 详情页面
			jumps(id){
				let that=this;
				uni.navigateTo({
					url:'/pages/index/build-material/material-detail?id='+id+'&types='+that.typeList[that.activeIndex].house_type
				})
			},
			
			// 获取类型不同的数据
			getTypes(){
				this.$h5.get('fitment/findtype',{},(res)=>{
					if(res.code ==0){
						this.typeList=res.data;
					}
				})
			},
			// 获取列表
			getList(types,indx){
				this.activeIndex=indx;
				let that=this;
				that.$h5.post('fitment/holdlist',{
					type:types
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
		background-color:#fff;
		z-index:10;
	}
	.lines{
		width: 750rpx;
		height:var(--status-bar-height)  ;
		margin-top:75rpx;
	}
	.news-title{
		 @extend  %title;
		 padding-right:30rpx;
		 border-bottom:1rpx solid #eee;
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
		 .companyJoin{
			 color: #303133;
			 font-size: 30rpx;
			 position: absolute;
			 right:30rpx;
			 top:7.5rpx;
		 }
		 .field{
			 @extend  %title-field;
			 width:450rpx;
		 }
	}
	.contents{
		width: 750rpx;
		
	}
	.scroll-view_H{
		overflow: hidden;
		white-space: nowrap;
		border-bottom:1rpx solid #eee;
		.scroll-view-item_H{
			display: inline-block;
			width: 130rpx;
			height: 90rpx;
			text-align: center;
			line-height: 90rpx;
			color: #3E3E3E;
			font-size: 24rpx;
		}
		.actives{
			color: #3466FF;
			font-size: 30rpx;
			font-weight: bold;
		}
	}
	.list-box{
		width:750rpx;
		padding: 30rpx;
		box-sizing: border-box;
		.list{
			display: flex;
			width:690rpx;
			height: 144rpx;
			margin-bottom: 28rpx;
			.imgss{
				width: 220rpx;
				height: 144rpx;
				margin-right: 21rpx;
			}
			.right{
				.title{
					color: #141414;
					font-size:30rpx ;
					margin-bottom:15rpx;
					width: 430rpx;
					@include ellipsis(1);
				}
				.contents{
					width: 430rpx;
					color: #ADADAD;
					font-size: 22rpx;
					@include ellipsis(3);
				}
				
			}
		}
		
	}
	
	
  
</style>
