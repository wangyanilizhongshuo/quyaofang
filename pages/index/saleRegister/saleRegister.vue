<template>
	<view class="h5-saleRegister">
		 <view class="topss"></view>
		 <view class="sale-title">
			 <view class="left" @tap.stop="quits">
				 <image class="img" src="/static/image/back.png"></image>
			 </view>
			 <view class="field">出售登记</view>
		 </view>
		 <view class="station"></view>
		 <view class="sale-content">
			 <form class="sale-form" @submit="formSubmit">
				  <view class="houseType list">
					   <view class="field">房屋种类</view>
					   <picker   class="value"  value="index" :range="houseTypeList" @change="PickerChange($event,1)">
							 <input class="uni-input" :style="houseTypeStyle != ''? 'color:#303133':''"  :disabled="true"  name="houseTypeStyle" v-model="houseTypeStyle" placeholder="请选择房屋种类"/>
					         
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
						
				  </view>
				  <view class="citys list">
					   <view class="field">所在城市</view>
					   <picker   class="value" value="index" @change="PickerChange($event,2)"  :range="cityList">
					   			<input :style="city != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="city" v-model="city" placeholder="请选择所在城市"/>
					    </picker>
						
					       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
						
				  </view>
				  <view class="region list">
					   <view class="field">所在区域</view>
					   <picker   class="value" @change="PickerChange($event,3)" value="index.district_name" :range="regionList">
					   			<input :style="region != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="region" v-model="region" placeholder="请选择所在区域"/>
					    </picker>
					   
					      <image class="arrow"  src="../../../static/image/right-gray.png"></image>
					  
				  </view>
				  <view class="area list" v-if="houseTypeStyle!='生产厂房' && houseTypeStyle!='街面房'&& houseTypeStyle!='办公用房'">
					   <view class="field">所在小区</view>
						<view class="value">
							<input :style="smallArea != ''? 'color:#303133':''" class="uni-input" @input="getxiaoquList"   name="smallArea" v-model="smallArea" placeholder="请选择所在小区"/>
						</view>
						<picker    @change="PickerChange($event,10)" value="index" :range="smallAreaList" >
				             <image class="arrow"  src="../../../static/image/right-gray.png" ></image>
						 </picker>
				  </view>
				  <view class="detailAddress list">
					   <view class="field">具体地址</view>
					   <input class="value" name="address"  :style="address!=''?'color:#303133':''" v-model="address"   placeholder="请输入具体地址" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="name list">
					   <view class="field">如何称呼</view>
					   <input class="value"  name="name" :style="name!=''?'color:#303133':''" v-model="name"   placeholder="请输入姓名" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="connect list">
					   <view class="field">联系方式</view>
					   <input class="value" name="phone" :style="phone!=''?'color:#303133':''"  v-model="phone"   placeholder="请输入电话" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="wishPrice list">
					   <view class="field">期望售价</view>
					   <input class="value" style="width:400rpx" name="wishPrice"  :style="wishPriceValue!=''?'color:#303133':''" v-model="wishPriceValue"  placeholder="请输入期望售价" />
					   <view style="width:80rpx;color:#888"  class="" >万元</view>
				  </view>
				  <!-- 生产厂房 -->
				  
				   <view class="build-area list" v-if="houseTypeStyle=='生产厂房'">
					   <view class="field">占地面积</view>
					   <input class="value"  name="areaCover" v-model="areaCover"  :style="areaCover!=''?'color:#303133':''"  placeholder="请输入占地面积" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </view>
				   <view class="build-area list" v-if="houseTypeStyle=='生产厂房'">
					   <view class="field">车间面积</view>
					   <input class="value"  name="workShopCover" v-model="workShopCover"  :style="workShopCover!=''?'color:#303133':''"  placeholder="请输入车间面积" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </view>
				   <view class="build-area list" v-if="houseTypeStyle=='生产厂房'">
						   <view class="field">办公面积</view>
						   <input class="value"  name="officeSpace" v-model="officeSpace"  :style="officeSpace!=''?'color:#303133':''"  placeholder="请输入办公面积" />
				           <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </view>
				  <!--  生产厂房 -->
				  
				  
				  <view class="build-area list" v-if="houseTypeStyle!='生产厂房'">
					   <view class="field">建筑面积</view>
					   <input class="value"  name="buildArea" v-model="buildAreaValue"  :style="buildAreaValue!=''?'color:#303133':''"  placeholder="请输入房屋面积" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="house-arrow list" v-if="houseTypeStyle!='生产厂房'">
					   <view class="field">房屋朝向</view>
					   <picker   class="value" @change="PickerChange($event,4)" value="index" :range="directionList">
					   		<input class="uni-input" :style="direction != ''? 'color:#303133':''"  :disabled="true"  name="direction" v-model="direction" placeholder="请选择房屋朝向"/>
					    </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <!--  生产厂房 -->
				  <!-- 街面房 -->
				     <view class="house-arrow list" v-if="houseTypeStyle=='街面房'">
						   <view class="field">是否临街</view>
						   <picker   class="value" @change="PickerChange($event,40)" value="index" :range="faceTheStreetList">
								<input class="uni-input" :style="faceTheStreet != ''? 'color:#303133':''"  :disabled="true"  name="faceTheStreet" v-model="faceTheStreet" placeholder="请选择是否临街"/>
							</picker>
						   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				     </view>
				  
				  <!-- 街面房 -->
				  
				  <!-- 生产厂房 -->
				  <view class="houseType list" v-if="houseTypeStyle!='生产厂房' && houseTypeStyle!='办公用房'">
					   <view class="field">户型</view>
					   <input class="value" name="houseType" v-model="houseTypeValue" :style="houseTypeValue!=''?'color:#303133':''"  placeholder="请输入户型" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <!-- 生产厂房 -->
				  
				  <!-- 办公用房 -->
				  <view class="houseType list" v-if="houseTypeStyle=='办公用房'">
					   <view class="field">房型</view>
					   <input class="value" name="houseType" v-model="houseTypeValue" :style="houseTypeValue!=''?'color:#303133':''"  placeholder="请输入房型" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <!-- 办公用房 -->
				  
				  <view class="houseFloor list" v-if="lcFlag">
					   <view class="field">楼层</view>
					   <input class="value" name="floor"  v-model="floorValue" :style="floorValue!=''?'color:#303133':''" maxlength="8"  placeholder="例如:独栋/共一层"  />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="house-arrow list" v-if="!lcFlag">
					   <view class="field">楼层</view>
					   <picker   class="value" @change="PickerChange($event,60)" value="index" :range="lcFloorList">
							<input class="uni-input" :style="floorValue != ''? 'color:#303133':''"  :disabled="true"  name="floor" v-model="floorValue" placeholder="请选择楼层"/>
						</picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  
				  <!-- 办公用房 -->
				  <view class="floorPans list" v-if="houseTypeStyle=='办公用房'">
					   <view class="field">楼盘</view>
					   <input class="value" name="floorPan"  v-model="floorPan" :style="floorPan!=''?'color:#303133':''"  placeholder="请输入楼盘" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <!-- 办公用户 -->
				  <!-- 精装修 -->
				  <view class="renovates list" v-if="houseTypeStyle== '精装修' || houseTypeStyle== '装修房'|| houseTypeStyle== '办公用房'">
					   <view class="field">装修情况</view>
					   <input class="value" name="renovate"  v-model="renovate" :style="renovate!=''?'color:#303133':''"  placeholder="请输入装修情况" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  
				  <!-- 精装修 -->
				  
				  
				  <!-- 街面房 -->
				  <view class="jingying list" v-if="houseTypeStyle== '街面房'">
					   <view class="field">经营情况</view>
					   <input class="value" name="management"  v-model="management" :style="management!=''?'color:#303133':''"  placeholder="请输入经营情况" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  
				  <!-- 精装修 -->
				  
				  
				   <!-- 生产厂房 -->
				  <view class="floorHeights list" v-if="houseTypeStyle=='生产厂房'">
					   <view class="field">层高</view>
					   <input class="value" name="floorHeight"  v-model="floorHeights" :style="floorHeights!=''?'color:#303133':''"  placeholder="请输入层高" />
					   <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="ownfloor list" v-if="houseTypeStyle=='生产厂房'">
					   <view class="field">是否独栋</view>
					   <picker   class="value" @change="PickerChange($event,30)" :alue="index" :range="singleBuildingList">
							<input class="uni-input" :style="singleBuilding != ''? 'color:#303133':''"  :disabled="true"  name="singleBuilding" v-model="singleBuilding" placeholder="请选择是否独栋"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="buildStructs list" v-if="houseTypeStyle=='生产厂房'">
					   <view class="field">建筑结构</view>
					   <input class="value" name="buildStruct"  v-model="buildStruct" :style="buildStruct!=''?'color:#303133':''"  placeholder="请输入建筑结构" />
					   <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				   <!-- 生产厂房 -->
				  
				  
				  
				  
				  <!-- 公寓房 公寓房公寓房特有的标签
				   -->
				   <view class="houseFloor list" v-if="houseTypeStyle=='公寓房'">
					   <view class="field">装修情况</view>
					   <input class="value" name="renovate"  v-model="renovate" :style="renovate!=''?'color:#303133':''"  placeholder="请输入装修情况" />
				       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </view>
				   <view class="waterElectrics list" v-if="houseTypeStyle=='公寓房'">
					   <view class="field">水电情况</view>
					   <picker   class="value" @change="PickerChange($event,20)" value="index" :range="waterElectricList">
							<input class="uni-input" :style="waterElectric != ''? 'color:#303133':''"  :disabled="true"  name="waterElectric" v-model="waterElectric" placeholder="请选择水电情况"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </view>
				   <!-- 公寓房 公寓房公寓房特有的标签
				    -->
					
				  <view class="buildTime list">
					   <view class="field">建成时间</view>
						 <picker class="value" mode="date" value="buildTime" :start="startDate" :end="endDate" @change="PickerChange($event,5)">
							<input class="uni-input" :style="buildTime != ''? 'color:#303133':''"  :disabled="true"  name="buildTime" v-model="buildTime" placeholder="请选择建筑建成时间"/>
						 </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="buildPurpose list">
					   <view class="field">房屋用途</view>
					   <picker   class="value" @change="PickerChange($event,6)" value="index" :range="houseUseWayList">
					   		<input class="uni-input" :style="houseUseWay != ''? 'color:#303133':''"  :disabled="true"  name="houseUseWay" v-model="houseUseWay" placeholder="请选择房屋用途"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="TransactOwnership list">
					   <view class="field">交易权属</view>
					   <picker   class="value" @change="PickerChange($event,7)" value="index" :range="transactOwnShipList">
					   		<input class="uni-input" :style="transactOwnShip != ''? 'color:#303133':''"  :disabled="true"  name="transactOwnShip" v-model="transactOwnShip" placeholder="请选择交易所属"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="propertyRightOwnership list">
					   <view class="field">产权权属</view>
					   <picker   class="value" @change="PickerChange($event,8)" value="index" :range="propertyRightOwnShipList">
					   		<input class="uni-input" :style="propertyRightOwnShip!= ''? 'color:#303133':''"  :disabled="true"  name="propertyRightOwnShip" v-model="propertyRightOwnShip" placeholder="请选择产权所属"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				  <view class="houseUseTime list">
					   <view class="field">房屋年限</view>
					   <picker   class="value" @change="PickerChange($event,9)" value="index" :range="houseUseTimeList">
					   		<input class="uni-input" :style="houseUseTime!= ''? 'color:#303133':''"  :disabled="true"  name="houseUseTime" v-model="houseUseTime" placeholder="请选择房屋年限"/>
					   </picker>
					   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				  </view>
				 

				  <view class="supportFacilities">
					  <view class="filed">配套设施</view>
					  <textarea name="supportFaci"  class="texts value" v-model="textareaValue"  @input="textareaInput" placeholder-style="color:#888" placeholder="请输入配套设施 例如:椅子,空调,洗衣机"></textarea>
				  </view>
				 <view class="supportFacilities  textareasBox">
					  <view class="filed">房屋简介</view>
					  <textarea name="briefIntroduce"  class="texts value" v-model="houseBriefIntroduce"   placeholder-style="color:#888" placeholder="请输入房屋简介"></textarea>
				 </view>
				  <view class="uploadPhoto">
					  <view class="field">上传房产照片<text class="small">(最多可上传6张)</text></view>
					  <view class="photos">
						   <view class="photoLists"  v-for="(item,index) in photoList"  :key="index">
							    <image  :src="item" class="uplpadImg"   @tap.stop="previewImage(index)"></image>
						        <image  class="del" @tap.stop="delImg(index)" src="../../../static/image/uploadDel.png"></image> 
						   </view>
						   <view class="photoLists">
						   		<image v-if="photoList.length>=0 && photoList.length<6" @tap.stop="pickerImage" class="uplpadImg"  src="/static/image/uploadPhoto.png"></image>
						   </view>
					  </view>
				  </view>
				   <button class="btn" form-type="submit">提交</button>
			 </form>
		 </view>
		
	</view>
