<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="quits" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">我的出租</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
			 <view class="list-box" v-for="(item,index) in dataList" :key="index" @tap.stop="jumps(item.id,item.is_audit,item.is_status,item.r_type)">
				 <image class="left imgs" :src="'https://yaofangme.hzbixin.cn/'+item.r_cover"></image>
				 <view class="right">
					<view class="first-line"><text class="flags">{{item.r_houses}}</text>
					   <text class="flag" v-if="item.is_audit==0 && item.is_status ==0" >审核中</text>
					   <text class="flag" v-if="item.is_audit==1 && item.is_status ==0" >挂牌中</text>
					   <text class="flag" v-if="item.is_audit==1 && item.is_status ==1" >已出租</text> 
					</view>
					<view class="second-line">{{item.r_mj}}㎡</view>
					<view class="third-line">{{item.r_area}}</view>
					<view class="fifth-line" v-if="item.r_type==2 || item.r_type==3">{{item.r_money}}<text class="field">元/月</text></view>
					<view class="fifth-line" v-if="item.r_type==5 || item.r_type==6">{{item.r_money}}<text class="field">万元/月</text></view>
					<view class="fifth-line" v-if="item.r_type==4 || item.r_type==1">{{item.r_money}}<text class="field">元/㎡/天</text></view>
				 </view>
			 </view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[],
				lists:[{value:'已出租',flag:1},{value:'未出租',flag:0},{value:'审核中',flag:11}]
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
			jumps(id,audit,status,type){
				let flag='';
				if(audit ==1 && status ==1){
					flag=1;
				}else if(audit ==0 && status ==0 ){
					flag=11;
				}else if (audit ==1 && status ==0){
					flag=0;
				}
				console.log(id ,audit,status,type)
				// 已经出租和未出租
				// 	url:'/pages/personData/houseDetail/houseDetail?type='+'houseResource'+'
				// &flag='+flag+'&id='+id+'&getDataTypes='+type
				
				uni.navigateTo({
					// url:'/pages/personData/houseDetail/houseDetail?type='+'renting'+'&'+
					url:'/pages/personData/houseDetail/houseDetail?type='+'renting'+'&flag='+flag+'&id='+id+'&getDataTypes='+type
				})
			},
			getData(){
				
				this.$h5.post('Userhouse/renthouse',{},(res)=>{
					 if(res.code ==0){
						if(res.code ==0){
							let aa =res.data;
							// h_type 2 毛坯房  3 公寓  元/月  6 装修房  5 街面房 万元/月 4 生产厂房 1办公用房 元/㎡/天
							this.dataList.push(...(aa.apartment),...(aa.blank),...(aa.decorate),...(aa.production),...(aa.street),...(aa.workshop))
							console.log(this.dataList)
						}
						 
					 }
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	@import "../../../static/scss/font.css";
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
	
	
  
</style>
