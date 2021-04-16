<template>
	<view  class="h5-search ">
		<!-- <view class="view-fixed" v-if="srcollFlag"></view> -->
		<view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
		<view  class="search-content" :style="{height:heights,top:marginTop}">
		<!-- <view  class="search-content"> -->
			<image @tap.stop="back"  class="img-back" src="/static/image/search-back.png"></image>
			<view class="uni-input" >
				<input  v-model="inputs" type="text" confirm-type="search" @confirm="search" class="input" placeholder="输入更多的关键词" placeholder-style="color:#999999;font-size:28rpx"/>
				<image  @tap.stop="search" class="search" src="/static/image/search-search.png"></image>
			</view>
		</view>
		<!-- <view style="width:750rpx;height: 93rpx;"></view> -->
		<view  class="h5-content"  :style="{'margin-top':heights ,'padding-top':marginTop}" >
			<view class="h5-list" v-for="(item,index) in 8" :key="index" @tap.stop="jumps"> 
				 <image class="img" src="/static/image/wangyibo.jpg"></image>
				 <view class="contents">
					 <view class="first-line">
						 <view class="btns btn1">出售</view>
						 <view class="address">晨光国际1栋2903</view>
					 </view>
					 <view class="second-line">
						 50㎡/南/精装
					 </view>
					 <view class="third-line">
						 嘉善·市区
					 </view>
					 <view class="fourth-line" >
						 <view  class="goods" v-for="(item,index) in list" :key='index'>{{item}}</view>
						<!-- <view>空调</view> -->
					 </view>
					 <view class="fifth-line">
						 <text class="money">2300</text>
						 <text class="frequency">元/月</text>
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
				// 上个传过来的数据
				inputValue:'',
				// 搜索的内容
				inputs:'',
				list:['空调','冰柜','洗衣机'],
				// 滚动的时候search按钮的位置
				srcollFlag:false
			}
		},
		onLoad(options) {
			this.setData(options);
		},
		onReachBottom(){
			console.log('search-list-onReachBottom')
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				console.log(height+38)
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 38 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync();
				let height = statusBarHeight +4;
				if (platform.toLowerCase() == "android" ){
					height +=4;
				}
				console.log('marginTop')
				console.log(height)
				return height + "rpx"				
			}
		},
		onPageScroll(Object){
			if(Object.scrollTop>0){
				this.srcollFlag=true;
			}else if(Object.scrollTop==0){
				this.srcollFlag=false;
			}
		},
		methods: {
			//返回上一级
			 back(){
				 uni.navigateTo({
				 	url:'/pages/index/search/search'
				 })
			 },
		     // 搜索
			 search(){
				 console.log('搜索！')
			 },
			 jumps(){
				 uni.navigateTo({
				 	url:'/pages/index/houseDetail/houseDetail'
				 })
			 }
			
		}
	}
</script>
<style lang="scss" scoped>
   .h5-search{
	   // padding-top: var(--status-bar-height);
	   // box-sizing: border-box;
	   .search-content{
		   width:750rpx;
		   height: 90rpx;
		   // padding-bottom:20rpx;
		   box-sizing: border-box;
           display: flex;
		   align-items: center;
		   position: fixed;
		   left:0;
		   // top:var(--status-bar-height);
		   background-color: #fff;
		  
		   z-index: 10;;
	   }
	   .img-back{
		   display: block;
		   width: 30rpx;
		   height: 30rpx;
		   margin:0rpx 49rpx 0  32rpx ;  
	   }
	   .uni-input{
		   width:540rpx ;
		   height: 70rpx;
		   position: relative;
		   left:0;
		   top:0;
		   background: #FFFFFF;
		   .input{
			   width:540rpx ;
			   height:70rpx;
			   box-sizing: border-box;
			   border: 2px solid #ECEEF5;
			   border-radius: 6px;
			   padding-left:71rpx;
			   box-sizing: border-box;
			   font-family: 'PingFang-SC-Medium';
			   font-weight: Medium;
			   color: #141414;
			   font-size: 28rpx;
		   }
		   .search{
			   width: 30rpx;
			   height: 30rpx;
			   display: block;
			   position: absolute;
			   top:20rpx;
			   left:20rpx;  
		   }
	   }
   }
   .view-fixed{
	    width:750rpx;
	    height: var(--status-bar-height);
		background-color: #fff;
		position: fixed;
		left:0;
		top:0;
   }
   .h5-content{
	    width: 750rpx;
		padding: 0rpx 32rpx;
		box-sizing: border-box;
	   .h5-list{
		   display:flex;
		   margin-bottom: 30rpx;
           .img{
			   display: block;
			   width:  200rpx;
			   height: 200rpx;  
			   margin-right: 22rpx;
               border-radius: 4rpx;
		   } 
		   .contents{
			   flex:1;
			   // display: flex;
			   // flex-direction: column;
			   // justify-content: space-between;
			   // height: 200rpx;
			   .first-line{
				   width: 100%;
				   display: flex;
				   align-items: flex-end;
				   .btns{
					   width: 60rpx;
					   height: 30rpx;
					   line-height: 30rpx;
					   text-align: center;
					   font-size:20rpx ;
					   color:#fff;
					   margin-right: 10rpx;
                       border-radius: 4rpx;
				   }
				   .btn1{
					    background-color: #F4BD65;
				   }
				   .btn2{
					    background-color:#4270ED;
				   }
				   .address{
					   color: #141414;
					   font-size: 30rpx;
					   font-family:'PingFang-SC-Bold'; 
					   font-weight: Bold;
				   }
			   }
			   .second-line{
				   color:#4C4C4C;
				   font-size: 20rpx;
				   margin: 9rpx 0 9rpx;
			   }
			   .third-line{
				   color:#4C4C4C;
				   font-size: 20rpx;
			   }
			   .fourth-line{
				   width: 100%;
				    margin:12rpx 0 6rpx;
				   display: flex;
				   .goods{
					   width:76rpx;
					   height: 28rpx;
					   text-align: center;
					   line-height: 28rpx;
					   background: #F0F8FF;
					   border-radius: 4rpx;
					   color: #3466FF;
					   font-size: 18rpx;
					   margin-right: 9rpx;
				   }
				   
			   }
			   .fifth-line{ color: #F9523A;
				   .money{
					   font-size: 40rpx;
					   margin-right: 7rpx;
				   }
				   .frequency{
					   font-size: 20rpx;
				   }   
			   }
			   
		   }
	   }
   }
</style>



