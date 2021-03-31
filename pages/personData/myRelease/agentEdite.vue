<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">编辑</view>
		</view>
		<view style="height: 75rpx;"></view>
		<view class="contents" >
			<form class="sale-form" @submit="formSubmit">
			 <view class="list">
				 <view class="filed">姓名</view>
				 <input  :style="msgData.house_name!=''?'color:#303133':''"  class="inputs"  v-model="msgData.house_name" placeholder="请输入您的姓名" />
			 </view>
			 <view class="list">
			 	 <view class="filed">联系电话</view>
			 	 <input  :style="msgData.house_phone!=''?'color:#303133':''"  class="inputs"  v-model="msgData.house_phone" placeholder="请输入您的联系电话" />
			  </view>
			 <view class="list">
				 <view class="filed">身份证号码</view>
				 <input class="inputs"  :style="msgData.house_idcard!=''?'color:#303133':''" name="id" v-model="msgData.house_idcard" placeholder="请输入您的联系电话" />
				
			 </view>
			
			 <!-- <view class="list">
				<view class="filed">施工队人数</view>
				<picker   class="pickerBox" @change="PickerChange($event)" :value="index" :range="construcNumList">
						<input class="uni-input" :style="construcNum != ''? 'color:#303133':''"  :disabled="true"  name="construcNum" v-model="construcNum" placeholder="选择您的施工队人数"/>
				</picker>
				<image class="arrow"  src="../../../static/image/right-gray.png"></image>
			 </view> -->
			 <view class="com-intruduce"> 
				  <view class="text-filed">简介</view>
				  <textarea   class="texts value" v-model="msgData.house_intro" placeholder-style="color:#888" placeholder="请输入施工队简介"></textarea>
			 </view>
			 <view class="com-photo">
			 	 <view class="title">上传头像<text class="small">(建议上传证件照)</text></view>
			 	 <view class="headsPortrait">
					 <image v-if="!msgData.house_img" class="bg-head" src="../../../static/image/uploadPhoto.png"  @tap="getImage(1)"></image>
			 		<image v-if="msgData.house_img" class="bg-head"   :src="url1" @tap="getImage(1)" ></image>
					
			 	 </view>
			 	 <view class="advice">(建议尺寸为800*800像素)</view>
			 </view>
			 <view class="getPhotos" >
				 <view class="left styleLR">
					 <image class="photo-bg" v-if="!msgData.house_idimg"  src="/static/image/photo-bg.png" @tap="getImage(2)"/>
					 <image class="photo-bg" v-if="msgData.house_idimg"  :src="url2" @tap="getImage(2)" ></image>
					 <view class="fileds">身份证正面照片</view>
				 </view>
				 <view class="right styleLR">
					 <image class="photo-bg" v-if="!msgData.house_idimgs" src="/static/image/photo-bg.png" @tap="getImage(3)"/>
					 <image class="photo-bg" v-if="msgData.house_idimgs"  :src="url3" @tap="getImage(3)" ></image>
					 <view class="fileds">身份证背面照片</view>
				 </view>
			</view>
			
			<button class="btn" form-type="submit">提交申请</button>
			</form>
		</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				// 姓名
				name:'王亚妮',
				// 身份证号码
				id:'',
				
				
				msgData:'',
				url1:'',
				url2:'',
				url3:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
		     this.setData(options);	
			 this.getData();
		},
		methods: {
			backs(){
				uni.navigateTo({
					url:'/pages/personData/myRelease/myRelease'
				})
			},
			formSubmit(e){
				let that=this;
				that.$h5.post('Broker/edit',that.msgData,(res)=>{
					if(res.code ==0){
						uni.navigateTo({
							url:'/pages/personData/myRelease/myRelease'
						})
					}
				})
			},
			getData(){
				let that=this;
				that.$h5.post('Broker/brokerdetail',{
					id:that.id
				},(res)=>{
					if(res.code==0){
						that.msgData=res.data;
						that.url2=app.globalData.img+that.msgData.house_idimg;
					    that.url1=app.globalData.img+that.msgData.house_img;
						that.url3=app.globalData.img+that.msgData.house_idimgs
						
					}
				})
			},
			
			
			// 营业执照
			// 照片的选择
			getImage(type){
				let _that = this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths[0]; //拿到选择的图片，是一个数组
						 console.log(tempFilePaths)
						if(type ==1){
							_that.url1=tempFilePaths;
						}else  if(type ==2 ){
							_that.url2=tempFilePaths;
						}else if(type ==3){
							_that.url3=tempFilePaths;
						}
						console.log()
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
								filePath: sos,
								name: 'file',
								// header:{"Content-Type": "multipart/form-data"},
								formData: {
									'type':'agent',
									 'user_token':_that.user_token
								},
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data[0];
									if(type ==1){
								      _that.msgData.house_img=aa;
								    }else  if(type ==2 ){
								     _that.msgData.house_idimg=aa;
									}else if (type ==3){
										_that.msgData.house_idimgs=aa;
										
									}
								},
								fail: function(datas) {}
							})
						 })
					},
					
				});
			},
		
			
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	%img-del{
		position: absolute;
		right:-20rpx;
		top:-20rpx;
		width: 40rpx;
		height: 40rpx;
		display: block;
	}
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
		z-index: 20;
	}
	.headsPortrait{
		position: relative;
		left:20rpx;
		top:0rpx;
		width: 157rpx;
		height: 157rpx;;
		margin:20rpx 0rpx;
		.bg-head{
			display: block;
			width: 157rpx;
			height: 157rpx;;
		}
		.delImg{
			@extend    %img-del;
		}
		
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
		width: 750rpx;
		padding:35px 30rpx;
		box-sizing: border-box;
		.list{
			width: 690rpx;
			height: 100rpx;
			display: flex;
			align-items: center;
			font-size: 28rpx;
			position: relative;
			top: 0rpx;
			left:0rpx;
			.filed{
				width: 150rpx;
				color: #303133;
			}
			.inputs{
				width:500rpx;
				color: #ADADAD;
				text-align: right;
			}
			.pickerBox{
				width:540rpx;
				color: #ADADAD;
				text-align: right;
			}
			.uni-input{
				width:500rpx;
			 }
			.arrow{
				display: block;
				width: 23rpx;
				height: 36rpx;
				position: absolute;
				top:32rpx;
				right:0rpx;
			}
			
			
			
		}
		
		
	}
	.com-intruduce{
		 width: 750rpx;
		 padding:30rpx 0rpx 35rpx;
		 box-sizing: border-box;
		 color: #303234;
		 font-size: 28rpx;
		 .text-filed{
			 font-weight: bold;
			 margin-bottom: 36rpx;
		 }
		 .texts{
			 width: 690rpx;
			 border: 2rpx solid #888888;
			 border-radius: 4rpx;
			 padding:20rpx;
			 box-sizing: border-box;
			 height: 200rpx;
		 }
	}
	.getPhotos{
		width: 690rpx;
		padding: 38rpx 15rpx 60rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		.styleLR{
			width: 310rpx;
			text-align: center;
			position: relative;
			left:0rpx;
			top:0rpx;
			.photo-bg{
				display: block;
				width:310rpx;
				height: 210rpx;
				margin-bottom: 40rpx;
				border-radius: 10rpx;
			}
			.fileds{
				color: #303133;
				font-size: 28rpx;
			}
			.delImg{
				@extend    %img-del;
			}
		}
		
	}
	
  .btn{
	  width: 750rpx;
	  height: 100rpx;
	  position: fixed;
	  left:0rpx;
	  bottom: 0rpx;
	  text-align: center;
	  line-height: 100rpx;
	  color:#fff;
	  background-color: #4270ED;
	  border-radius: 0rpx;
	  font-size: 30rpx;
  }
</style>
