<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">申请经纪人</view>
		</view>
		<view style="height: 75rpx;"></view>
		<view class="contents" >
			<form class="sale-form" @submit="formSubmit">
			 <view class="list">
				 <view class="filed">姓名</view>
				 <input  :style="name!=''?'color:#303133':''"  maxlength="10" class="inputs" name="name" v-model="name" placeholder="请输入您的姓名" />
			 </view>
			 <view class="list">
				 <view class="filed">联系电话</view>
				 <input class="inputs"  :style="phone!=''?'color:#303133':''" maxlength="13" name="phone" v-model="phone" placeholder="请输入您的联系电话" />
				
			 </view>
			 <view class="list">				 <view class="filed">身份证号码</view>				 <input  :style="id!=''?'color:#303133':''"  maxlength="20" class="inputs" name="id" v-model="id" placeholder="请输入您的身份证号码" />			 </view>
			 <view class="com-intruduce"> 
				  <view class="text-filed">简介</view>
				  <textarea name="agentIntruduce"  class="texts value" v-model="agentIntruduce" placeholder-style="color:#888" placeholder="请输入经纪人简介"></textarea>
			 </view>
			 <view class="com-photo">
			 	 <view class="title">上传头像<text class="small"> (建议上传证件照)</text></view>       
			 	 <view class="lists">
					 <image class="imgs-bg" v-if="!companyList" src="../../../static/image/uploadPhoto.png" @tap="getImage(3)"></image>
			 			 <image class="imgs-bg"  v-if="companyList" :src="companyList[0]" @tap="preview(3,0)"></image>
			 			 <image class="delss" v-if="companyList" src="../../../static/image/uploadDel.png" @tap="delPhoto(3,0)"></image>
			 	 </view>
			 	
			 </view>
			 <view class="getPhotos">
				 <view class="left styleLR">
					 <image class="photo-bg" v-if="!positiveImage"  src="/static/image/photo-bg.png" @tap="getImage(1)"/>
					 <image class="photo-bg" v-if="positiveImage"  :src="positiveImage[0]" @tap="preview(1,0)"></image>
					 <image class="delImg" v-if="positiveImage"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(1,0)"></image>
					 <view class="fileds">身份证正面照片</view>
				 </view>
				 <view class="right styleLR">
					 <image class="photo-bg" v-if="!negativeImage" src="/static/image/photo-bg.png" @tap="getImage(2)"/>
					 <image class="photo-bg" v-if="negativeImage"  :src="negativeImage[0]" @tap="preview(2,0)"></image>
					 <image class="delImg" v-if="negativeImage"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(2,0)"></image>
					 <view class="fileds">身份证背面照片</view>
				 </view>
			</view>
	
			<button class="btn" form-type="submit">提交申请</button>
			</form>
		</view>
		<view class="unLoginBoxMask" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'></view>
		<view class="unLoginBox" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'>
				 <image class="imgs" src="../../../static/image/onLoginBg.png"></image>
		</view>
		<view class="hbyOccurFlag" v-if="tipsFlag">{{tipsMsg}}</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				shareDiaFlag:false,
				tipsFlag:false,
				tipsMsg:'',
				// 姓名
				name:'',
				// 电话号码
				phone:'',
				// 身份证号
				id:'',
				// 经纪人简介
				agentIntruduce:'',
				// 身份证正反照片
				positiveImage:'',
				negativeImage:'',
				// 身份证Id
				IdUrl:'',
				companyList:'',
				msgList:'',
				msgLists:{
					headPortrait:'',
					positiveImage:'',
					negativeImage:''
				}
				
				
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			if(!uni.getStorageSync('token')){
				 this.shareDiaFlag=true;
			}
		     this.setData(options);
		},
		methods: {
			backs(){
				uni.navigateTo({
					url:'/pages/index/agent-service/agent-service'
				})
			},
			formSubmit(e){
				let that=this;
				that.msgList=e.detail.value;
				uni.showModal({
					title:'数据存在不可二次更改,确定提交数据？',
					success:function(res){
						if(res.confirm){
							 that.$h5.post('Broker/add',{
								house_name:that.msgList.name,
								house_phone:that.msgList.phone,
								house_idcard:that.msgList.id,
								house_intro:that.msgList.agentIntruduce,
								house_img:that.msgLists.headPortrait,
								house_idimg:that.msgLists.positiveImage,
								house_idimgs:that.msgLists.negativeImage,
							 },(res)=>{
								 if(res.code ==0){
									uni.navigateTo({
										url:'/pages/index/submitSuccess/submitSuccess'
									})
								 }else{
									 that.tipsFlag=true;
									 that.tipsMsg=res.message;
									 setTimeout(()=>{
									 		 that.tipsFlag=false;
									 },2500)
								 }
							 })
						  }else if(res.cancel){}
										
						}
				 }) 
				
			},
		
			// 营业执照
			// 照片的选择
			getImage(type){
				console.log(this.user_token)
				let _that = this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						if(type ==1){
							_that.positiveImage=tempFilePaths;
						}else  if(type ==2 ){
							_that.negativeImage=tempFilePaths;
						}else if(type ==3){
							_that.companyList=tempFilePaths;
						}
					tempFilePaths.map(sos => {
						uni.uploadFile({
							url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
							filePath: sos,
							name: 'file',
							// header:{"Content-Type": "multipart/form-data"},
							formData: {
								'type':'agent',
								 'user_token':_that.userTokens
							},
							success: function(datas) {
								let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
								let aa = results.data[0];
								if(type ==1){
							      _that.msgLists.positiveImage=aa;
							    }else  if(type ==2 ){
							     _that.msgLists.negativeImage=aa;
								 console.log( _that.msgLists.negativeImage)
								}else if (type ==3){
									_that.msgLists.headPortrait=aa;
									console.log( _that.msgLists.headPortrait)
								}
							},
							fail: function(datas) {}
						})
					 })
						console.log(_that.msgList)
					}
				});
			},
			// 预览营业执照
			preview(type,index){
				let current='';
				let url='';
				if(type==1){
					current=this.positiveImage[0];
					url=this.positiveImage;
				}else if (type ==2){
					current=this.negativeImage[0]
					url=this.negativeImage;
				}else if(type ==3 ){
					current=this.companyList[0];
					url=this.companyList;
				}
				uni.previewImage({
					current:current,
					urls:url,
					indicator: "number"
				})
			},
			// 营业执照删除
			delPhoto(type,index){
				if(type==1){
					this.positiveImage='';
					this.msgLists.positiveImage='';
				}else if(type ==2){
					this.negativeImage='';
					this.msgLists.negativeImage='';
				}else  if(type ==3){
				   this.companyList='';
				   this.msgLists.headPortrait=''
					
				}
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	
	.unLoginBoxMask{
		 @extend  %unLoginboxMask;
	}
	.unLoginBox{
		@extend  %unLoginbox;
	}
	%img-del{
		position: absolute;
		right:-20rpx;
		top:-20rpx;
		width: 40rpx;
		height: 40rpx;
		display: block;
	}
	.hbyOccurFlag{
			position: absolute;
			top:500rpx;
			left:100rpx;
			background-color: green;
			width:450rpx;height:130rpx;
			line-height: 130rpx;
			background-color: #000;
			color:#fff;
			text-align: center;
			opacity: 0.7;
			border-radius: 20rpx;
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
	.news-title{
		 @extend  %title;
		 border-bottom:2rpx solid #eee;
		 .left{
			 width:100rpx;
			 height: 60rpx;
			 line-height: 60rpx; 
			 position: absolute;
			 padding-left:30rpx;
			 top:7.5rpx;
		 }
		 .img{
		 	display: block;
		 	width:30rpx;
		 	height: 30rpx;
			margin-top:15rpx;
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
		padding: 38rpx 0rpx 60rpx;
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
				@extend   %img-del;
			}
		}
		
	}
	.com-photo{
		width: 750rpx;
		// padding:37rpx 30rpx;
		// box-sizing: border-box;
		font-size: 28rpx;
		.title{
			color: #303133;
			margin-bottom:36rpx ;
			.small{
				color: #888888;
			}
		}
		.lists{
			width: 157rpx;
			position: relative;
			left:0rpx;
			top:0rpx;
			.imgs-bg{
				display: block;
				width: 157rpx;
				height: 157rpx;
			 }
			 .delss{
				@extend   %img-del;
			 }
		     .image-box{
				 position: relative;
				 top:0rpx;
				 left:0rpx;
				 width: 157rpx;
				 height: 157rpx;
				 margin-right:30rpx;
				 margin-bottom: 20rpx;
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
	  font-size: 30rpx;;
  }
</style>
