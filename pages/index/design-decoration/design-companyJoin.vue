<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">公司入驻</view>
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
			 <view class="list">				 <view class="filed">公司名称</view>				 <input  :style="company!=''?'color:#303133':''"  class="inputs" name="company" v-model="company" placeholder="请输入您的公司名称" />			 </view>
			 <view class="list">
				<view class="filed">公司类别</view>
				<picker   class="pickerBox" @change="PickerChange($event,1)" :value="index" :range="companyCategoryList">
						<input class="uni-input" :style="companyCategory != ''? 'color:#303133':''"  :disabled="true"  name="companyCategory" v-model="companyCategory" placeholder="请选择您公司的类别"/>
				</picker>
				<image class="arrow"  src="../../../static/image/right-gray.png"></image>
			 </view>
			 <view class="com-intruduce"> 
				  <view class="text-filed">简介</view>
				  <textarea name="companyIntruduce"  class="texts value" v-model="companyIntruduce" placeholder-style="color:#888" placeholder="请输入公司简介"></textarea>
			 </view>
			 <view class="getPhotos">
				 <view class="left styleLR">
					 <image class="photo-bg" v-if="!licenseImageUrl"  src="/static/image/photo-bg.png" @tap="getImage(1)"/>
					 <image class="photo-bg" v-if="licenseImageUrl"  :src="licenseImageUrl[0]" @tap="preview(1,0)"></image>
					 <image class="delImg" v-if="licenseImageUrl"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(1,0)"></image>
					 <view class="fileds">营业执照照片</view>
				 </view>
				 <view class="right styleLR">
					 <image class="photo-bg" v-if="!licenseImageUrls" src="/static/image/photo-bg.png" @tap="getImage(2)"/>
					 <image class="photo-bg" v-if="licenseImageUrls"  :src="licenseImageUrls[0]" @tap="preview(2,0)"></image>
					 <image class="delImg" v-if="licenseImageUrls"  src="../../../static/image/uploadDel.png" @tap.stop="delPhoto(2,0)"></image>
					 <view class="fileds">法人身份证正面照片</view>
				 </view>
			</view>
			<view class="com-photo">
				 <view class="title">上传公司图片<text class="small">(至少上传3张，至多5张)</text></view>
				 <view class="lists">
					 <view class="image-box" v-for="(item,index) in companyList" :key="index">
						 <image class="imgs-bg" :src="item" @tap="preview(3,index)"></image>
						 <image class="del" src="../../../static/image/uploadDel.png" @tap="delPhoto(3,index)"></image>
					 </view>
					 <view class="image-box" v-if="companyList.length >=0 && companyList.length<5">
					 	 <image class="imgs-bg" src="../../../static/image/uploadPhoto.png" @tap="getImage(3)"></image>
					 </view>
				 </view>
				 <view class="advice">(建议尺寸为800*800像素)</view>
			</view>
			<button class="btn" form-type="submit">提交申请</button>
			</form>
		</view>
		<!-- <view class="unLoginBoxMask" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'></view>
		<view class="unLoginBox" v-if="shareDiaFlag" @tap.stop='shareDiaFlag=false'>
				 <image class="imgs" src="../../../static/image/onLoginBg.png"></image>
		</view> -->
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
				// 公司名称
				companyName:'',
				// 公司类别
				companyCategory:'',
				companyCategoryList:['设计','装潢'],
				// 公司简介
				companyIntruduce:'',
				// 营业执照的图片路径
				licenseImageUrl:'',
				// 反面
				licenseImageUrls:'',
				// 身份证Id
				// IdUrl:'',
				companyList:[],
				company:'',
				msgList:'',
				
				headlists:[],
				// 正面
				positiveImage:'',
				negativeImage:'',
				// 公司类别的列表
				categoryNum:''	,
				user_token:''
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			 // console.log(this.user_token)
          
		},
		methods: {
			backs(){
				uni.navigateTo({
					url:'/pages/index/design-decoration/design-decoration'
				})
			},	
			formSubmit(e){
				let that=this;
				that.msgList=e.detail.value;
				let bb=that.headlists;
				
				if(bb.length<3 ){
					uni.showToast({
						title:'图片数量不满足要求'
					})
					return   false;
				}
				if(that.positiveImage==''){
					uni.showToast({
						title:'营业执照照片没有上传'
					})
					return   false;
				}
				if(that.negativeImage==''){
					uni.showToast({
						title:'法人身份证照片没有上传'
					})
					return   false;
				}
				uni.showModal({
					title:'数据存在不可二次更改,确定提交数据？',
					success:function(res){
						if(res.confirm){
							 that.$h5.post('fitment/addfitment',{
							 	house_name:that.msgList.name,
							 	house_phone:that.msgList.phone,
							 	house_nick:that.msgList.company,
							 	house_type:that.categoryNum,
							 	// house_type:that.msgList.companyCategory,
							 	house_intro:that.msgList.companyIntruduce,
							 	// 正
							 	house_business:that.positiveImage,
							 	// 反
							 	house_legal:that.negativeImage,
							 	house_img:bb
							 },(res)=>{
							 	if(res.code ==0){
							 		uni.navigateTo({
							 			url:'/pages/index/submitSuccess/submitSuccess'
							 		})
							 	}
							 })
						}else if(res.cancel){
							
						}
					
						
					},
					fali:function(res){
						
					}
				})
				
					
				
				
				
				
			},
			// picker的选项
			PickerChange(e,type){
				if(type ==1){
					console.log(e.target.value)
					this.categoryNum=e.target.value;
					this.companyCategory=this.companyCategoryList[e.target.value];
				}
			},
			
			// 营业执照
			// 照片的选择
			getImage(type){
				let _that = this;
				let  num=1;
				if(type ==3){
					num=5;
				}
				uni.chooseImage({
					count: num, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						if(type ==1){
							_that.licenseImageUrl=tempFilePaths;
						}else  if(type ==2 ){
							_that.licenseImageUrls=tempFilePaths;
						}else if(type ==3){
							_that.companyList=_that.companyList.concat(res.tempFilePaths)
						}
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
										filePath: sos,
										name: 'file',
										// header:{"Content-Type": "multipart/form-data"},
										formData: {
										  'type':'design',
										  'user_token':_that.userTokens
								},
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data[0];
									if(type ==1){
									  _that.positiveImage=aa;
									  console.log('zhengmian',_that.positiveImage)
									}else  if(type ==2 ){
									 _that.negativeImage=aa;
									 console.log('反面',_that.negativeImage)
									}else if (type ==3){
										_that.headlists.push(aa);
									}
								},
								fail: function(datas) {}
							})
					 })
					},
					
				})
			},
			// 预览营业执照
			preview(type,index){
				let current='';
				let url='';
				if(type==1){
					current=this.licenseImageUrl[0];
					url=this.licenseImageUrl;
				}else if (type ==2){
					current=this.licenseImageUrls[0]
					url=this.licenseImageUrls;
				}else if(type ==3 ){
					current=this.companyList[index];
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
					this.licenseImageUrl='';
				}else if(type ==2){
					this.negativeImage='';
					this.licenseImageUrls='';
				}else  if(type ==3){
					let arr = this.headlists;
					let arrs=this.companyList;
					arrs.splice(index,1);
					arr.splice(index, 1);
					this.headlists = arr;
					this.companyList=arrs;
					console.log(this.headlists)
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
	.com-photo{
		width: 750rpx;
		padding:37rpx 30rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		.title{
			color: #303133;
			margin-bottom:36rpx ;
			.small{
				color: #888888;
			}
		}
		.lists{
			width: 690rpx;
			display: flex;
			flex-wrap: wrap;
		     .image-box{
				 position: relative;
				 top:0rpx;
				 left:0rpx;
				 width: 157rpx;
				 height: 157rpx;
				 margin-right:30rpx;
				 margin-bottom: 20rpx;
				.imgs-bg{
					display: block;
					width: 157rpx;
					height: 157rpx;
			     }
				 .del{
					@extend   %img-del;
				 }
			 }
		}
		.advice{
			margin-top:20rpx;
			color: #888888;
			
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
