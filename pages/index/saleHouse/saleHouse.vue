<template>
	<view class="sale-house">
		
		<view  :style="{height:marginTop}" style="width:750rpx;background-color: #fff;position: fixed;left:0rpx;top:0rpx;z-index: 100;"></view>
		<view  class="search-box" :style="{height:heights,top:marginTop}">
		<!-- <view class="search-box" > -->
			<image class="backs" src="../../../static/image/back.png" @tap.stop="quits"></image>
			<view class="input-box">
				<view class="left" @tap="searchFlag=true,positionFlag=false,priceFlag=false,allPickFlag=false">
					<text class="name">{{address}}</text>
					<text class="triangle"></text>
				</view>
				<view class="right" @tap="pointSearch">
					<image class="img-search" src="../../../static/image/search-search.png"></image>
					<input class="input"   v-model="searchKey" @confirm="getInputSerach"  placeholder="请输入您想找的房子"  placeholder-style="color:#959BA7;font-size:24rpx;"/>
				</view>
			</view>
			<!--  -->
		</view>
		<!-- <view  class="search-box-instead"></view> -->
		 <!-- 搜索列表 -->
		<view class=" search-content-list" v-if="searchFlag">
			<city-select
			   @cityClick="cityClick"
			   :formatName="formatName"
			   :obtainCitys="obtainCitys"
			   :isSearch="true"
			   ref="citys">
			</city-select>
		</view>
		<!-- :style="{'margin-top':marginTop}" -->
		<view class="content-list searchListup" :style="{top:heights,'margin-top':(marginTop)}"   v-if="!searchFlag">
			<view class="list" @tap="searchWay(1)">
				<view class="field" >位置</view>
				<image class="small-arrow" src="../../../static/image/houseArrow-down.png"></image>
			</view>
			<view class="list" @tap="searchWay(2)">
				<view class="field" >价格</view>
				<image class="small-arrow" src="../../../static/image/houseArrow-down.png"></image>
			</view>
			
			<view class="list"  @tap="searchWay(4)">
				<view class="field">筛选</view>
				<image class="small-arrow" src="../../../static/image/houseArrow-down.png"></image>
			</view>
			<view class="list" @tap="searchWay(5)">
				<image class="order-ascendImg" src="../../../static/image/house-order.png"></image>
			</view>
		</view>
	    <view class="searchListupfixed"style="height: 90rpx;" v-if="searchFlag"></view> 
		<!-- 弹出来内容的遮罩层 -->
		<view class="searchDialogMask" @tap.stop="positionFlag=false,priceFlag=false,allPickFlag=false"   v-if="positionFlag || priceFlag ||  allPickFlag"></view>
		<!-- <view  class="searchDialogMask"  v-if="positionFlag || priceFlag || allPickFlag"></view> -->
		<!-- 弹框出来的内内容 -->
		<view class="searchDialog"  >
			<!-- 地址的限制 -->
			 <view class="positionList" v-if="positionFlag">
				 <view class="choice-box">
					 <view class="left-box">
						 <view class="left-box-list title" v-for="(item,index) in addressTitleList" :key="index" :class="addressActiveindex==index?'wordAcitive':''" @tap.stop="addressRangeChioce(index)">{{item}}</view>
					 </view>
					 <view class="right-box" v-if="addressActiveindex==0">
						 <view class="rightBox-list " :class="addFirstFlag ==(-1)?'activeWord':''" @tap.stop="addFirstBtn(-1)">全部</view>
						 <view class="rightBox-list  one" :class="addFirstFlag==indexsss?'activeWord':''" v-for="(itemsss,indexsss) in addressList" :key="indexsss" @tap.stop="addFirstBtn(indexsss)">{{itemsss}}</view>
					 </view>
					<!-- <view class="right-box" v-if="addressActiveindex==1">
						 <view class="rightBox-list "  :class="addSecFlag ==(-1)?'activeWord':''" @tap.stop="addSecBtn=(-1)">全部</view>
						 <view class="rightBox-list  one" :class="addSecFlag==indexssss?'activeWord':''" v-for="(itemssss,indexssss) in nearByLong"  :key="indexssss" @tap.stop="addSecBtn(indexssss)">{{itemssss}}</view>
					 </view> -->
				 </view>
				 <view class="btn-choice">
					 <view class="resetBtn"> 
					   <text class="reset">重置</text>
					   <image class="reset-img" src="../../../static/image/reset.png" ></image>
					 </view>
					 <view class="sureBtn" @tap.stop="positionFlag=false">确定</view>
				 </view>
			 </view>
			  <!-- 距离的限制 -->
			<view class="priceList" v-if="priceFlag">
				 <view class="price-box">
					 <view class="price-list-box">
					     <view class="price-list" :class="priceActiveFlag==index?'activeWord':'price-lists'" v-for="(item,index) in priceRange" :key="index" @tap.stop="priceGet(index)">{{item}}</view>
				     </view>
					 <view class="priceBtn" @tap.stop="priceFlag=false">确定</view>
				 </view>
				 
			 </view>
			 
			 <!-- 所有的 -->
			<view class="allPickList big-boxs" v-if="allPickFlag">
				 <view class="allPickList-box big-second-box">
					 <view class="lists-box  area-box">
					 	<view class="field">面积</view>
					 	<view class="area-list-box">
					 		<view :style="salesTypes==3?'width:170rpx;':'width:145rpx'" class="area-list" :class="choiceAreasIndex==index?'area-list-active':''"
					 		       @tap.stop="choiceAreas(index)" v-for="(item,index) in houseAreaList"
					 				:key="index">{{item}}
					 		</view>
					 	</view>
					 </view>
					 <view class="lists-box  area-box marginTopfs" v-if="salesTypes!=3 && salesTypes!=5 && salesTypes!=6">
					 	<view class="field">朝向</view>
					 	<view class="area-list-box">
					 		<view class="area-list" :class="arientionIndex==index?'area-list-active':''"
					 		       @tap.stop="orientions(index)" v-for="(item,index) in arientionList"
					 				:key="index">{{item}}
					 		</view>
					 	</view>
					 </view>
					 <view class="lists-box  area-box marginTopfs" v-if="salesTypes!=5 && salesTypes!=6">
					 	<view class="field">楼层</view>
					 	<view class="area-list-box">
					 		<view class="area-list" :class="floorChoiceIndex==index?'area-list-active':''"
					 		       @tap.stop="floorPicker(index)" v-for="(item,index) in floorChoiceList"
					 				:key="index">{{item}}
					 		</view>
					 	</view>
					 </view>
					 <view class="lists-box  area-box marginTopfs" v-if="salesTypes==3">
					 	<view class="field">层高</view>
					 	<view class="area-list-box">
					 		<view class="area-list" :class="hHeightIndex==index?'area-list-active':''"
					 		       @tap.stop="houseHightPicker(index)" v-for="(item,index) in houseHightList"
					 				:key="index">{{item}}
					 		</view>
					 	</view>
					 </view>
					 <view class="styleBtn allPickBtn" @tap.stop="allPickFlag=false">确定</view>
				 </view>
			 </view>
		</view>
		<!-- 主体列表内容 -->
		<view class="content-box" style="margin-top: 180rpx;" :style="positionFlag ||priceFlag  || allPickFlag || searchFlag?
		                   'position: fixed;left:0rpx':''" v-if="!searchFlag">
			<view class="box-list" v-for="(item,index) in  houseList" :key="index" @tap="jumpDetail(item.id)">
				<image class="img  left"  :src="item.h_cover"></image>
				<view class="right">
					<view class="first-line">出售·{{item.h_housetype}}</view>
					<view class="second-line">{{item.h_qrea}}㎡/{{item.h_orientation}}/毛坯</view>
					<view class="third-line">{{item.h_area}}</view>
					<view class="fourth-line">
						<text class="lists" v-for="(items,indexs) in item.h_facility" :key="index">{{items}}</text>
					</view>
					<view class="fifth-line">
						<text class="redWord">{{item.h_money}}</text>
						<text class="blackWord">万/套</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import app from '../../../App.vue'
	// https://ext.dcloud.net.cn/plugin?id=837
	import citySelect from "@/components/city-select/city-select.vue"
	export default {
		data() {
			return {
				searchFlag:false,
				//需要构建索引参数的名称（注意：传递的对象里面必须要有这个名称的参数）
				formatName: 'title',
				//显示的城市数据'杭州市','湖州市','绍兴市','宁波市','嘉兴市','丽水市','台州市','温州市','金华市','衢州市','舟山市'
				obtainCitys: [
					{id: 0,title: '杭州市'},{id: 1,title: '湖州市'},{id: 2,title: '绍兴市'},
					{id: 3,title: '宁波市'},{id: 4,title:'嘉兴市'},{id: 5,title:'丽水市'},	
					{id: 6,title:'台州市'},{id: 7,title:'温州市'},{id: 8,title:'金华市'},
					{id: 9,title:'衢州市'},{id: 10,title:'舟山市'}],
				address:'杭州市',
				// 搜索的条件
				positionFlag:false,
				priceFlag:false,
				
				allPickFlag:false,
				// 地址选择,最左的全部按钮
				addressAllFlag:false,
				// 最左边的列表
				addressActiveindex:0,
				addressTitleList:['全部'],
				addressList:['江干区','滨江区','拱墅区','西湖区','临平区','上城区','下城区','萧山区','余杭区 ','富阳区','临安区','淳安县','桐庐县'],
				addFirstFlag:-1,
				addSecFlag:-1,
				nearByLong:['1km','2km','3km','4km'],
				// 地址选择
				// 距离选择
				priceRange:['≤100万元','100-150万元','150-200万元','≥200万元'],
				priceActiveFlag:-1,
				// 距离选择
				//  户型 房子类型的选择v
				houseAreaList:['≤40㎡','40-60㎡','60-80㎡','80-100㎡','100-120㎡','≥120㎡'],
				choiceAreasIndex:0,
				// 朝向
				arientionList:['南北','南','西','北','东'],
				arientionIndex:0,
				houseStyleIndex:0,
				//  户型 房子类型的选择
				// 所有的筛选
				elevatorListIndex:0,
				// 楼层
				floorChoiceList:['低楼层','中楼层','高楼层'],
				floorChoiceIndex:0,
				// 层高
				houseHightList:[],
				hHeightIndex:0,
				// 所有的筛选
				// 判断是什么类型的房子
				// salesTypes:1,
				// 搜索的具体 地址,金额
				houseList:'',
				houseFunitrue:[],
				getAddressValue:'江干区',
				getMoneyValue:'',
				getHouseValue:'',
				salesTypes:1,//毛坯房，公寓房 的类别之分,
				saleType:'',//发送给后端的数据
				searchKey:'',//搜索关键字
				orderType:'asc'
	         }
		  
		},
		components: {
			 citySelect
		},
		computed:{
			heights(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync()
				let height = statusBarHeight +4 //ios 24px
				if (platform.toLowerCase() == "android" ){
					height +=4 //android 28px
				}
				console.log(height+38)
				// 胶囊高度 32px 下边框6px height 状态栏高度
				return height+ 38 + "px"
			},
			marginTop(){
				const {platform,statusBarHeight} = uni.getSystemInfoSync();
				let height = statusBarHeight +4;
				if (platform.toLowerCase() == "android" ){
					height +=4;
				}
				console.log('marginTop')
				console.log(height)
				return height + "rpx"				
			}
		},
		onLoad(options){
			let that=this;
			that.setData(options);
			that.formatName = 'title';
			
			// 毛坯房
			if(that.salesTypes==1 ){
				that.priceRange=['≤100万元','100-150万元','150-200万元','200-300万元','≥300万元'];
				that.houseAreaList=['≤50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-160㎡','160-200㎡','≥200㎡'];
				that.arientionList=['南北','南','西','北','东'];
				that.floorChoiceList=['1~~3层','4~~6层','7~~9层','9层以上'];
				that.saleType=2;
					console.log(2222)
			}else if (that.salesTypes==2){
				that.priceRange=['≤100万元','100-150万元','150-200万元','200-300万元','≥300万元'];
				that.houseAreaList=['≤50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-160㎡','160-200㎡','≥200㎡'];
				that.arientionList=['南北','南','西','北','东'];
				that.floorChoiceList=['1~~3层','4~~6层','7~~9层','9层以上'];
				that.saleType=3;
			}
			else if (that.salesTypes==3){
				that.priceRange=['≤500万元','500-1500万元','1500-3000万元','≥3000万元'];
				that.floorChoiceList=['单层','多层'];
			    that.houseAreaList=['≤50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-160㎡','160-200㎡','≥200㎡'];
			    that.houseHightList=['≤6m','6-10m','≥10m'];
				that.saleType=4;
			}else if (that.salesTypes==4){
				that.priceRange=['≤100万元','100-150万元','150-200万元','200-300万元','≥300万元'];
				that.houseAreaList=['≤50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-160㎡','160-200㎡','≥200㎡'];
				that.arientionList=['南北','南','西','北','东'];
				that.floorChoiceList=['1~~3层','4~~6层','7~~9层','9层以上'];
				that.saleType=6;
			}else if (that.salesTypes==5){
				that.priceRange=['≤300万元','300-500万元','500-1000万元','≥1000万元'];
				that.houseAreaList=['≤50㎡','50-70㎡','70-90㎡','90-120㎡','120-140㎡','140-160㎡','160-200㎡','≥200㎡'];
			    that.saleType=5;
			}else if (that.salesTypes==6){
				that.priceRange=['≤100万元','100-500万元','500-1000万元','1000-3000万元','≥3000万元'];
				that.houseAreaList=['≤100㎡','100-300㎡','300-500㎡','≥500㎡'];
			    that.saleType=1;
			};
			console.log(12345678910)
			that.getLists();
			that.getquList();//查找区县
		},
		onReachBottom(){
			console.log(43345)
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
			pointSearch(){
				this.positionFlag=false;
				this.priceFlag=false;
				this.allPickFlag=false;
				this.searchFlag=false;
				
			},
			//根据关键字搜索
			getInputSerach(e){
				this.getLists()
			},
			// 搜索地址的数据
			cityClick(item) {
				console.log(1111)
				this.address=JSON.parse(JSON.stringify(item.title));
				this.searchFlag=false;
				this.getquList();//查找区县
			},
			// 地址范围的而选择
			addressRangeChioce(index){
				this.addressActiveindex=index;
			},
			// 点亮地址
			addFirstBtn(index){
				console.log('wangyani')
				
				this.addFirstFlag=index;
				if(index==-1){
					this.getAddressValue=this.address
				}else{
					this.getAddressValue=this.addressList[index];
				}
				
				console.log(this.addFirstFlag)
				console.log(this.getAddressValue)
				this.getLists()
			},
			
			// 价格的选取
			priceGet(index){
				this.priceActiveFlag=index;
				this.getMoneyValue=index+1;
				this.getLists();
			},
			// 最上方搜索的方式: 距离价格范围
			searchWay(type){
				this.searchFlag=false;
				this.positionFlag=false;
				this.priceFlag=false;
				this.allPickFlag=false;
				if(type ==1){
					this.positionFlag=true;
				}else if (type ==2){
					this.priceFlag=true;
				}else if (type ==4){
					this.allPickFlag=true;
				}else if (type ==5){
					this.orderType=(this.orderType=='asc')?'desc':'asc'
					this.getLists();
				}
			},
			// 户型类别的选择
			// 面积
			choiceAreas(index){
				this.choiceAreasIndex=index;
				console.log(this.choiceAreasIndex)
				this.getLists()
			},
			// 房屋朝向
			orientions(index){
				this.arientionIndex=index;
				this.getLists()
			},	
			//所有的筛选
			// 楼层
			floorPicker(index){
				this.floorChoiceIndex=index;
				this.getLists()
			},
			// 层高
			houseHightPicker(index){
				this.hHeightIndex=index;
			},
			// 跳转到详情页
			jumpDetail(index){
				uni.navigateTo({
					url:'/pages/index/houseDetail/houseDetail?types='+this.salesTypes+'&ids='+index
				})
			},
			// 获取数据列表
			getLists(){
				let  that=this;
				console.log(that.saleType)
				that.houseList=[];
				that.$h5.post('sell/selllist',{
					type:that.saleType,
					h_area:that.getAddressValue,//区域
					h_money:that.getMoneyValue,//价格选取
                    h_qrea:that.choiceAreasIndex+1,
					h_orientation:that.arientionList[that.arientionIndex],
					h_louceng:that.floorChoiceList[that.floorChoiceIndex],
					keywords:that.searchKey,
					order:that.orderType
				},(res)=>{
					 if(res.code ==0){
						 this.houseList=res.data;
						for(let i of this.houseList){
							i.h_facility=i.h_facility.split('，');
							i.h_cover=app.globalData.img+i.h_cover
						}
						 
					 }     
				})
				
			},
			getquList(){
				  let that=this;
				  that.addressList=[];
				  that.$h5.post('district/getdistrict',{
					  district:that.address
				  },(res)=>{
					 if(res.code ==0){
						 let aa=res.data;
						 aa.map(res=>{
						  that.addressList.push(res.district_name)	 ;
						 
						 })
						 console.log(that.addressList)
					 }
				  })
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "../../../static/scss/saleHouse.scss";
</style>
