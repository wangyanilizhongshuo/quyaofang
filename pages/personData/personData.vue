<template>
	<view class="personData">
		<view class="sale-title">
			 <view class="left" @tap.stop="quits">
				  <image class="img" src="/static/image/back.png"></image>
			 </view>
			 <view class="field">个人信息</view>
		</view>
		 <view class="station"></view>
		<view class="contents" >
			<view class="changePhoto-box" @tap.stop="getPtoto">
				<view class="left">更换头像</view>
				<view class="right">
					<view class="photo-bg">
						<image class="imgs-bg" v-if="!personMsg.h_userimg"  src="../../static/image/head-portrait.png"></image>
						<image class="imgs-bg" v-if="personMsg.h_userimg" :src="'https://yaofangme.hzbixin.cn/'+personMsg.h_userimg"></image>
					</view>
					<view class="arrow-box">
						<image class="arrow" src="../../static/image/right-gray.png"></image>
					</view>
				</view>
			</view>
			<view class="changeID-box list-box">
				<view class="left">ID</view>
				<view class="right">{{personMsg.h_userid}}</view>
			</view>
			<view class="changeName-box list-box" @tap.stop="jumpsRepairName">
				<view class="left">昵称</view>
				<view class="right">
					<view class="name">{{personMsg.h_nickname}}</view>
					<image class="arrow" src="../../static/image/right-gray.png" ></image>
				</view>
			</view>
			<view class="changeTel-box list-box">
				<view class="left">联系电话</view>
				<view class="right">{{personMsg.h_name}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 图片地址
				ImageUrl:'',
				personMsg:{}
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			this.getData();
		},
		onShow(){
			this.getData();
		},
		methods: {
			quits(){
				if(window.android && window.android.quit){
						 window.android.quit();
				}else{
						 window.webkit.messageHandlers.quit.postMessage(123);      
				}
			  },
			jumpsRepairName(){
				uni.navigateTo({
				   url:'/pages/personData/repairName?name='+this.personMsg.h_nickname
				})
			},
			getData(){
				let that=this;
				this.$h5.get('user/finduser',{
				},function(res){
					if(res.code ==0){
						that.personMsg= res.data
					}
				})
			},
			getPtoto(){
					let _that = this;
					uni.chooseImage({
						count: 1, //上传图片的数量，默认是9
						sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
						sourceType: ['album', 'camera'], //从相册选择
						success: function(res) {
							const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
							// _that.ImageUrl=tempFilePaths;
							tempFilePaths.map(sos => {
						uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
								filePath: sos,
								name: 'file',
								// header:{"Content-Type": "multipart/form-data"},
								formData: {
									"type":'user',
									 'user_token':_that.user_token
								},
							success: function(datas) {
								let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
								let aa = results.data[0];
								_that.$h5.post('user/userphoto',{
									userimg:aa
								},(res)=>{
									if(res.code ==0){
										_that.getData();
									}
								})
							},
							fail: function(datas) {
								console.log(datas)
							}
							})
							
							})
						},
						
						
					});
				
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "../../static/scss/common.scss";
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
	.personData{
		height: 100vh;
		overflow: hidden;
	}
	.zwPosition{
		width: 750rpx;
		height: 75rpx;
		margin-top: var(--status-bar-height);
	}
	.station{
		width: 750rpx;
		height:75rpx ;
		background-color: #fff;
		margin-top: var(--status-bar-height);
	}
	.sale-title{
		 @extend  %title;
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
	.news-title{
		
		 @extend  %title;
		 border-bottom:10rpx solid #f2f2f2;
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
	.personData{
		height: 100vh;
		background-color: #f2f2f2;
		overflow: hidden;
		.contents{
			width: 750rpx;
			background-color: #fff;
			.changePhoto-box{
				display: flex;
				width: 750rpx;
				height: 198rpx;
				padding: 0rpx 30rpx;
				box-sizing: border-box;
				align-items: center;
			    justify-content: space-between;
				border-bottom: 2rpx solid #f2f2f2;
				border-top: 10rpx solid #F2F2F2;
				.left{
					color: #303133;
					font-size: 28rpx;
					font-weight: bold;
					width:150rpx;
				}
				.right{
					width: 200rpx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.photo-bg{
						.imgs-bg{
							display: block;
							width: 139rpx;
							height: 139rpx;
							border-radius: 8rpx;
						}
					}
					.arrow-box{
						width: 53rpx;
						height: 56rpx;
						.arrow{
							display: block;
							width: 23rpx;
							height: 36rpx;
							margin:10rpx 15rpx;
							
						}
					}
				}
			}
			.list-box{
				width: 750rpx;
				height: 98rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding:0rpx 30rpx;
				box-sizing: border-box;
				color: #303133;
				font-size: 28rpx;
				.left{
					font-weight: bold;
				}
				.right{
					display: flex;
					height: 98rpx;
					align-items: center;
					.name{
						color: #303133;
						font-size: 28rpx;
					}
					.arrow{
						display: block;
						width: 23rpx;
						height: 36rpx;;
						margin-left:20rpx;

				}
				}
				
			}
		}
	}
	
	
  
</style>
