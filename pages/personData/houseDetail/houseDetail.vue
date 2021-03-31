<template>
	<view :style="{top:(maskFlag ||shareDiaFlag) ==true?arrs.top:'',left:(maskFlag ||shareDiaFlag)==true?arrs.left:'',
	  position:(maskFlag ||shareDiaFlag)==true?arrs.position:''}">
		
	 <view class="topss"></view>
	  <view class="h5-houseDetail" >
		<image class="back" @tap.stop="back"  src="../../../static/image/houseDetai-whiteBack.png"></image>
		<view class="h5-scrollImg">
			<carousel :img-list="imgList" url-key="url" @selected="selectedBanner"></carousel>
		    <!-- <image class="img"  src="/static/image/houseDetai-whiteBack.png"></image> -->
		</view>
		<view class="h5-content">
			<view class="content-first">
				<view class="first">
					 <view class="left">
						 <view class="left-top">
							 <text class="money">{{dataList.h_money ||dataList.r_money}}</text>
							 <text class="company" v-if="getDataTypes ==2 ||getDataTypes ==3">元/月</text>
							 <text class="company" v-if="getDataTypes ==5 ||getDataTypes ==6">万元/月</text>
							 <text class="company" v-if="getDataTypes ==1 ||getDataTypes ==4">元/㎡/天</text>
							 <!-- <text  class="area">52367元/㎡</text> -->
						 </view>
						 <view class="left-bottom"><text v-if="type =='houseResource'">出售·</text>{{dataList.r_area|| dataList.h_area ||''}} {{dataList.h_housetype ||dataList.r_housetype || ''}}</view>
					 </view>
					 <!-- open-type="share" -->
					<!-- <button class="right"  @tap="shareDiaFlag=true">
						 <image  class="image" src="../../../static/image/houseDetail-share.png"></image>
					     <view class="share">分享</view>
					 </button> -->
				</view>
				<view class="second">
					<view class="left-1 list">
						<view class="top">建筑面积</view>
						<view class="down">{{dataList.h_qrea ||dataList.r_mj}}</view>
					</view>
					<view class="left-2 list" v-if="getDataTypes!=4">
						<view class="top">朝向</view>
						<view class="down">{{dataList.h_orientation|| dataList.r_orientation}}</view>
					</view>
					<view class="left-2 list" v-if="getDataTypes==4">
						<view class="top">建筑结构</view>
						<view class="down">{{dataList.r_structure|| dataList.h_structure}}</view>
					</view>
					<view class="left-2 list" v-if="getDataTypes==4">
						<view class="top">楼层</view>
						<view class="down">{{dataList.h_louceng ||dataList.r_level}}</view>
					</view>
					<view class="left-2 list" v-if="getDataTypes==4">
						<view class="top">层高</view>
						<view class="down">{{dataList.h_tier|| dataList.r_storey}}</view>
					</view>
					<view class="right-1  list" v-if="getDataTypes!=4">
						<view class="top">户型</view>
						<view class="down">{{dataList.h_housetype|| dataList.r_housetype}}</view>
					</view>
					<view class="right-2 list" v-if="getDataTypes!=4">
						<view class="top">楼层</view>
						<view class="down">{{dataList.h_louceng ||dataList.r_level}}</view>
					</view>
				</view>
				<view class="third">
					 <view class="list-detail" v-for="(item,index) in fieldList" :key="index">
						 <text class="field">{{item.filed}}</text>
						 <text class="detail-msg">{{item.value}}</text>
					 </view>
				</view>
			</view>
			<!-- <view class="content-second" v-if="getDataTypes==2 ||getDataTypes==3">
				<view class="contents">
					<view class="field">家电家具</view>
					<view class="details">{{dataList}}</view>
				</view>
			</view> -->
			<view class="content-second">
				<view class="contents">
					<view class="field">配套设施</view>
					<view class="details">{{dataList.h_facility ||dataList.r_facility}}</view>
				</view>
			</view>
			<view class="content-third">
				<view class="left">
					<image class="left-img" src="/static/image/houseDetail-map.png"></image>
					<text  class="values">{{dataList.r_specific  ||dataList.r_houses}}</text>
				</view>
				<view class="right" @tap.stop="getLocation">
					<text class="areas">周边</text>
					<image class="right-img" src="/static/image/houseDetail-rightArrow.png"></image>
				</view>
			</view>
			<view class="content-fourth">
				<view class="fourth-contents">
					<view class="title">房源简介</view>
					<view class="contents">
						{{dataList.r_intro ||dataList.h_intro}}
					</view>
				</view>
			</view>
			<view class="footer" :style="occurFlag?'justify-content:space-between':''">
				<view class="left">
					<image  class="img" v-if="collectionFlag" @tap.stop="getCollet" src="../../../static/image/houseDetail-collectLight.png"></image>
					<image class="img" v-if="!collectionFlag" @tap.stop="getCollet" src="../../../static/image/houseDetail-collect.png"></image>
					<view class="fields">收藏</view>
				</view>
				<view  v-if="!occurFlag" class="center footer-style" @tap.stop="stopMove">
					留言咨询
				</view>
				<view  v-if="!occurFlag" class="right footer-style" @tap.stop="call(dataList.h_phone ||dataList.r_phone)">
					电话咨询
				</view>
				<view v-if="occurFlag"  @tap.stop="jumpsEdit" :style="editFlag?'background-color:#3466FF':''" class="center-right">{{flagText}}</view>
			</view>
		</view>
		<!-- 弹框 -->
		<view class="message-dialog-mask" v-if='maskFlag' @touchmove.prevent></view>
		<view class="message-dialog" v-if='maskFlag' >
			 <image class="image" src="../../../static/image/houseDetail-dialogMask.png" @tap="maskFlag=false"></image>
			 <view class="title">常见问题</view>
			 <view class="contents">
				 <!-- listActive listInactive-->
				 <view class="list " @tap.stop="activeChoice(index)" :style="{'margin-left':item.margin,'margin-right':item.margin}"   v-for="(item,index) in labelList" :key="index" :class="item.active ==0?'listInactive':'listActive'">{{item.value}}</view>
			 </view>
			 <view class="btn" @tap.stop="sendMsg">提交</view>
		</view>
	</view>
	<view class="shareMask" v-if="shareDiaFlag"></view>
	<view class="shareDialog" v-if="shareDiaFlag">
		<view class="top">
               <view class="left styless">
				   <image  class="logo-img" src="../../../static/image/weixin-logo.png"></image>
				   <view class="wx-word word">分享给好友</view>
			   </view>
			   <view class="right styless">
				   <image  class="logo-img" src="../../../static/image/pengyouquan.png"></image>
				   <view class="pyq-word word">分享到朋友圈</view>
			   </view>
		</view>
		<view class="down" @tap="shareDiaFlag=false">取消</view>
		
	</view>