</template>
<script>
	export default {
		data() {
			//时间选择器
			 const currentDate = this.getDate({
			            format: true
			        })
			return {
				//房屋种类
				houseTypeStyle:'',
				//所在城市
				city:'',
				// 区域
				region:'',
				// 所在小区
				smallArea:'',
				// 具体地址
				address:'',
				// 名字
				name:'',
				// 楼盘
				floorPan:'',
				// 联系方式
				phone:'',
				// 希望售价
				wishPriceValue:'',
				// 建筑面积
				buildAreaValue:'',
				// 朝向
				direction:'',
				// 户型
				houseTypeValue:'',
				// 楼层
				floorValue:'',
				// 建成时间
				buildTime:'',
				// 房屋用途
				houseUseWay:'',
				// 交易权属
				transactOwnShip:'',
				// 产权所属
				propertyRightOwnShip:'',
				// 房子使用年限
				houseUseTime:'',
				// 设置配套内容
				textareaValue:'',
				// 上传的图片返回的数据
				
				// 公寓房
				// 装修情况:
				 renovate:'',
				// 水电情况
				waterElectric:'',
				waterElectricList:['民用','商用'],
				// 公寓房
				
				
				// 生产厂房
				areaCover:'',
				workShopCover:'',
				officeSpace:'',
				// 层高
				floorHeights:'',
				// 是否独栋
				singleBuilding:'',
				// 建筑结构
				buildStruct:'',
				
				// 生产厂房
				//精装修
				
				directionProgress:'',
				
				//精装修
				
				// 街面房
				faceTheStreet:'',
				// 经营情况
				management:'',
				// 街面房
				
				// 办公用房
				floorPan:'',
				// 办公用房
				
				// 办公用房
			
		     	photoList:[],
				upUrlList:[],
				// 房屋种类列表
				houseTypeList: ['办公用房','毛坯房', '公寓房', '生产厂房','街面房','装修房'],
				// 小区
				smallAreaList:[],//小区显示的数据列表
				smallAreaListBox:[],//小区的列表总体的
				smallAreaNum:'',//对应小区的字符
				// 城市列表
				cityList:['杭州市','湖州市','绍兴市','宁波市','嘉兴市','丽水市','台州市','温州市','金华市','衢州市','舟山市'],
				regionList:[],
				// 朝向list
				// directionList:['东','西','南','北'],
				directionList:['南北','南','西','北','东'],
				houseUseWayList:['住宅','出租','商业用房','厂房','仓库'],
				transactOwnShipList:['证券交易','期货交易','其他交易'],
				propertyRightOwnShipList:['国有房产','集体所有房产','私有房产','联营企业房产','股份制企业房产','涉外房产','其他产'],
				houseUseTimeList:['1年','2年','3年','4年','5年','6年'],
				// 公寓房毛坯房等等的选择
				houseTypeFlag:[false,false,false,false,false],
				singleBuildingList:['是','否'],
				
				// 街面房
				// 房屋简介
				faceTheStreetList:['是','否'],
				houseBriefIntroduce:'',
				// 房屋种类选择的不同,接口不一样 
				houseNumber:0,
				lcFlag:true,
				lcFloorList:['1~~3层','4~~6层','7~~9层','9层以上'],
				// user_token:''user_token
				
			}
		},
		onLoad(options){
			this.setData(options);
			this.getquList();//获取小区列表
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
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					text = window.android.quit();
				 }else{
					 // alert('重新退出'')
				 }
			     return text;
			  },
			  // 获取小区的列表
			  getxiaoquList(e){
				  let that=this;
				  that.smallAreaList=[];
				  that.smallAreaListBox=[];
				  that.$h5.post('rent/geteseate',{
					  estate:that.smallArea,
					  boundary:that.city
				  },(res)=>{
					  console.log(res)
					   if(res.code==0){
						    that.smallAreaListBox=res.data;
						    let aa=res.data;
					         aa.map(res1=>{
							 that.smallAreaList.push(res1.h_title)	 
							 })
						  console.log(that.smallAreaList)
						  console.log('that.smallAresaList')
					   }
				  })
			  },
			  //获取区,县列表
			  getquList(){
				  let that=this;
				  that.regionList=[];
				  that.$h5.post('district/getdistrict',{
					  district:that.city
				  },(res)=>{
					 if(res.code ==0){
						 let aa=res.data;
						 aa.map(res=>{
						  that.regionList.push(res.district_name)	 ;
						 
						 })
					 }
				  })
			  },
			// 提交数据
			formSubmit(e) {
				 let that=this;
				 let msg=e.detail.value;
				 console.log('图片')
				 console.log(that.upUrlList)
				let updata={
					 h_type:that.houseNumber	,
					 // 所属城市
					 h_city:msg.city,
						// 所属区域
					 h_area:msg.region,
					 // 具体地址
					 h_charge:msg.address,
					 // 出售人姓名
					 h_name:msg.name,
					 // 电话
					 h_phone:msg.phone,
					 // 出售价格
					 h_money:(msg.wishPrice),
					 // 楼层
					  h_louceng:msg.floor,
					 // 建成时间
					 h_activate:msg.buildTime ,
					 // 房屋用途
					 h_use:msg.houseUseWay,
					 // 交易权属
					 h_deal:msg.transactOwnShip,
					 // 期权
					 h_prop:msg.propertyRightOwnShip,
					 // 房屋年限
					 h_year:msg.houseUseTime,
					 // 房屋简介
					 h_intro:msg.briefIntroduce,
					 // 配套设施
					 h_facility:msg.supportFaci,
					 // 房屋照片
					 h_img: that.upUrlList	,
									 
				}
				 let updata1={
					
				 }	
							
				 if(that.houseNumber ==1){
					 updata1={
					 			// 建筑面积
					 		h_qrea:msg.buildArea,
					 		// 房屋朝向
					 		h_orientation:msg.direction,
					 		// 户型
					 		h_housetype:msg.houseType,
					 		// 所属楼盘
					 		h_houses:msg.floorPan,
							// 装修情况
							h_fitment:msg.renovate,
					 					 
					 }
				 }else if( that.houseNumber ==2){
					 // 毛坯房
					updata1={
							// 所属小区
							h_plot:msg.smallArea,
							// h_num:that.smallArea,
							// 建筑面积
							h_qrea:msg.buildArea,
							// 房屋朝向
							h_orientation:msg.direction,
							// 户型
							h_housetype:msg.houseType,
							
									 
					}
				 }else if( that.houseNumber ==3){
					 let waterType=0
					 if(msg.waterElectric=='民用'){
						 waterType=1
					 }else if(msg.waterElectric=='商用'){
						 waterType=2
					 }
					 // 公寓房
					updata1={
							// 所属小区
							h_num:that.smallArea,
							// 具体地址
							h_charge:msg.address,
							
							// 建筑面积
							h_qrea:msg.buildArea,
							// 房屋朝向
							h_orientation:msg.direction,
							// 户型
							h_housetype:msg.houseType,
							// 楼层
							// h_louceng:msg.floor,
							// 	装修情况
							 h_fitment:msg.renovate,
							// // 水电情况 1：民用电 2：商用电
							h_water:waterType,
							
									 
					}
				 }else if( that.houseNumber ==4){
					 // 生产厂房
					 let singles=0;
					 if( msg.singleBuilding=='否'){
						 singles=0;
					 }else if(msg.singleBuilding=='是'){
						  singles=1;
					 }
					updata1={
							
							// 具体地址
							h_charge:msg.address,
							// 建筑面积
							h_qrea:msg.areaCover,
						     // 车间面积
						    h_plant:msg.workShopCover,
						  // 办公面积
						    h_work:msg.officeSpace,
							// 房屋朝向
							h_orientation:msg.direction,
							// 户型
							h_housetype:msg.houseType,
							// // 楼层
							// h_louceng:msg.floor,
							// 层高 
							h_tier:msg.floorHeight,
							// // 是否独栋 0：不是 1：是独栋
							h_alone:singles,
							// // 建筑结构
							h_structure:msg.buildStruct,
							
									 
					}
				 }
				 else if( that.houseNumber ==5){
					 let  closeStreet =0
					 if(msg.faceTheStreet =='是'){
						 closeStreet=1
					 }else  if(msg.faceTheStreet =='否'){
						  closeStreet =0
					 }
				 	 // 街面房
					updata1={
							// 所属小区
							// h_num:that.smallArea,
							h_plot:msg.smallArea,
							// 出售价格
							h_money:(msg.wishPrice),
							// 建筑面积
							h_qrea:msg.buildArea,
							// 房屋朝向
							h_orientation:msg.direction,
							// //是否临街 
							 h_frontage:closeStreet,
							// 户型
							h_housetype:msg.houseType,
							h_fitment:msg.management
					}
				 }
				 else if( that.houseNumber ==6){
				 	 // 装修房
						updata1={
								// 所属小区
								h_plot:msg.smallArea,
								// h_num:that.smallArea,
								// 出售价格
								h_money:(msg.wishPrice),
								//建筑面积
								h_qrea:msg.buildArea,
								// 房屋朝向
								h_orientation:msg.direction,
								// 户型
								h_housetype:msg.houseType,
								
						// 	装修情况						h_fitment:msg.renovate,
								
										 
						}
				 }
				 uni.showModal({
				 	title:'数据存在不可二次更改,确定提交数据？',
				 	success:function(res){
				 		if(res.confirm){
							 that.$h5.post('sell/apartment',{
										...updata,
										...updata1
							 },(res)=>{
								 if(res.code ==0){
									uni.navigateTo({
										url:'/pages/index/submitSuccess/submitSuccess'
									})
								 }
			                     console.log('success')
							 })
						}else if(res.cancel){}
						
					 }
				  })
				 
				 
			},
			 // 配套设置
			textareaInput(){
				
			},
			// 照片的选择
			pickerImage(){
				let _that = this;
				let lls = _that.photoList;
				uni.chooseImage({
					count: 6 - lls.length, //上传图片的数量，默认是9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], //从相册选择
					success: function(res) {
						const tempFilePaths = res.tempFilePaths; //拿到选择的图片，是一个数组
						_that.photoList = lls.concat(res.tempFilePaths);
						tempFilePaths.map(sos => {
							uni.uploadFile({
								url: 'https://yaofangme.hzbixin.cn/Updimg/upload',
								filePath: sos,
								name: 'file',
								// header:{"Content-Type": "multipart/form-data"},
								formData: {
									type:'sell',
									'user_token':_that.user_token
								},						
								// formData:true,
								success: function(datas) {
									console.log(datas,'success')
									// let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let results = typeof datas.data === "object" ? datas.data : JSON.parse(datas.data);
									let aa = results.data[0];
									_that.upUrlList.push(aa);
								},
								fail: function(datas) {
									console.log('fail')
								}
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
				 this.upUrlList.splice(index, 1);
				
			},
			// 种类的选择
			PickerChange(e,type) {
				if(type ==1){
					this.houseTypeStyle=this.houseTypeList[e.target.value];
					this.houseNumber=Number(e.target.value)+1;
					if(this.houseNumber ==4 ){
						this.lcFlag=false
					}
					// console.log(this.houseNumber)
				}
				else if(type ==2){
					this.city= this.cityList[e.target.value];
					this.getquList();//选择市结束后，选择区
				}else if (type ==3){
					this.region= this.regionList[e.target.value];
					 this.getxiaoquList();
				}else if (type ==4){
					this.direction =this.directionList[e.target.value] ;
				}else if(type ==5){
					 this.buildTime = e.target.value;
				}else if (type ==6){
					 this.houseUseWay =this.houseUseWayList[e.target.value] ;
				}else if(type ==7){
					this.transactOwnShip =this.transactOwnShipList[e.target.value] ;
				}
				else if(type ==8){
					this.propertyRightOwnShip=this.propertyRightOwnShipList[e.target.value] ;
				}
				else if(type ==9){
					this.houseUseTime =this.houseUseTimeList[e.target.value] ;
				}
				else if(type ==10){
					this.smallArea =this.smallAreaList[e.target.value] ;
					this.smallAreaNum=this.smallAreaListBox[e.target.value].h_num;
					
				}
				// 公寓房
				else if(type ==20){
					this.waterElectric =this.waterElectricList[e.target.value] ;
				}
			    // 生产厂房
				else if(type ==30){
					this.singleBuilding =this.singleBuildingList[e.target.value] ;
				}
				//街面房
				else if(type ==40){
					this.faceTheStreet =this.faceTheStreetList[e.target.value] ;
				}
				else if(type ==60){
				
					this.floorValue =this.lcFloorList[e.target.value] ;
					
				}

			},
			// 时间选择器
			getDate(type) {
					const date = new Date();
					let year = date.getFullYear();
					let month = date.getMonth() + 1;
					let day = date.getDate();
		
					if (type === 'start') {
						year = year - 60;
					} else if (type === 'end') {
						year = year + 2;
					}
					month = month > 9 ? month : '0' + month;;
					day = day > 9 ? day : '0' + day;
					return `${year}-${month}-${day}`;
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	 @import "../../../static/scss/common.scss";
	.h5-saleRegister{
		.topss{
			 @extend  %top-style;
		}
		.station{
			width: 750rpx;
			height:75rpx ;
			background-color: #fff;
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
	}
    .sale-content{
		margin-top: var(--status-bar-height);
	  .sale-form{
		   .list{
			    width: 750rpx;
				// background-color: green;
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
		   .supportFacilities{
			     width: 750rpx;
				 padding:50rpx 30rpx 0rpx;
				 box-sizing: border-box;
				 color: #303234;
				 font-size: 28rpx;
				 .filed{
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
		   .uploadPhoto{
		   	  width: 750rpx;
		   	  padding:30rpx 30rpx 100rpx;
		   	  box-sizing: border-box;
			  .field{
				  color: #303234;
				  font-size: 28rpx;
				  font-weight: bold;
				  margin-bottom: 40rpx;
				  .small{
					  color: #888888;
				  }
				 
			  }
			  .photos{
				  width: 690rpx;
				  display: flex;
				  flex-wrap:wrap;
				  
				  .photoLists{
					  width: 157rpx;
					  height: 157rpx;
					  position: relative;
					  top:0rpx;
					  left:0rpx;
					  margin-right:25rpx;
					  margin-bottom: 25rpx;
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
	  }
	 
    }
	.btn{
		 width: 750rpx;
		 height: 100rpx;
		 background: #416FED;
		 text-align: center;
		 line-height: 100rpx;
		 color:#fff;
		 font-size: 30rpx;
		 border-radius: 0;
	}
</style>
