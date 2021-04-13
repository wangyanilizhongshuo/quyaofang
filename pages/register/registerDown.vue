<template>
	<view class="h5-register">
		 <view class="h5-title">要房么</view>
		<view class="h5-content">
				<view class="h5-titles">APP下载</view>
				<image class="iosBox style1" @tap.stop="getchoice(1)"  src="../../static/image/registerIOS.png"></image>
				<image class="andBox style1" @tap.stop="getchoice(2)" src="../../static/image/registerAndroid.png"></image>
				<web-view v-if="occurs1"  :src="url1"></web-view>
				<web-view v-if="occurs2"  :src="url2"></web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				 url1:'',
				 url2:'',
				 url:'http://www.baidu.com',
				 occurs1:false,
				 occurs2:false
				}
		},
		onLoad(){
			this.getData();
		},
		methods:{
			getchoice(types){
				if(types==1){
					this.occurs1=true;
				}else if(types==2){
					this.occurs2=true;
				}
			},
			getData(){
				this.$h5.post('index/downloadurl',{},(res)=>{
					if(res.code ==0){
						this.url1=res.data.android_url;
						this.url2=res.data.ios_url;
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.h5-register{
		  width: 100vw;
		  height: 100vh;
		  background-image:url(../../static/image/registerBg.png);
		  background-repeat: no-repeat;
		  background-size: 100vw 100vh;
		  padding-top:30rpx;
		  box-sizing: border-box;
	}
	.h5-title{
		  font-size: 30rpx;
		  font-weight: bold;
		  color: #FFFFFF;
		  text-align: center;
	}
	.h5-content{
		  margin: 300rpx 0 0 140rpx;
		  .h5-titles{
			  font-size: 60rpx;
			  font-weight: bold;
			  color:#fff;;
		  }
	}
	.style1{
		display: block;
		width: 452rpx;
		height: 90rpx;
	}
	.iosBox{
		margin: 102rpx 0rpx 40rpx;
		// margin-bottom:;
		
	}
</style>