</view>	
</template>
<script>
	// 轮播图 https://ext.dcloud.net.cn/plugin?id=2358
	import carousel from '@/components/vear-carousel/vear-carousel'
	export default {
		data() {
			return {
				 imgList: [  ],
				fieldList:[],
			    // 是否收藏 
				collectionFlag:true,
				// 遮罩层
				maskFlag:false,
				// 弹框出来的选项
				labelList:[{value:'押一付三'},{value:'押一付一'},{value:'中介费'},{value:'服务费'},{value:'近地铁'},
				           {value:'租金'},{value:'季付'}],
			    // 页面跳转待处理的数据处理
				flagText:'已出租',
				flag:0,
				type:'',
				id:'',
				// h_type 2 毛坯房  3 公寓  元/月
				 //6 装修房  5 街面房 万元/月 
				//4 生产厂房 1办公用房 元/㎡/天
				// 房源过来 进行查找 id 和getDataTypes
				getDataTypes:'',
				rentSaleType:'',//对于房源而言，是出租的房子还是出售，1出售，2 出租
				shareDiaFlag:false,
				occurFlag:false,
				editFlag:false,
				arrs:{
					position:'fixed',
					top:'0',
					left:'0'
				},
				dataList:'',
				Hproperty:1,//房产是出租还是出售1出售 2出租
			}
		},
		onShareAppMessage: function (res) {
		   let _this = this;
		   if (res.from === 'button' || res.from ==='menu' ) {// 来自页面内分享按钮
		       return {
		         title: "去找房",
		         path: "http://yaofangme.hzbixin.cn/#/pages/personData/myHouse/myHouse"
		       };
		      }
		},
		components:{
			carousel
		},
		onPageScroll(Object){ 
			
		},
		
		onLoad(options){
			this.random();
			this.setData(options);
			console.log(options)
			// 出租的改变
			//我的租房
			if(this.type =='myHouse' && this.flag ==1){
				this.flagText='已出租';
				this.occurFlag=true;
				
			}
			else if(this.type =='myHouse' && this.flag ==11){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
			}else if(this.type =='myHouse' && this.flag ==0){
				this.occurFlag=false;
			}
			//我的租房
			
			// 我的房产 rentSaleType==1 出售 2 出租
			if(this.type =='myHousePropery' && this.flag ==1 && this.rentSaleType==1){
				this.flagText='已出租';
				this.occurFlag=true;
			}
			else if(this.type =='myHousePropery' && this.flag ==11 && this.rentSaleType==1){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
			}else if(this.type =='myHousePropery' && this.flag ==0 && this.rentSaleType==1){
				// this.flagText='编辑';
				this.occurFlag=false;
				// 可以编辑
				// this.editFlag=true;
			}
			else if(this.type =='myHousePropery' && this.flag ==1 && this.rentSaleType==2){
				this.flagText='已出售';
				this.occurFlag=true;
				console.log('wangyino2')
			}
			else if(this.type =='myHousePropery' && this.flag ==11 && this.rentSaleType==2){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
			}else if(this.type =='myHousePropery' && this.flag ==0 && this.rentSaleType==2){
				// this.flagText='编辑';
				this.occurFlag=false;
				// 可以编辑
				// this.editFlag=true;
			}
			else if(this.type =='housePropery' && this.flag ==1){
				this.flagText='已出售';
				this.occurFlag=true;
			}
			
			// 我的出租
			else if(this.type =='renting' && this.flag ==1){
				this.flagText='已出租';
				this.occurFlag=true;
			}
			else if(this.type =='renting' && this.flag ==11){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
			}
			else if(this.type =='renting' && this.flag ==0){
			         this.occurFlag=false;
			}else if(this.type =='houseResource' && this.flag ==1){
				this.flagText='已出售';//房源
				this.occurFlag=true;
			}else if(this.type =='houseResource' && this.flag ==11){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
				
			}
			else if(this.type =='houseResource' && this.flag ==0){
				this.occurFlag=false;
				
			}
			 // 我的收藏myCollect
			else if(this.type =='myCollect' && this.flag ==0){
				this.occurFlag=false;
				
			}
			else if(this.type =='myCollect' && this.flag ==1){
				this.flagText='已出售';//房源
				this.occurFlag=true;
			}else if(this.type =='myCollect' && this.flag ==11){
				this.flagText='编辑';
				this.editFlag=true;
				this.occurFlag=true;
				
			}
			this.getData();
		},
		methods: {
			 // 最上方的返回
			 back(){
				 uni.navigateBack()
			 },
			// 轮播图的插件
			 selectedBanner(item, index) {
			      // console.log('🥒', item, index);
			 },
			 sendMsg(){
				 let  that =this;
				 
				 let aa=[];
				 let typess=1;//房子是出售还是卖了
				 if(that.type =='renting' ||this.rentSaleType==2){
					 typess=2
				 }else if (this.rentSaleType==1 ||this.type =='houseResource'){
					 typess=1  ///出售
				 }
				 console.log(that.labelList)
				 that.labelList.map((res)=>{
					 if(res.active==1){
						  aa.push(res.value)
					 }
				 })
				 aa=aa.join(',')
				 that.$h5.post('Message/clickmsg',{
					 content:aa,
					 h_id:that.id,
					 release:that.dataList.h_phone,
					 h_type:that.getDataTypes,
					 h_resource:typess ,//是否出售或者出卖
					 
				 },(res)=>{
					 if(res.code ==0){
						 that.maskFlag=false ;
					 }
				 })
			 },
			 //是否收藏
			 getCollet(){
						 let that=this;
						 let types=1;
						 if(that.type=='houseResource'){
							 types=2;
						 }else if(that.type=='renting' ){
							 types=1;
						 }
						 that.collectionFlag=(!that.collectionFlag);
						 that.$h5.post('collect/clickcollect',{
							 id:that.id,
							 type:types,
							 class:that.getDataTypes,
						 },(res)=>{
							 if(res.code ==0){
								 console.log(res)
								 
							 }
						 })
			 },
			 getLocation(){
				uni.getLocation({
				    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				    success: function (res) {
				        const latitude = res.latitude;
				        const longitude = res.longitude;
				        uni.openLocation({
				            latitude: latitude,
				            longitude: longitude,
				            success: function () {
				                console.log('success');
				            }
				        });
				    }
				});
			 },
			 getData(){
				 let that =this;
				 let url='';
				
				 if(that.type=='houseResource' ||that.rentSaleType==1 ){
					 url='sell/particulars?'
					 console.log(1111)
				 }else if(that.type=='renting' ||that.type=='myHouse'  ||that.rentSaleType==2){
					 url='rent/rentdetails'
					 console.log(222)
				 }
				 that.$h5.get(url,{
					 type:that.getDataTypes,
					 id:that.id
				 },(res)=>{
					 // h_type 2 毛坯房  3 公寓  元/月
					  //6 装修房  5 街面房 万元/月 
					 //4 生产厂房 1办公用房 元/㎡/天
					 if(res.code ==0){
						 that.dataList=res.data;
						 if(that.dataList.is_collect==0){
						       that.collectionFlag=false;
							   console.log(that.collectionFlag)
						 }else {
						 	 that.collectionFlag=true;
						 }
						 // 我的房源
						 if(that.type=='houseResource' ||that.rentSaleType==1){
							 console.log(aa)
							 // let aa=that.dataList.h_img.split(',');
							 let aa=that.dataList.h_img;
								for(let i in aa){
									const item={
										url:"https://yaofangme.hzbixin.cn/"+aa[i],
										id:i
									}
									that.$set(that.imgList,i,item);
								}
								if(that.getDataTypes==2){
									 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'小区名称',value:that.dataList.h_charge},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
													]
								}
								else if(that.getDataTypes==3){
									 if(that.dataList.h_water ==1){
										 that.dataList.h_water='民用电'
									 }else{
										 that.dataList.h_water='商用电'
									 }
									 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'小区名称',value:that.dataList.h_charge},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'水电情况',value:that.dataList.h_water},
													 {filed:'装修情况',value:that.dataList.h_fitment},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
													]
								}
								else if(that.getDataTypes==4){
									 if(that.dataList.h_alone ==1){
										 that.dataList.h_alone='是'
									 }else{
										 that.dataList.h_alone='不是'
									 }
									 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'地址',value:that.dataList.h_charge},
													 {filed:'车间面积',value:that.dataList.h_plant},
													 {filed:'办公面积',value:that.dataList.h_work},
													 {filed:'是否独栋',value:that.dataList.h_alone},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
													]
								}
								 else if(that.getDataTypes==6){
									 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'小区名称',value:that.dataList.h_charge},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'装修情况',value:that.dataList.h_fitment},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
													]
								}
								 else if(that.getDataTypes==5){
									 if(that.dataList.h_frontage ==1){
										 that.dataList.h_frontage='是'
									 }else{
										 that.dataList.h_frontage='不是'
									 }
									 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'地址',value:that.dataList.h_charge},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'是否临街',value:that.dataList.h_frontage},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
													 {filed:'经营情况',value:that.dataList.h_fitment},
													]
								}
									 else if(that.getDataTypes==1){
										 that.fieldList=[{filed:'所在区域',value:that.dataList.h_area},
													 {filed:'地址',value:that.dataList.h_charge},
													 {filed:'建成时间',value:that.dataList.h_activate},
													 {filed:'装修情况',value:that.dataList.h_fitment},
													 {filed:'房屋用途',value:that.dataList.h_use},
													 {filed:'房屋年限',value:that.dataList.h_year},
													 {filed:'产权所属',value:that.dataList.h_prop},
													 {filed:'交易权属',value:that.dataList.h_deal},
										]
								   }
									
						}else if(that.type =='renting' || that.type=='myHouse' ||that.rentSaleType==2){
							 // 我的出租
							// h_type 2 毛坯房  3 公寓  元/月
									  //6 装修房  5 街面房 万元/月 
									 //4 生产厂房 1办公用房 元/㎡/天
							
							// let aa=that.dataList.r_img.split(',');
							let aa=that.dataList.r_img;
							for(let i in aa){
								const item={
									url:"https://yaofangme.hzbixin.cn/"+aa[i],
									id:i
								}
								that.$set(that.imgList,i,item);
							}
							if(that.dataList.r_rent ==1){
								 that.dataList.r_rent='是'
							}else{
							   that.dataList.r_rent='否'
							}
						    if(that.getDataTypes==2){
								
						    	 that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
						    					 {filed:'付款方式',value:that.dataList.r_payment},
						    					 {filed:'是否合租',value:that.dataList.r_rent},
						    					 {filed:'入住时间',value:that.dataList.r_enter}
						    					]
						    }
							else if(that.getDataTypes==3){
								 if(that.dataList.r_water ==1){
									 that.dataList.r_water='民用水电'
								 }else{
									 that.dataList.r_water='商用水电'
								 }
								 that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
												 {filed:'付款方式',value:that.dataList.r_payment},
												 {filed:'是否合租',value:that.dataList.r_rent},
												 {filed:'入住时间',value:that.dataList.r_enter},
												 {filed:'装修情况',value:that.dataList.r_fitment},
												 {filed:'水电情况',value:that.dataList.r_water}
												
												]
							}
							else if(that.getDataTypes==4){
								 if(that.dataList.r_rent ==1){
									 that.dataList.r_rent='是 '
								 }else{
									 that.dataList.r_rent='否'
								 }
								 that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
												 {filed:'付款方式',value:that.dataList.r_payment},
												 {filed:'车间面积',value:that.dataList.r_plant},
												 {filed:'办公面积',value:that.dataList.r_office},
												 {filed:'是否独院',value:that.dataList.r_rent},
												 {filed:'入住时间',value:that.dataList.r_enter},
												 {filed:'地址',value:that.dataList.r_area+' '+that.dataList.r_specific},
												
												]
							}
							else if(that.getDataTypes==6){
								 that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
												 {filed:'付款方式',value:that.dataList.r_payment},
												 {filed:'是否合租',value:that.dataList.r_rent},
												 {filed:'入住时间',value:that.dataList.r_enter},
												 {filed:'装修情况',value:that.dataList.r_fitment},
												
												]
							}
							else if(that.getDataTypes==5){
								if(that.dataList.r_frontage ==1){
									 that.dataList.r_frontage='是 '
								}else{
									 that.dataList.r_frontage='否'
								}
								that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
												 {filed:'付款方式',value:that.dataList.r_payment},
												 {filed:'是否临街',value:that.dataList.r_frontage},
												 {filed:'经营状况',value:that.dataList.r_fitment},
												 {filed:'入住时间',value:that.dataList.r_enter},
												 {filed:'详细地址',value:that.dataList.r_area+that.dataList.r_specific}
												
								]
							}
							else if(that.getDataTypes==1){
								if(that.dataList.r_frontage ==1){
									 that.dataList.r_frontage='是 '
								}else{
									 that.dataList.r_frontage='否'
								}
								that.fieldList=[{filed:'租期',value:that.dataList.r_tenancy},
												 {filed:'付款方式',value:that.dataList.r_payment},
												 {filed:'装修情况',value:that.dataList.r_fitment},
												 {filed:'入住时间',value:that.dataList.r_enter},
												 {filed:'楼盘',value:that.dataList.r_houses}
												
								]
							}
							
						
						
					}	
						 
								  console.log(32345)
						
						 
					}
				 })
			 },
			 // 打电话
			 call(number){
				 uni.makePhoneCall({
				     phoneNumber: number, //仅为示例
					 success(res){
						
					 },
					 fail(res){
						console.log(res) 
					 }
					 
				 });
			 },
			 stopMove(){
				 this.maskFlag=true;
				 this.arrs.top=0+'rpx';
				 this.arrs.left=0+'rpx';
				
				
			 },
			 // 生成随机数 样式
			 random(){
				 let labelLists=this.labelList;
				 labelLists.map((currentValue,index,arr)=>{
					  let a=  parseInt((Math.random()*10) +20);
					  if((index-1)%3==0){
						   labelLists[index].margin=a+'rpx';
					  }
					   currentValue.active=0;
				 })
			 },
			 // 弹框内容 样式
			 activeChoice(index){
				  // this.$set(this.labelList, index, 1);
				 // this.$set(this.labelList[index],'active',1);
				 if (this.labelList[index].active == 0) {
					   const item = {
						 ...this.labelList[index],
						 active:1
					   };
				       this.$set(this.labelList, index, item);
				 } else if(this.labelList[index].active == 1)  {
					   const item = {
						 ...this.labelList[index],
						 active: 0
					   };
					   this.$set(this.labelList, index, item);
				 }
			 },
			 // 条状到可以编辑的地方
			 jumpsEdit(){
				  // type:that.getDataTypes,				  // id:that.id		
				  if(this.editFlag){
					    if(this.type=='renting'){
							  uni.navigateTo({
								  url:'/pages/personData/houseDetail/rentHouseEdit?Type='+'renting'+'&flag='+this.flag+'&id='+this.id+'&type='+this.getDataTypes
					  	            // url:'/pages/personData/houseDetail/rentHouseEdit?id='+this.id+'&type='+this.getDataTypes
					            })
						}
					    else if(this.type=='houseResource'){
						   uni.navigateTo({
							   url:'/pages/personData/houseDetail/saleHouseEdit?Type='+'houseResource'+'&flag='+this.flag+'&id='+this.id+'&type='+this.getDataTypes
					          	// url:'/pages/personData/houseDetail/saleHouseEdit?typet'='dk'
					     })
					  }  
				  }
			 }
		}
	}
