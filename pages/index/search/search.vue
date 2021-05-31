<template>
	<view  class="h5-search ">
		<view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 10;"></view>
		<view  class="search-content" :style="{height:heights,'margin-top':marginTop}">
			<image @tap.stop="quits"  class="img-back" src="../../../static/image/search-back.png"></image>
			<view class="uni-input" >
				<input  v-model="inputs" type="text" confirm-type="search" @confirm="jumps" class="input" placeholder="输入更多的关键词" placeholder-style="color:#999999;font-size:28rpx"/>
				<image  @tap.stop="jumps" class="search" src="../../../static/image/search-search.png"></image>
			</view>
		</view>
	     
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputs:'',
				user_token:''
			}
		},
		onLoad(options) {
			this.setData(options)
			console.log(options)
			console.log(234345)
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
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					 window.android.quit();
				 }else{
					window.webkit.messageHandlers.quit.postMessage('return');    
				 }
			  },
		     // 跳转到列表页面
			jumps(){
				let that=this;
				uni.navigateTo({
					url:'/pages/index/search/search-list?inputValue='+that.inputs+'&user_token='+that.user_token
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
		  
       display: flex;
		   align-items: center;
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
</style>



