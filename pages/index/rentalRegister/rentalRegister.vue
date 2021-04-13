<template>

   <view class="h5-rentalRegister">
   	 <view class="topss"></view>
   	 <view class="sale-title">
   		 <view class="left" @tap.stop='quits'>
   			  <image class="img" src="/static/image/back.png"></image>
   		 </view>
   		 <view class="field">出租登记</view>
   	 </view>
   	 <view class="station"></view>
   	 <view class="sale-content">
   		 <form class="sale-form" @submit="formSubmit">
   			  <view class="houseType list">
   				   <view class="field">房屋种类</view>
   				   <picker   class="value" @change="PickerChange($event,1)" :value="index" :range="houseTypeList">
   						 <input class="uni-input" :style="houseTypeStyle != ''? 'color:#303133':''"  :disabled="true"  name="houseTypeStyle" v-model="houseTypeStyle" placeholder="请选择房屋种类"/>
   				    </picker>
   				   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="citys list">
   				   <view class="field">所在城市</view>
   				   <picker   class="value" @change="PickerChange($event,2)" :value="index" :range="cityList">
   				   			<input :style="city != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="city" v-model="city" placeholder="请选择所在城市"/>
   				    </picker>
   				   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="region list">
   				   <view class="field">所在区域</view>
   				   <picker   class="value" @change="PickerChange($event,3)" :value="index" :range="regionList">
   				   			<input :style="region != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="region" v-model="region" placeholder="请选择所在区域"/>
   				    </picker>
   				   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 生产厂房需要将小区去掉 -->
   			  <view class="area list"  v-if="houseTypeStyle !='生产厂房' && houseTypeStyle !='街面房' && houseTypeStyle !='办公用房'" >
   				   <view class="field">所在小区</view>
				   <view class="value">
				      <input :style="smallArea != ''? 'color:#303133':''" class="uni-input" @input="getxiaoquList"   name="smallArea" v-model="smallArea" placeholder="请选择所在小区"/>
   			       </view>
				   <picker   @change="PickerChange($event,4)" :value="index" :range="smallAreaList">
   			         <image class="arrow"  src="../../../static/image/right-gray.png"></image>
				   </picker>
   			  </view>
   			  <!-- 办公用房 -->
   			  <!-- 办公用房 -->
   			  <view class="propertyForSales list" v-if="houseTypeStyle =='办公用房'">
   				   <view class="field">楼盘</view>
   				   <input class="value" name="propertyForSale"  :style="propertyForSale!=''?'color:#303133':''" v-model="propertyForSale"   placeholder="请输入楼盘" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 办公用房 -->
   			  <!-- 办公用房 -->
   			  <view class="detailAddress list" v-if="houseTypeStyle !='办公用房'">
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
   				   <view class="field">租金</view>
   				   <input class="value" type="number" style="width:330rpx" name="wishPrice"  :style="wishPriceValue!=''?'color:#303133':''" v-model="wishPriceValue"  placeholder="请输入期望租金" />
   				   <view style="width:150rpx;color:#888;text-align: right;" v-if="houseTypeStyle =='毛坯房' || houseTypeStyle =='公寓房'"  class="" >元/月</view>
				   <view style="width:150rpx;color:#888;text-align: right;" v-if="houseTypeStyle =='街面房' || houseTypeStyle =='装修房'"  class="" >万元/月</view>
				   <view style="width:150rpx;color:#888;text-align: right;" v-if="houseTypeStyle =='生产厂房' || houseTypeStyle =='办公用房'"  class="" >元/㎡/天</view>
				     <view style="width:150rpx;color:#888;text-align: right;" v-if="houseTypeStyle ==''"  class="" ></view>
   			  </view>
   			  <view class="wishleaseTime list">
   				   <view class="field">租期</view>
   				   <input class="value" style="width:400rpx" type="number"  name="leaseTime" :style="leaseTime!=''?'color:#303133':''" v-model="leaseTime"   placeholder="请输入租期" />
   			       <view style="width:80rpx;color:#888;text-align: center;"  class="" >月</view> 
				   <!-- <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image> -->
   			  </view>
   			  <view class="payways list" >
   			  	   <view class="field">付款方式</view>
   			       <picker   class="value" @change="PickerChange($event,5)" :value="index" :range="payWayList">
   			       			<input :style="payWay != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="payWay" v-model="payWay" placeholder="请选择付款方式"/>
   			        </picker>
   			       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  
   			  <!-- 街面房 -->
   			  <!-- 街面房 -->
   			  <view class="faceTheStreets list"  v-if="houseTypeStyle =='街面房' ">
   			  	   <view class="field">是否临街</view>
   			       <picker   class="value" @change="PickerChange($event,40)" :value="index" :range="faceTheStreetList">
   			       			<input :style="faceTheStreet != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="faceTheStreet" v-model="faceTheStreet" placeholder="请选择是否临街"/>
   			        </picker>
   			       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  
   			  <!-- 街面房 -->
   			  <!-- 街面房 -->
   			  
   			  
   			  <!-- 生产厂房 -->
   			  <!-- 生产厂房 -->
   			  <view class="ownYards list"  v-if="houseTypeStyle =='生产厂房'">
   			  	   <view class="field">是否独院</view>
   			       <picker   class="value" @change="PickerChange($event,30)" :value="index" :range="ownYardList">
   			       	 <input :style="ownYard != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="ownYard" v-model="ownYard" placeholder="请选择是否独院"/>
   			        </picker>
   			       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="houseAreas list"  v-if="houseTypeStyle =='生产厂房'">
   				   <view class="field">占地面积</view>
   				   <input class="value" name="houseArea" :style="houseArea!=''?'color:#303133':''"  v-model="houseArea"   placeholder="请输入占地面积" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="workShops list"  v-if="houseTypeStyle =='生产厂房'">
   				   <view class="field">车间面积</view>
   				   <input class="value" name="workShop" :style="workShop!=''?'color:#303133':''"  v-model="workShop"   placeholder="请输入车间面积" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="workOffices list"  v-if="houseTypeStyle =='生产厂房'">
   				   <view class="field">办公面积</view>
   				   <input class="value" name="workOffice" :style="workOffice!=''?'color:#303133':''"  v-model="workOffice"   placeholder="请输入办公面积" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 生产厂房  workOffice-->
   			  <!-- 生产厂房 -->
   			  <view class="joinTenancys list"  v-if="houseTypeStyle !='生产厂房' && houseTypeStyle !='街面房' && houseTypeStyle !='办公用房'">
   			  	   <view class="field">是否合租</view>
   			       <picker   class="value" @change="PickerChange($event,6)" :value="index" :range="joinTenancyList">
   			       			<input :style="joinTenancy != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="joinTenancy" v-model="joinTenancy" placeholder="请选择是否合租"/>
   			        </picker>
   			       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="houseAreas list" v-if="houseTypeStyle !='生产厂房'">
   				   <view class="field">面积</view>
   				   <input class="value" name="houseArea" :style="houseArea!=''?'color:#303133':''"  v-model="houseArea"   placeholder="请输入面积" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="directions list"  v-if="houseTypeStyle !='生产厂房'">
   			  	   <view class="field">朝向</view>
   			       <picker   class="value" @change="PickerChange($event,7)" :value="index" :range="directionList">
   			       			<input :style="direction != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="direction" v-model="direction" placeholder="请选择朝向"/>
   			        </picker>
   			       <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <view class="houseStyles list" v-if="houseTypeStyle !='生产厂房'  &&houseTypeStyle !='办公用房'">
   				   <view class="field">户型</view>
   				   <input class="value" name="houseStyle" :style="houseStyle!=''?'color:#303133':''"  v-model="houseStyle"   placeholder="请输入户型" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 办公用房 -->
   			  <!-- 办公用房 -->
   			  <view class="houseTypes list" v-if="houseTypeStyle =='办公用房'  ">
   				   <view class="field">房型</view>
   				   <input class="value" name="houseType" :style="houseType!=''?'color:#303133':''"  v-model="houseType"   placeholder="请输入房型" />
   			       <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 办公用房 -->
   			  <!-- 办公用房 -->
   			<view class="houseFloor list" v-if="lcFlag">
			   <view class="field">楼层</view>
			   <input class="value" name="floor"  v-model="houseFloor" :style="houseFloor!=''?'color:#303133':''" maxlength="8"  placeholder="例如:独栋/共一层"  />
   			     <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			</view>
   			<view class="house-arrow list" v-if="!lcFlag">
				   <view class="field">楼层</view>
				   <picker   class="value" @change="PickerChange($event,60)" :value="index" :range="lcFloorList">
						<input class="uni-input" :style="houseFloor != ''? 'color:#303133':''"  :disabled="true"  name="floor" v-model="houseFloor" placeholder="请选择楼层"/>
					</picker>
				   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			</view>
   			  <!-- 生产厂房  -->
   			  <!-- 生产厂房 --> 
   			   <view class="houseHeights list"  v-if="houseTypeStyle =='生产厂房'" >
   					   <view class="field">层高</view>
   					   <input class="value" type="number" name="houseHeight" :style="houseHeight!=''?'color:#303133':''"  v-model="houseHeight"   placeholder="请输入层高" />
   			        <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			   </view>
   			  
   			   <view class="buildStructs list"  v-if="houseTypeStyle =='生产厂房'">
   				   <view class="field">建筑结构</view>
   				   <input class="value" name="buildStruct" :style="buildStruct!=''?'color:#303133':''"  v-model="buildStruct"   placeholder="请输入建筑结构" />
   			        <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			   </view>
   			   <view class="buildTime list"  v-if="houseTypeStyle =='生产厂房'">
   			   	   <view class="field">入驻</view>
   			   		 <picker class="value" mode="date" :value="buildTime" :start="startDate" :end="endDate" @change="PickerChange($event,31)">
   			   			<input class="uni-input" :style="checkTime != ''? 'color:#303133':''"  :disabled="true"  name="checkTime" v-model="checkTime" placeholder="请选择入驻时间"/>
   			   		 </picker>
   			   	   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			   </view>
   			  <!-- 生产厂房 -->
   			  <!-- 生产厂房 -->
   			  
   			  
   			<view class="buildTime list"  v-if="houseTypeStyle!='生产厂房'">
   				   <view class="field">入住时间</view>
   					 <picker  class="value" mode="date" :value="buildTime" :start="startDate" :end="endDate" @change="PickerChange($event,8)">
   						<input class="uni-input" :style="checkTime != ''? 'color:#303133':''"  :disabled="true"  name="checkTime" v-model="checkTime" placeholder="请选择入住时间"/>
   					 </picker>
   				   <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			</view>
   			<!-- 装修房 -->
   			<!-- 装修房 -->
   			<view class="renovates list"  v-if="houseTypeStyle=='装修房' ||houseTypeStyle =='办公用房'  ">
   				   <view class="field">装修情况</view>
   				   <input class="value" name="renovate" :style="renovate!=''?'color:#303133':''"  v-model="renovate"   placeholder="请输入装修情况" />
   				   <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			</view>
   			<!-- 装修房 -->
   			<!-- 装修房 -->
   			
   			  <!-- 公寓房 -->
   			  <!-- 公寓房 -->
   			 <view class="renovates list"  v-if="houseTypeStyle =='公寓房'">
   				   <view class="field">装修情况</view>
   				   <input class="value" name="renovate" :style="renovate!=''?'color:#303133':''"  v-model="renovate"   placeholder="请输入装修情况" />
   				   <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			 </view>
   			 <view class="waterElectrics list"  v-if="houseTypeStyle =='公寓房'">
   			 	   <view class="field">水电情况</view>
   			       <picker   class="value" @change="PickerChange($event,9)" :value="index" :range="waterElectricList">
   			      	  <input :style="waterElectric != ''? 'color:#303133':''" class="uni-input" :disabled="true"  name="waterElectric" v-model="waterElectric" placeholder="请选择水电情况"/>
   			       </picker>
   			      <image class="arrow"  src="../../../static/image/right-gray.png"></image>
   			 </view>
   			  <!-- 公寓房 -->
   			  <!-- 公寓房 -->
   			  <!-- 街面房 -->
   			  <!-- 街面房 -->
   			  <view class="managements list"  v-if="houseTypeStyle =='街面房'">
   				   <view class="field">经营情况</view>
   				   <input class="value" name="management" :style="management!=''?'color:#303133':''"  v-model="management"   placeholder="请输入经营情况" />
   				   <image style="visibility: hidden;" class="arrow"  src="../../../static/image/right-gray.png"></image>
   			  </view>
   			  <!-- 街面房 -->
   			  <!-- 街面房 -->
   		      <view class="furnitureHouses textareasBox" v-if="houseTypeStyle !='生产厂房'  &&houseTypeStyle !='街面房' &&houseTypeStyle !='办公用房' ">
   		      	  <view class="filed">家具家电</view>
   		      	  <textarea name="furnitureHouse"  class="texts value" v-model="furnitureHouse"  placeholder-style="color:#888" placeholder="请输入家具家电"></textarea>
   		      </view> 
   			  <view class="supportFacilities  textareasBox">
   				  <view class="filed">配套设施</view>
   				  <textarea name="supportFaci"  class="texts value" v-model="textareaValue"   placeholder-style="color:#888" placeholder="请输入配套设施,例如:椅子,空调,洗衣机"></textarea>
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
				date: currentDate,
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
				// 联系方式
				phone:'',
				// 租金
				wishPriceValue:'',
				// 租期
				leaseTime:'',
				// 付款方式
				payWay:'',
				// 是否合租
				joinTenancy:'',
				// 面积
				houseAreas:'',
				// 朝向
				direction:'',
				// 户型
				houseStyle:'',
				// 楼层
				houseFloor:'',
				// 入住时间
				checkTime:'',
				// 家具家电
				furnitureHouse:'',
				// 装修情况
				renovate:'',
				// 水电情况
				waterElectric:'',
			    
				
			     // 生产厂房
				  // 是否独院
				 ownYard:'',
				 // 车间面积
				 workShop:'',
				 workOffice:'',
				 // 层高
				 houseHeight:'',
				 // 建筑结构
				 buildStruct:'',
			     // 生产厂房
				 
				 // 街面房
				 faceTheStreet:'',
				  // 经营情况
				  management:'',
				 // 街面房
				
				// 设置配套内容
				textareaValue:'',
			
				// 办公用房
			     propertyForSale:'',
				 // 房型
				 houseType:'',
				// 办公用房
				// 办公用房
				
		     	photoList:[],
				upUrlList:[],
				// 房屋种类列表
				houseTypeList: ['办公用房','毛坯房', '公寓房', '生产厂房','街面房','装修房'],
				// 小区
				smallAreaList:['禹都华庭','于都雅苑','晨光国际','远大未来城'],
				smallAreaListBox:[],
				smallAreaNum:'',//对应小区的字符
				// 城市列表
				cityList:['杭州市','湖州市','绍兴市','宁波市','嘉兴市','丽水市','台州市','温州市','金华市','衢州市','舟山市'],
				regionList:['江干区','滨江区','西湖区','拱墅区','富阳区'],
				payWayList:['现金','银行卡','微信'],
				joinTenancyList:['是','否'],
				directionList:['南北','南','西','北','东'],
				waterElectricList:['商用水电','民用水电'],
				ownYardList:['是','否'],
				faceTheStreetList:['是','否'],
				houseBriefIntroduce:'',
				furnitureHouse :'',
				houseNumber:0,
				lcFlag:true,
			
				lcFloorList:['单层','多层']
				
			}
		},
		 computed: {
		        startDate() {
		            return this.getDate('start');
		        },
		        endDate() {
		            return this.getDate('end');
		        }
		    },
		onLoad(options){
	        console.log(options)
		},
	// https://blog.csdn.net/liujh1992326/article/details/84646924?utm_medium=distribute.pc_relevant_t0.none-task-blog-OPENSEARCH-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-OPENSEARCH-1.control
		methods: {
			quits(){
				let text = '不在网游SDK环境内，找不到方法';
				 if(window.android && window.android.quit){
					 window.android.quit();
				 }else{
					 window.webkit.messageHandlers.quit.postMessage(123);      
				 }
			     
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
			// 提交数据
			formSubmit(e) {
				 let that=this;
				 let msg=e.detail.value;
				 console.log(that.upUrlList);
				 let datass={  };
				 let datas={
					 // 房屋出租类型
					 r_type:that.houseNumber,
					 // 所在城市
					 r_city:msg.city,
					 // 所在区域
					 r_area:msg.region,
					 // 出租人
					 r_name:msg.name,
					 // 联系电话
					 r_phone:msg.phone,
					 // 租金
					 r_money:msg.wishPrice,
					 // 租期
					 r_tenancy:msg.leaseTime,
					 // 付款方式
					 r_payment:msg.payWay,
					 // 房屋面积
					 r_mj:msg.houseArea,
					 // 房屋朝向
					 r_orientation:msg.direction,
					 // 楼层
					 r_level:msg.floor,
					 // 装修情况
					 r_fitment:msg.renovate, 
					 // 房屋简介
					 r_intro:msg.briefIntroduce,
					 // 配套设施
					 r_facility:msg.supportFaci,
					 // 房屋图片
					 r_img:that.upUrlList,
				 }
				 if(that.houseNumber ==1){
					  datass={
						  // 所属楼盘
					     r_houses:msg.propertyForSale,
						 
						 // 房型
						 r_housetype:msg.houseType,
						 // 入住时间
						 r_enter:msg.checkTime,
						
						
				      }
				 }
				 else if (that.houseNumber ==2){
					 if(msg.joinTenancy =='是'){
						 msg.joinTenancy=1;
					 }else if(msg.joinTenancy =='否'){
						 msg.joinTenancy=0;
					 }
					 datass={
						 // 所属小区
						 r_houses:msg.smallArea,
						 // 具体地址
						 r_specific:msg.address,
						 // 是否出租
						 r_rent:msg.joinTenancy,
						 // 房型
						 r_housetype:msg.houseStyle,
						 // 入住时间
						 r_enter:msg.checkTime,
						 // 少了一个家电家具
						 r_furniture:msg.furnitureHouse
						 
					 }
				 }
				 else if(that.houseNumber ==3){
					 if(msg.joinTenancy =='是'){
					 	 msg.joinTenancy=1;
					 }else if(msg.joinTenancy =='否'){
					 	 msg.joinTenancy=0;
					 }
					 if(msg.waterElectric=='商用水电'){
						 msg.waterElectric=2;
					 }else if (msg.waterElectric=='民用水电'){
						 msg.waterElectric=1;
					 }
					 datass={
						 // 小区
						 r_houses:msg.smallArea,
						 // 具体地址
						 r_specific:msg.address,
						 // 是否出租
						 r_rent:msg.joinTenancy,
						 // 房型
						 r_housetype:msg.houseStyle,
						 // 家电家具
						 r_furniture:msg.furnitureHouse,
						 // 入住时间
						 r_enter:msg.checkTime,
						 //水电
						 r_water:msg.waterElectric
					 }
				 }
				 else if(that.houseNumber ==4){
					 if(msg.ownYard =='是'){
						 msg.ownYard=1;
					 }else if(msg.ownYard =='否'){
						 msg.ownYard=0;
					 }
					 datass={
						 // 具体地址
						 r_specific:msg.address,
						 // 是否出租
						 r_rent:msg.ownYard,
						 // 车间面积
						 r_plant:msg.workShop,
						 // 办公面积 
						 r_office:msg.workOffice, 
						 // 层高
						 r_storey:msg.houseHeight,
						 // 建筑结构
						 r_structure:msg.buildStruct,
						 // 入住时间
						 r_enter:msg.checkTime
				 	 }
				 }
				 else if(that.houseNumber ==5){
					 if(msg.faceTheStreet =='是'){
						 msg.faceTheStreet=1;
					 }else if(msg.faceTheStreet =='否'){
						 msg.faceTheStreet=0;
					 }
					 datass={
						 // 具体地址
						 r_specific:msg.address,
						 // 是否临街
						 r_frontage:msg.faceTheStreet,
						 // 房型
						 r_housetype:msg.houseStyle,
						 // 入住时间
						 r_enter:msg.checkTime,
						 	// 经营情况
						 r_fitment:msg.management
						 
				      }
				 }
				 else if(that.houseNumber ==6){
					 if(msg.faceTheStreet =='是'){
						 msg.faceTheStreet=1;
					 }else if(msg.faceTheStreet =='否'){
						 msg.faceTheStreet=0;
					 }
					 if(msg.joinTenancy== '是'){
						  msg.joinTenancy=1;
					 }else if(msg.joinTenancy== '否'){
						 msg.joinTenancy=0;
					 }
					 datass={
						 // 所在小区
						  
						 r_houses:msg.smallArea,
						 // 具体地址
						 r_specific:msg.address,
						 // 户型
						 r_housetype:msg.houseStyle,
						 // 入住时间
						 r_enter:msg.checkTime,
						 r_fitment:msg.renovate,
						 // 是否合租
						 r_rent:msg.joinTenancy 
				      }
				 }
				 uni.showModal({
				 	title:'数据存在不可二次更改,确定提交数据？',
				 	success:function(res){
				 		if(res.confirm){
							 that.$h5.post('rent/renthouse',{
										...datas,
										...datass
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
									_that.upUrlList.push(aa)
				
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
				 this.upUrlList.splice(index, 1);
				 console.log(this.upUrlList)
			},
			// 种类的选择
			PickerChange(e,type) {
				
				if(type ==1){
					this.houseTypeStyle=this.houseTypeList[e.target.value];
					this.houseNumber=Number(e.target.value)+1;
					if(this.houseNumber ==4 ){
						this.lcFlag=false
					}
				}
				else if(type ==2){
					this.city= this.cityList[e.target.value];
					this.getquList();//选择市结束后，选择区
				}else if (type ==3){
					this.region= this.regionList[e.target.value];
					this.getxiaoquList();
				}else if (type ==4){
					this.smallArea =this.smallAreaList[e.target.value] ;
					this.smallAreaNum=this.smallAreaListBox[e.target.value].h_num;
				}
				else if (type ==5){
					this.payWay =this.payWayList[e.target.value] ;
				}else if (type ==6){
					this.joinTenancy =this.joinTenancyList[e.target.value] ;
				}else if (type ==7){
					this.direction =this.directionList[e.target.value] ;
				} else if (type ==8){
				 	this.checkTime = e.target.value;
				 }else if (type ==9){
					this.waterElectric =this.waterElectricList[e.target.value] ;
				}else if (type ==30){
					this.ownYard =this.ownYardList[e.target.value] ;
				}else if (type ==31){
					this.checkTime =e.target.value ;
				}else if (type ==40){
					this.faceTheStreet =this.faceTheStreetList[e.target.value] ;
				}
				else if(type ==60){
					console.log(33333)
					this.houseFloor =this.lcFloorList[e.target.value] ;
					console.log(this.houseFloor)
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
			}
			
			
		}
	}
</script>

<style lang="scss" scoped>
	 @import "../../../static/scss/common.scss";
	.h5-rentalRegister{
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
		   .textareasBox{
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