</script>

<style scoped lang="scss">
   @import "../../../static/scss/common.scss";
   @import "../../../static/scss/font.css";
  button::after{
	  border:
	  none;
   }
.topss{
	   @extend  %top-style;
}
%padding-style{
	width: 750rpx;
	padding: 0 40rpx 0 30rpx;
	box-sizing: border-box;
}
.h5-houseDetail{
	padding-top: var(--status-bar-height);
	box-sizing: border-box;
}
.back{
	width: 50rpx;
	height: 50rpx;
	display: block;
	position:fixed;
	left:30rpx;
	top:var(--status-bar-height);
	z-index: 10;;
	
}
.h5-scrollImg{
	width:750rpx;
	height: 560rpx;
	position: relative;
	left:0;
	top:-50rpx;
	display: flex;	
}
.h5-content{
	position: relative;
	top:0;
	left:0;
	.content-first{
		.first{
			@extend %padding-style;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.left{
				.left-top{
					color: #FF2600;
					.money{
						font-size: 60rpx;
						font-family: wangyibo;
					}
					.company{
						font-size: 36rpx;
						
					}
					.area{
						margin-left:20rpx;
						font-size: 36rpx;
						font-family: wangyibo;
					}
					
				}
				.left-bottom{
					color: #262626;
					font-size: 38rpx;
				}
			}
			.right{
				width: 90rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				background-color: #fff;
				padding:0!important;
				margin:0!important;
				.image{
					display: block;
					width: 34rpx;
					height: 34rpx;
					
				}
				.share{
					color: #262626;
					font-size: 24rpx;
				}
			}
		}
		.second{
		    display: flex;
			margin:75rpx 0 64rpx;
			.list{
				width: 187.5rpx;
				height: 80rpx;
				text-align: center;
				display: flex;
				box-sizing: border-box;
				flex-direction: column;
				justify-content: space-between;
				.top{
					color: #6D6D6D;
					font-size: 24rpx;
				}
				.down{
					color: #272727;
					font-size: 30rpx;
				}
			}
			.left-2{
				border-left:2rpx solid #f1f1f1;
				border-right:2rpx solid #f1f1f1;
			}
			.right-1{
				border-right:2rpx solid #f1f1f1;
			}
		}
		.third{
			@extend %padding-style;
			padding-left:47rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.list-detail{
                width: 330rpx;
				font-size: 24rpx;
				margin-bottom: 29rpx;
				.field{
					color:#989898;
					margin-right:30rpx ;
			   }
			   .detail-msg{
				   color: #272727;
			   }
			}
			
		}
	}
	
}
.h5-content{
   .content-second{
	   width: 750rpx;
	   height: 180rpx;
	   border-top:20rpx  solid  #f2f2f2;
	   border-bottom:20rpx  solid  #f2f2f2;
	   .contents{
		  width:750rpx;
		  height: 180rpx;
		  padding:30rpx 40rpx;
		  box-sizing: border-box;
		  display: flex;
		  flex-direction: column;
		  justify-content: space-around;
		  .field{
			  font-weight: bold;
			  color: #262626;
			  font-size: 38rpx;
		  }
		  .details{
			  color: #272727;
			  font-size: 27rpx;
		  }
		   
	   }
  }
  .content-third{
	 width: 750rpx;
	 height: 90rpx;
	 padding: 24rpx 30rpx;
	 box-sizing: border-box;
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
	 color: #272727;
	 font-size: 24rpx;
	 .left{
		  display: flex;
		  height: 90rpx;
		  align-items: center;
		 
		 .left-img{
			 display: block;
			 width: 44rpx;
			 height: 44rpx;
			 margin-right:26rpx;
		 }
	 }
	 .right{
		 display: flex;
		 height: 90rpx;
		 align-items: center;
		 .right-img{
			 display: block;
			 width: 16rpx;
			 height: 16rpx;
			 margin-left: 10rpx;
		 }
	 }
  }
  .content-fourth{
	  border-top: 20rpx solid #f2f2f2;
	  .fourth-contents{
		  width: 750rpx;
		  padding:37rpx 30rpx ;
		  box-sizing: border-box;
		  color: #262626;
		  .title{
			  font-weight: bold;
			  font-size: 38rpx;
			  margin-bottom: 21rpx;
		  }
		  .contents{
			  width: 680rpx;
			  font-size: 28rpx;
			  padding-bottom:120rpx;
			  box-sizing: border-box;
			  overflow : hidden;
			  text-overflow: ellipsis;
			  display: -webkit-box;
			  -webkit-line-clamp: 5;
			  -webkit-box-orient: vertical;
		  }
	  }
 }
 .footer{
	    width: 750rpx;
		padding:30rpx ;
		background-color: #fff;;
		box-sizing: border-box;
		display: flex;
		position: fixed;
		bottom:0;
		left:0;
		.center-right{
			width: 549rpx;
			height: 90rpx;
			line-height: 90rpx;
			text-align: center;
			background: #C1C1C1;
			border-radius: 8rpx;
			font-size: 30rpx;
			color:#fff;
			font-weight: bold;
		}
 		.footer-style{
 			  width: 260rpx;
 			  height: 90rpx;
 			  text-align: center;
 			  line-height: 90rpx;
 			  border-radius: 8rpx;
 			  color: #fff;
 			  font-size: 30rpx;
 		  }
 		  .right{
 			 background: #F5BD65;
 		  }
 		  .center{
 			  background: #4270ED;
			  margin:0 30rpx 0 60rpx;
 		  }
		    .left{
		  		  width:80rpx;
		  		  height: 90rpx;
		  		  display: flex;
		  		  flex-direction: column;
		  		  justify-content: space-between;
		  		  align-items: center;
		  		  
		  		  .img{
		  			  display: block;
		  			  width: 40rpx;
		  			  height: 40rpx;
		  		  }
		  		  .fields{
		  			  color: #272727;
		  			  font-size: 28rpx;
		  		  }
		  		  
		  		  
		  	  }
 	} 

 
 
}

