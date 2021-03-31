<template>
	<view class="h5-newInformation">
		<view class="zw"></view>
		<view class="news-title title">
			<view class="left"  @tap.stop="backs" >
				<image class="img"src="/static/image/back.png"></image>
			</view>
			<view class="field">编辑</view>
		</view>
		<view class="zwPosition"></view>
		<view class="contents" >
				<form class="sale-form" @submit="formSubmit">
					<view class="listBox noEdit">
						<view class="field  noWrite">房屋种类</view>
						<!-- '办公用房','毛坯房', '公寓房', '生产厂房','街面房','装修房' -->
						<view class="value-box  noValueBox" v-if="listData.h_type==1">办公用房</view>
						<view class="value-box  noValueBox" v-if="listData.h_type==2">毛坯房</view>
						<view class="value-box  noValueBox" v-if="listData.h_type==3">公寓房</view>
						<view class="value-box  noValueBox" v-if="listData.h_type==4">生产厂房</view>
						<view class="value-box  noValueBox" v-if="listData.h_type==5">街面房</view>
						<view class="value-box  noValueBox" v-if="listData.h_type==6">装修房</view>
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  noWrite">所在城市</view>
						<view class="value-box  noValueBox">{{listData.h_city}}</view>
						<view class="right"></view>
					</view>
					<view class="listBox noEdit" v-if="listData.h_type!==4 &&listData.h_type!=5">
						<view class="field  noWrite">所在小区</view>
						<view class="value-box  noValueBox">{{listData.h_houses ||listData.h_plot}}</view>
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  noWrite">具体地址</view>
						<view class="value-box  noValueBox">{{listData.h_charge}}</view>
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  canWrite">如何称呼</view>
						<input class="value-box  canValueBox" name="name" v-model="listData.h_name"  />
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  canWrite">联系方式</view>
						<input class="value-box  canValueBox" name="phone" v-model="listData.h_phone"  />
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  canWrite">期待售价</view>
						<input class="value-box  canValueBox" name="phone" v-model="listData.h_money"  />
						<view class="right">元</view>
					</view>
					<!-- <view class="listBox noEdit">
						<view class="field  canWrite">租期</view>
						<input class="value-box  canValueBox" name="phone" v-model="listData.h_tenancy"  />
						<view class="right"></view>
					</view> -->
					<view class="buildTime listBox">
						   <view class="field">建成时间</view>
							 <picker  class="value-box  canValueBox" mode="date" :value="listData.h_enter" :start="startDate" :end="endDate" @change="pickerChange($event,4)">
								<input class="uni-input" :style="listData.h_activate != ''? 'color:#303133':''"  :disabled="true"  name="checkTime" v-model="listData.h_activate" placeholder="请选择入住时间"/>
							 </picker>
							<view class="right">
								 <image class="arrow" src="../../../static/image/right-gray.png"></image>
							</view>
					</view>
					<view class="listBox noEdit">
						<view class="field  canWrite">房屋用途</view>
						<picker   class=" value-box  canValueBox" @change="pickerChange($event,1)" :value="index" :range="useWaylist">
								<input class="uni-input"  :disabled="true"  name="payWay" v-model="listData.h_use"/>
						</picker>
						<view class="right">
							 <image class="arrow" src="../../../static/image/right-gray.png"></image>
						</view>
					</view>
				   <!-- //生产厂房 -->
				      <view class="listBox noEdit"  v-if="listData.h_type==4">
							<view class="field  canWrite">占地面积</view>
							<input class="value-box  canValueBox" name="area" v-model="listData.h_mj ||listData.h_qrea"/>
							<view class="right"></view>
				      </view>
					  <view class="listBox noEdit"  v-if="listData.h_type==4">
							<view class="field  canWrite">车间面积</view>
							<input class="value-box  canValueBox" name="area" v-model="listData.h_plant"/>
							<view class="right"></view>
					  </view>
					  <view class="listBox noEdit"  v-if="listData.h_type==4">
							<view class="field  canWrite">办公面积</view>
							<input class="value-box  canValueBox" name="area" v-model="listData.h_work"/>
							<view class="right"></view>
					  </view>
				      <view class="listBox noEdit"  v-if="listData.h_type==4">
							<view class="field  canWrite">建筑结构</view>
							<input class="value-box  canValueBox" name="area" v-model="listData.h_structure"/>
							<view class="right"></view>
				      </view>
					  
				   <!-- //生产厂房 -->
				   
				   <!-- 街面房r_frontage -->
				        <view class="listBox noEdit"  v-if="listData.h_type==5">
				        	<view class="field  canWrite">是否临街</view>
				        	<picker   class=" value-box  canValueBox" @change="pickerChange($event,6)" :value="index" :range="closeStreetList">
				        			<input class="uni-input"  :disabled="true"  name="direction" v-model="listData.h_frontage"/>
				        	</picker>
				        	<view class="right">
				        		 <image class="arrow" src="../../../static/image/right-gray.png"></image>
				        	</view>
				        </view>
				        <view class="listBox noEdit"  v-if="listData.h_type==5">
							<view class="field  canWrite">经营情况</view>
							<input class="value-box  canValueBox" name="area" v-model="listData.h_fitment"/>
							<view class="right"></view>
				        </view>
				   <!-- 街面房 -->
				   
				   <view class="listBox noEdit"  v-if="listData.h_type==6">
				   	<view class="field  canWrite">是否合租</view>
				   	<picker   class=" value-box  canValueBox" @change="pickerChange($event,7)" :value="index" :range="shareHouseList">
				   			<input class="uni-input"  :disabled="true"  name="direction" v-model="listData.h_rent"/>
				   	</picker>
				   	<view class="right">
				   		 <image class="arrow" src="../../../static/image/right-gray.png"></image>
				   	</view>
				   </view>
				   
					<view class="listBox noEdit"  v-if="listData.h_type!==4">
						<view class="field  canWrite">面积</view>
						<input class="value-box  canValueBox" name="area" v-model="listData.h_qrea "/>
						<view class="right"></view>
					</view>
					<view class="listBox noEdit"  v-if="listData.h_type!==4">
						<view class="field  canWrite">朝向</view>
						<picker   class=" value-box  canValueBox" @change="pickerChange($event,3)" :value="index" :range="direcitonList">
								<input class="uni-input"  :disabled="true"  name="direction" v-model="listData.h_orientation"/>
						</picker>
						<view class="right">
							 <image class="arrow" src="../../../static/image/right-gray.png"></image>
						</view>
					</view>
					<view class="listBox noEdit" v-if="listData.h_type!==4">
						<view class="field  canWrite">户型</view>
						<input class="value-box  canValueBox" name="houseStyle" v-model="listData.h_housetype"  />
						<view class="right"></view>
					</view>
					<view class="listBox noEdit">
						<view class="field  canWrite">楼层</view>
						<input class="value-box  canValueBox" name="houseStyle" v-model="listData.h_louceng"  />
						<view class="right"></view>
					</view>
					<!--  -->
					<view class="listBox noEdit" v-if="listData.h_type==1 && listData.h_type==3  && listData.h_type==6">
						<view class="field  canWrite">装修情况</view>
						<input class="value-box  canValueBox" name="decorateHouse" v-model="listData.h_fitment"  />
						<view class="right"></view>
					</view>
	<!-- 				<view class="textarea-box"  v-if="listData.h_type==1 " >
						<view class="title">家具家电</view>
						<textarea class="textarea" name="allElecFurnitrue" v-model="listData.h_facility"></textarea>
					</view> -->
					<view class="textarea-box"  v-if=" listData.h_type==3 && listData.h_type==2 && listData.h_type==1" >
						<view class="title">房屋简介</view>
						<textarea class="textarea" name="allElecFurnitrue" v-model="listData.h_intro"></textarea>
					</view>
					<view class="textarea-box">
						<view class="title">配套设施</view>
						<textarea class="textarea" name="configurateFacilite" v-model="listData.h_facility"></textarea>
					</view>
					<view class="photo-box">
						<view class="title">上传房产照片<text  class="tips">(最多可上传6张)  </text> </view> 
                         <view class="showPhoto-box">
							 <view class="photoLists"  v-for="(item,index) in photoList"  :key="index">
							 	<image  :src="item" class="uplpadImg"   @tap.stop="previewImage(index)"></image>
							 	<image  class="del" @tap.stop="delImg(index)" src="../../../static/image/uploadDel.png"></image>
							 </view>
							 <view class="box"  @tap.stop="getImage" v-if="photoList.length>=0 && photoList.length<6" >
								<image class="photo-bg" src="../../../static/image/uploadPhoto.png"></image>
							 </view>
							
						 </view>
					</view>
					<button class="btn" form-type="submit">提交</button>
					<view class="btns"></view>
			</form>
		</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	export default {
		data() {
			return {
				// 称呼
				name:'王亚妮',
				phone:'15255132094',
				rentMoney:12,
				rentTime:'12个月',
				payWay:'押一付三',
				useWaylist:['厂房','住宅','出租','商业用房','仓库'],
				joinTeamList:['是','否'],
				joinTeam:'是',
				area:'50㎡',
				direction:'东',
				direcitonList:['南北','南','西','北','东'],
				houseStyle:'两室一厅',
				houseFloor:15,
				// 什么时候入住？
				
				
				decorateHouse:'精装修',
				waterElectri:'自费',
				waterElectriList:['自费','商用','民用','免费'],
				allElecFurnitrue:'冰箱、电话、电视、洗衣机、空调',
				configurateFacilite:'电梯、车库、天然气',
				photoList:[],
				upUrlList:[],
				id:'',//房子的id
				type:'',//房子的类型，毛坯，公寓
				Type:'',
				flag:0,
				listData:'',
				closeStreetList:['是','否'],
				shareHouseList:['是','否']
			}
		},
		onReachBottom(){
			
		},
		onLoad(options){
			this.setData(options);
			console.log(options)
			this.getlist();
		},
		computed: {
		       startDate() {
		           return this.getDate('start');
		       },
		       endDate() {
		           return this.getDate('end');
		       }
		   },
		methods: {
			backs(){
				uni.navigateBack()
			},
			formSubmit(e){
				// <!-- '办公用房','毛坯房', '公寓房', '生产厂房','街面房','装修房' -->
				if(this.listData.h_rent=='是'){
					this.listData.h_rent=1;
				}else if(this.listData.h_rent=='否'){
					this.listData.h_rent=0;
				}
				if(this.listData.h_frontage=='是'){
					this.listData.h_frontage=1;
				}else if(this.listData.h_frontage=='否'){
					this.listData.h_frontage=0;
				}
				if(this.listData.h_rent=='是'){
					this.listData.h_rent=1;
				}else if(this.listData.h_rent=='否'){
					this.listData.h_rent=0;
				}
				this.$h5.post('sell/selledit',this.listData,(res)=>{
					if(res.code ==0){
						uni.navigateTo({
							url:'/pages/personData/houseDetail/houseDetail?type='+'houseResource'+'&flag='+this.flag+'&id='+this.id+'&getDataTypes='+this.type
						})
					}
				})
			},
			pickerChange(e,type){
				if(type ==1){
					this.listData.h_use=this.useWaylist[e.target.value]
				}
				else if(type ==2){
					this.listData.h_rent=this.joinTeamList[e.target.value]
				}
				else if(type ==3){
					this.listData.h_orientation=this.direcitonList[e.target.value];
				}else if(type ==4){
					this.listData.h_activate = e.target.value;
				}
				else if(type ==5){
					this.listData.h_water=this.waterElectriList[e.target.value];
				}
				else if(type ==6){
					this.listData.h_frontage=this.closeStreetList[e.target.value];
				}
				else if(type ==7){
					this.listData.h_rent=this.shareHouseList[e.target.value];
				}
			},
			// 时间选择器
			getDate(type) {
					const date = new Date();
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();
					
					if (type === 'start') {
						year = year ;
					} else if (type === 'end') {
						year = year + 2;
					}
					month = month > 9 ? month : '0' + month;;
					day = day > 9 ? day : '0' + day;
					return `${year}-${month}-${day}`;
			},
			getImage(){
				let _that = this;
				let lls = _that.photoList;
				uni.chooseImage({
					count: 6 - lls.length, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						_that.photoList = lls.concat(res.tempFilePaths)
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
								filePath: sos,
								name: 'file',
								// header:{"Content-Type": "multipart/form-data"},
								formData: {
									 type:'rent',
									 'user_token':_that.user_token
								},	
								success: function(datas) {
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data[0];
									_that.listData.h_img.push(aa)
									console.log(_that.listData.h_img)
				
								},
								fail: function(datas) {}
							})
						})
					}
				});
			},
			// 图片预览
			previewImage(index) {
				uni.previewImage({
					current: this.photoList[index],
					urls: this.photoList,
					indicator: "number"
				})
			},
			//删除某一项
			delImg(index) {
				let arr = this.photoList
				arr.splice(index, 1)
				this.photoList = arr;
				// 上传的图片url
				this.listData.h_img.splice(index, 1)
			},
			//获取数据
			getlist(){
				let that=this;
			    that.$h5.post('sell/particulars?',{
					type:that.type,
					id:that.id
				},(res)=>{
					if(res.code==0){
						that.listData=res.data;
						let aa=res.data;
						if(that.listData.h_rent==1){
							that.listData.h_rent='是'
						}else if(that.listData.r_rent==0){
							that.listData.h_rent='否'
						}
						if(that.listData.h_frontage==0){
							that.listData.h_frontage='否'
						}else if(that.listData.h_frontage==1){
							that.listData.h_frontage='是'
						}
						if(that.listData.h_rent==0){
							that.listData.h_rent='否'
						}else if(that.listData.h_rent==1){
							that.listData.h_rent='是'
						}
						aa.h_img.map(res1=>{
							res1=app.globalData.img+res1;
							that.photoList.push(res1)
						})
					
						console.log(152346546)
						console.log(that.photoList)
					
					}
				})
			},
			
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/common.scss";
	// 字体
	// @import "../../../static/scss/font.css";
	.zw{
		height: var(--status-bar-height);
		width: 750rpx;
		
		position: fixed;
		top:0rpx;
		left:0rpx;
		background-color: white;
		z-index:20;
	}
	.zwPosition{
		width: 750rpx;
		height: 75rpx;
		margin-top: var(--status-bar-height);
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
		// position: relative;
		// left:0rpx;
		// top:0rpx;
		 .listBox{
			 width: 750rpx;
			 height: 98rpx;
			 display: flex;
			 align-items: center;
			 padding:0rpx 30rpx;
			 box-sizing: border-box;
			 font-size: 28rpx;
			 justify-content: space-between;
			 border-bottom:2rpx solid #f2f2f2;
			 .noWrite{
				 color: #B3B3B3;
			 }
			 .field{
				 font-weight: bold;
				 width:180rpx;
				 
			 }
			 .canWrite{
				 color: #303133;
			 }
			 .noValueBox{
				  color: #B3B3B3;
			 }
			 .value-box{
				  width:480rpx;
			 }
			 .canValueBox{
				 color: #303133;
			 }
			 .right{
				  width: 60rpx;
				  height: 60rpx;
				  // background-color: red;
				  display: flex;
				  justify-content: flex-end;
				  align-items: center;
				  
				  .arrow{
					  display: block;
					  width: 23rpx;
					  height: 36rpx;
					
				  }
			 }
			 
		 }
		
	}
	.textarea-box{
		width: 750rpx;
		padding:30rpx;
		box-sizing: border-box;
		.title{
			color: #303133;
			font-size: 28rpx;;
		}
		.textarea{
			width: 690rpx;
			height: 200rpx;
			border: 2rpx solid #C9C9C9;
			border-radius: 4rpx;
			margin-top:36rpx;
			color: #222222;
			font-size: 28rpx;
			padding: 20rpx;
			box-sizing: border-box;
		}
		
	}
	.photo-box{
		width: 750rpx;
		padding:30rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		.title{
			color: #303133;
			font-weight: bold;
			margin-bottom:40rpx;
			.tips{
			   color:#888888;
			}
		}
		.showPhoto-box{
			 display:flex;
			 flex-wrap: wrap;
			.box{
				.photo-bg{
					display: block;
					width: 157rpx;
					height: 157rpx;
				}
			}
			.photoLists{
				margin: 0rpx 20rpx 20rpx 0rpx;
				
				position: relative;
				left:0rpx;
				top:0rpx;
				.uplpadImg{
					display: block;
					width: 157rpx;
					height: 157rpx;
					border-radius: 4rpx;
				}
				.del{
				   display: block;
				   width: 34rpx;
				   height: 34rpx;
				   position: absolute;
				   right:-17rpx;
				   top:-17rpx;
				}
			}
			
		}
	}
  .btn{
	  width: 750rpx;
	  height: 98rpx;
	  line-height: 98rpx;
	  text-align: center;
	  background-color: #4270ED;
	  color: #FFFFFF;
	  font-size: 30rpx;
	  position: fixed;
	  bottom:0rpx;
	  left:0rpx;
	  z-index:20;
	  border-radius: 0rpx!important;
  }
  .btns{
	  width:750rpx;
	  height: 98rpx;;
  }
.list{
			    width: 750rpx;
				height: 100rpx;
				display: flex;
				padding:0 30rpx;
				box-sizing: border-box;
				align-items: center;
				color: #303234;
				font-size: 28rpx;
				border-bottom:2rpx solid #f3f3f3 ;
				position: relative;
				left:0rpx;
				top:0rpx;
				.field{
					width:280rpx;
					font-weight: bold;
				}
				.valueActive{
					width: 480rpx;
				}
				.value{
					width: 480rpx;
					color: #888888;
				}
				.arrow{
					
					width:30rpx ;
					height: 30rpx;
					position: absolute;
					top:35rpx;
					right:40rpx;
				}
		   }
</style>
