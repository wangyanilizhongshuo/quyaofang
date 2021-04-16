<template>
	 <view class="h5-opinion">
		 <view class="sale-title">
		 			 <view class="left" @tap.stop="back">
		 				  <image class="img" src="/static/image/back.png"></image>
		 			 </view>
		 			 <view class="field">联系客服</view>
		 		</view>
		  <view class="station"></view>
		 <view class="content">
			 <textarea class="textareas" v-model="textValue" placeholder="请描述具体问题" placeholder-style="color:#888888;font-size:28rpx;"></textarea>
		     <image v-if="!photoList" class="img-bg" src="../../../static/image/uploadPhoto.png" @tap.stop="getImage"></image>
			 <image v-if="photoList" class="img-bg" :src="photoList[0]" @tap.stop="getImage"></image>
		 </view>
		 <view class="btnSubmit" @tap="submit">提交</view>
		 <view class="hbyOccurFlag" v-if="tipsFlag">{{tipsMsg}}</view>
	 </view>
</template>

<script>
	export default {
		data(){
			return{
				photoList:'',
				imageFlag:false,
				textValue:'',
				upUrlList:[],
				tipsFlag:false,
				tipsMsg:''
			}
		},
		onLoad(){
			
		},
		methods:{
			back(){
				uni.navigateTo({
					url:'/pages/personData/setting/setting'
				})
			},
			getImage(){
				
				let _that = this;
				_that.tipsMsg='进来了'
				setTimeout(()=>{
					_that.tipsFlag=false;
				},2500)
				uni.chooseImage({
					count: 1, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						_that.tipsMsg='成功'
						setTimeout(()=>{
							_that.tipsFlag=false;
						},2500)
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						_that.photoList= res.tempFilePaths;
						
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
								filePath: sos,
								name: 'file',
								formData: {
									  type:'service',
									 'user_token':_that.user_token
								},	
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data[0];
									if(results.code ==0){
											_that.upUrlList.push(aa)

									}else{
										_that.tipsFlag=true;
										_that.tipsMsg='图片尺寸太大，重新上传'
										setTimeout(()=>{
											_that.tipsFlag=false;
										},2500)
									}
									
								},
								fail: function(datas) {}
							})
						})
					},
					fail: function (res){
						_that.tipsFlag=true;
						_that.tipsMsg='失败'
						setTimeout(()=>{
							_that.tipsFlag=false;
						},2500)
					}
				});
			
								
			},
			submit(){
				let that=this;
				that.$h5.post('opinion/addopinion',{
					type:2,
					detail:that.textValue,
					img:that.upUrlList
				},(res)=>{
					if(res.code ==0){
						that.tipsFlag=true;
						that.tipsMsg=res.message
						setTimeout(()=>{
							that.tipsFlag=false;
						},2500)
						uni.navigateTo({
				         	url:'/pages/personData/setting/setting'
				        })
					}else{
						that.tipsFlag=true;
						that.tipsMsg=res.message
						setTimeout(()=>{
							that.tipsFlag=false;
						},2500)
					}
				})
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	.h5-opinion{
		width: 750rpx;
		height: 100vh;
		background-color: #f2f2f2;
		position: relative;;
		left:0rpx;
		top:0rpx;
		overflow: hidden;
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
	.content{
		background-color: #fff;;
		 .textareas{
			 width: 750rpx;
			 padding:30rpx;
			 box-sizing: border-box;
			 height:397rpx ;
			 font-size: 28rpx;
		 }
		 .img-bg{
			 display: block;
			 width: 157rpx ;
			 height: 157rpx;
			 margin:20rpx 30rpx;
			 border-bottom: 20rpx solid #fff;;
		 }
	}
	.btnSubmit{
		width: 750rpx;
		height: 98rpx;
		text-align: center;
		line-height: 98rpx;
		font-size:30rpx ;
		color: #fff;
		background-color: #4270ED;
		position: absolute;;
		left:0rpx;
		bottom: 0rpx;
	}
	.hbyOccurFlag{
		position: absolute;
		top:500rpx;
		left:150rpx;
		background-color: green;
		width:450rpx;
		height:100rpx;
		line-height: 100rpx;
		background-color: #000;
		color:#fff;
		text-align: center;
		opacity: 0.7;
		border-radius: 20rpx;
	}
</style>
