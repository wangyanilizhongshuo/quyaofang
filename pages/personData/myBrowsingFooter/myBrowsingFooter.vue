<template>
	<view class="h5-myBrowsing">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">浏览足迹</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			 <view class="listBox" v-for="(item,index)  in lists" :key="index" >
				 <view  class="timeLine">{{item.time}}</view>
				 <view  class="listBox-content" v-for="(itemss ,indexss) in item.data" :key="indexss" @tap.stop="jumps(itemss.h_id,itemss.h_class,itemss.h_status,itemss.h_audit,itemss.h_type)">
					 <image class="imgs" :src="'https://yaofangme.hzbixin.cn/'+itemss.h_img"></image>
					 <view class="right">
						 <view class="firstLine"><text  class="titles">{{itemss.h_housetype}}</text>
						 <text class="fields" v-if="itemss.h_type==1&&itemss.h_status==0">未出租</text>
						 <text class="fields" v-if="itemss.h_type==1&&itemss.h_status==1">已出租</text>
						 <text class="fields" v-if="itemss.h_type==2&&itemss.h_status==1">已出售</text>
						 <text class="fields" v-if="itemss.h_type==2&&itemss.h_status==0">未出售</text>
						 </view>
					     <view class="secondLine">{{itemss.h_architecture}}{{itemss.h_orientation}}{{itemss.h_fitment}}</view>
						 <view class="thirdLine">{{itemss.h_charge}}</view>
						 <view class="fourthLine">
							 <!-- <text class="lists"  v-for="(items,indexs) in itemss.furniture" :key="indexs">{{items}}</text> -->
						 </view>
						 <view class="fifthLine"><text class="price">{{itemss.h_money}}</text>万/套</view>
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
				lists:[
					
					
				]
				
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);	
			 this.getList();
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
			getList(){
				let that=this;
				that.$h5.post('History/historylist',{},(res)=>{
					if(res.code ==0){
						 that.lists=res.data;
						 console.log(that.lists)
					}
				})
			},
			// 跳转到详情页
			jumps(id,types,status,audit,resourse){
				console.log(id,types,status,audit,resourse)
					let flag='';
					if(audit ==1 && status ==1){
						flag=1;
					}else if(audit ==0 && status ==0 ){
						flag=11;
					}else if (audit ==1 && status ==0){
						flag=0;
					}
					
				// url:'/pages/personData/houseDetail/houseDetail?type='+'renting'+'&flag='+flag+'&id='+id+'&getDataTypes='+type
				// getDataTypes 所属类型 毛坯房 公寓
				if(resourse==1){
					resourse=2;
				}else{
					resourse=1;
				}
				uni.navigateTo({
					url:'/pages/personData/houseDetail/houseDetail?type='+'myCollect'+'&id='+id+'&getDataTypes='+types+'&flag='+flag+'&rentSaleType='+resourse
				})
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	// 字体
	 @import "../../../static/scss/font.css";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
		z-index: 10;
	}
	.zwPosition{
		width: 750rpx;
		height: 75rpx;
		margin-top: var(--status-bar-height);
	}
	.h5-myBrowsing{
		background-color: #f2f2f2;
	}
	.news-title{
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		.left{
       width: 100rpx;
       height: 75rpx;
       line-height: 75rpx; 
       position: absolute;
       padding-left:30rpx;
       top:7.5rpx;
		}
		.img{
			display: block;
			width:30rpx;
			height: 30rpx;
			margin-top:23rpx;
		}
		 .field{
			 @extend  %title-field;
		 }
	}
	.contents{
		 background-color:#fff;
		.listBox{
			width: 750rpx;
			.timeLine{
				height: 80rpx;
				line-height: 80rpx;
				width:750rpx;
				font-size: 28rpx;
				color: #141414;
				text-indent: 30rpx;
				background-color: #f2f2f2;
			}
			
			.listBox-content{
				width: 750rpx;
				height: 200rpx;
				box-sizing: border-box;
				padding:0rpx  30rpx 0rpx;
				font-size: 0;
				margin-bottom:30rpx;
				display: flex;
				.imgs{
					width: 200rpx;
					height: 200rpx;
					margin-right:20rpx;
					border-radius: 4rpx;
				}
				.right{
					width: 470rpx;
					display: flex;
					flex-direction: column;;
					justify-content: space-between;
					.firstLine{
						width: 470rpx;
						display: flex;
						justify-content: space-between;
						.titles{
							color: #141414;
							font-size: 30rpx;
							font-weight: bold;
						}
						.fields{
							color: #3466FF;
							font-size: 24rpx;
						}
					}
					.thirdLine,.secondLine{
						color: #4C4C4C;
						font-size: 20rpx;
					}
					.fourthLine{
						width: 470rpx;
						display: flex;
						.lists{
							width: 76rpx;
							text-align: center;;
							line-height: 28rpx;
							height: 28rpx;
							color: #3466FF;
							font-size: 18rpx;
							margin-right: 10rpx;
							background: #F0F8FF;
							border-radius: 4rpx;
						}
						
					}
					.fifthLine{
						color: #F9523A;
						font-size: 20rpx;
						.price{
							font-size: 40rpx;
							font-family: wangyibo;
						}
						
					}
				}
			}
			
		}	
	}
	
.listBox-content:nth-child(2){
      margin-top: 20rpx;
	}
  
</style>