.message-dialog-mask{
	width:100%;
	height:100%;
	position: fixed;
	top:0;
	left:0;
	z-index:10;
	background: #000;
	opacity: .5;
}
.message-dialog{
	width: 590rpx;
	// height: 566rpx;
	position: absolute;
	top:230rpx;
	left:80rpx;
	z-index: 20;
	background-color: #fff;
	border-radius: 4rpx;
	padding: 30rpx;
	box-sizing: border-box;
    .image{
		display: block;
		width: 30rpx;
		height: 30rpx;
		position: relative;
		left:500rpx;
		top:0;
	}
	.title{
		width: 510rpx;
		font-weight: bold;
		color: #272727;
		font-size: 30rpx;
		text-align: center;
	}
	.contents{
		margin:65rpx 0 95rpx;
		width:510rpx;
		display: flex;
		flex-wrap: wrap;
		.list{
			width: 150rpx;
			text-align: center;
			height: 60rpx;
			line-height: 60rpx;
			margin-bottom: 40rpx;
			border-radius: 8rpx;
			font-size: 28rpx;
		}
		.listInactive{
			color: #A6A6A6;
			background-color: #E8E8E8;
		}
		.listActive{
			color: #fff;
			background: #4270ED;
		}
	}
	.btn{
		width: 350rpx;
		height: 90rpx;
		text-align: center;
		line-height: 90rpx;
		background: #4270ED;
		border-radius: 8rpx;
		color: #FFFFFF;
		font-size: 30rpx;
		margin-left: 80rpx;
	}
}
.shareDialog{
	
	background-color: #fff;
	position:fixed;
	bottom:0rpx;
	left:0rpx;
	z-index:200;
	.top{
		border-bottom: 2rpx solid #f2f2f2;
		display: flex;
		color: #101010;
		font-size: 28rpx;
		.styless{
			width: 375rpx;
			height: 248rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.logo-img{
				display: block;
				width: 60rpx;
				height: 60rpx;
				margin-bottom:12rpx;
			}
			.word{
				
			}
		}
		
	}
	.down{
		width: 750rpx;
		height: 150rpx;
		line-height: 150rpx;
		text-align: center;
	}
	
}
.shareMask{
	position: absolute;
	left:0rpx;
	top:0rpx;
	bottom:0rpx;
	right:0rpx;
	z-index: 100;
	background-color: #000;
	opacity: 0.5;
}
</style>
