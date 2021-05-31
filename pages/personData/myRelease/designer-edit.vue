<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">施工队入驻</view>
		</view>
		<view style="height: 75rpx;"></view>
		<view class="contents" >
			<form class="sale-form" @submit="formSubmit">
			 <view class="list">
				 <view class="filed">姓名</view>
				 <input  :style="name!=''?'color:#303133':''"  class="inputs" name="name" v-model="name" placeholder="请输入您的姓名" />
			 </view>
			 <view class="list">
				 <view class="filed">联系电话</view>
				 <input class="inputs"  :style="phone!=''?'color:#303133':''" name="phone" v-model="phone" placeholder="请输入您的联系电话" />
				
			 </view>
			 <view class="list">				 <view class="filed">施工队名称</view>				 <input  :style="constructName!=''?'color:#303133':''"  class="inputs" name="constructName" v-model="constructName" placeholder="请输入您的施工队名称" />			 </view>
			 <view class="list">
				<view class="filed">施工队人数</view>
				<picker   class="pickerBox" @change="PickerChange($event)" :value="index" :range="construcNumList">
						<input class="uni-input" :style="construcNum != ''? 'color:#303133':''"  :disabled="true"  name="construcNum" v-model="construcNum" placeholder="选择您的施工队人数"/>
				</picker>
				<image class="arrow"  src="../../../static/image/right-gray.png"></image>
			 </view>
			 <view class="com-intruduce"> 
				  <view class="text-filed">简介</view>
				  <textarea name="constructIntruduce"  class="texts value" v-model="constructIntruduce" placeholder-style="color:#888" placeholder="请输入施工队简介"></textarea>
			 </view>
			 <view class="getPhotos" >
				 <view class="left styleLR">
					 <image class="photo-bg" v-if="!licenseImageUrl"  src="/static/image/photo-bg.png" @tap="getImage(1)"/>
					 <image class="photo-bg" v-if="licenseImageUrl"  :src="licenseImageUrl[0]" @tap="preview(1,0)"></image>
					 <image class="delImg" v-if="licenseImageUrl"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(1,0)"></image>
					 <view class="fileds">资质证明照片</view>
				 </view>
				 <view class="right styleLR">
					 <image class="photo-bg" v-if="!IdUrl" src="/static/image/photo-bg.png" @tap="getImage(2)"/>
					 <image class="photo-bg" v-if="IdUrl"  :src="IdUrl[0]" @tap="preview(2,0)"></image>
					 <image class="delImg" v-if="IdUrl"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(2,0)"></image>
					 <view class="fileds">身份证正面照片</view>
				 </view>
			</view>
			<button class="btn" form-type="submit">提交申请</button>
			</form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 姓名
				name:'',
				// 电话号码
				phone:'',
				// 施工队名称
				constructName:'',
				// 施工队人数,以及范围
				construcNum:'',
				construcNumList:['0--50','50--100','100--150'],
				// 公司简介
				constructIntruduce:'',
				// 营业执照的图片路径
				licenseImageUrl:'',
				// 身份证Id
				IdUrl:'',
				companyList:[]	
			}
		},
		onReachBottom(){
			
		},
		onLoad(){
			console.log(this.companyCategoryList)
		},
		methods: {
			backs(){
				uni.navigateBack()
			},
			formSubmit(e){
				console.log(e.detail.value)
			},
			// picker的选项
			PickerChange(e){
			  this.construcNum=this.construcNumList[e.target.value];
			},
			
			// 营业执照
			// 照片的选择
			getImage(type){
				let _that = this;
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						if(type ==1){
							_that.licenseImageUrl=tempFilePaths;
						}else  if(type ==2 ){
							_that.IdUrl=tempFilePaths;
						}
					}
				});
			},
			// 预览营业执照
			preview(type,index){
				let current='';
				let url='';
				if(type==1){
					current=this.licenseImageUrl[0];
					url=this.licenseImageUrl;
				}else if (type ==2){
					current=this.IdUrl[0]
					url=this.IdUrl;
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
					this.licenseImageUrl='';
				}else if(type ==2){
					this.IdUrl=''
				}
			}
			
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
