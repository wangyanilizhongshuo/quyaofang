<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="top-box">
			<view class="title ">
				<view class="left"  @tap.stop="quits" >
					<image class="img" src="/static/image/white-back.png"></image>
				</view>
				<view class="field">{{titleName}}</view>
			</view>
			<view class="search-box">
				<image class="search-img" src="../../static/image/search-search.png"></image>
				<input class="search-input" placeholder-style="color:#999999;font-size:28rpx;" placeholder="输入更多的关键词"  @tap.stop="jumpSearch()"/>
			</view>
		</view>
		<view style="width:750rpx;height:240rpx;"></view>
	    <view class="content-box">
			 <view class="selectHouse-boxs biglist-box">
				 <view class="title-filed" >精选房源</view>
				 <view class="list-box">
					 <view class="list"  v-for="(item,index) in carePickList" :key="index"   @tap="jumpDetail(item.id)" >
						 <image class="left" :src="item.h_img " ></image>
						 <view class="right">
							 <view class="first-line">
								 <text class="signal-box">优质好房</text>
                                     {{item.h_area}}{{item.h_charge}}   
							 </view>
							 <view class="second-line margin2">{{item.h_architecture}}㎡/{{item.h_orientation}}/{{item.h_housetype}}/{{item.h_fitment}}</view>
							 <view class="third-line"><text class="price"> {{item.h_money}}</text>元/月</view>
						 </view>
					 </view>
				 </view>
				 
			 </view>
			 <view class="HouseList-boxs biglist-box">
				  <view class="title-filed" >房源列表</view>
				  <view class="list-box">
					  <view class=" list listss"  v-for="(item,index) in ordinaryList" :key="index"  @tap="jumpDetail(item.id)">
						  <image class="left-img" :src="item.r_cover ||item.h_cover"></image>
						  <view class="right rights">
							  <view class="first-line">{{item.r_area}}{{item.r_houses}}</view>
							  <view class="fourth-line">{{item.r_mj}}㎡</view>
							  <view class="fourth-line">{{item.r_specific}}</view>
							  <view class="fifth-line">
								  <text class="detailDescriteList" v-for="(item,index) in descriteList" :key="index">{{item}}</text>
							  </view>
							  <view class="sixth-line"><text class="price">{{item.r_money}}</text>万/套</view>
						  </view>
					  </view >
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
				titleName:'办公用房',
				// keyWords:'',
				carePickList:[],
				ordinaryList:[]
			}
		},
		onReachBottom(){
			console.log(45234)
		},
		onLoad(options){
		     this.setData(options);	
				 if(this.classes==1){
					 this.titleName=='办公用房'
				 }else if(this.classes==2){
					 this.titleName='毛坯房'
				 }else if(this.classes==3){
					 this.titleName='公寓房'
				 }else if(this.classes==4){
					 this.titleName='生产厂房'
				 }else if(this.classes==5){
					 this.titleName='街面房'
				 }else if(this.classes==6){
					 this.titleName='装修房'
				 }
				 // console.log(thsi.t)
				console.log(this.titleName)
			 uni.setNavigationBarTitle({
			 	 title:this.titleName
			 })
			
			 this.getList1()
			
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
			// 跳转到详情页面
			jumpSearch(){
				
				uni.navigateTo({
					url:'/pages/findHouse/findHouse-detail?types='+this.types+'&classes='+this.classes
				})
			},
			jumpDetail(index){
				
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
				console.log(12345)
				that.$h5.post('Houses/sifthouse',{
					type:that.types,
					class:that.classes,
				},(res)=>{
					if(res.code ==0){
						that.carePickList=res.data;
						that.carePickList.map(res=>{
							res.h_img=app.globalData.img+res.h_img;
							
						})
						console.log(that.carePickList,345)
					}
				})
	
			},
			getList1(){
				let that=this;
				let url='';
				if(that.types==1){
					url='rent/rentlist'
				}else if (that.types==2){
					url='sell/selllist'
				}
				that.$h5.post(url,{
					type:that.classes,
				},(res)=>{
					if(res.code==0){
						that.ordinaryList=res.data;
						if(that.types==2){
							that.ordinaryList.map(res=>{
							     res.h_cover=app.globalData.img+res.h_cover;
						   })
						}else{
							that.ordinaryList.map(res=>{
								 res.r_cover=app.globalData.img+res.r_cover;
							})
						}
						
						console.log(that.ordinaryList,123)
						
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
		z-index:10;
		.title{
			width:750rpx;
			height: 90rpx;
			display: flex;
			padding-left:30rpx;
			align-items: center;
			.left{
				width: 50rpx;
				height:50rpx;
				margin-right:240rpx;
				.img{
					display: block;
					width:30rpx;
					height: 30rpx;
					margin:10rpx 10rpx;;
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
		 .biglist-box{
			 width: 750rpx;
			  padding:30rpx;
			  box-sizing: border-box;
			 .title-filed{
				 font-size: 40rpx;
				 color:#3466FF;
				 font-family: "WenYue-XinQingNianTi-NC-W8";
				 font-weight: bold;
				 margin-bottom:27rpx;
			 }
			 .list-box{
				 .listss{
					 height: 200rpx!important;
				 }
				 .list{
					 width:690rpx;
					 height: 150rpx;
					 display: flex;
					 margin-bottom:40rpx;
					 .left{
						 display: block;;
						 width: 240rpx;
						 height: 150rpx;
						 margin-right: 25rpx;
                         border-radius: 8rpx;
					 }
					 .left-img{
						 display: block;;
						 width: 200rpx;
						 height: 200rpx;
						 margin-right: 25rpx;
						 border-radius: 4rpx;
					 }
					 .rights{
						 height: 200rpx!important;
					 }
					 .right{
						 width: 435rpx;
						 height: 150rpx;
						 display: flex;
						 flex-direction: column;
						justify-content: space-between;
						 .first-line{
							@include ellipsis(2);
							color: #141414;
							font-size:30rpx ;
							font-weight: bold;
							 .signal-box{
								 width: 100rpx;
								 display: inline-block;
								 margin-right:10rpx;
								 text-align: center;
								 // line-height: 30rpx;
								 font-size: 20rpx;
								 color: #fff;
								 background: #F4BD65;
								 border-radius: 4rpx;
							 }
							
						 }
						 .second-line{
							 color: #4C4C4C;
							 font-size: 24rpx;
							
						 }
						 .margin2{
							  margin:2rpx 0rpx;
						 }
						 .third-line{
							 color: #F9523A;
							 font-size: 28rpx;
							 font-family: wangyibo;
						 }
						 .fourth-line{
							 color: #4c4c4c;
							 font-size: 20rpx;;
						 }
						 .fifth-line{
							 display: flex;
							 .detailDescriteList{
								 
								 height: 28rpx;
								 text-align: center;
								 line-height: 28rpx;
								 color: #3466FF;
								 font-size: 18rpx;
                                 background: #F0F8FF;
								 margin-right: 10rpx;
							 }
						 }
						 .sixth-line{
							 color: #F9523A;
							 font-size: 20rpx;
							 .price{
								 font-family: wangyibo;
								 font-size: 40rpx;;
								 
							 }
						 }
					 }
					 
				 }
				 
			 }
			
		 }
		 .HouseList-boxs{
			 margin-top: 10rpx;
			 .title-filed{
				 font-size: 40rpx;
				 color:#3466FF;
				 font-family: "WenYue-XinQingNianTi-NC-W8";
				 font-weight: bold;
				 margin-bottom:27rpx;
			 }
		 }
	}
	
  
</style>
