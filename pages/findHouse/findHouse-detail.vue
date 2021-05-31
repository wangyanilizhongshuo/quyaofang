<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="top-box">
			<view class="title ">
				<view class="left"  @tap.stop="backs" >
					<image class="img" src="/static/image/white-back.png"></image>
				</view>
				<view class="field">{{titleName}}</view>
			</view>
			<view class="search-box">
				<image class="search-img" src="../../static/image/search-search.png"></image>
				<input class="search-input" v-model="keywords" @input="getList" placeholder-style="color:#999999;font-size:28rpx;" placeholder="输入更多的关键词" />
			</view>
		</view>
		<view style="width:750rpx;height:240rpx;"></view>
	    <view class="content-box">
			 <view class="lists-box" v-for="(item,index) in ordinaryList" :key="index"  @tap.stop="jump(item.id)">
                  <image class="left" :src="item.r_cover"></image>				
				  <view class="right">
					   <view class="first-line"><text v-if="types==2">出售</text><text v-if="types==1">出租</text>·{{item.r_houses}}</view>
					   <view class="second-line">{{item.r_mj}}㎡/</view>
					   <view class="third-line">{{item.r_area}}·{{item.r_city}}</view>
					   <view class="fourth-line"><text class="lists" v-for="(item,index) in item.r_facility" :key="index">{{item}}</text></view>
					   <view class="fifth-line"><text class="price">{{item.r_money}}</text>万/套</view>
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
				descriteList:['电梯','车库'],
				types:1,//1出租 2出售
				classes:1,// 1：办公用房 2：毛坯房 3：公寓房 4：生成厂房 5：街面房 6：装修房
				titleName:'毛坯房',
				keywords:'',
				ordinaryList:[]
			
				
			}
		},
		onReachBottom(){
			console.log(45234)
		},
		onLoad(options){
		     this.setData(options);	
					 if(this.types==1){
						 this.titleName=='办公用房'
					 }else if(this.types==2){
						 this.titleName='毛坯房'
					 }else if(this.types==3){
						 this.titleName='公寓房'
					 }else if(this.types==4){
						 this.titleName='生成厂房'
					 }else if(this.types==5){
						 this.titleName='街面房'
					 }else if(this.types==6){
						 this.titleName='装修房'
					 }
					 uni.setNavigationBarTitle({
					 	 title:this.titleName
					 })
					 this.getList()
		},
		methods: {
			backs(){
				uni.navigateBack()
			},
			// 跳转到详情页面
			jump(index){
				if(this.types==1){
					uni.navigateTo({
						 url:'/pages/index/houseDetail/houseDetail1?types='+this.classes+'&ids='+index
					})
				}else if(this.types==2){
					uni.navigateTo({
					    url:'/pages/index/houseDetail/houseDetail?types='+this.classes+'&ids='+index
				   })
				}
			},
			getList(){
				let that=this;
				let url='';
				if(that.types==1){
					url='rent/rentlist'
				}else if (that.types==2){
					url='sell/selllist'
				}
				console.log(that.keywords)
				that.$h5.post(url,{
					type:that.classes,
					keywords:that.keywords
				},(res)=>{
					if(res.code==0){
						that.ordinaryList=res.data
						that.ordinaryList.map(res1=>{
							res1.r_cover=app.globalData.img+res1.r_cover;
							res1.r_facility=res1.r_facility.split('，')
						})
						// i.h_facility=i.h_facility.split('');
						console.log(that.ordinaryList)
					}else{
						
					}
				})
			}
			
		}
	}
</script>

<style scoped lang="scss">
	 @import "../../static/scss/font.css";
	 @import "../../static/scss/common.scss";
	  // font-family: wangyibo;
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: #3466FF;
	}
	.top-box{
		position: fixed;
		top:var(--status-bar-height);
		left:0rpx;
		background-color: #3466FF;
		padding-bottom:20rpx;
		.title{
			width:750rpx;
			height: 90rpx;
			display: flex;
			padding-left:30rpx;
			align-items: center;
			.left{
				width: 60rpx;
				height:60rpx;
				margin-right:240rpx;
				.img{
					display: block;
					width:30rpx;
					height: 30rpx;
					margin:15rpx ;
				}
			}
			.field{
				font-size: 36rpx;
				color:#fff;
				font-weight: bold;
			}
		}
		.search-box{
			width: 690rpx;
			height: 80rpx;
			box-shadow: 0rpx 0rpx 8rpx 0rpx rgba(0, 0, 0, 0.14);
			border-radius: 9rpx;
			display: flex;
			margin-left:30rpx;
			align-items: center;
			background-color: #fff;
			.search-img{
					display: block;
					width:22rpx;
					height: 26rpx;
					margin: 0rpx 17rpx 0 36rpx;
			}
			.search-input{
				flex:1;
				height: 80rpx;;
				// background-color: red;
			}
		}
	}
    .content-box{
		width: 750rpx;
		box-sizing: border-box;
		padding: 30rpx;
		 .lists-box{
			 width: 690rpx;
			 display: flex;
			 margin-bottom:30rpx;
			
			 .left{
				 display: block;
				 width: 200rpx;
				 height: 200rpx;
				 border-radius: 4rpx;
				 margin-right:20rpx;
			 }
			 .right{
				  width: 470rpx;
				  display: flex;
				  flex-direction: column;
				   justify-content: space-between;
				 .first-line{
					 color: #141414;
					 font-size: 30rpx;
					 font-weight: bold;
				 }
				.third-line, .second-line{
					 color: #4C4C4C;
					 font-size: 20rpx;
				 }
				 
				 .fourth-line{
					 display: flex;
					 .lists{
						 text-align: center;
						 height: 28rpx;
						 line-height: 28rpx;
						 color: #3466FF;
						 font-size: 18rpx;
						 background: #F0F8FF;
						 border-radius: 4rpx;
						 margin-right:10rpx;
					 }
				 }
				 .fifth-line{
					 color: #F9523A;
					 font-size: 20rpx;
					 .price{
						 font-family: wangyibo;
						 font-size: 40rpx;
					 }
				 }
			 }
			 
		 }
	}
  
</style>
