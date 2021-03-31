<template>
	<view class="h5-myrelease">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">我的发布</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			 <view class="title-box">
				 <view  class="title-list" :class="activeIndex ==index?'actives':''" v-for="(item,index) in listTitle" :key="index"  @tap.stop="scrollOne(index)">{{item}}</view>
				<!-- <scroll-view class="scroll-view_H"  :scroll-with-animation="true"  scroll-x="true"  scroll-left="0">
				   <view :class="activeIndex ==index?'actives':''"  class="scroll-view-item_H" v-for="(item,index) in listTitle" :key="index"  @tap.stop="scrollOne(index)">{{item}}</view>
				 </scroll-view> -->
			 </view>
			 <view class="list-box" v-if="activeIndex==0">
				  <view class="lists" v-for="(item,index) in listData " :key="index" @tap="jumpDetail(item.id,0,100)">
					  <image class="imgs left" :src="item.house_cover"></image>
					  <view class="right">
						   <view class="firstLine">{{item.house_nick}}</view>
						   <view class="secondLine">{{item.house_intro}}</view>
					  </view>
				  </view>
			 </view>
			 <view class="list-box" v-if="activeIndex==1">
				 <view class="spec-list"  v-for="(item,index) in listData " :key="index">
					 <image class="spec-img" :src="item.house_img" ></image>
					 <view class="spec-center">
						 <view class="top">{{item.house_name}}</view>
						 <view class="down">{{item.house_intro}}</view>
					 </view>
					 <view class="spec-right" @tap="agentJump(item.id)">
						 <image  class="top-img" src="../../../static/image/edit.png"></image>
						 <view class="down">编辑</view>
					 </view>
				</view> 
			 </view>
			 <view class="list-box" v-if="activeIndex==2">
				  <view class="lists" v-for="(item,index) in listData " :key="index" @tap="jumpDetail(item.id,1,item.house_type)">
					  <image class="imgs left" :src="item.house_cover"></image>
					  <view class="right">
						   <view class="firstLine">{{item.house_nick}}</view>
						   <view class="secondLine">{{item.house_intro}}</view>
					  </view>
				  </view>
			 </view>
			 <view class="list-box" v-if="activeIndex==3">
					  <view class="construct-lists" v-for="(item,index) in listData" :key="index">
						  <!-- <image class="construct-imgs " src="../../../static/image/wangyibo3.jpg"></image> -->
						  <view class="construct-right">
							   <view class="construct-firstLine">{{item.r_buildteam}}</view>
							   <view class="construct-secondLine">团队人数：{{item.r_num}}</view>
							   <view class="construct-thirdLine">{{item.r_intro}}</view>
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
				listTitle:['建材家居','经纪人服务','设计装潢','施工队'],
				activeIndex:0,
				listData:[]
				
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
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					text = window.android.quit();
				 }else{
					 // alert('重新退出'')
				 }
			     return text;
			  },
			  // 获取数据
			  getData(){
				  let that=this;
				  that.$h5.post('userhouse/myrelease',{
					  type:that.activeIndex+1
				  },(res)=>{
					  if(res.code==0){
						  that.listData=res.data;
						  if(that.activeIndex==0 || that.activeIndex==2){
							  that.listData.map(res=>{
							  	   res.house_cover=app.globalData.img+res.house_cover
							  })
						  }
						  else if(that.activeIndex==1){
							   that.listData.map(res=>{
							      res.house_img=app.globalData.img+res.house_img
						      })
						  }
						  
						 
					  }
				  })
			  },
			// 经纪人编辑
			agentJump(ids){
				console.log(2346)
				uni.navigateTo({
					url:'/pages/personData/myRelease/agentEdite?id='+ids
				})
			},
			// 跳转到详情页
			jumpDetail(ids,type,styles){
				if(type==0){
					console.log(1234)
					uni.navigateTo({
						url:'/pages/personData/myRelease/buildmaterialDetail?id='+ids+'&types='+styles
					})
				}else if(type ==1){
					uni.navigateTo({
						url:'/pages/personData/myRelease/buildmaterialDetail?id='+ids+'&types='+styles
					})
				}
			},
			// title 滚动条的滚动
			scrollOne(index){
				this.activeIndex=index;
				this.listData=[];
				this.getData();
			},
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
		.title-box{
			width: 750rpx;
			padding:0rpx 30rpx ;
			box-sizing: border-box;
			height: 90rpx;
			display: flex;
			.title-list{
				width:172.5rpx;
			    height: 90rpx;
				line-height: 90rpx;
				text-align: center;
				color: #3E3E3E;
				font-size: 24rpx;
			}
			.actives{
				color: #3466FF!important;
				font-size: 30rpx!important;
				font-weight: bold;
			}
			.scroll-view_H{
				overflow: hidden;
				white-space: nowrap;
				// border-bottom:1rpx solid #eee;
				.scroll-view-item_H{
					display: inline-block;
					width: 180rpx;
					height: 90rpx;
					text-align: center;
					line-height: 90rpx;
					color: #3E3E3E;
					font-size: 24rpx;
				}
				
			}
			
		}
		.list-box{
			margin-top:15rpx;
			.lists{
			    width: 750rpx;
				height: 144rpx;
				margin:0rpx 30rpx 20rpx;
				display: flex;
				.imgs{
					display: block;
					width: 200rpx;
					height: 144rpx;
					margin-right:20rpx;
                    border-radius: 4rpx;
				}
				.right{
					width: 470rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.firstLine{
						font-weight: bold;
						color: #141414;
						font-size: 30rpx;
						@include  ellipsis(1);
					}
					.secondLine{
						color: #ADADAD;
						font-size: 22rpx;
						@include  ellipsis(2);
					}
				}
			}
			
		}
		.spec-list{
			width: 750rpx;
			height: 120rpx;
			padding:0rpx 30rpx;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			margin-bottom: 20rpx;;
			.spec-img{
				display: block;
				width: 120rpx;
				height: 120rpx;
				border-radius: 60rpx;
			}
			.spec-center{
				width: 400rpx;
				height: 120rpx;
				display: flex;
				flex-direction: column;;
				justify-content: space-between;
				.top{
					color: #141414;
					font-size: 36rpx;
					font-weight: bold;
					@include  ellipsis(1);
					;
				}
				.down{
					color: #ADADAD;
					font-size: 22rpx;
					@include  ellipsis(2);
				}
			}
			.spec-right{
				width: 80rpx ;
				height: 120rpx;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: center;
				.top-img{
					display: block;
					width: 61rpx;
					height: 61rpx;
					margin-bottom:15rpx;
				}
				.down{
				   color: #303133;
				   font-size: 18rpx;
				}
				
			}
			
		}
	
	}
	.construct-lists{
		width: 750rpx;
		height: 200rpx;
		padding:0rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		margin-bottom: 20px;;
		.construct-imgs{
			display: block;
			width: 200rpx;
			height: 200rpx;
			margin-right: 20rpx;
            border-radius: 4rpx;
		}
		.construct-right{
			width: 470rpx;
			display: flex;
			height: 200rpx;
			flex-direction: column;
			justify-content: space-between;
			 .construct-firstLine{
				 color: #141414;
				 font-size: 30rpx;
				 font-weight: bold;
				 
			 }
			 .construct-secondLine{
				 color: #ADADAD;
				 font-size: 26rpx;
			 }
			 .construct-thirdLine{
				color: #ADADAD;
				font-size: 26rpx;
				@include  ellipsis(3);
			 }
		}
		
	}
	
</style>
