<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">我的收藏</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			<side-slip v-for="(item, index) in listData" :key="index" @remove="onRemove(index)">
				<view class="cell"  @tap.stop="jumps(item.h_id,item.h_class,item.h_status,item.h_audit,item.h_type)">
					<view class="cell__hd"><image mode="aspectFill" :src="item.h_img" alt="" /></view>
					<view class="cell__bd">
						<view class="name"><view class="titles" v-if="item.h_type==2">出售 {{item.h_charge}}</view><view class="titles" v-if="item.h_type==1">出租 {{item.h_charge}}</view><view class="flagss"></view></view>
					    <view class="desc1">{{item.h_architecture}}㎡/{{item.h_orientation}}/{{item.h_fitment}}</view>
						<view class="desc2">{{item.h_city}}·{{item.h_area}}</view>
						<!-- <view class="desc3">
							<view class="small-list" v-for="(items,indexs) in item.smallList" :key="indexs">{{items}}</view>
						</view> -->
						<view class="prices">{{ item.h_money}} <text class="dw">万/套</text></view>
					</view>
				</view>
			</side-slip>
		</view>
	</view>
</template>
<script>
	import app from '../../../App.vue'
	import SideSlip from '@/components/side-slip/index'
	export default {
		data() {
			return {
				listData: [
				     ],
				
			}
		},
		components: {
			'side-slip': SideSlip
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);
			 this.getList();
		},
		methods: {
			quits(){
				if(window.android && window.android.quit){
					 window.android.quit();
				}else{
					 window.webkit.messageHandlers.quit.postMessage('return');   
				}
			  },
			// 跳转到详情页
			jumpDetail(index){
				// 
				uni.navigateTo({
					url:'/pages/personData/houseDetail/houseDetail'
				})
				
			},
			getList(){
				let that =this;
				that.$h5.post('collect/collectlist',{},(res)=>{
					if(res.code ==0){
						let aa=res.data;
						aa.map(ress=>{
						  ress.h_img=app.globalData.img+ress.h_img
						  // ress.m_facility=ress.m_facility.split('，')
						})
						that.listData=aa;
					}
				})
			},
			jumps(id,types,status,audit,resourse){
				
					let flag='';
					if(audit ==1 && status ==1){
						flag=1;
					}else if(audit ==0 && status ==0 ){
						flag=11;
					}else if (audit ==1 && status ==0){
						flag=0;
					}
					console.log(id,types,status,audit,resourse)
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
			
			onRemove(index) {
				uni.showToast({
					title: `取消了第${index}个cell`,
					icon: 'none'
				})
				let that=this;
				that.$h5.post('collect/clickcollect',{
					type:that.listData[index].h_type,
					class:that.listData[index].h_class,
					id:that.listData[index].h_id
				},(res)=>{
					if(res.code ==0){
						that.getList();
					}
				})
				// that.listData.splice(index, 1)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	@import "../../../static/scss/font.css";
	@import '../../../static/scss/variables';
	// 字体
	// @import "../../../static/scss/font.css";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
		z-index:20
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
		.list-box{
			 width: 750rpx;
			 height: 200rpx;
			 padding:30rpx 30rpx 0rpx;
			 box-sizing: border-box ;
			 display: flex;
			 margin-bottom:20rpx;
			.left{
				display: block;
				width: 200rpx;
				height: 200rpx;
				margin-right:20rpx ;
                border-radius: 4rpx;
			}
			.right{
				width: 470rpx;
				height: 200rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.first-line{
					color: #141414;
					font-size: 30rpx;
					font-weight: bold;
					width: 470rpx;
					display: flex;
					justify-content: space-between;
					align-items: flex-end;
					.flags{
						width: 360rpx;
						 @include ellipsis(1);
					}
					.flag{
						color: #3466FF;
						font-size: 24rpx;
					}
				}
				.second-line{
					color: #4C4C4C;
					font-size: 20rpx;
				}
				.third-line{
					color: #4C4C4C;
					font-size: 20rpx;;
				}
				.fourth-line{
					display: flex;
					.lists{
						
						height: 28rpx;
						line-height: 28rpx;
						text-align: center;
						background: #F0F8FF;
						border-radius: 4rpx;
						color: #3466FF;
						font-size: 18rpx;
						margin-right: 10rpx;;
					}
				}
				.fifth-line{
					font-family: wangyibo;
					font-size: 40rpx;
					color:#F9523A;
					.field{
						color: #F9523A;
						font-size: 20rpx;
					}
				}
				
			}
			
		}
		
	}
	page {
		padding-bottom: 1rpx;
	}
	
	side-slip {
		&:not(:last-child) .cell {
			border-bottom: 1rpx solid $lineColor;
		}
	}
	
	.cells {
		background: #ffffff;
		margin: 20rpx 0;
	}
	
	.cell {
		width: 750rpx;
		display: flex;
		padding: 20rpx 30rpx;
	
		&:not(:last-child) {
			border-bottom: 1rpx solid $lineColor;
		}
	
		&__hd {
			font-size: 0;
			image {
				width: 200rpx;
				height: 200rpx;
				margin-right: 20rpx;
				border-radius: 4rpx;
			}
		}
	
		&__bd {
			flex: 1;
	        width: 490rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			overflow: hidden;
			// background-color: green;
			.name {
				width: 490rpx;
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				font-size: 30rpx;
				font-weight: bold;
				color: #141414;
				height: 38rpx;;
				.titles{
					 width: 400rpx;
					 overflow: hidden;
					 @include line(1);
				}
				.flagss{
					color: #3466FF;
					font-size: 24rpx;
				}
			}
			.desc1 ,.desc2{
				color: #4C4C4C;
				font-size: 20rpx;
			}
			.desc3{
				width: 490rpx;
				display: flex;
				.small-list{
					width: 76rpx;
					height: 28rpx;
					color: #3466FF;
					font-size: 18rpx;
					line-height: 28rpx;
					text-align: center;
					background: #F0F8FF;
					border-radius: 4rpx;
				}
			}
			.prices{
				color: #F9523A;
				font-size: 40rpx;
				font-family: wangyibo;
				.dw{
					font-size: 20rpx;
				}
			}
		}
	}
	
	
  
</style>
